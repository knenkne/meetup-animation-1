import React from 'react'
import { Field } from 'redux-form'
import { fieldAdapter } from '@sbol/lib.app'
import { Labeled } from '@sbol/lib.ui'
import _ from 'lodash'

import { Multiselect as MultiselectEditable } from '../components/multiselect'

export const Multiselect = ({ initial, readonly, tooltip, ...props }) => (
    <Labeled
        {..._.omit(props, ['id', 'title'])}
        value={props.value.toString()}
        tooltip={tooltip} error={props.touched ? props.error : ''}
    >
        <MultiselectEditable
            {...props}
            error={props.touched ? props.error : ''}
            disabled={readonly}
        />
    </Labeled>
)

export default ({
    validators,
    referenceId,
    references,
    eventsActions,
    fieldStyles,
    ...props
}) => (
    <Field
        {...props}
        validate={validators}
        component={fieldAdapter(Multiselect)}
        options={references[referenceId].items}
    />
)
