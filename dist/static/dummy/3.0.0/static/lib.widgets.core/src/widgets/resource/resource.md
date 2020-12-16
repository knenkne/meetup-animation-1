```js
    {
        const { createStorybookStore, RendererWithReduxForm } = require('provider')
        var output = {
            screens: [
                {
                    title: '',
                    description: '',
                    widgets: [
                        {
                            type: 'CoreResource',
                            title: 'Resource',
                            description: 'Widgets | CoreResource',
                            properties: {},
                            fields: [
                                {
                                    id: 'insurance:tripDetails:cardsOnly',
                                    value: '3',
                                    type: 'select',
                                    referenceId: 'cardsOnly',
                                    title: 'Только карты',
                                    validators: [
                                        {
                                            type: 'required',
                                            value: '',
                                            message: 'Обязательное поле, заполни плез'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            type: 'CoreResource',
                            properties: {},
                            fields: [
                                {
                                    id: 'insurance:tripDetails:card',
                                    value: '',
                                    type: 'select',
                                    referenceId: 'cardsAndAccounts',
                                    title: 'Карты и счета',
                                    validators: [
                                        {
                                            type: 'required',
                                            value: '',
                                            message: 'Обязательное поле, заполни плез'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            type: 'CoreResource',
                            properties: {},
                            fields: [
                                {
                                    id: 'insurance:tripDetails:additionalSuggest',
                                    value: '012',
                                    type: 'select',
                                    referenceId: 'additionalRef',
                                    title: 'Ресурс с целями, металлами, кредитами и предложениями',
                                    validators: [
                                        {
                                            type: 'required',
                                            value: '',
                                            message: 'Обязательное поле, заполни плез'
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    properties: {}
                }
            ],
            events: [],
            references: {
                empty: {
                    properties: {},
                    items: []
                },
                cardsAndAccounts: {
                    properties: {},
                    items: [
                        {
                            title: 'American Express',
                            value: '01500',
                            properties: {
                                title: 'Моя зарплатная карта',
                                number: '**** 7485',
                                category: 'card',
                                style: 'card:amex',
                                amount: '1200.85',
                                measureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'Maestro',
                            value: '01507',
                            properties: {
                                number: '**** 7487',
                                category: 'card',
                                style: 'card:maestro',
                                amount: '587.85',
                                measureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'Master Card',
                            value: '01502',
                            properties: {
                                number: '**** 7482',
                                category: 'card',
                                style: 'card:mastercard',
                                amount: '484.85',
                                measureUnit: 'USD'
                            }
                        },
                        {
                            title: 'Универсальная Электронная Карта',
                            value: '01508',
                            properties: {
                                title: 'Моя обеденная карта',
                                number: '**** 7488',
                                category: 'card',
                                style: 'card:uec',
                                amount: '1200.00',
                                measureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'ПРО100',
                            value: '01100',
                            properties: {
                                title: 'Моя обеденная карта',
                                number: '**** 7100',
                                category: 'card',
                                style: 'card:pro100',
                                amount: '100.00',
                                measureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'Виртуальная карта',
                            value: '01522',
                            properties: {
                                title: 'Покупки в интернете',
                                number: '**** 7422',
                                category: 'card',
                                style: 'card:virtual',
                                amount: '12000.85',
                                measureUnit: 'USD'
                            }
                        },
                        {
                            title: 'МИР',
                            value: '01503',
                            properties: {
                                number: '**** 7483',
                                category: 'card',
                                style: 'card:mir',
                                amount: '120.85',
                                measureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'Кобрендинговая карта Visa и МИР',
                            value: '1',
                            properties: {
                                number: '**** 7485',
                                category: 'card',
                                style: 'card:visa-mir',
                                amount: '10.55',
                                measureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'Кобрендинговая карта Mastercard и МИР',
                            value: '01505',
                            properties: {
                                number: '**** 7485',
                                category: 'card',
                                style: 'card:mastercard-mir',
                                amount: '8595.14',
                                measureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'Счет №1254',
                            value: '47238',
                            properties: {
                                title: 'Коплю на яхту',
                                number: '342 92 783 8 273482347238',
                                category: 'account',
                                amount: '500000.00',
                                measureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'Счет №1254',
                            value: '41478',
                            properties: {
                                title: 'Коплю на заграницу',
                                number: '342 92 783 8 273482341478',
                                category: 'account',
                                amount: '5000.00',
                                measureUnit: 'EUR'
                            }
                        }
                    ]
                },
                cardsOnly: {
                    properties: {},
                    items: [
                        {
                            title: 'МИР',
                            value: '1',
                            properties: {
                                number: '**** 7483',
                                category: 'card',
                                style: 'card:mir',
                                amount: '120.85',
                                measureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'МИР',
                            value: '2',
                            properties: {
                                number: '**** 7484',
                                category: 'card',
                                style: 'card:mir',
                                amount: '120.85',
                                measureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'МИР',
                            value: '3',
                            properties: {
                                number: '**** 7485',
                                category: 'card',
                                style: 'card:mir',
                                amount: '120.85',
                                measureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'Кобрендинговая карта Master Card и МИР',
                            value: '4',
                            properties: {
                                number: '**** 7476',
                                category: 'card',
                                style: 'card:mastercard-mir',
                                amount: '120.85',
                                measureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'Кобрендинговая карта Visa и МИР',
                            value: '5',
                            properties: {
                                number: '**** 7487',
                                category: 'card',
                                style: 'card:visa-mir',
                                amount: '10.55',
                                measureUnit: 'RUB'
                            }
                        }
                    ]
                },
                additionalRef: {
                    properties: {},
                    items: [
                        {
                            title: 'На учебу в Праге',
                            value: '013',
                            properties: {
                                type: 'goal',
                                paymentSystem: 'goal:education',
                                number: '34292 783 8 2734 82347238',
                                balance: '12000',
                                currency: 'RUB'
                            }
                        },
                        {
                            title: 'Металлический счет',
                            value: '012',
                            properties: {
                                name: 'Золото',
                                type: 'metal',
                                paymentSystem: 'metal:ag',
                                number: '0347562',
                                balance: '1356.4',
                                asideTitle: '=',
                                asideAmount: '10000',
                                asideMeasureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'Потребительский кредит',
                            value: '014',
                            properties: {
                                name: 'На хату',
                                number: '826383624832979',
                                type: 'loan',
                                paymentSystem: 'loan:consumer',
                                balance: '258.58',
                                currency: 'RUB'
                            }
                        },
                        {
                            title: 'Новая карта МИР',
                            value: '015',
                            properties: {
                                type: 'offer',
                                paymentSystem: 'offer:mir'
                            }
                        }
                    ]
                }
            }
        }
         var store = createStorybookStore()
    }

    <RendererWithReduxForm name={'CoreResource'} store={store} output={output} />


```
