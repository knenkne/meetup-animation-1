import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { Input, Labeled, Currency } from '@sbol/lib.ui'
import { Field } from '@sbol/lib.app'
import { DefaultWidgetWrapper } from '@sbol/lib.workflow'
import { WorkflowPropTypes } from '@sbol/utils'

import style from './money.css'

const ORIGINAL_OFFSET = 20


class LabeledNumeric extends React.Component {
    getSuffix = (currency) => _.get(this.props.properties, 'suffix', true) && ` ${Currency.getCurrencyValue(currency)}`

    state = {
        suffix: this.getSuffix(this.props.currencySelect.value)
    }

    componentDidMount () {
        this.forceUpdate()
    }

    setRef = (component) => {
        this.select = component
    }

    handleCurrencyChange = (e) => this.setState({ suffix: this.getSuffix(e.target.value) })

    render () {
        const { currencySelect, reference, ...props } = this.props

        const selectWidth = ORIGINAL_OFFSET + (this.select ? this.select.offsetWidth : 0)

        return (
            <Labeled {...this.props}>
                <div className={style.money}>
                    {currencySelect.readonly ? (
                        <Input.Money
                            {...props}
                            error={props.touched ? props.error : ''}
                            currency={currencySelect.value}
                        />
                    ) : (
                        <React.Fragment>
                            <Input.Numeric.Currency
                                {...props}
                                suffix={this.state.suffix}
                                error={props.touched ? props.error : ''}
                                style={{ paddingRight: `${selectWidth}px` }}
                            />
                            <div className={style.select} ref={this.setRef}>
                                <Field
                                    {..._.omit(currencySelect, ['validators', 'referenceId', 'readonly'])}
                                    name={currencySelect.id}
                                    component={Input.CurrencySelect}
                                    validate={currencySelect.validators}
                                    translations={{ hint: currencySelect.title }}
                                    onChange={this.handleCurrencyChange}
                                >
                                    {reference.map((currencyItem) => (
                                        <Input.CurrencySelect.Option
                                            value={currencyItem.value}
                                            title={currencyItem.title}
                                            key={currencyItem.value}
                                        />
                                    ))}
                                </Field>
                            </div>
                        </React.Fragment>
                    )}
                </div>
            </Labeled>
        )
    }
}

export const Money = (props) => {
    const { fields: [currencySelect, moneyInput], references, title, description, properties } = props
    const reference = _.get(references, [currencySelect.referenceId, 'items'], [])

    return (
        <DefaultWidgetWrapper title={title} description={description}>
            <Field
                {..._.omit(moneyInput, ['validators'])}
                name={moneyInput.id}
                component={LabeledNumeric}
                validate={moneyInput.validators}
                allowEmpty
                allowDecimal
                decimalSymbol=","
                currencySelect={currencySelect}
                reference={reference}
                properties={properties}
            />
        </DefaultWidgetWrapper>
    )
}

Money.propTypes = {
    fields: WorkflowPropTypes.Fields.isRequired,
    references: WorkflowPropTypes.References.isRequired,
    properties: PropTypes.object,
    title: PropTypes.string,
    description: PropTypes.string,
}

Money.defaultProps = {
    title: void '',
    description: void '',
    properties: {}
}

Money.displayName = 'CoreMoney'

export default Money
