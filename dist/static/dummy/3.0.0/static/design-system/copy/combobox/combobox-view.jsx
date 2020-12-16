/* eslint-disable valid-jsdoc */
import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import cs from 'classnames'

import { Input } from '../input'
import { memoizeFuncWithArgs, autoTopCheckByWindow } from '../utils'
import { prevItem, nextItem, keyCodes } from '../listbox/utils'
import { Perimeter } from '../perimeter'
import { Loader } from '../loader'
import { Icon } from '../icon'

import { autoScroll } from './utils'
import theme from './combobox.css'
import { Long } from './long'
import { Error } from './error'
import { NoMatches } from './no-matches'

/**
 * Семантическое текстовое поле с выпадающим списком
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
export class ComboboxView extends Component {
    static propTypes = {
        id: PropTypes.string,
        placeholder: PropTypes.string,
        isLoading: PropTypes.bool,
        onChange: PropTypes.func,
        onChangeInput: PropTypes.func,
        onChangeOption: PropTypes.func,
        onOpen: PropTypes.func,
        onClose: PropTypes.func,
        onRetry: PropTypes.func,
        onScroll: PropTypes.func,
        onBlur: PropTypes.func,
        onFocus: PropTypes.func,
        disabled: PropTypes.bool,
        initialValue: PropTypes.string,
        /**
         * Первоначальный state.query
         */
        initialQuery: PropTypes.string,
        /**
         * Справочник подстановки
         */
        options: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string,
            description: PropTypes.string,
            value: PropTypes.string.isRequired,
            icon: PropTypes.string
        })),
        /**
         * Вертикальное выравнивание Content относительно Target
         */
        verticalAlign: PropTypes.oneOfType([
            PropTypes.func,
            PropTypes.oneOf(['top', 'bottom'])
        ]),
        /**
         * Статус загрузки данных (noMatches - нет совпадений, error - ошибка загрузки, long - долгая загрузка, off - справочник не предоставляется)
         */
        requestMode: PropTypes.oneOf(['noMatches', 'error', 'long']),
        /**
         * Тект для обработки случаев: не найдено совпадений, долгая загрузка, ошибка загрузки, повторить загрузку
         */
        translations: PropTypes.shape({
            requestTimeout: PropTypes.string,
            noMatches: PropTypes.string,
            repeat: PropTypes.string,
            requestError: PropTypes.string
        }),
        a11y: PropTypes.shape({
            optionsLabel: PropTypes.string.isRequired,
        }).isRequired,
        error: PropTypes.string,
    }

    static defaultProps = {
        initialQuery: void 0,
        initialValue: void 0,
        onChange: _.noop,
        onChangeInput: _.noop,
        onChangeOption: _.noop,
        id: void 0,
        options: [],
        onOpen: _.noop,
        onClose: _.noop,
        onScroll: _.noop,
        onBlur: _.noop,
        onFocus: _.noop,
        verticalAlign: autoTopCheckByWindow,
        mode: 'on',
        requestMode: void 0,
        placeholder: void 0,
        isLoading: false,
        onRetry: _.noop,
        translations: {
            requestTimeout: void 0,
            noMatches: void 0,
            repeat: void 0,
            requestError: void 0
        },
        error: '',
        disabled: false,
    }

    constructor (props) {
        super(props)

        const query = props.initialQuery || _.find(
            props.options,
            (option) => option?.value === props.initialValue
        )?.title || props.initialValue || ''

        this.state = {
            expanded: false,
            activeDescendant: props.initialValue,
            query,
            verticalAlign: 'bottom',
        }

        this.id = props.id || _.uniqueId('ui-combobox')
        this.theme = theme
    }

    // eslint-disable-next-line babel/camelcase, comment: React UNSAFE method
    UNSAFE_componentWillReceiveProps ({ options, value }) {
        if (!_.find(options, (option) => option.value === this.state.activeDescendant)) {
            this.setState({
                activeDescendant: this.getActive(options)
            })
        }

        if (this.props.value !== value) {
            const title = _.find(options, (option) => option.value === value)?.title

            this.setState({
                activeDescendant: value,
                query: title || value
            })
        }

    }

    componentDidUpdate (prevProps, prevState) {
        const newAlign = prevProps.verticalAlign?.(this.content, this.target)
        if (newAlign !== prevState.verticalAlign) {
            this.setState({ verticalAlign: newAlign })
        }
    }

    setWrapperRef = (node) => {
        this.perimeter = node
    }

    setContentRef = (node) => {
        const { verticalAlign } = this.props
        this.content = node
        this.setState({ verticalAlign: verticalAlign?.(this.content, this.target) })
    }

    setTargetRef = (node) => {
        this.target = node
    }

    getActive = (options) => options?.length ? options[0].value : void 0

    handleKeyDownTarget = (event) => {
        switch (event.keyCode) {
            case keyCodes.KEY_ESCAPE: {
                event.preventDefault()
                this.handleClear()
                break
            }
            case keyCodes.KEY_ENTER: {
                event.preventDefault()
                const option = _.find(this.props.options, { value: this.state.activeDescendant })

                if (option) {
                    this.handleOptionChoose(option)
                }
                break
            }
            case keyCodes.KEY_ARROW_DOWN: {
                event.preventDefault()
                const nextOption = nextItem(this.props.options, this.state.activeDescendant)
                if (nextOption) {
                    this.handleOptionFocus(nextOption)
                }
                break
            }
            case keyCodes.KEY_ARROW_UP: {
                event.preventDefault()
                const nextOption = prevItem(this.props.options, this.state.activeDescendant)
                if (nextOption) {
                    this.handleOptionFocus(nextOption)
                }
                break
            }
            case keyCodes.KEY_HOME: {
                event.preventDefault()
                this.handleOptionFocus(_.first(this.props.options))
                break
            }
            case keyCodes.KEY_END: {
                event.preventDefault()
                this.handleOptionFocus(_.last(this.props.options))
                break
            }

            default: {
                break
            }
        }
    }

    handleOpen = (e) => {
        const prevExpanded = this.state.expanded
        this.setState({
            expanded: true
        }, () => this.onHandling(prevExpanded, true))
        if (this.props.onFocus) {
            this.props.onFocus(e)
        }
    }

    handleBlur = (e) => {
        if (this.props.onBlur) {
            this.props.onBlur(e)
        }
    }

    handleClose = () => {
        const prevExpanded = this.state.expanded
        this.setState({
            expanded: false
        }, () => this.onHandling(prevExpanded, false))
    }

    handleOptionFocus = (option) => {
        this.setState({
            activeDescendant: option.value
        }, () => autoScroll(
            document.getElementById(`${this.id}-option-${this.state.activeDescendant}`),
            this.content
        ))
    }

    handleOptionChoose = (option) => {
        this.props.onChangeOption(option.value, option.title)
        this.props.onChange(option.value)
        this.setState({
            query: option.title,
            activeDescendant: option.value,
            expanded: false
        })
    }

    handleInput = (e) => {
        this.props.onChangeInput(e.target.value, e)
        this.props.onChange(e.target.value, e)
        this.setState({
            query: e.target.value,
            expanded: true
        })
    }

    handleClear = () => {
        this.props.onChangeInput('')
        this.props.onChange('')
        this.setState({
            query: ''
        })
    }

    onHandling = (prevState, nextState) => {
        const { onOpen, onClose } = this.props
        if (!prevState && nextState) {
            this.perimeter.enableOnClickOutside()
            onOpen()
        } else if (prevState && !nextState) {
            this.perimeter.disableOnClickOutside()
            onClose()
        }
    }

    isExpanded = () => !_.isEmpty(this.props.options) && this.state.expanded

    isActiveDescendant = (option) => this.state.activeDescendant === option?.value

    render () {
        const { label, limit, onScroll } = this.props
        const { verticalAlign } = this.state
        const target = this.renderTarget()
        const contents = this.renderContents()

        return (
            <Fragment>
                {label && (
                    <label htmlFor={this.id} className={this.theme.label}>
                        {label}
                    </label>
                )}
                <Perimeter disableOnClickOutside ref={this.setWrapperRef} onClickOutside={this.handleClose}>
                    <div
                        id={`${this.id}:combobox`}
                        className={this.theme.combobox}
                    >
                        {target}
                        {contents && (
                            <div
                                className={cs(this.theme.popup, this.theme[verticalAlign])}
                                style={{ maxHeight: `${limit * 48}px`, overflowY: this.isExpanded() ? 'scroll' : 'hidden' }}
                                ref={this.setContentRef}
                                onScroll={onScroll}
                            >
                                {contents}
                            </div>
                        )}
                    </div>
                </Perimeter>
            </Fragment>
        )
    }


    renderTarget = () => (
        <div
            role="combobox"
            ref={this.setTargetRef}
            aria-haspopup="listbox"
            aria-expanded={this.isExpanded()}
            aria-owns={`${this.id}-contents`}
        >
            <Input
                id={this.id}
                type="text"
                value={this.state.query}
                className={cs(
                    this.theme.input,
                    this.isExpanded() && this.theme.inputExpanded
                )}
                disabled={this.props.disabled}
                placeholder={this.props.placeholder}
                onChange={this.handleInput}
                onFocus={this.handleOpen}
                onBlur={this.handleBlur}
                onKeyDown={this.handleKeyDownTarget}
                error={this.props.error}
                aria-activedescendant={`${this.id}-option-${this.state.activeDescendant}`}
                aria-autocomplete="list"
            />
        </div>
    )

    // eslint-disable-next-line complexity, comment: complexity of 13
    renderContents = () => {
        const {
            isLoading, onRetry, requestMode, options, a11y, translations: {
                requestTimeout,
                repeat,
                noMatches,
                requestError,
            }
        } = this.props
        const { expanded } = this.state

        return (
            <div>
                {this.isExpanded() && (
                    <ul
                        id={`${this.id}-contents`}
                        className={this.theme.list}
                        role="listbox"
                        tabIndex={-1}
                        aria-label={a11y?.optionsLabel}
                    >
                        {_.map(options, this.renderOption)}
                    </ul>
                )}
                {requestMode !== 'long' && isLoading && (
                    <div className={this.theme.loading}>
                        <Loader.Button
                            size="sm"
                            colorScheme="dark"
                        />
                    </div>
                )}
                {requestMode === 'long' && expanded && requestTimeout && (
                    <Long
                        className={this.theme.additionalInfo}
                        onClick={onRetry}
                        title={repeat}
                        aria-label={requestTimeout}
                    >
                        {requestTimeout}
                    </Long>
                )}
                {requestMode === 'error' && expanded && requestError && (
                    <Error
                        className={this.theme.additionalInfo}
                        onClick={onRetry}
                        title={repeat}
                        aria-label={requestError}
                    >
                        {requestError}
                    </Error>
                )}
                {requestMode === 'noMatches' && expanded && noMatches && (
                    <NoMatches
                        className={this.theme.additionalInfo}
                        aria-label={noMatches}
                    >
                        {noMatches}
                    </NoMatches>
                )}
            </div>
        )
    }


    renderOption = (option) => {
        const activeDescendant = this.isActiveDescendant(option)
        return (
            <li
                key={option.value}
                id={`${this.id}-option-${option.value}`}
                className={cs(
                    this.theme.option,
                    activeDescendant && this.theme.focused
                )}
                onClick={memoizeFuncWithArgs(this.handleOptionChoose, option)}
                role="option"
                aria-selected={activeDescendant}
            >
                {option.icon && (
                    option.fromCode ? (
                        <Icon name={option.icon} theme={{ icon: cs(Icon.theme.icon, this.theme.optionIcon) }} />
                    ) : (
                        <img alt={option.value} src={option.icon} className={this.theme.optionIcon} />
                    )
                )}
                {option.children && (
                    <span className={this.theme.optionIcon}>
                        {option.children}
                    </span>
                )}
                <span className={this.theme.optionTitle}>{option.title}</span>
                {option.description && (
                    <span className={this.theme.optionDescription}>
                        {option.description}
                    </span>
                )}
                {option.additional && (
                    <span className={this.theme.optionAside}>
                        {option.additional}
                    </span>
                )}
            </li>
        )
    }

}

ComboboxView.displayName = 'Combobox.View'

export default ComboboxView
