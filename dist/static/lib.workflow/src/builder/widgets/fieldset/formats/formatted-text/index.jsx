import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import { Input, Labeled, showError } from '@sbol/lib.ui'
import _ from 'lodash'
import { fieldAdapter } from '@sbol/lib.app'

import { createInputMask } from './create-input-mask'

const unmaskedValue = (value, mask) => value
    .split('')
    .filter((letter, index) => mask[index] instanceof RegExp)
    .join('')

export class FormattedText extends React.PureComponent {
    static propTypes = {
        isFormattedNumber: PropTypes.bool,
        onChange: PropTypes.func,
        onBlur: PropTypes.func,
        formatConfig: PropTypes.string,
    }

    static defaultProps = {
        isFormattedNumber: false,
        onChange: _.noop,
        onBlur: _.noop,
        formatConfig: void 0
    }

    handleChange = (e) => this.props.onChange(unmaskedValue(e.target.value, this.inputMask))
    handleBlur = (e) => this.props.onBlur(unmaskedValue(e.target.value, this.inputMask))
    inputMask = createInputMask(this.props.formatConfig, this.props.isFormattedNumber)

    render () {
        let passedProps = _(this.props)
            .omit([
                'isFormattedNumber',
                'formatConfig',
                'references',
                'referenceProperties',
                'onChange',
                'onBlur',
                'mask',
                'tooltip',
                'title'
            ])
            .extend({
                mask: this.inputMask,
                onChange: this.handleChange,
                onBlur: this.handleBlur,
                value: Input.conformToMask(
                    this.props.value,
                    this.inputMask,
                    { guide: false }
                ).conformedValue.trim()
            })
            .value()

        if (this.props.isFormattedNumber) {
            passedProps = { ...passedProps, type: 'tel' }
        }

        return (
            <Labeled {...this.props} tooltip={this.props.tooltip} error={showError(this.props)}>
                <Input.Masked.Typeahead {...passedProps} error={showError(this.props)} />
            </Labeled>

        )
    }
}

export default ({ validators, referenceId, references, eventsActions, fieldStyles, ...props }) => (
    <Field
        component={fieldAdapter(FormattedText)}
        validate={validators}
        {...props}
    />
)
