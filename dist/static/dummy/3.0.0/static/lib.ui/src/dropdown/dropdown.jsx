import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import classnames from 'classnames'

import { Perimeter } from '../perimeter'
import { disableHandler, preventHandler } from '../utils'

import { TargetButton } from './target-button'
import { Contents } from './contents'
import { Group } from './group'
import { Option } from './option'
import { Link } from './link'
import { autoLeftCheckByParent, autoLeftCheckByWindow, autoTopCheckByWindow, cyclicPrevItem, cyclicNextItem } from './utils'
import defaultTheme from './style.css'

const KEY_ENTER = 13
const KEY_ARROW_UP = 38
const KEY_ARROW_DOWN = 40
const KEY_END = 35
const KEY_HOME = 36

/* eslint-disable valid-jsdoc, comment: некорректный парсинг jsdoc */
/**
 * [Zeplin](https://app.zeplin.io/project/59312e1ebdf1da6fc8d37ffb/dashboard?q=dropdown)
 * Технический компонент для сборки выпадающих списков
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
export class Dropdown extends React.Component {
    static propTypes = {
        children: PropTypes.node,
        forceOpened: PropTypes.bool,
        disabled: PropTypes.bool,
        theme: PropTypes.object,
        refWrapper: PropTypes.func,
        onOpen: PropTypes.func,
        onClose: PropTypes.func,
        mode: PropTypes.oneOf(['click', 'focus', 'none']),
        onKeyDown: PropTypes.func,
        value: PropTypes.string,
        onChange: PropTypes.func,
        error: PropTypes.string,

        id: PropTypes.string,
        name: PropTypes.string,
    }

    static childContextTypes = {
        dropdown: PropTypes.shape({
            getOpened: PropTypes.func,
            handleClose: PropTypes.func,
            getValue: PropTypes.func,
            getValueItem: PropTypes.func,
            onChange: PropTypes.func,
            getSelectedItem: PropTypes.func,
            registerOption: PropTypes.func,
            unregisterOption: PropTypes.func
        })
    }

    static defaultProps = {
        children: void 0,
        forceOpened: void 0,
        disabled: false,
        value: '',
        theme: defaultTheme,
        refWrapper: _.noop,
        onOpen: _.noop,
        onClose: _.noop,
        mode: 'click',
        onKeyDown: _.noop,
        onChange: _.noop,
        error: void 0,

        id: void 0,
        name: void 0,
    }

    state = {
        isOpened: false,
        selected: null
    }

    getChildContext = () => ({
        dropdown: {
            getOpened: this.getOpened,
            handleOpen: this.handleOpen,
            handleClose: this.handleClose,
            getValueItem: this.getValueItem,
            getValue: this.getValue,
            getSelectedItem: this.getSelectedItem,
            getSelectedValue: this.getSelectedValue,
            onChange: this.props.onChange,
            registerOption: this.registerOption,
            unregisterOption: this.unregisterOption
        }
    })

    componentWillUnmount () {
        document.removeEventListener('mouseup', this.handleMouseUp)
    }

    setRefPerimeterElement = (c) => {
        this.props.refWrapper(c)
        this.perimeterElement = c
    }

    setRefPerimeter = (c) => {
        this.perimeter = c
    }

    getSelectedItem = () => this.state.selectedItem

    getValueItem = () => _.find(this.options, (option) => option.props.value === this.getValue())

    getValueItemByState = () => _.find(this.options, (option) => option.props.value === _.get(this.state.selectedItem, 'props.value'))

    getSelectedValue = () => _.get(this.getSelectedItem(), 'props.value')

    getValue = () => this.props.value

    getOpened = () => this.props.mode === 'none' ? this.props.forceOpened : this.state.isOpened

    getOption = () => this.getValueItemByState() || this.getValueItem() || _.first(this.options)

    getEventHandlers = (childProps) => {
        const { mode, disabled } = this.props

        if (mode === 'click') {
            return {
                onClick: _.flow(_.compact([
                    disableHandler(preventHandler(this.handleToggle), disabled),
                    _.get(childProps, 'onClick')
                ])),
                onBlur: _.flow(_.compact([
                    disableHandler(this.handleBlur, disabled),
                    _.get(childProps, 'onBlur')
                ]))
            }
        } else if (mode === 'focus') {
            return {
                onFocus: _.flow(_.compact([
                    disableHandler(this.handleOpen, disabled),
                    _.get(childProps, 'onFocus')
                ])),
                onBlur: _.flow(_.compact([
                    disableHandler(this.handleBlur, disabled),
                    _.get(childProps, 'onBlur')
                ]))
            }
        }

        return {}
    }

    handleKeyDown = (event) => {
        if (this.getOpened() && !_.isEmpty(this.options)) {
            switch (event.keyCode) {
                case KEY_ARROW_DOWN: {
                    event.preventDefault()
                    this.updateSelected(cyclicNextItem(this.options, this.state.selectedItem))
                    break
                }
                case KEY_ARROW_UP: {
                    event.preventDefault()
                    this.updateSelected(cyclicPrevItem(this.options, this.state.selectedItem))
                    break
                }
                case KEY_HOME: {
                    event.preventDefault()
                    this.updateSelected(_.first(this.options))
                    break
                }
                case KEY_END: {
                    event.preventDefault()
                    this.updateSelected(_.last(this.options))
                    break
                }
                case KEY_ENTER: {
                    event.preventDefault()
                    this.state.selectedItem.handleClick(event)
                    break
                }

                default: {
                    break
                }
            }
        }

        this.props.onKeyDown(event)
    }

    handleOpen = () => {
        const prevOpened = this.state.isOpened
        this.setState({
            isOpened: true,
            selectedItem: this.getOption()
        }, () => this.onHandling(prevOpened, true))
    }

    handleToggle = () => {
        const prevOpened = this.state.isOpened
        this.setState({
            isOpened: !prevOpened,
            selectedItem: !prevOpened ? this.getOption() : null
        }, () => this.onHandling(prevOpened, !prevOpened))
    }

    handleClose = () => {
        const prevOpened = this.state.isOpened
        this.setState({
            isOpened: false,
            selectedItem: null
        }, () => this.onHandling(prevOpened, false))
    }

    handleBlur = (event) => {
        if (this.isMouseDown) {
            return
        }
        this.handleClose(event)
    }

    handleMouseDown = () => {
        this.isMouseDown = true

        document.addEventListener('mouseup', this.handleMouseUp)
    }

    handleMouseUp = () => {
        this.isMouseDown = false

        document.removeEventListener('mouseup', this.handleMouseUp)
    }

    updateSelected = (selectedItem) => {
        this.setState({ selectedItem })
    }

    onHandling = (prevState, nextState) => {
        if (!prevState && nextState) {
            if (this.props.mode !== 'none') {
                this.perimeter.enableOnClickOutside()
            }
            this.props.onOpen()
        } else if (prevState && !nextState) {
            if (this.props.mode !== 'none') {
                this.perimeter.disableOnClickOutside()
            }
            this.props.onClose()
        }
    }

    registerOption = (option) => {
        this.options.push(option)
    }

    unregisterOption = (optionValue) => {
        this.options.splice(_.indexOf(_.map(this.options, (option) => option.props.value), optionValue), 1)
    }

    options = []

    render () {
        const { disabled, children, theme, mode, error } = this.props

        const passedProps = _(this.props)
            .omit([
                'forceOpened',
                'theme',
                'onOpen',
                'onClose',
                'disabled',
                'mode',
                'onChange',
                'onBlur',
                'value',
                'refWrapper',
                'onClickOutside',
                'translations',
                'error',
                'formName',
                'active',
                'asyncValidating',
                'autofilled',
                'dirty',
                'dispatch',
                'hasServerError',
                'initialValue',
                'invalid',
                'pristine',
                'submitFailed',
                'submitting',
                'touched',
                'valid',
                'visited',
                'warning'
            ])
            .extend({
                'data-unit': 'dropdown',
                role: mode === 'focus' ? 'combobox' : 'listbox',
                'aria-disabled': disabled,
                'aria-expanded': this.getOpened(),
                onKeyDown: this.handleKeyDown,
                ref: this.setRefPerimeterElement,
                className: classnames(theme.dropdown, Boolean(error) && theme.error)
            })
            .value()

        return (
            <div className={defaultTheme.dropdownWrapper}>
                <Perimeter disableOnClickOutside ref={this.setRefPerimeter} onClickOutside={this.handleClose}>
                    <span {...passedProps}>
                        {React.Children.map(children, this.renderChild)}
                    </span>
                </Perimeter>
            </div>
        )
    }

    renderChild = (child) => React.cloneElement(child, _.extend({
        forceOpened: this.getOpened()
    }, _.get(child, 'type.displayName') === Contents.displayName ? {
        nodeTarget: this.perimeterElement,
        // close only by clicking on outside, option, target|blur
        // onClick: this.handleClose,
        mode: this.props.mode,
        nodeSelectedOption: _.get(this.getSelectedItem(), 'option'),
        onMouseDown: this.handleMouseDown,
        onMouseUp: this.handleMouseUp,
        id: this.props.id,
        name: this.props.name
    } : this.getEventHandlers(child.props)))
}

Dropdown.displayName = 'Dropdown'
Dropdown.TargetButton = TargetButton
Dropdown.Contents = Contents
Dropdown.Group = Group
Dropdown.Option = Option
Dropdown.Link = Link
Dropdown.theme = defaultTheme
Dropdown.utils = {
    autoLeftCheckByParent,
    autoLeftCheckByWindow,
    autoTopCheckByWindow
}

Dropdown.displayName = 'Dropdown'
export default Dropdown
