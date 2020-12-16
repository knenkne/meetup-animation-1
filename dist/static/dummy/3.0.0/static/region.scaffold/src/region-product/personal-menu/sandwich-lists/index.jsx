import React from 'react'
import PropTypes from 'prop-types'

import { ProductList } from '../product-list'
import { NestedListStyled } from '../product-list/product-list.styles'

export const SandwichLists = ({
    children,
    title,
    initialOpen,
    newProductUrl,
    newProductTitle,
    type,
}) => (
    <ProductList
        title={title}
        initialOpen={initialOpen}
        newProductUrl={newProductUrl}
        newProductTitle={newProductTitle}
        type={type}
    >
        <NestedListStyled>
            {children}
        </NestedListStyled>
    </ProductList>
)

SandwichLists.defaultProps = {
    initialOpen: false,
    newProductUrl: null,
    newProductTitle: null,
    type: ''
}

SandwichLists.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    initialOpen: PropTypes.bool,
    newProductUrl: PropTypes.string,
    newProductTitle: PropTypes.string,
    type: PropTypes.string
}
