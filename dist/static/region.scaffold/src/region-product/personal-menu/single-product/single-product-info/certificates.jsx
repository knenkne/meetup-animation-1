import React from 'react'
import { PropTypes } from 'prop-types'
import i18next from 'i18next'

import { ContentRow, CurrencyValue, Name, Value } from '../../partials'
import { ADDITIONAL } from '../../../style-constants'

import { ProductInfoStyled } from './single-product-info.styles'

export const CertificateInfo = ({ name, currency, rate, closeDate }) => (
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
        <ContentRow messageStyle={ADDITIONAL}>
            {closeDate &&
                (<Name content={i18next.t('account.before', { endDate: closeDate })} />)
            }
            {rate &&
                (<Value>{`${rate} %`}</Value>)
            }
        </ContentRow>
    </ProductInfoStyled>
)

CertificateInfo.displayName = 'CertificateInfo'

CertificateInfo.defaultProps = {
    name: '',
    currency: {},
    rate: null,
    closeDate: null
}

CertificateInfo.propTypes = {
    name: PropTypes.string,
    currency: PropTypes.object,
    rate: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    closeDate: PropTypes.string,
}
