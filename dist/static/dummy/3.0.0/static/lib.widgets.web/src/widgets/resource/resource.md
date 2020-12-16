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
                            type: 'WebResource',
                            title: 'Resource',
                            description: 'Widgets | WebResource',
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
                            type: 'WebResource',
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
                            type: 'WebResource',
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
                },
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
                                name: 'Моя зарплатная карта',
                                number: '**** 7485',
                                type: 'card',
                                paymentSystem: 'card:amex',
                                balance: '1200.85',
                                currency: 'RUB'
                            }
                        },
                        {
                            title: 'Maestro',
                            value: '01507',
                            properties: {
                                number: '**** 7487',
                                type: 'card',
                                paymentSystem: 'card:maestro',
                                balance: '587.85',
                                currency: 'RUB',
                                unavailable: true
                            }
                        },
                        {
                            title: 'Платёжный счёт 1',
                            value: '01234',
                            properties: {
                                number: '**** 9987',
                                type: 'ctaccount',
                                paymentSystem: 'ctaccount:rub',
                                balance: '500.00',
                                currency: 'RUB',
                                unavailable: true
                            }
                        },
                        {
                            title: 'Платёжный счёт 2',
                            value: '01235',
                            properties: {
                                number: '**** 9654',
                                type: 'ctaccount',
                                paymentSystem: 'ctaccount:eur',
                                balance: '50.00',
                                currency: 'EUR',
                                unavailable: true
                            }
                        },
                        {
                            title: 'Платёжный счёт 3',
                            value: '01238',
                            properties: {
                                number: '**** 2134',
                                type: 'ctaccount',
                                paymentSystem: 'ctaccount:usd',
                                balance: '300.00',
                                currency: 'USD',
                                unavailable: true
                            }
                        },
                        {
                            title: 'Платёжный счёт 4',
                            value: '01221',
                            properties: {
                                number: '**** 2323',
                                type: 'ctaccount',
                                paymentSystem: 'ctaccount:blocked',
                                balance: '300.00',
                                currency: 'RUB',
                                unavailable: true
                            }
                        },
                        {
                            title: 'Master Card',
                            value: '01502',
                            properties: {
                                number: '**** 7482',
                                type: 'card',
                                paymentSystem: 'card:mastercard',
                                balance: '484.85',
                                currency: 'USD',
                                asideTitle: 'Комиссия',
                                asideAmount: '100',
                                asideMeasureUnit: 'USD'
                            }
                        },
                        {
                            title: 'Универсальная Электронная Карта',
                            value: '01508',
                            properties: {
                                name: 'Моя обеденная карта',
                                number: '**** 7488',
                                type: 'card',
                                paymentSystem: 'card:uec',
                                balance: '1200.00',
                                currency: 'RUB',
                                asideTitle: 'Комиссия',
                                asideAmount: '200',
                                asideMeasureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'ПРО100',
                            value: '01100',
                            properties: {
                                name: 'Моя обеденная карта',
                                number: '**** 7100',
                                type: 'card',
                                paymentSystem: 'card:pro100',
                                balance: '100.00',
                                currency: 'RUB'
                            }
                        },
                        {
                            title: 'Виртуальная карта',
                            value: '01522',
                            properties: {
                                name: 'Покупки в интернете',
                                number: '**** 7422',
                                type: 'card',
                                paymentSystem: 'card:virtual',
                                balance: '12000.85',
                                currency: 'USD'
                            }
                        },
                        {
                            title: 'МИР',
                            value: '01503',
                            properties: {
                                number: '**** 7483',
                                type: 'card',
                                paymentSystem: 'card:mir',
                                balance: '120.85',
                                currency: 'RUB'
                            }
                        },
                        {
                            title: 'Кобрендинговая карта Visa и МИР',
                            value: '1',
                            properties: {
                                number: '**** 7485',
                                type: 'card',
                                paymentSystem: 'card:visa-mir',
                                balance: '10.55',
                                currency: 'RUB'
                            }
                        },
                        {
                            title: 'Кобрендинговая карта Mastercard и МИР',
                            value: '01505',
                            properties: {
                                number: '**** 7485',
                                type: 'card',
                                paymentSystem: 'card:mastercard-mir',
                                balance: '8595.14',
                                currency: 'RUB'
                            }
                        },
                        {
                            title: 'Счет №1254',
                            value: '47238',
                            properties: {
                                name: 'Коплю на яхту',
                                number: '342 92 783 8 273482347238',
                                type: 'account',
                                balance: '500000.00',
                                currency: 'RUB'
                            }
                        },
                        {
                            title: 'Счет №1254',
                            value: '41478',
                            properties: {
                                name: 'Коплю на заграницу',
                                number: '342 92 783 8 273482341478',
                                type: 'account',
                                balance: '5000.00',
                                currency: 'EUR'
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
                                type: 'card',
                                paymentSystem: 'card:mir',
                                balance: '120.85',
                                currency: 'RUB',
                                unavailable: true
                            }
                        },
                        {
                            title: 'МИР',
                            value: '2',
                            properties: {
                                number: '**** 7484',
                                type: 'card',
                                paymentSystem: 'card:mir',
                                balance: '120.85',
                                currency: 'RUB',
                                unavailable: true
                            }
                        },
                        {
                            title: 'МИР',
                            value: '3',
                            properties: {
                                number: '**** 7485',
                                type: 'card',
                                paymentSystem: 'card:mir',
                                balance: '120.85',
                                currency: 'RUB'
                            }
                        },
                        {
                            title: 'Кобрендинговая карта Master Card и МИР',
                            value: '4',
                            properties: {
                                number: '**** 7476',
                                type: 'card',
                                paymentSystem: 'card:mastercard-mir',
                                balance: '120.85',
                                currency: 'RUB'
                            }
                        },
                        {
                            title: 'Кобрендинговая карта Visa и МИР',
                            value: '5',
                            properties: {
                                number: '**** 7487',
                                type: 'card',
                                paymentSystem: 'card:visa-mir',
                                balance: '10.55',
                                currency: 'RUB'
                            }
                        }
                    ]
                }
            }
        }

        var store = createStorybookStore()
        var references = output.references
        var widgets = output.screens[0].widgets
    }

    <RendererWithReduxForm name={'Resource'} store={store} output={output} />
