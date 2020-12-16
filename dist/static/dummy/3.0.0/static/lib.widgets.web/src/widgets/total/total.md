```jsx
    {
        const { createStorybookStore, RendererWithReduxForm, stubRequest } = require('provider')

        var output = {
            screens: [{
                title: 'WebTotal',
                description: '',
                widgets: [
                    {
                        type: 'CoreFieldset',
                        title: 'Поле для ссылки WebTotal',
                        properties: {},
                        fields: [{
                            id: 'flow:id:total:one',
                            value: 'RUB',
                            type: 'select',
                            referenceId: 'currencies',
                            title: 'Валюта перевода',
                            validators: []
                        }, {
                            id: 'flow:id:total:two',
                            value: 'RUB',
                            type: 'select',
                            referenceId: 'currencies',
                            title: 'Валюта получения',
                            validators: []
                        }]
                    },
                    {
                        type: 'WebTotal',
                        title: "Будет списано (запрос на сервис)",
                        properties: {
                            measureUnit: 'RUB',
                            referenceId: 'totalOne',
                            lookupFieldIds: [
                                'flow:id:total:one',
                                'flow:id:total:two',
                            ],

                            recalcErrorMsg: 'Не удалось рассчитать комиссию, комиссия будет рассчитана позже',
                            recalcProgressMsg: 'Идет расчет комиссии...',
                            asideTitle: 'Включая комиссию'
                        },
                        fields: []
                    },
                    {
                        type: 'WebTotal',
                        title: "Будет списано (запрос на загруженный сервис)",
                        properties: {
                            measureUnit: 'RUB',
                            referenceId: 'totalOneLagging',
                            lookupFieldIds: [
                                'flow:id:total:one',
                                'flow:id:total:two',
                            ],

                            recalcErrorMsg: 'Не удалось рассчитать комиссию, комиссия будет рассчитана позже',
                            recalcProgressMsg: 'Идет расчет комиссии...',
                            asideTitle: 'Включая комиссию',
                            noCommissionMsg: 'Комиссия не взимается'
                        },
                        fields: []
                    },
                    {
                        type: 'WebTotal',
                        title: "Будет списано (сервис не отвечает)",
                        properties: {
                            measureUnit: 'RUB',
                            referenceId: 'NO_REFERENCE',
                            lookupFieldIds: [
                                'flow:id:total:one',
                                'flow:id:total:two',
                            ],

                            recalcErrorMsg: 'Не удалось рассчитать комиссию, комиссия будет рассчитана позже',
                            recalcProgressMsg: 'Идет расчет комиссии...',
                            asideTitle: 'Включая комиссию',
                            noCommissionMsg: 'Комиссия не взимается'
                        },
                        fields: []
                    },
                    {
                        type: 'WebTotal',
                        title: "Будет списано (из другого поля)",
                        properties: {
                            measureUnit: 'RUB',
                            referenceId: 'totalTwo',
                            lookupFieldId: 'flow:id:total:one',

                            recalcErrorMsg: 'Не удалось рассчитать комиссию, комиссия будет рассчитана позже',
                            recalcProgressMsg: 'Идет расчет комиссии...',
                            asideTitle: 'Включая комиссию',
                            noCommissionMsg: 'Комиссия не взимается'
                        },
                        fields: []
                    }
                ],
                properties: {}
            }],
            events: [],
            references: {
                currencies: {
                    properties: {},
                    items: [{
                            value: 'RUB',
                            title: 'Рубль'
                        },
                        {
                            value: 'USD',
                            title: 'US dollar'
                        },
                        {
                            value: 'EUR',
                            title: 'Euro'
                        },
                        {
                            value: 'BTC',
                            title: 'Bitcoin'
                        }
                    ]
                },
                totalOne: {
                    properties: {
                        url: '/api/dictionaries/total',
                        debounce: 3000,
                    },
                    items: []
                },
                totalOneLagging: {
                    properties: {
                        url: '/api/dictionaries/total-lagging',
                        debounce: 3000,
                    },
                    items: []
                },
                totalTwo: {
                    properties: {},
                    items: [{
                            value: 'RUB',
                            title: '1000.00',
                            properties: {
                                commissionAmount: '0'
                            }
                        },
                        {
                            value: 'USD',
                            title: '200',
                            properties: {
                                commissionAmount: '2'
                            }
                        },
                        {
                            value: 'EUR',
                            title: '300',
                            properties: {
                                commissionAmount: '3'
                            }
                        },
                        {
                            value: 'BTC',
                            title: '400',
                            properties: {
                                commissionAmount: '1000.00'
                            }
                        }
                    ]
                }
            },
            progress: {
                range: 6,
                remainder: 5
            }
        }

        var store = createStorybookStore()


        // STUB SERVER

        var totalResponse = {
            status: 200,
            data: {
              amount: '3',
              commission: '2'
            }
        }
        var totalResponseNoCommission = {
            status: 200,
            data: {
              amount: '3',
              commission: '0'
            }
        }

        stubRequest('/api/dictionaries/total-lagging', totalResponse, 5000)
        stubRequest('/api/dictionaries/total', totalResponseNoCommission)
    }


    <RendererWithReduxForm name="Summary" store={store} output={output} />
```
