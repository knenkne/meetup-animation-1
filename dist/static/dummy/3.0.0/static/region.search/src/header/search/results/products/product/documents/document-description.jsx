import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Currency } from '@sbol/lib.ui'

import { useMarkup } from '../../../../../../utils'

import style from './document.css'

export const DocumentDescription = ({
    description,
    additionalAmount,
    additionalAmountCurrency
}) => (
    <p className={classnames(style.caption, style.description)}>
        <span className={style.label}>{useMarkup(description)}</span>
        {(Boolean(additionalAmount) || additionalAmount === 0) && (
            <span className={style.amount}>
                <span className={style.value}>{additionalAmount}</span>
                {Boolean(additionalAmountCurrency) && (
                    <Currency title={additionalAmountCurrency} />
                )}
            </span>
        )}
    </p>
)

DocumentDescription.propTypes = {
    description: PropTypes.string,
    additionalAmount: PropTypes.string,
    additionalAmountCurrency: PropTypes.string
}

DocumentDescription.defaultProps = {
    description: void 0,
    additionalAmount: void 0,
    additionalAmountCurrency: void 0
}
