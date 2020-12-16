import React from 'react'
import { PropTypes } from 'prop-types'
import i18next from 'i18next'

import { ContentRow } from '../../partials/content-row'
import { Name } from '../../partials/name'
import { Value } from '../../partials/value'
import { CurrencyValue } from '../../partials/currency-value'
import { WARNING_TEXT, ADDITIONAL } from '../../../style-constants'

import { ProductInfoStyled } from './single-product-info.styles'

export const TrustManagementInfo = ({ name, message = {}, contractInfo, profitAmount, lastUpdate, additionalData }) => (
    <ProductInfoStyled>
        <ContentRow main>
            {name && (
                <Name content={name} isStaticName />
            )}
            {contractInfo && (
                <Value>
                    <CurrencyValue sum={contractInfo} />
                </Value>
            )}
        </ContentRow>
        <ContentRow messageStyle={message.style || ADDITIONAL}>
            {
                message.text
                    ? i18next.t(message.text)
                    :
                    contractInfo &&
                    <React.Fragment>
                        <Name
                            textStyle={lastUpdate && WARNING_TEXT}
                            content={additionalData}
                        />

                        {profitAmount?.amount &&
                        <Value>
                            {profitAmount.sign}
                            <CurrencyValue sum={profitAmount} />
                        </Value>
                        }
                    </React.Fragment>
            }
        </ContentRow>
    </ProductInfoStyled>
)

TrustManagementInfo.displayName = 'InvestmentsInfo'

TrustManagementInfo.defaultProps = {
    additionalContent: '',
    additionalData: '',
    additionalInfo: '',
    contractInfo: null,
    lastUpdate: null,
    message: {},
    profitAmount: null
}

TrustManagementInfo.propTypes = {
    additionalData: PropTypes.string,
    contractInfo: PropTypes.object,
    lastUpdate: PropTypes.object,
    message: PropTypes.object,
    name: PropTypes.string.isRequired,
    profitAmount: PropTypes.object
}
