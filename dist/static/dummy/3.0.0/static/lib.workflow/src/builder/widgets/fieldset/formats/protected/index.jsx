import React from 'react'
import PropTypes from 'prop-types'
import { Input, Labeled, showError } from '@sbol/lib.ui'
import i18next from 'i18next'
import _ from 'lodash'
import { Field } from 'redux-form'
import { fieldAdapter } from '@sbol/lib.app'

export const Protected = ({ tooltip, title, ...props }) => {
    const passedProps = _(props)
        .omit([
            'format',
            'formatConfig',
            'references',
            'referenceProperties'
        ])
        .extend({
            mode: props.formatConfig,
            translations: {
                showPassword: i18next.t('lib.workflow:password.show')
            }
        })
        .value()
    return (
        <Labeled {...props} tooltip={tooltip} title={title} error={showError(props)}>
            <Input.Password {...passedProps} error={showError(props)} />
        </Labeled>
    )
}

Protected.propTypes = {
    formatConfig: PropTypes.string
}

Protected.defaultProps = {
    formatConfig: void 0
}

export default ({ validators, referenceId, references, eventsActions, fieldStyles, ...props }) => (
    <Field
        component={fieldAdapter(Protected)}
        validate={validators}
        {...props}
    />
)
