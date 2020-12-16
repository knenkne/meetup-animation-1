```jsx
    {
        var initialValues = {
            'currency:currency': 'RUB',
            'currency:currency:large': 'EUR',
            'currency:currency:readonly': 'USD'
        }

        var currencies = [
            { value: 'USD', title: 'Американский рубль' },
            { value: 'EUR', title: 'Западный рубль' },
            { value: 'GBP', title: 'Островной рубль' },
            { value: 'RUB', title: 'Русский доллар' },
            { value: 'BTC', title: 'bitcoin', },
            { value: 'FOO', title: 'bar' },
            { value: 'BAZ' }
        ]

        var translations = {
            hint: 'Выберите валюту'
        }

        var colors = ['purple', 'blue', 'green', 'pink', 'sky-blue', 'aqua', 'gold', 'metal', 'base']
        var colored = colors[Math.floor(Math.random() * 9)]
    }

    <Demo.Form initialValues={initialValues}>
        <Demo.StoreField
            name="currency:currency"
            component={Input.CurrencySelect}
            translations={translations}
            title="Normal"
            description={'* Компонент выбора валюты применяется вместе с полем ввода в виджете Money\n\n* Опции компонента и его результат содержат всплывающий title'}
        >
            {currencies.map(({ value, title }) => (
                <Input.CurrencySelect.Option
                    value={value}
                    title={title}
                    key={value}
                />
            ))}
        </Demo.StoreField>
        <hr />
        <Demo.StoreField
            name="currency:currency:large"
            component={Input.CurrencySelect}
            translations={translations}
            title="Large"
            description={'Увеличенный вариант иконок (size={lg})'}
            size="lg"
        >
            {currencies.map(({ value, title }) => (
                <Input.CurrencySelect.Option
                    value={value}
                    title={title}
                    key={value}
                />
            ))}
        </Demo.StoreField>
        <hr />
        <Demo.StoreField
            name="currency:currency:readonly"
            component={Input.CurrencySelect}
            disabled
            title="Disabled"
        >
            {currencies.map(({ value, title }) => (
                <Input.CurrencySelect.Option
                    value={value}
                    title={title}
                    key={value}
                />
            ))}
        </Demo.StoreField>
        <hr />
        <Demo.StoreField
                    name="currency:currency:color"
                    component={Input.CurrencySelect}
                    translations={translations}
                    title={'Доступны разные цвета'}
                    description={colored}
                    colorScheme={colored}
                >
                    {currencies.map(({ value, title }) => (
                        <Input.CurrencySelect.Option
                            value={value}
                            title={title}
                            key={value}
                        />
                    ))}
                </Demo.StoreField>
    </Demo.Form>
```
