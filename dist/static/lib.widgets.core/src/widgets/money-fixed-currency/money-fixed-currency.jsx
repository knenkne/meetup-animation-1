import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { Field } from '@sbol/lib.app'
import { Input, Labeled } from '@sbol/lib.ui'
import { DefaultWidgetWrapper } from '@sbol/lib.workflow'
import { WorkflowPropTypes } from '@sbol/utils'

const Money = (props) => (
    <Labeled {...props}>
        <Input.Money {...props} error={props.touched ? props.error : ''} />
    </Labeled>
)

export const MoneyFixedCurrency = ({ fields, properties, title, description }) => {
    const moneyInputField = _.head(fields)
    const { currencyIsoCode, formatWithDecimals } = properties

    return (
        <DefaultWidgetWrapper title={title} description={description}>
            <Field
                {...moneyInputField}
                name={moneyInputField.id}
                component={Money}
                validate={moneyInputField.validators}
                allowEmpty
                currency={currencyIsoCode}
                allowDecimal={formatWithDecimals}
                decimalSymbol=","
            />
        </DefaultWidgetWrapper>
    )
}

MoneyFixedCurrency.propTypes = {
    fields: WorkflowPropTypes.Fields.isRequired,
    properties: PropTypes.object
}

MoneyFixedCurrency.defaultProps = {
    properties: {
        formatWithDecimals: true
    }
}

MoneyFixedCurrency.displayName = 'CoreMoneyFixedCurrency'

export default MoneyFixedCurrency
