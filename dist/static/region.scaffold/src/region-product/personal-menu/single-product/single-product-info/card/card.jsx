import React from 'react'
import { PropTypes } from 'prop-types'
import i18next from 'i18next'

import { ContentRow, Name, Value, CurrencyValue } from '../../../partials'
import { isGhostProduct } from '../../../utils/helpers'
import { ADDITIONAL } from '../../../../style-constants'

export const Card = ({
    name,
    currency,
    note,
    lastDigits,
    message: { text: messageText, style: messageStyle, ...messageRest },
    isAdditional,
    isPPRB,
    type
}) => (
    <React.Fragment>
        <ContentRow main>
            <Name content={name} isStaticName={isGhostProduct(type)} />
            {
                currency && !isAdditional && !isPPRB &&
                <Value>
                    <CurrencyValue sum={currency} />
                </Value>
            }
        </ContentRow>
        <ContentRow messageStyle={ADDITIONAL}>
            <Name content={`${lastDigits}${i18next.t(note)}`} />
        </ContentRow>
        {
            messageText &&
            <ContentRow messageStyle={messageStyle || ADDITIONAL}>
                {i18next.t(messageText, { ...messageRest })}
            </ContentRow>
        }
    </React.Fragment>
)

Card.defaultProps = {
    currency: null,
    note: '',
    lastDigits: '',
    message: {},
    isAdditional: false,
    isPPRB: false,
    type: ''
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    currency: PropTypes.object,
    note: PropTypes.string,
    lastDigits: PropTypes.string,
    message: PropTypes.object,
    isAdditional: PropTypes.bool,
    isPPRB: PropTypes.bool,
    type: PropTypes.string
}
