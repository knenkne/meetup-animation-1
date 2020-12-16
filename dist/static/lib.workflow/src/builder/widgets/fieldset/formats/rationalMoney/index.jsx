import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import { fieldAdapter } from '@sbol/lib.app'

import { Money } from '../money'

const MoneyWithNegative = (props) => <Money {...props} allowNegative />

const RationalMoney = ({ validators, referenceId, references, eventsActions, fieldStyles, ...props }) => (
    <Field
        component={fieldAdapter(MoneyWithNegative)}
        validate={validators}
        {...props}
    />
)

RationalMoney.propTypes = {
    validators: PropTypes.arrayOf(PropTypes.func),
}

RationalMoney.defaultProps = {
    validators: () => {}
}
export default RationalMoney

