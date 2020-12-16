import React from 'react'
import { PropTypes } from 'prop-types'
import i18next from 'i18next'

import { ContentRow, Name, Value, CurrencyValue } from '../../partials'
import { ADDITIONAL } from '../../../style-constants'
import { MessageTextStyled } from '../single-product.styles'

import { ProductInfoStyled } from './single-product-info.styles'

export const AccountInfo = ({
    name,
    currency,
    rate,
    closeDate,
    message: { text: messageText, style: messageStyle, ...messageRest },
}) => (
    <ProductInfoStyled>
        <ContentRow main>
            {name && (
                <Name content={name} />
            )}
            {currency && (
                <Value>
                    <CurrencyValue sum={currency} />
                </Value>
            )}
        </ContentRow>
        <ContentRow messageStyle={messageStyle || ADDITIONAL}>
            {
                messageText
                    ? <MessageTextStyled>{i18next.t(messageText, { ...messageRest })}</MessageTextStyled>
                    : closeDate &&
                            (<Name content={i18next.t('account.before', { endDate: closeDate })} />)
            }
            {rate &&
                (<Value>{`${rate} %`}</Value>)
            }
        </ContentRow>
    </ProductInfoStyled>
)

AccountInfo.displayName = 'AccountInfo'

AccountInfo.defaultProps = {
    currency: null,
    rate: null,
    closeDate: null,
    message: {}
}

AccountInfo.propTypes = {
    name: PropTypes.string.isRequired,
    currency: PropTypes.object,
    rate: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    closeDate: PropTypes.string,
    message: PropTypes.object
}
