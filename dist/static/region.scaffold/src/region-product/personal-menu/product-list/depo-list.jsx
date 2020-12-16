import React from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'

import { SingleProduct } from '../single-product'
import * as actions from '../../__data__/actions'
import * as selectors from '../../__data__/selectors'

import { ProductsListWrapperStyled, ProductListItemStyled } from './product-list.styles'
import { ProductList } from './product-list'

const DepoListComponent = (depo) => {
    const { handleDepoAccounts, depoAccountsStatus } = depo
    const refetchArray = [handleDepoAccounts]
    const refetchStatuses = [depoAccountsStatus]
    return (
        <ProductList
            {...depo}
            refetchArray={refetchArray}
            refetchStatuses={refetchStatuses}
        >
            <ProductsListWrapperStyled>
                {depo.content.map(({ id, ...rest }) => (
                    <ProductListItemStyled
                        key={id}
                    >
                        <SingleProduct
                            id={id}
                            type={depo.type}
                            {...rest}
                        />
                    </ProductListItemStyled>
                ))}
            </ProductsListWrapperStyled>
        </ProductList>
    )
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onListClick: ownProps.initialContent.length ? () => {} : () => dispatch(actions.depoAccounts.fetchDepoAccounts()),
    handleDepoAccounts: () => dispatch(actions.depoAccounts.fetchDepoAccounts()),
})

const mapStateToProps = (state) => ({
    depoAccountsStatus: selectors.products.depoAccountsStatus(state)
})

DepoListComponent.defaultProps = {
    type: ''
}
DepoListComponent.propTypes = {
    type: PropTypes.string,
    content: PropTypes.array.isRequired
}

export const DepoList = connect(mapStateToProps, mapDispatchToProps)(DepoListComponent)
