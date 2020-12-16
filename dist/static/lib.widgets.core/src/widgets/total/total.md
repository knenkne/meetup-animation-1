```jsx
    {
        const { createStorybookStore, RendererWithReduxForm, stubRequest } = require('provider')

        var output = {
            screens: [{
                title: 'CoreTotal',
                description: '',
                widgets: [
                    {
                        type: 'CoreFieldset',
                        title: 'Поле для ссылки CoreTotal',
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
                        type: 'CoreTotal',
                        title: "Будет списано (запрос на сервис)",
                        description: 'Описание',
                        properties: {
                            measureUnit: 'RUB',
                            referenceId: 'totalOne',
                            remoteLookupFieldIds: [
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
                        type: 'CoreTotal',
                        title: "Будет списано (запрос на загруженный сервис)",
                        properties: {
                            measureUnit: 'RUB',
                            referenceId: 'totalOneLagging',
                            remoteLookupFieldIds: [
                                'flow:id:total:one',
                                'flow:id:total:two',
                            ],

                            recalcErrorMsg: 'Не удалось рассчитать комиссию, комиссия будет рассчитана позже',
                            recalcProgressMsg: 'Идет расчет комиссии...',
                            asideTitle: 'Включая комиссию',
                            noCommissionAsideTitle: 'Комиссия не взимается'
                        },
                        fields: []
                    },
                    {
                        type: 'CoreTotal',
                        title: "Будет списано (сервис не отвечает)",
                        properties: {
                            measureUnit: 'RUB',
                            referenceId: 'NO_REFERENCE',
                            remoteLookupFieldIds: [
                                'flow:id:total:one',
                                'flow:id:total:two',
                            ],

                            recalcErrorMsg: 'Не удалось рассчитать комиссию, комиссия будет рассчитана позже',
                            recalcProgressMsg: 'Идет расчет комиссии...',
                            asideTitle: 'Включая комиссию',
                            noCommissionAsideTitle: 'Комиссия не взимается'
                        },
                        fields: []
                    },
                    {
                        type: 'CoreTotal',
                        title: "Будет списано (из другого поля)",
                        properties: {
                            measureUnit: 'RUB',
                            referenceId: 'totalTwo',
                            localLookupFieldId: 'flow:id:total:one',

                            recalcErrorMsg: 'Не удалось рассчитать комиссию, комиссия будет рассчитана позже',
                            recalcProgressMsg: 'Идет расчет комиссии...',
                            asideTitle: 'Включая комиссию',
                            noCommissionAsideTitle: 'Комиссия не взимается'
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
        var store = createStorybookStore()
    }

    <RendererWithReduxForm name={'CoreTotal'} store={store} output={output} />


```
