import React from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'

import { SingleProduct } from '../single-product'
import { checkFeature } from '../../../utils/check-feature'
import { actions, selectors } from '../../__data__'

import { ProductsListWrapperStyled, ProductListItemStyled } from './product-list.styles'
import { ProductList } from './product-list'

export const LoanListComponent = (loans) => {
    const {
        handleLoans,
        handleAutoClaims,
        loansStatus,
        autoLoansStatus
    } = loans
    const refetchArray = [handleLoans, handleAutoClaims]
    const refetchStatuses = [loansStatus, autoLoansStatus]
    return (
        <ProductList
            {...loans}
            refetchArray={refetchArray}
            refetchStatuses={refetchStatuses}
        >
            <ProductsListWrapperStyled>
                {loans.content.map(({ id, ...rest }) => (
                    <ProductListItemStyled
                        key={id}
                    >
                        <SingleProduct
                            id={id}
                            type={loans.type}
                            {...rest}
                        />
                    </ProductListItemStyled>
                ))}
            </ProductsListWrapperStyled>
        </ProductList>
    )
}

const mapDispatchToProps = (dispatch) => ({
    handleAutoClaims: () => dispatch(actions.claims.fetchCarLoan()),
    handleLoans: () => {
        if (checkFeature('NewLoanService')) {
            dispatch(actions.loans.ufsLoans.fetchUfsLoans())
        } else {
            dispatch(actions.loans.legacyLoans.fetchLegacyLoans())
        }
    },
    onListClick: () => dispatch(actions.loans.fetchLoans())
})

const mapStateToProps = (state) => ({
    loansStatus: selectors.products.loanStatus(state),
    autoLoansStatus: selectors.products.getAutoLoansStatus(state)
})

LoanListComponent.displayName = 'LoanList'

LoanListComponent.defaultProps = {
    type: ''
}
LoanListComponent.propTypes = {
    type: PropTypes.string,
    content: PropTypes.array.isRequired
}

export const LoanList = connect(mapStateToProps, mapDispatchToProps)(LoanListComponent)
