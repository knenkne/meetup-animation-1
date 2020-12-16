/* eslint-disable react/jsx-no-bind, comment: arrow functions для StatusRegion  */
import React, { useCallback } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import i18next from 'i18next'

import { selectors } from '../../__data__'
import { SandwichLists } from '../sandwich-lists'
import {
    AccountList,
    CardList,
    DepoList,
    ImpersonalMetalAccountList,
    LoanList,
    TargetList,
    InsuranceList,
    TrustManagementList,
    CertificateList,
    BrokerageList
} from '../product-list'
import { isStatusLoading } from '../utils/helpers'
import { StatusRegion } from '../status-region'
import { CommonProductsError } from '../common-products-error'

import { ProductsStyled, LazyProductsStyled } from './products.styles'

export const SkeletonProduct = document.getElementsByClassName('skeleton-products')?.[0]?.innerHTML

const mapStateToProps = (state) => ({
    list: selectors.products.list(state),
    loading: isStatusLoading(selectors.products.productsStatus(state)),
    initialFetchStatus: selectors.products.initialFetchStatus(state),
    error: selectors.products.globalStatus(state)
})

/**
 * Список продуктов
 * @param {Object} props - объект с пропсами
 * @return {*} - React Component
 * @constructor
 */
// eslint-disable-next-line complexity, comment: С фп главной придет свойство order
const ProductsComponent = (props) => {
    const {
        list: {
            cards,
            loans,
            accounts,
            depo,
            imaccounts,
            targets,
            insurance,
            trustManagement,
            certificates,
            brokerage,
            investments
        },
        loading,
        error,
        initialFetchStatus
    } = props

    const commonLoader = (otherProps) => useCallback(<LazyProductsStyled html={SkeletonProduct} {...otherProps} />, [])
    const commonError = () => useCallback(<CommonProductsError loading={loading} />, [])

    return (
        <StatusRegion
            loading={loading && initialFetchStatus}
            error={error}
            loaderComponent={commonLoader}
            errorComponent={commonError}
        >
            <ProductsStyled>
                {cards && <CardList {...cards} newProductTitle={i18next.t('region.scaffold:card.ghost.title')} />}
                {accounts && <AccountList {...accounts} newProductTitle={i18next.t('region.scaffold:accounts.ghost.title')} />}
                {targets && <TargetList {...targets} newProductTitle={i18next.t('region.scaffold:target.ghost.title')} />}
                {loans && <LoanList {...loans} newProductTitle={i18next.t('region.scaffold:loan.ghost.title')} />}
                {insurance && <InsuranceList {...insurance} newProductTitle={i18next.t('region.scaffold:insurance.catalog.title')} />}
                {(brokerage || trustManagement) && (
                    <SandwichLists {...investments} newProductTitle={i18next.t('region.scaffold:investments.add.title')}>
                        {brokerage && <BrokerageList {...brokerage} newProductTitle={i18next.t('region.scaffold:brokerage')} />}
                        {trustManagement && <TrustManagementList {...trustManagement} newProductTitle={i18next.t('region.scaffold:investments.trust.management')} />}
                    </SandwichLists>
                )}
                {depo &&
                <DepoList {...depo} newProductTitle={i18next.t('region.scaffold:depo.new.link.title')} />}
                {certificates && <CertificateList {...certificates} />}
                {imaccounts && <ImpersonalMetalAccountList {...imaccounts} newProductTitle={i18next.t('region.scaffold:ima.ghost.title')} />}
            </ProductsStyled>
        </StatusRegion>
    )
}

ProductsComponent.displayName = 'Products'

ProductsComponent.defaultProps = {
    list: null,
    loading: false,
    error: false,
    initialFetchStatus: false
}

ProductsComponent.propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.bool,
    list: PropTypes.object,
    initialFetchStatus: PropTypes.bool
}

export const Products = connect(mapStateToProps)(ProductsComponent)
