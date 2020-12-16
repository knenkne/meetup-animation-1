import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Currency } from '../currency'
import { formatNumberValue } from '../input/utils'

import style from './style.css'

export const Amount = ({ value, code, a11y, ...props }) => (
    <span {...props} className={classnames(style.amount, props.className)}>
        {formatNumberValue(value)}
        &nbsp;
        {a11y?.codeText &&
        <span className={style.hidden}>
            {a11y.codeText}
        </span>
        }
        <span className={style.code} aria-hidden={a11y.codeText ? 'true' : 'false'}>
            <Currency title={code} />
        </span>
    </span>
)

Amount.propTypes = {
    value: PropTypes.string.isRequired,
    className: PropTypes.string,
    code: PropTypes.string,
    a11y: PropTypes.shape({
        codeText: PropTypes.string
    }).isRequired
}

Amount.defaultProps = {
    className: void '',
    code: 'RUB'
}

export default Amount
