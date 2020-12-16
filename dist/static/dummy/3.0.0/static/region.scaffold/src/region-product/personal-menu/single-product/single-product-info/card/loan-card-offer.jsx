import React, { Fragment } from 'react'
import { PropTypes } from 'prop-types'
import i18next from 'i18next'

import { ContentRow, Name, CurrencyValue } from '../../../partials'
import { ADDITIONAL } from '../../../../style-constants'

export const LoanOffer = ({ name, message: { text }, currency }) => (
    <React.Fragment>
        <ContentRow main>
            <Name content={name} isStaticName />
        </ContentRow>
        <ContentRow messageStyle={ADDITIONAL}>
            <Name>
                {currency
                    ?
                    (<Fragment>
                        {i18next.t(text)}
                        <CurrencyValue sum={currency} hideFromSbolPro={false} options={{ allowDecimal: true, thousandsSeparatorSymbol: ' ' }} />
                    </Fragment>)
                    : text
                }
            </Name>
        </ContentRow>
    </React.Fragment>
)

LoanOffer.defaultProps = {
    info: {},
    message: {},
    currency: null

}

LoanOffer.propTypes = {
    name: PropTypes.string.isRequired,
    message: PropTypes.object,
    currency: PropTypes.object
}
