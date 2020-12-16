import React from 'react'
import { Link } from '@sbol/lib.app'
import PropTypes from 'prop-types'

import { SingleProductLinkStyled } from './single-product-link.styles'

/*
 * Формируем плашку с переходом/без перехода
 * в продукт
 * @param {Node} children - React children
 * @param {Boolean} isProduct -  признак, можно ли переходить в продукт
 * @param {Object} props - остальные параметры
 * @return {Node}
 */
export const SingleProductLink = ({ children, isProduct, href, linkRedirector, ...props }) => {
    const asAppLink = !linkRedirector && isProduct && href && Link
    return (
        <SingleProductLinkStyled
            as={asAppLink || 'a'}
            href={isProduct ? href : null}
            {...props}
        >
            {children}
        </SingleProductLinkStyled>
    )
}

SingleProductLink.propTypes = {
    children: PropTypes.node.isRequired,
    isProduct: PropTypes.bool,
    href: PropTypes.string,
    linkRedirector: PropTypes.bool
}

SingleProductLink.defaultProps = {
    isProduct: true,
    href: null,
    linkRedirector: false
}
