import React, { memo } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'

import { SingleProduct } from '../single-product'
import { actions } from '../../__data__'

import { ProductsListWrapperStyled, ProductListItemStyled } from './product-list.styles'
import { ProductList } from './product-list'


export const TrustManagementListComponent = (investments) => (
    <ProductList
        {...investments}
        refetchArray={[investments.handleContracts]}
        refetchStatuses={[investments.contractsStatus]}
        refetchMessage={investments.message}
    >
        <ProductsListWrapperStyled>
            {investments.content.map(({ id, ...rest }) => (
                <ProductListItemStyled
                    key={id}
                >
                    <SingleProduct
                        key={id}
                        id={id}
                        type={investments.type}
                        {...rest}
                    />
                </ProductListItemStyled>
            ))}
        </ProductsListWrapperStyled>
    </ProductList>
)

const mapDispatchToProps = {
    handleContracts: actions.investments.fetchInvestments,
    onListClick: actions.investments.fetchInvestments
}

TrustManagementListComponent.displayName = 'TrustManagement'

TrustManagementListComponent.defaultProps = {
    type: ''
}

TrustManagementListComponent.propTypes = {
    type: PropTypes.string,
    content: PropTypes.array.isRequired
}

export const TrustManagementList = memo(connect(null, mapDispatchToProps)(TrustManagementListComponent))

