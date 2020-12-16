import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { Input, Labeled, showError } from '@sbol/lib.ui'
import { conformToMask } from 'text-mask-core/dist/textMaskCore'
import { Field } from 'redux-form'
import { fieldAdapter } from '@sbol/lib.app'

import { validateVat, validateVatShort, LONG_VAT, SHORT_VAT } from './vat-validator'
import { unmaskedVat } from './unmsaked-vat'

const EMPTY_STRING = ''

const getConformedValue = (value, arrayMask) => _.get(conformToMask(value, arrayMask, { guide: false }), 'conformedValue', EMPTY_STRING)

export class Vat extends React.PureComponent {
    static validateVat = validateVat
    static validateVatShort = validateVatShort
    static LONG_VAT = LONG_VAT
    static SHORT_VAT = SHORT_VAT

    static propTypes = {
        value: PropTypes.string,
        onChange: PropTypes.func,
        onBlur: PropTypes.func,
        onFocus: PropTypes.func,
        error: PropTypes.string,
        formatConfig: PropTypes.string.isRequired
    }

    static defaultProps = {
        value: '',
        onChange: _.noop,
        onBlur: _.noop,
        onFocus: _.noop,
        error: ''
    }

    handleVatChange = (event) => this.props.onChange(unmaskedVat(event.target.value))

    handleVatBlur = (event) => this.props.onBlur(unmaskedVat(event.target.value))

    render () {
        const formatDependedProps = {
            mask: [
                /\d/, /\d/, /\d/, /\d/,
                /\d/, /\d/, /\d/, /\d/,
                /\d/, /\d/, /\d/, /\d/],
            placeholder: '____________'
        }
        if (this.props.formatConfig === 'organization') {
            formatDependedProps.mask = [
                /\d/, /\d/, /\d/, /\d/,
                /\d/, /\d/, /\d/, /\d/,
                /\d/, /\d/]
            formatDependedProps.placeholder = '__________'
        }

        return (
            <Input.Masked.Typeahead
                inputMode="numeric"
                onChange={this.handleVatChange}
                onBlur={this.handleVatBlur}
                onFocus={this.props.onFocus}
                value={unmaskedVat(this.props.value).length > 0 ? getConformedValue(this.props.value, formatDependedProps.mask) : EMPTY_STRING}
                mask={formatDependedProps.mask}
                placeholderChar="_"
                data-node="vat"
                placeholder={formatDependedProps.placeholder}
                error={this.props.error}
                readonly={this.props.readonly}
            />)
    }
}

export const VatLabeled = ({ tooltip, title, ...props }) => (
    <Labeled {...props} tooltip={tooltip} title={title} error={showError(props)}>
        <Vat {...props} error={showError(props)} />
    </Labeled>
)

export default ({ validators, referenceId, references, eventsActions, fieldStyles, ...props }) => (
    <Field
        component={fieldAdapter(VatLabeled)}
        validate={[props.formatConfig === LONG_VAT ? validateVat : validateVatShort, ...validators]}
        {...props}
    />
)

