```js
    {
        const { createStorybookStore, RendererWithReduxForm } = require('provider')
        var output = {
            screens: [
                {
                    title: 'Шаг флоу',
                    description: 'Описание шага флоу',
                    widgets: [
                        {
                            type: 'CoreMoney',
                            properties: {
                                suffix: true
                            },
                            fields: [{
                                id: 'currency:1',
                                value: 'RUB',
                                type: 'select',
                                referenceId: 'currencies',
                                title: 'Выберите валюту',
                                validators: [{
                                    type: 'required',
                                    value: '',
                                    message: 'Обязательное поле, заполни плез'
                                }]
                            },
                            {
                                id: 'money:1',
                                value: '5000',
                                type: 'text',
                                title: 'Введите сумму',
                                validators: [
                                    {
                                        type: 'required',
                                        value: '',
                                        message: 'Обязательное поле, заполни плез'
                                    },
                                    {
                                        type: 'minValue',
                                        value: '1',
                                        message: 'Минимум 1 у.е.'
                                    },
                                    {
                                        type: 'maxValue',
                                        value: '50000',
                                        message: 'Максимум 50 000 у.е.'
                                    }
                                ]
                            },
                        ]
                    }
                ],
                properties: {}
            }
            ],
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
                    }
                    ]
                }
            }
        }
       var store = createStorybookStore()
    }

    <RendererWithReduxForm name={'CoreMoney'} store={store} output={output} />
```

```js
    {
        const { createStorybookStore, RendererWithReduxForm } = require('provider')
        var output = {
            screens: [
                {
                    title: 'Шаг флоу',
                    description: 'Описание шага флоу',
                    widgets: [
                        {
                            type: 'CoreMoney',
                            fields: [{
                                id: 'currency:2',
                                value: 'RUB',
                                type: 'select',
                                referenceId: 'currencies',
                                title: 'Выберите валюту',
                                readonly: true,
                                validators: [{
                                    type: 'required',
                                    value: '',
                                    message: 'Обязательное поле, заполни плез'
                                }]
                            },
                            {
                                id: 'money:2',
                                value: '5000',
                                type: 'text',
                                title: 'Введите сумму',
                                validators: [
                                    {
                                        type: 'required',
                                        value: '',
                                        message: 'Обязательное поле, заполни плез'
                                    },
                                    {
                                        type: 'minValue',
                                        value: '1',
                                        message: 'Минимум 1 у.е.'
                                    },
                                    {
                                        type: 'maxValue',
                                        value: '50000',
                                        message: 'Максимум 50 000 у.е.'
                                    }
                                ]
                            },
                        ]
                    }
                ],
                properties: {}
            }
            ],
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
                    }
                    ]
                }
            }
        }
       var store = createStorybookStore()
    }

    <RendererWithReduxForm name={'CoreMoney'} store={store} output={output} />
```

```js
    {
        const { createStorybookStore, RendererWithReduxForm } = require('provider')
        var output = {
            screens: [
                {
                    title: 'Шаг флоу',
                    description: 'Описание шага флоу',
                    widgets: [
                        {
                            type: 'CoreMoney',
                            fields: [{
                                id: 'currency:3',
                                value: 'RUB',
                                type: 'select',
                                referenceId: 'currencies',
                                title: 'Выберите валюту',
                                validators: [{
                                    type: 'required',
                                    value: '',
                                    message: 'Обязательное поле, заполни плез'
                                }]
                            },
                            {
                                id: 'money:3',
                                value: '5000',
                                type: 'text',
                                title: 'Введите сумму',
                                readonly: true,
                                validators: [
                                    {
                                        type: 'required',
                                        value: '',
                                        message: 'Обязательное поле, заполни плез'
                                    },
                                    {
                                        type: 'minValue',
                                        value: '1',
                                        message: 'Минимум 1 у.е.'
                                    },
                                    {
                                        type: 'maxValue',
                                        value: '50000',
                                        message: 'Максимум 50 000 у.е.'
                                    }
                                ]
                            },
                        ]
                    }
                ],
                properties: {}
            }
            ],
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
                    }
                    ]
                }
            }
        }
       var store = createStorybookStore()
    }

    <RendererWithReduxForm name={'CoreMoney'} store={store} output={output} />
```

```js
    {
        const { createStorybookStore, RendererWithReduxForm } = require('provider')
        var output = {
            screens: [
                {
                    title: 'Шаг флоу',
                    description: 'Описание шага флоу',
                    widgets: [
                        {
                            type: 'CoreMoney',
                            fields: [{
                                id: 'currency:4',
                                value: 'RUB',
                                type: 'select',
                                referenceId: 'currencies',
                                title: 'Выберите валюту',
                                readonly: true,
                                validators: [{
                                    type: 'required',
                                    value: '',
                                    message: 'Обязательное поле, заполни плез'
                                }]
                            },
                            {
                                id: 'money:4',
                                value: '5000',
                                type: 'text',
                                readonly: true,
                                title: 'Введите сумму',
                                validators: [
                                    {
                                        type: 'required',
                                        value: '',
                                        message: 'Обязательное поле, заполни плез'
                                    },
                                    {
                                        type: 'minValue',
                                        value: '1',
                                        message: 'Минимум 1 у.е.'
                                    },
                                    {
                                        type: 'maxValue',
                                        value: '50000',
                                        message: 'Максимум 50 000 у.е.'
                                    }
                                ]
                            },
                        ]
                    }
                ],
                properties: {}
            }
            ],
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
                    }
                    ]
                }
            }
        }
       var store = createStorybookStore()
    }

    <RendererWithReduxForm name={'CoreMoney'} store={store} output={output} />
```
