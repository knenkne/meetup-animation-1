    {
        var initialValues = {
            'currency:rub:value': '50000.55'
        }
    }

    <Demo.Form initialValues={initialValues}>
        <Demo.LabeledField
            name="currency:rub:value"
            component={Input.Money}
            allowDecimal
            allowEmpty
            currency="rub"
        />
        <br />
        <Demo.LabeledField
            name="currency:rub:value"
            component={Input.Money}
            allowDecimal
            min={1000}
            max={500000}
            decimalSymbol=","
            allowEmpty
            currency="usd"
        />
        <br />
        <Demo.StoreField
            name="currency:rub:value"
            component={Input.Money}
            allowDecimal
            min={1000}
            max={500000}
            decimalSymbol="."
            allowEmpty
            currency="rub"
            disabled
        />
    </Demo.Form>