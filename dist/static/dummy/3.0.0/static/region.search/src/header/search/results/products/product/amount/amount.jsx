import React from 'react'
import PropTypes from 'prop-types'
import { Currency } from '@sbol/lib.ui'

import style from './amount.css'

export const Amount = ({ amount, currency }) => (
    <div className={style.amount}>
        {(Boolean(amount) || amount === 0) &&
            <div className={style.amountValue}>
                <strong>
                    <span className={style.value}>
                        {amount}
                    </span>
                </strong>
                {Boolean(currency) && <Currency title={currency} />}
            </div>
        }
    </div>
)
Amount.propTypes = {
    amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    currency: PropTypes.string
}

Amount.defaultProps = {
    amount: void 0,
    currency: void 0
}
