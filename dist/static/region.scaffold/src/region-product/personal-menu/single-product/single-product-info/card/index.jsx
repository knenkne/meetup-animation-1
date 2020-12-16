import React from 'react'
import { PropTypes } from 'prop-types'

import { ProductInfoStyled } from '../single-product-info.styles'

import { Card } from './card'
import { LoanOffer } from './loan-card-offer'

export const CardInfo = (info) => {
    const isCard = info.cardType !== 'loan-offer'
    return (
        <ProductInfoStyled>
            { isCard ? <Card {...info} /> : <LoanOffer {...info} /> }
        </ProductInfoStyled>
    )
}

CardInfo.displayName = 'CardInfo'

CardInfo.defaultProps = {
    info: {}
}

CardInfo.propTypes = {
    name: PropTypes.string.isRequired,
    info: PropTypes.object
}
