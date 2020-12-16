import React from 'react'
import { Field } from 'redux-form'
import { fieldAdapter } from '@sbol/lib.app'
import { Listbox, Labeled, showError } from '@sbol/lib.ui'

export const Select = ({ tooltip, title, ...props }) => (
    <Labeled {...props} tooltip={tooltip} title={title} error={showError(props)}>
        <Listbox {...props} error={showError(props)} />
    </Labeled>
)

export default ({ validators, referenceId, references, eventsActions, fieldStyles, ...props }) => (
    <Field
        {...props}
        validate={validators}
        component={fieldAdapter(Select)}
        options={references[referenceId].items}
    />
)
