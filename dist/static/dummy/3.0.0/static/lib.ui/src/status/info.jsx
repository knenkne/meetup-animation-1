import React from 'react'
import PropTypes from 'prop-types'

import { Currency } from '../currency'
import { Input } from '../input'
import { Typography } from '../typography'

import defaultTheme from './style.css'

const FORMAT_OPTIONS = {
    allowDecimal: true,
    decimalSymbol: ',',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: ' ',
    decimalLimit: 2,
    requireDecimal: false,
}

export const Info = ({ value, title, description }) => (
    <div className={defaultTheme.info} data-unit="status:info">
        <Typography.Subheader>
            {Input.formatNumberValue(value, FORMAT_OPTIONS)}&nbsp;<Currency mode="symbol" title={title} />
        </Typography.Subheader>
        <Typography.Caption>
            {description}
        </Typography.Caption>
    </div>
)

Info.propTypes = {
    value: PropTypes.string.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
}

Info.defaultProps = {
    title: 'rub',
    description: '',
}

Info.displayName = 'Status.Info'
