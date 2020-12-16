import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import { Input, Labeled, showError } from '@sbol/lib.ui'
import { fieldAdapter } from '@sbol/lib.app'
import _ from 'lodash'

const THREE = 3
const FOUR = 4
const EMPTY_STRING = ''
const SPACES_REGEX = /\s/g
const DIGIT_REGEX = /\d/
const MASK_ROW = _.times(FOUR, () => DIGIT_REGEX).concat(' ')
const MASK = _.flatten(_.times(FOUR, () => MASK_ROW).concat(_.times(THREE, () => DIGIT_REGEX)))

const unmaskedValue = (value) => value.replace(SPACES_REGEX, EMPTY_STRING)

export class Card extends React.PureComponent {
    static propTypes = {
        value: PropTypes.string,
        onChange: PropTypes.func,
        onBlur: PropTypes.func
    }

    static defaultProps = {
        value: 'RUB',
        onChange: _.noop,
        onBlur: _.noop
    }

    handleChange = (e) => this.props.onChange(unmaskedValue(e.target.value))
    handleBlur = (e) => this.props.onBlur(unmaskedValue(e.target.value))


    render () {
        const passedProps = _(this.props)
            .omit([
                'formatConfig',
                'references',
                'referenceProperties',
                'onChange',
                'onBlur',
                'tooltip',
                'title'
            ])
            .extend({
                mask: MASK,
                onChange: this.handleChange,
                onBlur: this.handleBlur
            })
            .value()

        return (
            <Labeled {...this.props} tooltip={this.props.tooltip} error={showError(this.props)}>
                <Input.Masked inputMode="numeric" {...passedProps} error={showError(this.props)} />
            </Labeled>
        )
    }
}

export default ({ validators, referenceId, references, eventsActions, fieldStyles, ...props }) =>
    <Field component={fieldAdapter(Card)} validate={validators} {...props} />
