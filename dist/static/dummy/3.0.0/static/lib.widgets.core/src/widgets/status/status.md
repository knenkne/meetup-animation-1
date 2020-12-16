```js
    {
        const { createStorybookStore, RendererWithReduxForm } = require('provider')

        var output = {
            screens: [
                {
                    title: 'Widgets | CoreStatus',
                    widgets: [
                        {
                            "type": "CoreStatus",
                            "title": "Платёж выполнен",
                            "description": "На ваш номер +7 924 ••• 89-21 будет отправлено СМС с секретным кодом\n\nСообщите код получателю, чтобы он смог получить деньги",
                            "properties": {
                                "level": "success",
                                "stage": "Обмен данными с оператором сотовой связи...",
                                "timestamp": "2017-11-27T20:51:21+03",
                                "category": "Оплата связи",
                                "name": "МегаФон",
                                "id": "1234567",
                                "icon": "icon:core/resource/box",
                                "picture": "https://stat.online.sberbank.ru/CSAFront-res/27.0/skins/sbrf/images/csa/loginPage/slide1.jpg",
                                "actionsReferenceId": "actions",
                                "documentOverviewScreen": 1,
                                "visibleFieldsLimit": 1
                            },
                            "fields": [
                                {
                                    "id": "sum",
                                    "type": "text",
                                    "readonly": true,
                                    "title": "Сумма",
                                    "value": "450 ₽",
                                    "validators": []
                                },
                                {
                                    "id": "phoneNumber",
                                    "type": "text",
                                    "readonly": true,
                                    "title": "Номер телефона",
                                    "value": "+7 925 ••• 45-89",
                                    "validators": []
                                },
                                {
                                    id: 'status:datetime',
                                    type: 'text',
                                    style: 'datetime',
                                    value: '2017-11-27T20:51:21+03',
                                    referenceId: '',
                                    title: 'Datetime',
                                    readonly: true,
                                    validators: []
                                },
                                {
                                    id: 'status:date',
                                    type: 'text',
                                    style: 'date',
                                    value: '2017-11-27',
                                    referenceId: '',
                                    title: 'Date',
                                    readonly: true,
                                    validators: []
                                },
                                {
                                    id: 'status:card',
                                    value: '01503',
                                    type: 'text',
                                    style: 'resource',
                                    referenceId: 'cards',
                                    title: 'Источник',
                                    readonly: true,
                                    validators: []
                                },
                                {
                                    id: 'status:total',
                                    type: 'text',
                                    style: 'total',
                                    value: '04246',
                                    description: '',
                                    referenceId: 'debit',
                                    title: 'Будет списано',
                                    validators: []
                                }
                            ]
                        }
                    ],
                    properties: {}
                }
            ],
            events: [
                {
                    name: 'next',
                    type: 'next',
                    hidden: false,
                    title: 'Продолжить',
                    description: ''
                },
                {
                    name: "personal-data-edit",
                    title: "Изменить",
                    hidden: true
                }
            ],
            references: {
                "actions": {
                    "properties": {},
                    "items": [
                        {
                            "title": "Подробнее",
                            "value": "description",
                            "properties": {}
                        },
                        {
                            "title": "Подробнее об операции",
                            "value": "details",
                            "properties": {
                                "icon": "image:core/status/details",
                                "description": "Сохранить и отправить чек"
                            }
                        },
                        {
                            "title": "Сохранить и отправить чек",
                            "value": "print",
                            "properties": {
                                "icon": "image:core/status/print",
                                "uri": "https://web.payments.greenfield2.online.sberbank.ru/payments/v1/banking/services/payments/print"
                            }
                        },
                        {
                            "title": "Сохранить в шаблоны",
                            "value": "switch",
                            "properties": {
                                "false": "image:core/status/unfavourited",
                                "true": "image:core/status/favourited",
                                "state": false,
                                "uri": "https://web.payments.greenfield2.online.sberbank.ru/payments/v1/banking/services/payments/favourite"
                            }
                        },
                        {
                            "title": "Подключить автоплатёж",
                            "value": "link",
                            "properties": {
                                "icon": "image:core/status/recurrent",
                                "uri": "https://app.online.sberbank.ru/payments/recurrent?scrDocumentId=1234567"
                            }
                        },
                        {
                            "title": "Аналитика платежа",
                            "value": "link",
                            "properties": {
                                "icon": "image:core/pfm/status",
                                "uri": "https://app.online.sberbank.ru/pfm?show=1234567"
                            }
                        }
                    ]
                },
                "cards": {
                    properties: {},
                    items: [
                        {
                            title: 'Master Card',
                            value: '01503',
                            properties: {
                                alias: 'Моя обеденная карта с очень длинным алиасом',
                                number: '**** 7482',
                                category: 'card',
                                style: 'card:mastercard',
                            }
                        }
                    ]
                },
                "debit": {
                    properties: {},
                    items: [
                        {
                            title: '1337,00',
                            value: '04246',
                            properties: {
                                currency: 'EUR',
                                commission: 'success',
                                message: 'Включая комиссию',
                                value: '42'
                            }
                        }
                    ]
                },
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
            }
        }

          var store = createStorybookStore()
    }

    <RendererWithReduxForm name={'CoreStatus'} store={store} output={output} />

```
