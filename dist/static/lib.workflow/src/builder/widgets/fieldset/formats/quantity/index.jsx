import React from 'react'
import { Field } from 'redux-form'
import { Input, Labeled, showError } from '@sbol/lib.ui'
import { fieldAdapter } from '@sbol/lib.app'
import _ from 'lodash'

export const Quantity = ({ validators, formatConfig = 1, tooltip, title, ...props }) => {
    const min = _.find(validators, (validator) => _.get(validator, 'type') === 'minValue')
    const max = _.find(validators, (validator) => _.get(validator, 'type') === 'maxValue')

    return (
        <Labeled {...props} tooltip={tooltip} title={title} error={showError(props)}>
            <Input.Counter
                {...props}
                step={_.toInteger(formatConfig)}
                min={!_.isUndefined(min) ? _.toInteger(min.value) : void 0}
                max={!_.isUndefined(max) ? _.toInteger(max.value) : void 0}
                mode="wide"
                error={showError(props)}
            />
        </Labeled>
    )
}

export default ({ referenceId, references, eventsActions, fieldStyles, ...props }) => (
    <Field
        component={fieldAdapter(Quantity)}
        validate={props.validators}
        {...props}
    />
)
