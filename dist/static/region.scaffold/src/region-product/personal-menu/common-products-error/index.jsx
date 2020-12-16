import React from 'react'
import { connect } from 'react-redux'
import i18next from 'i18next'
import { PropTypes } from 'prop-types'
import { ButtonPrimary } from '@sbol/design-system/core/button'

import { fetchProducts } from '../../__data__/actions/init'
import { fetchClaims } from '../../__data__/actions/claims'

import { ErrorTitleStyled, DescriptionStyled, ErrorBgStyled } from './common-products-error.styles'

export const CommonProductsErrorComponent = ({ fetchAllProducts }) => (
    <ErrorBgStyled>
        <ErrorTitleStyled>{i18next.t('common.error.title')}</ErrorTitleStyled>
        <DescriptionStyled>{i18next.t('common.error.description')}</DescriptionStyled>
        <ButtonPrimary
            title={i18next.t('common.error.button')}
            onClick={fetchAllProducts}
            fullWidth
        />
    </ErrorBgStyled>
)

const mapDispatchToProps = (dispatch, { loading }) => ({
    fetchAllProducts: () => {
        if (!loading) {
            dispatch(fetchProducts({ initialFetch: true }))
            dispatch(fetchClaims())
        }
    }
})

CommonProductsErrorComponent.defaultProps = {
    fetchAllProducts: () => {}
}

CommonProductsErrorComponent.propTypes = {
    fetchAllProducts: PropTypes.func
}

export const CommonProductsError = connect(null, mapDispatchToProps)(CommonProductsErrorComponent)
