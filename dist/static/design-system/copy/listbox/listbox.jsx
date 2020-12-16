/* eslint-disable valid-jsdoc */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import cs from 'classnames'

import { memoizeFuncWithArgs } from '../utils'
import { autoScroll } from '../dropdown/utils'
import { Icon } from '../icon'
import { Perimeter } from '../perimeter'

import { NoOptionSelected } from './no-option-selected'
import { SelectedOption } from './selected-option'
import { MultiSelectedOptions } from './multi-selected-options'
import { prevItem, nextItem, keyCodes } from './utils'
import defaultTheme from './style.css'

/**
 * [Zeplin](https://app.zeplin.io/project/5c74ef0d753f3ebccdf8f33d/screen/5c8a5f62ed2b7b0dcbf560d1)
 * Простой и доступный (a11y) компонент для выпадающих списков.
 *
 // eslint-disable-next-line valid-jsdoc
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
export class Listbox extends Component {
    static propTypes = {
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
        onChange: PropTypes.func,
        onFocus: PropTypes.func,
        onBlur: PropTypes.func,
        options: PropTypes.arrayOf(PropTypes.shape({
            value: PropTypes.string,
            title: PropTypes.string
        })),
        error: PropTypes.string,
        id: PropTypes.string,
        mode: PropTypes.oneOf(['select', 'autoselect', 'multiselect']),
        /**
         * если нужно прокинуть кастомную верстку
         **/
        as: PropTypes.func,
        disabled: PropTypes.bool,
        readonly: PropTypes.bool,
        readOnly: PropTypes.bool,
        theme: PropTypes.objectOf(PropTypes.string),
        translations: PropTypes.shape({
            itemNotChosenText: PropTypes.string
        }),
        'aria-labelledby': PropTypes.string,
        'aria-label': PropTypes.string
    }

    static defaultProps = {
        value: void 0,
        onChange: _.noop,
        onFocus: _.noop,
        onBlur: _.noop,
        options: [],
        error: void 0,
        id: void 0,
        mode: void 0,
        as: void 0,
        disabled: false,
        readonly: false,
        readOnly: false,
        theme: defaultTheme,
        translations: {
            // eslint-disable-next-line @sbol/common/no-cyrillic-outside-cms
            itemNotChosenText: 'Выберите из списка'
        },
        'aria-labelledby': '',
        'aria-label': ''
    }

    constructor (props) {
        super(props)

        this.state = {
            open: false,
            activeDescendant: this.getOptionValue()
        }

        this.id = this.props.id || _.uniqueId('ui-listbox')

        if (this.isAutoSelect() && !this.props.value) {
            this.props.onChange(this.getOptionValue())
        }
    }

    setRefTarget = (c) => {
        this.target = c
    }

    setRefContents = (c) => {
        this.contents = c
    }

    getOptionValue = (index = 0) => this.props.options[index]?.value

    getSelectedItem = () => {
        if (this.isMultiSelect() && _.isArray(this.props.options)) {
            const selectedOptions = this.props.options.filter((option) => _.includes(this.props.value, option.value))

            if (!_.isEmpty(selectedOptions)) {
                return (<MultiSelectedOptions items={selectedOptions} theme={this.props.theme} onChange={this.props.onChange} />)
            }
        }

        const selectedOption = _.find(this.props.options, { value: this.props.value })

        if (selectedOption) {
            return this.props.as
                ? this.props.as(selectedOption)
                : <SelectedOption {...selectedOption} theme={this.props.theme} />
        }

        return <NoOptionSelected itemNotChosenText={this.props.translations.itemNotChosenText} theme={this.props.theme} />
    }

    handleTargetClick = () => {
        if (this.state.open) {
            this.handleClose()
        } else {
            this.handleOpen()
        }
    }

    handleOpen = () => {
        this.setState({
            open: true
        }, () => this.contents.focus())
    }

    handleClose = () => {
        if (this.state.open) {
            this.setState({
                open: false
            }, () => this.target.focus())
        }
    }

    handleFocus = (e) => {
        if (this.props.onFocus) {
            this.props.onFocus(e)
        }
    }

    handleBlur = () => {
        if (this.props.onBlur) {
            this.props.onBlur(this.props.value)
        }
    }

    handleOptionFocus = (option) => {
        this.setState({
            activeDescendant: option.value
        }, () => autoScroll(
            document.getElementById(`${this.id}-option-${this.state.activeDescendant}`),
            document.getElementById(`${this.id}-contents`)
        ))
    }

    handleOptionChoose = (option) => {
        let newSelected

        if (this.isMultiSelect()) {
            newSelected = this.props.value || []

            if (_.includes(this.props.value, option.value)) {
                newSelected = _.reject(newSelected, (value) => value === option.value)
            } else {
                newSelected = newSelected.concat([option.value])
            }
        } else {
            newSelected = option.value
        }

        this.setState({
            activeDescendant: option.value
        })

        this.props.onChange(newSelected)
    }

    // нужно только в мультиселекте
    handleOptionSetChoose = (options) => {
        if (options.length === this.props.value.length) {
            this.setState({
                activeDescendant: this.props.options[0].value
            })

            this.props.onChange([])
        } else {
            this.setState({
                activeDescendant: _.last(options).value
            })

            const mappedOptions = _.map(options, (option) => option.value)
            const nextOptions = _.uniq(_.isEmpty(this.props.value) ? mappedOptions : mappedOptions.concat(this.props.value))

            this.props.onChange(nextOptions)
        }
    }

    // eslint-disable-next-line complexity
    handleKeyDownContents = (event) => {
        switch (event.keyCode) {
            case keyCodes.KEY_ENTER:
            case keyCodes.KEY_SPACE: {
                event.preventDefault()
                this.handleOptionChoose(_.find(this.props.options, { value: this.state.activeDescendant }))

                if (!this.isMultiSelect()) {
                    this.handleClose()
                }
                break
            }

            case keyCodes.KEY_ESCAPE: {
                event.preventDefault()
                this.handleClose()
                break
            }

            case keyCodes.KEY_ARROW_DOWN: {
                event.preventDefault()
                const nextOption = nextItem(this.props.options, this.state.activeDescendant)

                if (nextOption) {
                    if (this.isMultiSelect() && event.shiftKey) {
                        this.handleOptionChoose(nextOption)
                    }

                    this.handleSelectKey(nextOption)
                }
                break
            }

            case keyCodes.KEY_ARROW_UP: {
                event.preventDefault()
                const nextOption = prevItem(this.props.options, this.state.activeDescendant)

                if (nextOption) {
                    if (this.isMultiSelect() && event.shiftKey) {
                        this.handleOptionChoose(nextOption)
                    }

                    this.handleSelectKey(nextOption)
                }
                break
            }

            case keyCodes.KEY_HOME: {
                event.preventDefault()

                if (this.isMultiSelect() && event.shiftKey && event.ctrlKey) {
                    const currentIndex = _.findIndex(this.props.options, { value: this.state.activeDescendant })
                    this.handleOptionSetChoose(this.props.options.slice(0, currentIndex + 1))
                }

                const nextOption = _.first(this.props.options)
                this.handleSelectKey(nextOption)
                break
            }

            case keyCodes.KEY_END: {
                event.preventDefault()

                if (this.isMultiSelect() && event.shiftKey && event.ctrlKey) {
                    const currentIndex = _.findIndex(this.props.options, { value: this.state.activeDescendant })
                    this.handleOptionSetChoose(this.props.options.slice(currentIndex))
                }

                const nextOption = _.last(this.props.options)
                this.handleSelectKey(nextOption)
                break
            }

            case keyCodes.KEY_A: {
                if (this.isMultiSelect() && event.ctrlKey) {
                    event.preventDefault()
                    this.handleOptionSetChoose(this.props.options)
                }
                break
            }

            default: {
                break
            }
        }
    }


    // переиспользуемый кусок handleKeyDownContents для listbox
    handleSelectKey = (option) => {
        this.handleOptionFocus(option)
        if (this.isAutoSelect()) {
            this.handleOptionChoose(option)
        }
    }

    // дополнительный идентификатор выбора для listbox
    isSelected = (option) => {
        if (this.isMultiSelect()) {
            return _.includes(this.props.value, option.value)
        }

        return this.props.value === option.value
    }

    isActiveDescendant = (option) => this.state.activeDescendant === option.value

    // проверки на mode в listbox
    isMultiSelect = () => this.props.mode === 'multiselect'
    isAutoSelect = () => this.props.mode === 'autoselect'

    render () {
        const { options, error, theme } = this.props
        return (
            <Perimeter onClickOutside={this.handleClose}>
                <div
                    id={this.id}
                    className={cs(theme.dropdown, Boolean(error) && theme.error)}
                >
                    {this.renderTarget()}
                    {this.renderContents(options)}
                </div>
            </Perimeter>
        )
    }

    renderTarget = () => (
        <button
            type="button"
            className={
                cs(
                    this.props.theme.target,
                    this.state.open && this.props.theme.targetOpened,
                    (this.props.disabled || !this.state.activeDescendant) && this.props.theme.disabled,
                    (this.props.readOnly || this.props.readonly) && this.props.theme.readonly
                )
            }
            id={`${this.id}-target`}
            ref={this.setRefTarget}
            onClick={this.handleTargetClick}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            aria-haspopup="listbox"
            aria-expanded={this.state.open ? true : void 0}
            // listbox должен связать себя с назначением
            aria-labelledby={cs(this.props['aria-labelledby'], `${this.id}-target`)}
            aria-label={this.props['aria-label']}
            disabled={this.props.disabled || this.props.readOnly || this.props.readonly || !this.state.activeDescendant}
        >
            <div className={this.props.theme.targetContent}>
                <div className={cs(this.props.theme.item, this.props.theme.first)}>
                    {this.getSelectedItem()}
                </div>
            </div>
            <div className={cs(this.props.theme.arrow, this.state.open && this.props.theme.arrowOpened)}>
                <Icon name="icon:core/common/down-arrow" />
            </div>
        </button>
    )

    renderContents = (options) => (
        <div
            className={cs(this.props.theme.contents,
                this.state.open && this.props.theme.opened
            )}
        >
            <ul
                id={`${this.id}-contents`}
                className={this.props.theme.contentsView}
                ref={this.setRefContents}
                onKeyDown={this.handleKeyDownContents}
                tabIndex={-1}
                role="listbox"
                aria-activedescendant={this.state.open ? `${this.id}-option-${this.state.activeDescendant}` : void 0}
                // фишка мультиселекта в листбоксе
                aria-multiselectable={this.isMultiSelect()}
                // listbox должен связать себя с назначением
                aria-labelledby={this.props['aria-labelledby']}
                aria-label={this.props['aria-label']}
            >
                {options.map(this.renderOption)}
            </ul>
        </div>
    )

    renderOption = (option) => {
        const activeDescendant = this.isActiveDescendant(option)
        // требуется для listbox
        const selected = this.isSelected(option)

        return (
            <li
                key={option.value}
                id={`${this.id}-option-${option.value}`}
                className={cs(
                    this.props.theme.item,
                    activeDescendant && this.props.theme.focused,
                    selected && this.props.theme.checked
                )}
                onClick={memoizeFuncWithArgs(this.handleOptionChoose, option)}
                onMouseUp={this.isMultiSelect() ? void 0 : this.handleClose}
                role="option"
                aria-selected={selected}
            >
                {this.props.as ? this.props.as(option) : <SelectedOption {...option} theme={this.props.theme} />}
            </li>
        )
    }
}

Listbox.theme = defaultTheme

export default Listbox
