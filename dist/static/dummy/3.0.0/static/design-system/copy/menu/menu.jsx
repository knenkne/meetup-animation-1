import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import cs from 'classnames'

import { Perimeter } from '../perimeter'
import { Link } from '../link'
import { cyclicPrevItem, cyclicNextItem, keyCodes } from '../listbox/utils'
import { isTouchable } from '../utils/adaptive'
import { Icon } from '../icon'
import { Typography } from '../typography'

import defaultTheme from './style.css'

const TYPING_SYMBOLS = /[A-Za-zЁА-яё]/

export class Menu extends Component {
    static propTypes = {
        id: PropTypes.string,
        options: PropTypes.arrayOf(PropTypes.shape({
            value: PropTypes.string,
            title: PropTypes.string,
            action: PropTypes.func,
            type: PropTypes.oneOf(['link', 'linkout', 'option']),
            as: PropTypes.func
        })),
        title: PropTypes.string,
        icon: PropTypes.string,
        onOpen: PropTypes.func,
        onClose: PropTypes.func,
        mode: PropTypes.oneOf(['hover', 'click']),
        theme: PropTypes.object
    }

    static defaultProps = {
        id: void 0,
        options: [],
        icon: 'threeDots',
        title: void 0,
        onOpen: _.noop,
        onClose: _.noop,
        mode: 'hover',
        theme: defaultTheme
    }

    constructor (props) {
        super(props)

        this.state = {
            expanded: false,
            activeDescendant: this.getOptionValue()
        }

        this.id = this.props.id || _.uniqueId('ui-menu')
        this.linkTheme = { link: this.props.theme.optionContent }
    }

    setRefTarget = (c) => {
        this.target = c
    }

    setRefContents = (c) => {
        this.contents = c
    }

    getOptionValue = (index = 0) => this.props.options[index].value

    handleTargetClick = (event) => {
        if (this.state.expanded) {
            this.handleClose(event)
        } else {
            this.handleOpen(event)
        }
    }

    handleTargetMouse = (event) => {
        if (!isTouchable()) {
            this.handleOpen(event)
        }
    }

    handleMouseLeave = (event) => {
        this.handleClose(event)
    }

    handleOpen = (event) => {
        if (event.persist) {
            event.persist()
        }

        this.setState({
            expanded: true
        }, () => {
            this.contents.focus()
            this.props.onOpen(event)
        })
    }

    handleClose = (event) => {
        if (this.state.expanded) {
            if (event.persist) {
                event.persist()
            }
            this.setState({
                expanded: false
            }, () => {
                this.target.focus()
                this.props.onClose(event)
            })
        }
    }

    handleOptionFocus = (option) => this.setState({ activeDescendant: option.value })

    handleOptionChoose = (option, event) => {
        if (option.type === 'option') {
            option.action(event)
        }
        this.handleClose(event)
    }

    // нужно только в меню
    handleKeyDownTarget = (event) => {
        switch (event.keyCode) {
            case keyCodes.KEY_ENTER:
            case keyCodes.KEY_SPACE:
            case keyCodes.KEY_ARROW_DOWN: {
                event.preventDefault()
                this.handleOpen(event)
                this.handleOptionFocus(this.props.options[0])
                break
            }
            case keyCodes.KEY_ARROW_UP: {
                event.preventDefault()
                this.handleOpen(event)
                this.handleOptionFocus(this.props.options[this.props.options.length - 1])
                break
            }

            default: {
                break
            }
        }
    }

    handleKeyDownContents = (event) => {
        switch (event.keyCode) {
            case keyCodes.KEY_ENTER:
            case keyCodes.KEY_SPACE: {
                event.preventDefault()
                this.handleOptionChoose(_.find(this.props.options, { value: this.state.activeDescendant }), event)
                this.handleClose(event)
                break
            }
            case keyCodes.KEY_ESCAPE: {
                event.preventDefault()
                this.handleClose(event)
                break
            }
            case keyCodes.KEY_ARROW_DOWN: {
                event.preventDefault()
                this.handleOptionFocus(cyclicNextItem(this.props.options, this.state.activeDescendant))
                break
            }
            case keyCodes.KEY_ARROW_UP: {
                event.preventDefault()
                this.handleOptionFocus(cyclicPrevItem(this.props.options, this.state.activeDescendant))
                break
            }
            case keyCodes.KEY_HOME: {
                event.preventDefault()
                this.handleOptionFocus(this.props.options[0])
                break
            }
            case keyCodes.KEY_END: {
                event.preventDefault()
                this.handleOptionFocus(this.props.options[this.props.options.length - 1])
                break
            }

            default: {
                break
            }
        }
    }

