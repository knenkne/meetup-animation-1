import React from 'react'
import { Field } from 'redux-form'
import { Input, Labeled, showError } from '@sbol/lib.ui'
import { fieldAdapter } from '@sbol/lib.app'

import { emailValidator } from './email-validator'

export const Email = ({ tooltip, title, ...props }) => (
    <Labeled {...props} tooltip={tooltip} title={title} error={showError(props)}>
        <Input inputMode="email" {...props} autoComplete="email" error={showError(props)} />
    </Labeled>
)

export default ({ validators, referenceId, references, eventsActions, fieldStyles, ...props }) => (
    <Field
        component={fieldAdapter(Email)}
        validate={[...validators, emailValidator]}
        {...props}
    />
)
