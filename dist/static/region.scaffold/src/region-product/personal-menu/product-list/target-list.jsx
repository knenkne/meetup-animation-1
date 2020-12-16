import React from 'react'
import { PropTypes } from 'prop-types'

import { SingleProduct } from '../single-product'

import { ProductsListWrapperStyled, ProductListItemStyled } from './product-list.styles'
import { ProductList } from './product-list'

export const TargetList = (targets) => (
    <ProductList {...targets}>
        <ProductsListWrapperStyled>
            {targets.content.map(({ id, ...rest }) => (
                <ProductListItemStyled
                    key={id}
                >
                    <SingleProduct
                        id={id}
                        type={targets.type}
                        {...rest}
                    />
                </ProductListItemStyled>
            ))}
        </ProductsListWrapperStyled>
    </ProductList>
)


TargetList.displayName = 'TargetList'

TargetList.defaultProps = {
    type: ''
}
TargetList.propTypes = {
    type: PropTypes.string,
    content: PropTypes.array.isRequired
}

