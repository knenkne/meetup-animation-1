import React from 'react'
import { PropTypes } from 'prop-types'

import { SingleProduct } from '../single-product'

import { ProductsListWrapperStyled, ProductListItemStyled } from './product-list.styles'
import { ProductList } from './product-list'

export const AccountList = (accounts) => (
    <ProductList {...accounts}>
        <ProductsListWrapperStyled>
            {accounts.content.map(({ id, ...rest }) => (
                <ProductListItemStyled
                    key={id}
                >
                    <SingleProduct
                        key={id}
                        id={id}
                        type={accounts.type}
                        {...rest}
                    />
                </ProductListItemStyled>
            ))}
        </ProductsListWrapperStyled>
    </ProductList>
)

AccountList.displayName = 'AccountList'

AccountList.defaultProps = {
    type: ''
}
AccountList.propTypes = {
    type: PropTypes.string,
    content: PropTypes.array.isRequired
}

