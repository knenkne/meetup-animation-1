import React from 'react'
import { PropTypes } from 'prop-types'

import { SingleProduct } from '../single-product'

import { ProductsListWrapperStyled, ProductListItemStyled } from './product-list.styles'
import { ProductList } from './product-list'

export const ImpersonalMetalAccountList = (imaccounts) => (
    <ProductList {...imaccounts}>
        <ProductsListWrapperStyled>
            {imaccounts.content.map(({ id, ...rest }) => (
                <ProductListItemStyled
                    key={id}
                >
                    <SingleProduct
                        id={id}
                        type={imaccounts.type}
                        {...rest}
                    />
                </ProductListItemStyled>
            ))}
        </ProductsListWrapperStyled>
    </ProductList>
)


ImpersonalMetalAccountList.displayName = 'ImpersonalMetalAccountList'

ImpersonalMetalAccountList.defaultProps = {
    type: ''
}
ImpersonalMetalAccountList.propTypes = {
    type: PropTypes.string,
    content: PropTypes.array.isRequired
}

