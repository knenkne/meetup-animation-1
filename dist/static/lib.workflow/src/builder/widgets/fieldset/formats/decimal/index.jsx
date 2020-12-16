import React from 'react'
import { Field } from 'redux-form'
import { Input, Labeled, showError } from '@sbol/lib.ui'
import { fieldAdapter } from '@sbol/lib.app'

export const Decimal = ({ tooltip, title, ...props }) => (
    <Labeled {...props} tooltip={tooltip} title={title} error={showError(props)}>
        <Input.Numeric
            {...props}
            allowDecimal
            decimalLimit={Number(props.formatConfig) || Infinity}
            decimalSymbol=","
            allowEmpty
            error={showError(props)}
        />
    </Labeled>
)

export default ({ validators, referenceId, references, eventsActions, fieldStyles, ...props }) => (
    <Field
        component={fieldAdapter(Decimal)}
        validate={validators}
        {...props}
    />
)

