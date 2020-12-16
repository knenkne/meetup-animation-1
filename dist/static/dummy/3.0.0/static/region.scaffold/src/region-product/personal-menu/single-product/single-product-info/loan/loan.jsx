import React from 'react'
import { PropTypes } from 'prop-types'
import i18next from 'i18next'

import { ContentRow, Name, Value, CurrencyValue } from '../../../partials'
import { ADDITIONAL } from '../../../../style-constants'
import { ProductInfoStyled } from '../single-product-info.styles'

export const Loan = ({
    name,
    message,
    currency,
    nextPayAmount
}) => (
    <ProductInfoStyled>
        <ContentRow main>
            {name && (
                <Name content={name} />
            )}
            {currency && currency.amount && (
                <Value>
                    <CurrencyValue sum={currency} />
                </Value>
            )}
        </ContentRow>
        <ContentRow messageStyle={message.style || ADDITIONAL}>
            {
                message.text
                    ? i18next.t(message.text)
                    :
                    nextPayAmount &&
                    <React.Fragment>
                        <Name content={i18next.t('loan.monthly')} />
                        <Value>
                            <CurrencyValue sum={nextPayAmount} />
                        </Value>
                    </React.Fragment>
            }
        </ContentRow>
    </ProductInfoStyled>
)

Loan.displayName = 'Loan'

Loan.defaultProps = {
    message: {},
    currency: null,
    nextPayAmount: null
}

Loan.propTypes = {
    name: PropTypes.string.isRequired,
    message: PropTypes.object,
    currency: PropTypes.object,
    nextPayAmount: PropTypes.object
}
