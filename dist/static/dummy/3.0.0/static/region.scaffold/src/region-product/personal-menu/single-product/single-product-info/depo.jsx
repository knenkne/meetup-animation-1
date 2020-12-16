import React from 'react'
import { PropTypes } from 'prop-types'
import i18next from 'i18next'

import { ContentRow, Name } from '../../partials'
import { ADDITIONAL } from '../../../style-constants'

import { ProductInfoStyled } from './single-product-info.styles'

export const DepoProductInfo = ({ name, message }) => (
    <ProductInfoStyled>
        <ContentRow main>
            <Name content={name || i18next.t('depo.title')} />
        </ContentRow>
        <ContentRow messageStyle={message.style || ADDITIONAL}>
            {message.text && (
                <Name content={i18next.t('depo.number', { number: message.text })} />
            )}
        </ContentRow>
    </ProductInfoStyled>
)

DepoProductInfo.displayName = 'DepoProductInfo'

DepoProductInfo.defaultProps = {
    message: {},
    name: ''
}

DepoProductInfo.propTypes = {
    name: PropTypes.string,
    message: PropTypes.object
}
