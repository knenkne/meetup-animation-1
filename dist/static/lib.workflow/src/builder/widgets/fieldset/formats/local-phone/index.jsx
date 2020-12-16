import React from 'react'
import PropTypes from 'prop-types'
import { Input, Labeled, showError } from '@sbol/lib.ui'
import _ from 'lodash'
import { Field } from 'redux-form'
import { fieldAdapter } from '@sbol/lib.app'

export const LocalPhone = ({ tooltip, title, ...props }) => {
    const fieldProps = _.omit(props, [
        'validate',
        'formatConfig',
        'references',
        'referenceProperties',
        'validators'
    ])

    return (
        <Labeled {...props} tooltip={tooltip} title={title} error={showError(props)}>
            <Input.LocalPhone
                placeholder="+7 ___ ___-__-__"
                {...fieldProps}
                error={showError(props)}
            />
        </Labeled>


    )
}

LocalPhone.propTypes = {
    readonly: PropTypes.bool
}

LocalPhone.defaultProps = {
    readonly: false
}

export default ({ validators, referenceId, references, eventsActions, fieldStyles, ...props }) => (
    <Field
        component={fieldAdapter(LocalPhone)}
        validate={validators}
        {...props}
    />
)
