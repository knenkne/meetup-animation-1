import React from 'react'
import PropTypes from 'prop-types'
import { Input, Currency, Labeled, showError } from '@sbol/lib.ui'

import { StrategyField } from '../../strategy-handlers/strategy-field'

const STYLE_MAP = {
    DECIMAL: 'decimal',
    INTEGER: 'integer'
}

export const Money = ({ formatConfig, references, referenceProperties, fieldStyle, tooltip, title, ...props }) => (
    <Labeled {...props} tooltip={tooltip} title={title} error={showError(props)}>
        <Input.Numeric.Currency
            {...props}
            allowDecimal={fieldStyle === STYLE_MAP.DECIMAL}
            decimalLimit={2}
            decimalSymbol=","
            allowEmpty
            suffix={` ${Currency.options.symbols[formatConfig.toLowerCase()] || formatConfig}`}
            error={showError(props)}
        />
    </Labeled>
)

Money.propTypes = {
    formatConfig: PropTypes.string,
    fieldStyle: PropTypes.oneOf([STYLE_MAP.INTEGER, STYLE_MAP.DECIMAL, void 0]),
    tooltip: PropTypes.shape({
        title: PropTypes.string,
        contents: PropTypes.string
    })
}

Money.defaultProps = {
    formatConfig: 'RUB',
    fieldStyle: STYLE_MAP.DECIMAL,
    tooltip: {}
}

export default ({ validators, referenceId, references, eventsActions, fieldStyles, ...props }) => (
    <StrategyField
        validate={validators}
        {...props}
        component={Money}
    />
)
