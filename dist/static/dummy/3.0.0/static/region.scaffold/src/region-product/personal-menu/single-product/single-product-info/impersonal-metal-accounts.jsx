import React from 'react'
import { PropTypes } from 'prop-types'
import i18next from 'i18next'

import { ContentRow, Name, Value, CurrencyValue } from '../../partials'
import { ADDITIONAL } from '../../../style-constants'

import { ProductInfoStyled } from './single-product-info.styles'

export const ImpersonalMetalAccountInfo = ({
    name,
    currency,
    balanceInNationalCurrency,
    openDate,
    message
}) => (
    <ProductInfoStyled>
        <ContentRow main>
            {name && (
                <Name content={name} isStaticName />
            )}
            {currency && (
                <Value>
                    <CurrencyValue sum={currency} />
                </Value>
            )}
        </ContentRow>
        {
            openDate &&
            <ContentRow messageStyle={ADDITIONAL}>
                <Name content={openDate} />
                {
                    balanceInNationalCurrency &&
                    <Value>
                        <CurrencyValue sum={balanceInNationalCurrency} />
                    </Value>
                }
            </ContentRow>
        }
        {
            message.text &&
                <ContentRow messageStyle={message.style || ADDITIONAL}>
                    {i18next.t(message.text)}
                </ContentRow>
        }
    </ProductInfoStyled>
)

ImpersonalMetalAccountInfo.displayName = 'ImpersonalMetalAccountInfo'

ImpersonalMetalAccountInfo.defaultProps = {
    message: {},
    openDate: null,
    currency: null,
    balanceInNationalCurrency: null
}

ImpersonalMetalAccountInfo.propTypes = {
    name: PropTypes.string.isRequired,
    message: PropTypes.object,
    openDate: PropTypes.string,
    currency: PropTypes.object,
    balanceInNationalCurrency: PropTypes.object
}
