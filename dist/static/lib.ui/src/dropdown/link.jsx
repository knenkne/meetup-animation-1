import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import _ from 'lodash'

import { Link as LinkComponent } from '../link/link'

import defaultTheme from './style.css'

export class Link extends React.Component {
    static displayName = 'Dropdown.Link'

    static propTypes = {
        theme: PropTypes.object,
        children: PropTypes.node,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        onClick: PropTypes.func,
        value: PropTypes.string.isRequired,
        translations: PropTypes.shape({
            /**
             * Стандартный атрибут title. Необходим для выбора валюты. Также применим, если опция шире контента.
             */
            title: PropTypes.string
        }),
        external: PropTypes.bool
    }

    static contextTypes = {
        dropdown: PropTypes.object
    }

    static defaultProps = {
        theme: defaultTheme,
        onClick: _.noop,
        children: void 0,
        description: void 0,
        translations: {},
        external: false
    }


    componentDidMount () {
        this.context.dropdown.registerOption(this)
    }

    componentWillUnmount () {
        this.context.dropdown.unregisterOption(this.props.value)
    }

    getPassedProps = () => {
        const { theme, value, translations } = this.props
        const { getValue, getSelectedValue } = this.context.dropdown
        let linkProps = {}

        if (_.isBoolean(this.props.external)) {
            linkProps = {
                href: this.props.value,
                external: this.props.external
            }
        }

        return _(this.props)
            .omit([
                'theme',
                'children',
                'title',
                'translations',
                'description',
                'selected',
                'value'
            ])
            .extend({
                tabIndex: -1,
                'data-unit': 'dropdown:option',
                theme: {
                    link: classnames(theme.item, LinkComponent.theme.link, {
                        [theme.checked]: value === getValue(),
                        [theme.selected]: value === getSelectedValue()
                    }),
                    linkIconRight: theme.itemIconLink
                },
                onClick: this.handleClick,
                role: 'option',
                'aria-checked': value === getValue(),
                'aria-selected': value === getSelectedValue(),
                title: translations.title,
                refWrapper: this.setRefOption
            }, linkProps)
            .value()
    }

    setRefOption = (component) => {
        this.option = component
    }

    handleClick = (event) => {
        if (event.type === 'keydown') {
            const a = document.createElement('a')
            a.href = this.props.value

            if (this.props.external === true) {
                a.target = '_blank'
                a.rel = 'noopener noreferrer'
            }

            a.click()
        }
    }

    render () {
        const { theme, children, title, description } = this.props

        return (
            <LinkComponent {...this.getPassedProps()}>
                {children && <span className={theme.itemIcon}>{children}</span>}
                <span className={theme.itemTitle}>{title}</span>
                {!_.isUndefined(description) &&
                <span className={theme.itemDescription}>{description}</span>
                }
            </LinkComponent>
        )
    }
}
