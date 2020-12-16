import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { Item } from './item'
import defaultTheme from './style.css'

const omitProps = ['initialValue', 'a11y', 'collapsible', 'theme']

export const cyclicPrevItem = (list, item) => (_.indexOf(list, item) - 1 + list.length) % list.length
export const cyclicNextItem = (list, item) => (_.indexOf(list, item) + 1) % list.length

const KEY_ARROW_UP = 38
const KEY_ARROW_DOWN = 40
const KEY_END = 35
const KEY_HOME = 36

// eslint-disable-next-line valid-jsdoc, comment: Zeplin link, args in proptypes
/**
 * [Zeplin](https://app.zeplin.io/project/5c74ef0d753f3ebccdf8f33d/screen/5ca74b09e32f16b878d864a6)
 * Cписок с раскрывающимся содержимым.
 */
export class Accordion extends React.PureComponent {

    static hasNoDescription = (children) => children.every((child) => !child.props.description)

    state = {
        active: this.props.initialValue,
    }

    handleChange = (active, event) => {
        const currentActive = this.state.active === active ? void 0 : active
        this.setState({ active: currentActive })
        this.props.onChange(currentActive, event)
    }

    handleKeyDown = (title, event) => {
        const options = React.Children.map(this.props.children, (child) => child.props.title)

        switch (event.keyCode) {
            case KEY_ARROW_DOWN: {
                event.preventDefault()
                this.focus(cyclicNextItem(options, title))
                break
            }
            case KEY_ARROW_UP: {
                event.preventDefault()
                this.focus(cyclicPrevItem(options, title))
                break
            }
            case KEY_HOME: {
                event.preventDefault()
                this.focus(0)
                break
            }
            case KEY_END: {
                event.preventDefault()
                this.focus(options.length - 1)
                break
            }

            default: {
                break
            }
        }

        this.props.onKeyDown(event)
    }

    focus (newIndex) {
        const newItem = document.getElementById(`${this.props.a11y.id}-${newIndex}-title`)

        if (newItem) {
            newItem.focus()
        }
    }

    render () {
        const { mode, theme } = this.props
        return (
            <div
                {..._.omit(this.props, omitProps)}
                className={theme[`accordion-${mode}`]}
                role="presentation"
            >
                {React.Children.map(this.props.children, this.renderChild)}
            </div>
        )
    }

    renderChild = (child, index) => {
        const { mode, collapsible } = this.props

        return (
            React.cloneElement(child, _.extend({}, child.props, {
                forceOpened: this.state.active === child.props.title,
                mode,
                collapsible,
                onChange: this.handleChange,
                onKeyDown: this.handleKeyDown,
                id: `${this.props.a11y.id}-${index}`,
            }))
        )
    }
}

Accordion.propTypes = {
    initialValue: PropTypes.string,
    children: PropTypes.node.isRequired,
    a11y: PropTypes.shape({
        id: PropTypes.string
    }).isRequired,
    onChange: PropTypes.func,
    onKeyDown: PropTypes.func,
    mode: PropTypes.oneOf(['widget', 'info', 'description', 'classic']),
    /**
     * Если нужно держать открытыми несколько блоков
     */
    collapsible: PropTypes.bool,
    theme: PropTypes.object
}

Accordion.defaultProps = {
    initialValue: void 0,
    onChange: _.noop,
    onKeyDown: _.noop,
    collapsible: false,
    mode: 'classic',
    theme: defaultTheme
}

Accordion.displayName = 'Accordion'
Accordion.Item = Item
Accordion.theme = defaultTheme

export default Accordion
