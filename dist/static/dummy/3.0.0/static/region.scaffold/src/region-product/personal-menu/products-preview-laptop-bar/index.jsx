import React from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'

import * as selectors from '../../__data__/selectors'
import { LazyRegion } from '../lazy-region'
import { isStatusLoading } from '../utils/helpers'
import {
    CARDS_COLOR,
    ACCOUNTS_COLOR,
    TARGETS_COLOR,
    LOANS_COLOR,
    INSURANCE_COLOR,
    INVESTMENTS_COLOR
} from '../../style-constants'

import { ProductPreviewIcon } from './product-preview-icon'
import { ProductsPreviewStyled } from './product-preview.styles'

const mapStateToProps = (state) => ({
    loading: isStatusLoading(selectors.products.productsStatus(state)),
    list: selectors.products.list(state)
})

export const SkeletonProduct = document.getElementsByClassName('skeleton-products')?.[0]?.innerHTML

export const ProductsPreviewLaptopBar = connect(mapStateToProps)(({
    loading,
    list: {
        trustManagement,
        brokerage
    }
}) => (
    <LazyRegion isLoading={loading} html={SkeletonProduct}>
        <ProductsPreviewStyled>
            <ProductPreviewIcon name="ic36Card" colorScheme={CARDS_COLOR} />
            <ProductPreviewIcon name="ic36Safe" colorScheme={ACCOUNTS_COLOR} />
            <ProductPreviewIcon name="ic36StarLight" colorScheme={TARGETS_COLOR} />
            <ProductPreviewIcon name="ic36Wallet" colorScheme={LOANS_COLOR} />
            <ProductPreviewIcon name="ic36ShieldCheck" colorScheme={INSURANCE_COLOR} />
            {(trustManagement || brokerage) && (
                <ProductPreviewIcon name="ic36CaseDiagram" colorScheme={INVESTMENTS_COLOR} />
            )}
        </ProductsPreviewStyled>
    </LazyRegion>
))

ProductsPreviewLaptopBar.propTypes = {
    list: PropTypes.shape({
        cards: PropTypes.object,
        loans: PropTypes.object,
        accounts: PropTypes.object,
        depo: PropTypes.object,
        imaccounts: PropTypes.object,
        investments: PropTypes.object,
        targets: PropTypes.object,
    }),
    loading: PropTypes.bool,
}
