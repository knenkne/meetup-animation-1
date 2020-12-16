import React from 'react'
import { PropTypes } from 'prop-types'

import { ContentRow, Name } from '../../../partials'
import { ADDITIONAL } from '../../../../style-constants'
import { ProductInfoStyled } from '../single-product-info.styles'

export const Order = ({
    title,
    periodPaymentMessage
}) => (
    <ProductInfoStyled>
        <ContentRow main>
            {title && (
                <Name content={title} />
            )}
        </ContentRow>
        <ContentRow messageStyle={ADDITIONAL}>
            {periodPaymentMessage}
        </ContentRow>
    </ProductInfoStyled>
)

Order.displayName = 'Order'

Order.propTypes = {
    title: PropTypes.string.isRequired,
    periodPaymentMessage: PropTypes.string.isRequired,
}
