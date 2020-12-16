import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { getNavigationValue, getHistory } from '../config'
import { log } from '../log'

const createHref = (pathname) => {
    if (!pathname || pathname.startsWith('http')) {
        return pathname
    }

    return getHistory().createHref({ pathname })
}

export class Link extends React.Component {
    static propTypes = {
        href: PropTypes.string.isRequired,
        onClick: PropTypes.func,
        external: PropTypes.bool,
        children: PropTypes.node
    }

    static defaultProps = {
        onClick: _.noop,
        external: false,
        children: void 0
    }

    static createUrl = (id, additional = {}) => {
        const url = getNavigationValue(id)

        if (!url) {
            return void ''
        }

        if (typeof additional === 'object') {
            const parsedUrl = Object.entries(additional).reduce(
                (memo, [key, value]) => memo.replace(`{{${key}}}`, value),
                url
            )
            if (process.env.NODE_ENV !== 'production' && /{{.+?}}/.test(parsedUrl)) {
                log.warn(`Проверьте ссылку и передаваемые в нее параметры. Остались незаполненные параметры. From ${url} to ${parsedUrl}`)
            }

            return parsedUrl
        } else if (typeof additional === 'string') {
            if (process.env.NODE_ENV !== 'production') {
                log.warn('Второй аргумент additional как суффикс ссылки устарел. Используйте параметризацию через двойные фигурные скобки и объект параметров')
            }
            return `${url}${additional}`
        }

        return url
    }

    handleClick = (event) => {
        const { href, onClick, external, target } = this.props

        if (href.startsWith('http') || external || target === '_blank') {
            onClick(event)
        } else {
            event.preventDefault()
            onClick(event)

            if (href.includes('#')) {
                const [, hash] = href.split('#')
                window.location.hash = hash
                getHistory().replace(href)
            } else {
                getHistory().push(href)
            }
        }
    }

    render () {
        const { external, href, ...props } = this.props

        const externalProps = external
            ? {
                rel: 'noopener noreferrer',
                target: '_blank'
            }
            : {}

        return (
            <a
                {...props}
                {...externalProps}
                href={createHref(href)}
                onClick={this.handleClick}
            >
                {props.children}
            </a>
        )
    }
}