    handleKeyPressContents = (event) => {
        const char = String.fromCharCode(event.charCode)

        if (TYPING_SYMBOLS.test(char)) {
            event.preventDefault()
            const option = _.find(this.props.options, (o) => _.startsWith(o.title.toLowerCase(), char.toLowerCase()))

            // двигать дальше, если фокусированный уже был выбран через алфавит
            if (option) {
                this.handleOptionFocus(option)
            }
        }
    }

    isActiveDescendant = (option) => this.state.activeDescendant === option.value

    render () {
        const { theme, title, mode } = this.props
        const handlers = mode === 'hover'
            ? { onMouseLeave: this.handleMouseLeave }
            : {}

        return (
            <Perimeter onClickOutside={this.handleClose}>
                <div
                    id={this.id}
                    className={cs(
                        theme.menu,
                        this.state.expanded && theme.expanded,
                        !title && mode === 'click' && theme.iconMenu
                    )}
                    {...handlers}
                >
                    {this.renderTarget()}
                    {this.renderContents()}
                </div>
            </Perimeter>
        )
    }

    renderTarget = () => {
        const { theme, title, mode, icon } = this.props
        const handlers = mode === 'hover'
            ? { onMouseEnter: this.handleTargetMouse }
            : {}

        return (
            <button
                type="button"
                id={`${this.id}-target`}
                ref={this.setRefTarget}
                onClick={this.handleTargetClick}
                {...handlers}
                className={theme.buttonControl}
                // накрученное клавиатурное управление
                onKeyDown={this.handleKeyDownTarget}
                aria-haspopup="true"
                aria-expanded={this.state.expanded ? true : void 0}
                // указатель на содержимое
                aria-controls={`${this.id}-contents`}
            >
                {title && <span className={cs(Typography.theme.body, theme.title)}>{title}</span>}
                {icon && <Icon name={`icon:core/common/${icon}`} size="self" />}
            </button>
        )
    }

    renderContents = () => (
        <ul
            id={`${this.id}-contents`}
            className={this.props.theme.popup}
            ref={this.setRefContents}
            onKeyDown={this.handleKeyDownContents}
            // специальное поведение для быстрого поиска операции
            onKeyPress={this.handleKeyPressContents}
            tabIndex={-1}
            role="menu"
            aria-activedescendant={this.state.expanded ? `${this.id}-option-${this.state.activeDescendant}` : void 0}
            // легко может ссылаться на самого себя
            aria-labelledby={`${this.id}-target`}
        >
            {_.map(this.props.options, this.renderOption)}
        </ul>
    )

    renderOption = (option) => {
        const activeDescendant = this.isActiveDescendant(option)
        let content = void 0

        if (option.type === 'option') {
            content = (
                <button
                    type="button"
                    className={this.props.theme.optionContent}
                    tabIndex={-1}
                    onClick={option.action}
                    onMouseUp={this.handleClose}
                    role="menuitem"
                >
                    {option.title}
                </button>
            )
        } else if (option.type === 'link' || option.type === 'linkout') {
            content = (
                <Link
                    theme={this.linkTheme}
                    external={option.type === 'linkout'}
                    href={option.value}
                    as={option.as}
                    tabIndex={-1}
                    onMouseUp={this.handleClose}
                    role="menuitem"
                >
                    {option.title}
                </Link>
            )
        }

        return (
            <li
                key={option.value}
                id={`${this.id}-option-${option.value}`}
                className={cs(
                    this.props.theme.option,
                    activeDescendant && this.props.theme.focused
                )}
                role="none"
            >
                {content}
            </li>
        )
    }
}

Menu.theme = defaultTheme

export default Menu
