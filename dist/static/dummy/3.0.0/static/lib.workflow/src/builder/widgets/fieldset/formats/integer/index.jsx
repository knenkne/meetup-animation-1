import React from 'react'
import { Field } from 'redux-form'
import { Input, Labeled, showError } from '@sbol/lib.ui'
import { fieldAdapter } from '@sbol/lib.app'

import FormattedText from '../formatted-text'

export const Integer = ({ tooltip, title, ...props }) => (
    <Labeled {...props} tooltip={tooltip} title={title} error={showError(props)}>
        <Input.Numeric {...props} allowDecimal={false} allowEmpty error={showError(props)} />
    </Labeled>
)

export default ({ validators, referenceId, references, eventsActions, fieldStyles, ...props }) => (
    <Field
        component={fieldAdapter(Integer)}
        validate={validators}
        {...props}
    />
)
