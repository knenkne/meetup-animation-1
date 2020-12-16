import React from 'react'
import { Field } from 'redux-form'
import { Calendar, Labeled, showError } from '@sbol/lib.ui'
import { fieldAdapter } from '@sbol/lib.app'

import { getRestriction } from '../../utils/get-restriction'

export const Date = ({ tooltip, title, ...props }) => (
    <Labeled {...props} tooltip={tooltip} title={title} error={showError(props)}>
        <Calendar {...props} error={showError(props)} />
    </Labeled>
)

export default ({ validators, referenceId, references, eventsActions, fieldStyles, ...props }) => (
    <Field
        component={fieldAdapter(Date)}
        validate={validators}
        restriction={getRestriction(validators)}
        {...props}
    />
)

