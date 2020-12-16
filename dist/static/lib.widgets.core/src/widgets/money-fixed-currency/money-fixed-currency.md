```js
    {
        const { createStorybookStore, RendererWithReduxForm } = require('provider')
        var output = {
            screens: [
                {
                    title: 'CoreMoneyFixedCurrencyScreen',
                    widgets: [
                        {
                            type: 'CoreMoneyFixedCurrency',
                            title: 'FixedCurrency',
                            description: 'Widgets | CoreMoneyFixedCurrency',
                            properties: {
                                currencyIsoCode: 'RUB',
                                formatWithDecimals: false
                            },
                            fields: [
                                {
                                    id: 'coremoney:fixedcurrency:rub',
                                    value: '2000',
                                    type: 'text',
                                    title: 'Ввод суммы в рублях',
                                    tooltip: {
                                        contents: 'Сколько вы готовы списать?'
                                    },
                                    validators: [
                                        {
                                            type: 'minValue',
                                            value: '1',
                                            message: 'Минимум 1 руб.'
                                        },
                                        {
                                            type: 'maxValue',
                                            value: '100500',
                                            message: 'Максимум 100 500 руб.'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            type: 'CoreMoneyFixedCurrency',
                            properties: {
                                currencyIsoCode: 'EUR',
                                formatWithDecimals: true
                            },
                            fields: [
                                {
                                    id: 'coremoney:fixedcurrency:eur',
                                    value: '',
                                    type: 'text',
                                    title: 'Ввод дробной суммы в евро',
                                    validators: []
                                }
                            ]
                        },
                        {
                            type: 'CoreMoneyFixedCurrency',
                            properties: {
                                currencyIsoCode: 'GBP',
                                formatWithDecimals: false
                            },
                            fields: [
                                {
                                    id: 'coremoney:fixedcurrency:gbp',
                                    value: '500',
                                    type: 'text',
                                    title: 'Сумма для чтения',
                                    readonly: true,
                                    validators: []
                                }
                            ]
                        }
                    ],
                    properties: {}
                }
            ],
            events: [],
            references: {}
        }

        var store = createStorybookStore()
    }

    <RendererWithReduxForm name={'CoreMoneyFixedCurrency'} store={store} output={output} />

```
