```jsx
{
    var initialValues = {
        'number': '1000',
        'another:number': '',
        'prefix:postfix:number': '',
        'another:prefix:postfix:number': 'something wrong'
    }
}

<Demo.Form initialValues={initialValues}>
    <Demo.StoreField
        name="number"
        component={Input.Numeric}
        max={100000}
        thousandsSeparatorSymbol=","
        decimalSymbol="."
        allowEmpty
        title="Лимит сверху"
    />
    <hr />
    <Demo.StoreField
        name="another:number"
        component={Input.Numeric}
        thousandsSeparatorSymbol=" "
        decimalSymbol=","
        max={1e20}
        allowDecimal
        allowNegative
        decimalLimit={10}
        title="Лимит сверху очень большой, дробная часть разрешена и ограничена, можно отрицательное"
    />
    <hr />
    <Demo.StoreField
        name="prefix:postfix:number"
        component={Input.Numeric}
        thousandsSeparatorSymbol=" "
        decimalSymbol=","
        max={1e20}
        allowDecimal
        allowNegative
        decimalLimit={10}
        prefix="$ "
        suffix=" ₽"
        allowEmpty
        title="Дополнительные символы, можно оставить ввод пустым"
    />
    <hr />
    <Demo.StoreField
        name="another:prefix:postfix:number"
        component={Input.Numeric}
        thousandsSeparatorSymbol=" "
        decimalSymbol=","
        max={1e20}
        allowDecimal
        allowNegative
        decimalLimit={10}
        prefix="$ "
        suffix=" ₽"
        title="Дополнительные символы (данные заполнились некорректно, поле ввода живо)"
    />
</Demo.Form>
```
