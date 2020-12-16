import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { Input, Labeled, showError } from '@sbol/lib.ui'
import { conformToMask } from 'text-mask-core/dist/textMaskCore'
import { Field } from 'redux-form'
import { fieldAdapter } from '@sbol/lib.app'

import { validateSnils, snilsValidator } from './snils-validator'
import { unmaskedSnils } from './unmasked-snils'

const EMPTY_STRING = ''

const mask = [/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, ' ', /\d/, /\d/]

const getConformedValue = (value, arrayMask) => _.get(conformToMask(value, arrayMask, { guide: true }), 'conformedValue', EMPTY_STRING).replace(/[-_\s]*$/, EMPTY_STRING)

export class Snils extends React.PureComponent {
    static maskSnilsValue = _.partialRight(getConformedValue, mask)
    static validateSnils = validateSnils
    static snilsValidator = snilsValidator
    static unmaskedSnils = unmaskedSnils

    static propTypes = {
        value: PropTypes.string,
        onChange: PropTypes.func,
        onBlur: PropTypes.func,
        onFocus: PropTypes.func,
    }

    static defaultProps = {
        value: '',
        onChange: _.noop,
        onBlur: _.noop,
        onFocus: _.noop,
        error: ''
    }

    handleSnilsChange = (event) => this.props.onChange(unmaskedSnils(event.target.value))

    handleSnilsBlur = (event) => this.props.onBlur(unmaskedSnils(event.target.value))

    render () {
        return (
            <Input.Masked.Typeahead
                inputMode="numeric"
                onChange={this.handleSnilsChange}
                onBlur={this.handleSnilsBlur}
                onFocus={this.props.onFocus}
                value={unmaskedSnils(this.props.value).length > 0 ? Snils.maskSnilsValue(this.props.value) : EMPTY_STRING}
                mask={mask}
                guide
                placeholderChar="_"
                data-node="snils"
                placeholder="___-___-___ __"
                error={showError(this.props)}
                readonly={this.props.readonly}
            />
        )
    }
}

export const SnilsLabeled = ({ tooltip, title, ...props }) => (
    <Labeled {...props} tooltip={tooltip} title={title} error={showError(props)}>
        <Snils {...props} error={showError(props)} />
    </Labeled>
)

export default ({ validators, referenceId, references, eventsActions, fieldStyles, ...props }) => (
    <Field
        component={fieldAdapter(SnilsLabeled)}
        validate={[validateSnils, ...validators]}
        {...props}
    />
)