```


### Все возможные варианты иконок
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
                            type: 'WebResource',
                            fields: [
                                {
                                    id: 'insurance:cards',
                                    value: '1',
                                    type: 'select',
                                    referenceId: 'cards',
                                    title: 'Карты'
                                }
                            ]
                        },
                        {
                            type: 'WebResource',
                            fields: [
                                {
                                    id: 'insurance:accounts',
                                    value: '1',
                                    type: 'select',
                                    referenceId: 'accounts',
                                    title: 'Cчета'
                                }
                            ]
                        },
                        {
                            type: 'WebResource',
                            fields: [
                                {
                                    id: 'insurance:loans',
                                    value: '1',
                                    type: 'select',
                                    referenceId: 'loans',
                                    title: 'Кредиты'
                                }
                            ]
                        },
                        {
                            type: 'WebResource',
                            fields: [
                                {
                                    id: 'insurance:metals',
                                    value: '1',
                                    type: 'select',
                                    referenceId: 'metals',
                                    title: 'Металличекские счета'
                                }
                            ]
                        },
                        {
                            type: 'WebResource',
                            fields: [
                                {
                                    id: 'insurance:goals',
                                    value: '1',
                                    type: 'select',
                                    referenceId: 'goals',
                                    title: 'Цели'
                                }
                            ]
                        },
                    ]
                }
            ],
            events: [],
            references: {
                cards: {
                    items: [
                        {
                            title: 'amexCard',
                            value: '1',
                            properties: {
                                number: '**** 7483',
                                type: 'card',
                                paymentSystem: 'card:amex',
                                balance: '120.85',
                                currency: 'RUB',
                                unavailable: true
                            }
                        },
                        {
                            title: 'visaCard',
                            value: '2',
                            properties: {
                                number: '**** 7484',
                                type: 'card',
                                paymentSystem: 'card:visa',
                                balance: '120.85',
                                currency: 'RUB',
                                unavailable: true
                            }
                        },
                        {
                            title: 'maestroCard',
                            value: '3',
                            properties: {
                                number: '**** 7485',
                                type: 'card',
                                paymentSystem: 'card:mastercard',
                                balance: '120.85',
                                currency: 'RUB'
                            }
                        },
                        {
                            title: 'mirCard',
                            value: '4',
                            properties: {
                                number: '**** 7476',
                                type: 'card',
                                paymentSystem: 'card:mir',
                                balance: '120.85',
                                currency: 'RUB'
                            }
                        },
                        {
                            title: 'visaCardMir',
                            value: '5',
                            properties: {
                                number: '**** 7487',
                                type: 'card',
                                paymentSystem: 'card:visaMir',
                                balance: '10.55',
                                currency: 'RUB'
                            }
                        },
                        {
                            title: 'masterCardMir',
                            value: '6',
                            properties: {
                                number: '**** 7487',
                                type: 'card',
                                paymentSystem: 'card:mastercardMir',
                                balance: '10.55',
                                currency: 'RUB'
                            }
                        },
                        {
                            title: 'pro100Card',
                            value: '7',
                            properties: {
                                number: '**** 7487',
                                type: 'card',
                                paymentSystem: 'card:pro100',
                                balance: '10.55',
                                currency: 'RUB'
                            }
                        },
                        {
                            title: 'uecCard',
                            value: '8',
                            properties: {
                                number: '**** 7487',
                                type: 'card',
                                paymentSystem: 'card:uec',
                                balance: '10.55',
                                currency: 'RUB'
                            }
                        },
                        {
                            title: 'virtual',
                            value: '9',
                            properties: {
                                number: '**** 7487',
                                type: 'card',
                                paymentSystem: 'card:virtual',
                                balance: '10.55',
                                currency: 'RUB'
                            }
                        },
                        {
                            title: 'visaCard',
                            value: '10',
                            properties: {
                                number: '**** 7487',
                                type: 'card',
                                paymentSystem: 'card:visa-mir',
                                balance: '10.55',
                                currency: 'RUB'
                            }
                        },
                        {
                            title: 'mastercard-mir',
                            value: '11',
                            properties: {
                                number: '**** 7487',
                                type: 'card',
                                paymentSystem: 'card:mastercard-mir',
                                balance: '10.55',
                                currency: 'RUB'
                            }
                        },
                        {
                            title: 'default',
                            value: '12',
                            properties: {
                                number: '**** 7487',
                                type: 'card',
                                paymentSystem: 'card:$',
                                balance: '10.55',
                                currency: 'RUB'
                            }
                        }
                    ]
                },
                accounts: {
                    items: [
                        {
                            title: 'offer',
                            value: '1',
                            properties: {
                                name: 'offer',
                                type: 'offer',
                                paymentSystem: 'offer:$',
                                balance: '1200.85',
                                currency: 'RUB'
                            }
                        },
                        {
                            title: 'deposit',
                            value: '2',
                            properties: {
                                name: 'deposit',
                                type: 'deposit',
                                paymentSystem: 'deposit:$',
                                balance: '1200.85',
                                currency: 'RUB'
                            }
                        },
                        {
                            title: 'account',
                            value: '3',
                            properties: {
                                name: 'account',
                                type: 'account',
                                paymentSystem: 'account:$',
                                balance: '1200.85',
                                currency: 'RUB'
                            }
                        }
                    ]
                },
                loans: {
                    items: [
                        {
                            title: 'auto',
                            value: '1',
                            properties: {
                                name: 'auto',
                                type: 'loan',
                                paymentSystem: 'loan:auto',
                                balance: '1200.85',
                                currency: 'RUB'
                            }
                        },
                        {
                            title: 'consumer',
                            value: '2',
                            properties: {
                                name: 'consumer',
                                type: 'loan',
                                paymentSystem: 'loan:consumer',
                                balance: '1200.85',
                                currency: 'RUB'
                            }
                        },
                        {
                            title: 'mortgage',
                            value: '3',
                            properties: {
                                name: 'mortgage',
                                type: 'loan',
                                paymentSystem: 'loan:mortgage',
                                balance: '1200.85',
                                currency: 'RUB'
                            }
                        },
                        {
                            title: 'default',
                            value: '4',
                            properties: {
                                name: 'default',
                                type: 'loan',
                                paymentSystem: 'loan:$',
                                balance: '1200.85',
                                currency: 'RUB'
                            }
                        },
                    ]
                },
                metals: {
                    items: [
                        {
                            title: 'goldMetal',
                            value: '1',
                            properties: {
                                name: 'goldMetal',
                                type: 'metal',
                                paymentSystem: 'metal:au',
                                balance: '1200.85',
                                currency: 'RUB'
                            }
                        },
                        {
                            title: 'silverMetal',
                            value: '2',
                            properties: {
                                name: 'silverMetal',
                                type: 'metal',
                                paymentSystem: 'metal:ag',
                                balance: '1200.85',
                                currency: 'RUB'
                            }
                        },
                        {
                            title: 'platinumMetal',
                            value: '3',
                            properties: {
                                name: 'platinumMetal',
                                type: 'metal',
                                paymentSystem: 'metal:pt',
                                balance: '1200.85',
                                currency: 'RUB'
                            }
                        },
                        {
                            title: 'palladiumMetal',
                            value: '4',
                            properties: {
                                name: 'palladiumMetal',
                                type: 'metal',
                                paymentSystem: 'metal:pd',
                                balance: '1200.85',
                                currency: 'RUB'
                            }
                        },
                        {
                            title: 'default',
                            value: '5',
                            properties: {
                                name: 'default',
                                type: 'metal',
                                paymentSystem: 'metal:$',
                                balance: '1200.85',
                                currency: 'RUB'
                            }
                        },
                    ]
                },
                goals: {
                    items: [
                        {
                            title: 'education',
                            value: '1',
                            properties: {
                                name: 'education',
                                type: 'goal',
                                paymentSystem: 'goal:education',
                                balance: '1200.85',
                                currency: 'RUB'
                            }
                        },
                        {
                            title: 'auto',
                            value: '2',
                            properties: {
                                name: 'auto',
                                type: 'goal',
                                paymentSystem: 'goal:auto',
                                balance: '1200.85',
                                currency: 'RUB'
                            }
                        },
                        {
                            title: 'reserve',
                            value: '3',
                            properties: {
                                name: 'reserve',
                                type: 'goal',
                                paymentSystem: 'goal:reserve',
                                balance: '1200.85',
                                currency: 'RUB'
                            }
                        },
                        {
                            title: 'renovation',
                            value: '4',
                            properties: {
                                name: 'renovation',
                                type: 'goal',
                                paymentSystem: 'goal:renovation',
                                balance: '1200.85',
                                currency: 'RUB'
                            }
                        },
                        {
                            title: 'vacation',
                            value: '5',
                            properties: {
                                name: 'vacation',
                                type: 'goal',
                                paymentSystem: 'goal:vacation',
                                balance: '1200.85',
                                currency: 'RUB'
                            }
                        },
                        {
                            title: 'appliance',
                            value: '6',
                            properties: {
                                name: 'appliance',
                                type: 'goal',
                                paymentSystem: 'goal:appliance',
                                balance: '1200.85',
                                currency: 'RUB'
                            }
                        },
                        {
                            title: 'furniture',
                            value: '7',
                            properties: {
                                name: 'furniture',
                                type: 'goal',
                                paymentSystem: 'goal:furniture',
                                balance: '1200.85',
                                currency: 'RUB'
                            }
                        },
                        {
                            title: 'business',
                            value: '8',
                            properties: {
                                name: 'business',
                                type: 'goal',
                                paymentSystem: 'goal:business',
                                balance: '1200.85',
                                currency: 'RUB'
                            }
                        },
                        {
                            title: 'estate',
                            value: '9',
                            properties: {
                                name: 'estate',
                                type: 'goal',
                                paymentSystem: 'goal:estate',
                                balance: '1200.85',
                                currency: 'RUB'
                            }
                        },
                        {
                            title: 'holidays',
                            value: '10',
                            properties: {
                                name: 'holidays',
                                type: 'goal',
                                paymentSystem: 'goal:holidays',
                                balance: '1200.85',
                                currency: 'RUB'
                            }
                        },
                        {
                            title: 'other - default',
                            value: '11',
                            properties: {
                                name: 'other',
                                type: 'goal',
                                paymentSystem: 'goal:other',
                                balance: '1200.85',
                                currency: 'RUB'
                            }
                        },
                    ]
                },
            }
        }

        var store = createStorybookStore()
        var references = output.references
        var widgets = output.screens[0].widgets
    }

    <RendererWithReduxForm name={'Resource'} store={store} output={output} />
```
