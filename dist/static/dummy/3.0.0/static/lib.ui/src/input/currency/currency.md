    {
        var initialValues = {
            'currency:value': '50000.55',
            'currency:rub:value': '0'
        }
    }
    
    <Demo.Form initialValues={initialValues}>
        <Demo.StoreField
            name="currency:value"
            component={Input.Numeric.Currency}
            allowDecimal
            allowEmpty
            title="Дробные разрешены"
        />
        <hr />
        <Demo.StoreField
            name="currency:rub:value"
            component={Input.Numeric.Currency}
            min={1000}
            max={500000}
            decimalSymbol="."
            suffix=" руб."
            allowEmpty
            title="Дробные запрещены, стоит лимитатор"
        />
    </Demo.Form>
