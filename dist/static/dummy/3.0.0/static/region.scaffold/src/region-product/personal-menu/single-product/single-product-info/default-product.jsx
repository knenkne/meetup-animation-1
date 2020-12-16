import React from 'react'
import { PropTypes } from 'prop-types'
import i18next from 'i18next'

import { ContentRow } from '../../partials/content-row'
import { isGhostProduct } from '../../utils/helpers'
import { ADDITIONAL } from '../../../style-constants'

import { ProductInfoStyled } from './single-product-info.styles'

export const DefaultProductInfo = ({ name, message, type }) => (
    <ProductInfoStyled>
        <ContentRow main>
            {name && isGhostProduct(type)
                ? i18next.t(name)
                : name
            }
        </ContentRow>
        <ContentRow messageStyle={message.style || ADDITIONAL}>
            {
                isGhostProduct(type) && message.text
                    ? i18next.t(message.text)
                    : message.text
            }
        </ContentRow>
    </ProductInfoStyled>
)

DefaultProductInfo.displayName = 'DefaultProductInfo'

DefaultProductInfo.defaultProps = {
    message: {},
    type: ''
}

DefaultProductInfo.propTypes = {
    name: PropTypes.string.isRequired,
    message: PropTypes.object,
    type: PropTypes.string
}
