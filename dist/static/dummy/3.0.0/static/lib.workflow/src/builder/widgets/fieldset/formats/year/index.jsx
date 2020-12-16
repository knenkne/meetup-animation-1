import React from 'react'
import { Field } from 'redux-form'
import { Calendar, Labeled, showError } from '@sbol/lib.ui'
import { fieldAdapter } from '@sbol/lib.app'

import { getRestriction } from '../../utils/get-restriction'

export const Year = ({ tooltip, title, ...props }) => (
    <Labeled {...props} error={showError(props)} title={title}>
        <Calendar.Year {...props} error={showError(props)} />
    </Labeled>
)

export default ({ validators, referenceId, references, eventsActions, fieldStyles, ...props }) => (
    <Field
        component={fieldAdapter(Year)}
        validate={validators}
        restriction={getRestriction(validators)}
        {...props}
    />
)
