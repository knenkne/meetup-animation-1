import React from 'react'
import { Field } from 'redux-form'
import { fieldAdapter } from '@sbol/lib.app'
import { Selection, Labeled, mergeTheme } from '@sbol/lib.ui'

import style from '../../style.css'

const checkboxTheme = mergeTheme(Selection.Checkbox.theme, {
    checkbox: style.checkbox
})

export const Checkbox = ({ initial, readonly, tooltip, title, ...props }) => (
    <Labeled {...props} tooltip={tooltip} mode="switch" >
        <Selection.Checkbox
            {...props}
            checked={props.value}
            error={props.touched ? props.error : ''}
            disabled={readonly}
            mode="switch"
            theme={checkboxTheme}
        />
    </Labeled>
)


export default ({ validators, referenceId, references, eventsActions, fieldStyles, ...props }) => (
    <Field
        {...props}
        name={props.id}
        validate={validators}
        component={fieldAdapter(Checkbox)}
    >
        {props.title}
    </Field>
)
