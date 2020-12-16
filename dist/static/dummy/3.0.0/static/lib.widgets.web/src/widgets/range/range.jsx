import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { Field } from '@sbol/lib.app'
import { Slider, Labeled } from '@sbol/lib.ui'
import { WorkflowPropTypes } from '@sbol/utils'
import { DefaultWidgetWrapper } from '@sbol/lib.workflow'

import { deprecate } from '../utils'

const digits = [1, 2, 5, 10]


const LabeledSlider = (props) => <Labeled {...props}><Slider {...props} /></Labeled>

export const Range = ({ fields, properties, title, description }) => {
    const [inputField] = fields
    const { id, title: fieldTitle, description: fieldDescription, readonly, validators } = inputField
    const { allowDecimal, prefix, suffix, size = 'normal', minValue, maxValue, grid } = properties
    const minValueFromValidators = _.toNumber(_.get(_.find(validators, { type: 'minValue' }), 'value'))
    const maxValueFromValidators = _.toNumber(_.get(_.find(validators, { type: 'maxValue' }), 'value'))

    if (_.isNumber(minValueFromValidators) || _.isNumber(maxValueFromValidators)) {
        deprecate('0.3', 'WebRange minValue and maxValues validators', 'widget properties')
    }

    const min = minValue || minValueFromValidators || 0
    const max = maxValue || maxValueFromValidators

    const mode = size === 'large' ? 'input' : 'basic'

    const sliderConfig = { min, max, mode, allowDecimal, prefix, suffix, digits, step: (max - min) / 50, grid }

    return (
        <DefaultWidgetWrapper title={title} description={description}>
            <Field
                id={id}
                name={id}
                title={fieldTitle}
                description={fieldDescription}
                component={LabeledSlider}
                validate={validators}
                data-node="range:input"
                disabled={readonly}
                allowNegative
                {...sliderConfig}
            />
        </DefaultWidgetWrapper>
    )
}

Range.propTypes = {
    fields: WorkflowPropTypes.Fields.isRequired,
    properties: PropTypes.shape({
        size: PropTypes.oneOf([
            'normal',
            'large'
        ]),
        accuracy: PropTypes.number,
        allowDecimal: PropTypes.bool,
        prefix: PropTypes.string,
        suffix: PropTypes.string
    })
}

Range.defaultProps = {
    properties: {}
}

Range.displayName = 'WebRange'

export default Range
