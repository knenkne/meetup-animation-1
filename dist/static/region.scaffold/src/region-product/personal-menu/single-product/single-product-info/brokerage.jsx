import React from 'react'
import { PropTypes } from 'prop-types'

import { ContentRow } from '../../partials/content-row'
import { Name } from '../../partials/name'
import { Value } from '../../partials/value'
import { CurrencyValue } from '../../partials/currency-value'
import { ADDITIONAL, WARNING_TEXT } from '../../../style-constants'

import { ProductInfoStyled } from './single-product-info.styles'


export const BrokerageInfo = ({ name, message = {}, contractInfo, profitAmount, lastUpdate, additionalData, warning, strictTitle }) => (
    <ProductInfoStyled>
        <ContentRow main>
            {name && (
                <Name content={name} isStaticName={strictTitle} />
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
                    ? <Name textStyle={warning && WARNING_TEXT} content={message.text} isStaticName={message.strictName} />
                    :
                    contractInfo &&
                    <React.Fragment>
                        <Name
                            textStyle={lastUpdate && WARNING_TEXT}
                            content={additionalData}
                            isStaticName
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

BrokerageInfo.displayName = 'BrokerageInfo'

BrokerageInfo.defaultProps = {
    message: {},
    contractInfo: null,
    profitAmount: null,
    lastUpdate: null,
    additionalInfo: '',
    additionalContent: '',
    additionalData: '',
    warning: false,
    strictTitle: false
}

BrokerageInfo.propTypes = {
    name: PropTypes.string.isRequired,
    message: PropTypes.object,
    contractInfo: PropTypes.object,
    profitAmount: PropTypes.object,
    lastUpdate: PropTypes.object,
    additionalData: PropTypes.string,
    warning: PropTypes.bool,
    strictTitle: PropTypes.bool
}
