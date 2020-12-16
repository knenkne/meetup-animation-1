import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { getHistory } from '@sbol/lib.app'

import { toggleProductRegion } from '../utils/toggle-product-region'

import ListA11YSeparator from './list-a11y-separator'
import { SingleProductInfoWrapper } from './single-product-info'
import { SingleProductIcon } from './single-product-icon'
import { SingleProductLink } from './single-product-link'

const removeQueryAndHash = (href) => href.split(/[#?]/)[0]

const isActive = (href, id) => {
    const browserHistory = getHistory()
    // TODO: добавить тест
    return (
        browserHistory?.location.search.includes(`id=${id}`)
            || id?.toString() === removeQueryAndHash(browserHistory?.location.pathname).split('/').pop())
}

/*
 * Компонент для вывода продукта
 * в левом меню
 * @param id
 * @param href
 * @param icon
 * @param notification
 * @param info
 * @param element
 * @returns {*}
 */
export class SingleProductComponent extends Component {
    componentDidMount () {
        this.unlisten = getHistory().listen(() => {
            if (!this.unmount) {
                this.forceUpdate()
            }
        })
    }

    componentWillUnmount () {
        this.unmount = true
        /* eslint-disable no-unused-expressions, comment: exlusion for optional chaining, to be updated in eslint-config */
        this.unlisten?.()
    }

    handleMouseDown = (e) => {
        const {
            href,
            isProduct
        } = this.props
        e.preventDefault()
        // если ссылка пришла
        // и плашка не статичная
        if (href && isProduct) {
            toggleProductRegion()
        }
    }

    render () {
        const { id, href, icon, colorScheme, iconStyle, notification, handleItemClick, isAdditional, isProduct, linkRedirector, ...rest } = this.props
        const { type } = rest
        const active = isActive(href, id)
        return (
            <ActiveLinkContext.Provider value={{ active }}>
                <SingleProductLink
                    href={href}
                    notification={notification}
                    type={type}
                    active={active ? 1 : 0}
                    iconStyle={iconStyle}
                    onClick={handleItemClick}
                    onMouseDown={this.handleMouseDown}
                    isProduct={isProduct}
                    linkRedirector={linkRedirector}
                >
                    { icon &&
                        <SingleProductIcon
                            type={type}
                            icon={icon}
                            notification={notification}
                            colorScheme={colorScheme}
                        />
                    }
                    <SingleProductInfoWrapper {...rest} isAdditional={isAdditional} />
                </SingleProductLink>
                <ListA11YSeparator isAdditional={isAdditional} />
            </ActiveLinkContext.Provider>
        )
    }
}
SingleProductComponent.displayName = 'SingleProduct'

SingleProductComponent.defaultProps = {
    href: void 0,
    icon: null,
    notification: null,
    as: null,
    type: '',
    onItemClick: null,
    handleItemClick: void 0,
    iconStyle: '',
    isAdditional: false,
    isProduct: true,
    linkRedirector: false,
    colorScheme: ''
}

SingleProductComponent.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    href: PropTypes.string,
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    notification: PropTypes.string,
    type: PropTypes.string,
    handleItemClick: PropTypes.func,
    iconStyle: PropTypes.string,
    isAdditional: PropTypes.bool,
    isProduct: PropTypes.bool,
    linkRedirector: PropTypes.bool,
    colorScheme: PropTypes.string
}

export const ActiveLinkContext = React.createContext({ active: false })
export const SingleProduct = connect()(SingleProductComponent)
