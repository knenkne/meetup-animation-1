```js
    {
        const { createStorybookStore, RendererWithReduxForm } = require('provider')
        var output = {
            screens: [{
                title: 'Пример из pro.auth.check',
                description: '',
                widgets: [
                    {
                    "type": "WebSummary",
                    "title": "Title",
                    "fields": [
                      {
                        "id": "document:fullName",
                        "type": "text",
                        "title": "ФИО",
                        "readonly": true,
                        "value": "Иванов Сергей Иванович"
                      },
                      {
                        "id": "uca:contacts:phone:mobile",
                         "type": "text",
                         "format": "phone",
                         "value": "9055863998",
                         "title": "Мобильный телефон",
                      },
                      {
                        "id": "document:selected:value",
                        "type": "select",
                        "title": "Значение из справочника",
                        "value": 'value1',
                        "referenceId": 'selectOptions',
                      },
                      {
                        "id": "document:birthDate",
                        "type": "text",
                        "title": "Дата рождения",
                        "readonly": true,
                        "value": '25.06.2000'
                      }
                    ]
                  },
                    {
                    "type": "WebSummary",
                    "fields": [
                      {
                        "id": "document:type",
                        "type": "text",
                        "title": "Документ",
                        "readonly": true,
                        "value": 'Паспорт гражданина РФ'
                      },
                      {
                        "id": "document:seriesNumber",
                        "type": "text",
                        "title": "Серия и номер",
                        "readonly": true,
                        "value": "45 56 458456"
                      }
                    ]
                  },
                  {
                    "type": "WebSummary",
                    "fields": [
                   {
                        "id": "document:issuedBy",
                        "type": "text",
                        "title": "Кем выдан",
                        "readonly": true,
                        "value": "ТП №1 в гор. Сергиево-Посаде ОУФМС России по Московской обл. в Сергиево-Посадском р-не"
                      },
                      {
                        "id": "document:issueDate",
                        "type": "text",
                        "title": "Дата выдачи",
                        "value": "13.08.2000",
                        "readonly": true
                      },
                      {
                        "id": "document:subdivisionCode",
                        "type": "text",
                        "title": "Код подразделения",
                        "readonly": true,
                        "value": "500-145"
                      }
                    ]
                  },
                  {
                    "type": "WebSummary",
                    "title": "",
                    "fields": [
                      {
                       "id": "document:birthPlace",
                        "type": "text",
                        "title": "Место рождения",
                        "readonly": true,
                         "value": "Сергиев Посад"
                      },
                      {
                        "id": "document:registrationAddress",
                        "type": "text",
                        "title": "Адрес постоянной регистрации",
                        "readonly": true,
                        "value": "115484 Московская область, г. Сергиеeg Посад, переулок Новый, д. 3, кв. 5"
                      }
                    ]
                  }
                ],
                properties: {}
            }],
            references: {
                    "selectOptions": {
                        items: [
                                                                {
                                                                    value: 'value1',
                                                                    title: 'Опция с длинным текстом 1'
                                                                },
                                                                {
                                                                    value: 'value2',
                                                                    title: 'Опция 2'
                                                                },
                                                                {
                                                                    value: 'value3',
                                                                    title: 'Опция 3'
                                                                }
                                                            ]
                                                        },
                }
        }
        var store = createStorybookStore()
    }
    <RendererWithReduxForm name={'Summary1'} store={store} output={output} />
```


```js
    {
        const { createStorybookStore, RendererWithReduxForm } = require('provider')
        var output = {
            screens: [{
                title: 'Все варианты компоновок',
                description: '',
                widgets: [
                    {
                        "type": "WebSummary",
                        "title": "С заголовком и без описания, несворачиваемое",
                        "fields": [
                            {
                                id: 'summary:first:default',
                                type: 'text',
                                value: 'Значение поля',
                                description: 'Описание поля',
                                title: 'Заголовок поля',
                                readonly: true
                            }
                        ]
                    },
                    {
                        "type": "WebSummary",
                        "title": "С заголовком и с описанием, свернутое",
                        "description": "Описание",
                        "properties": {
                            "collapsed": true
                        },
                        "fields": [
                            {
                                id: 'summary:first:default',
                                type: 'text',
                                value: 'Значение поля',
                                description: 'Описание поля',
                                title: 'Заголовок поля',
                                readonly: true
                            }
                        ]
                    },
                    {
                        "type": "WebSummary",
                        "title": "С заголовком и с описанием, несвернутое",
                        "description": "Описание",
                        "properties": {
                            "collapsed": false,
                            "additionalDescription": "Дополнительное описание"
                        },
                        "fields": [
                            {
                                id: 'summary:first:default',
                                type: 'text',
                                value: 'Значение поля',
                                description: 'Описание поля',
                                title: 'Заголовок поля',
                                readonly: true
                            }
                        ]
                    },
                    {
                        "type": "WebSummary",
                        "title": "С заголовком и с описанием, несвернутое, с событием изменения",
                        "description": "Описание",
                        "properties": {
                            "collapsed": false,
                            "stepId": "step1",
                            "event": "event",
                            "additionalDescription": "Дополнительное описание"
                        },
                        "fields": [
                            {
                                id: 'summary:first:default',
                                type: 'text',
                                value: 'Значение поля',
                                description: 'Описание поля',
                                title: 'Заголовок поля',
                                readonly: true
                            }
                        ]
                    }
                ]
            }]
        }
        var store = createStorybookStore()
    }
    <RendererWithReduxForm name={'Summary2'} store={store} output={output} />
```

```js
    {
        const { createStorybookStore, RendererWithReduxForm } = require('provider')
        var output = {
            screens: [{
                title: 'Widgets | WebSummary',
                description: '',
                widgets: [
                    {
                        "type": "WebSummary",
                        "title": "Стили данных в полях",
                        "description": "Описание",
                        "properties": {
                            "additionalDescription": "Минимальная ставка для вас на 1% ниже, чем в стандартных условиях"
                        },
                        "fields": [
                            {
                                id: 'text',
                                type: 'text',
                                value: 'Значение',
                                description: 'Простое поле',
                                title: 'Текст',
                                readonly: true
                            },
                            {
                                id: 'text:formatted:text',
                                type: 'text',
                                format: 'formattedText',
                                formatConfig: '+7 ([000]) [SSs]-[099]-<ВEH> \[ [ЫЫ] \] \<<А-Я>\<',
                                style: 'formatted',
                                value: '123ab45ВАА',
                                title: 'Форматированный текст',
                                readonly: true
                            },
                            {
                                id: 'text:formatted:number',
                                type: 'text',
                                format: 'formattedNumber',
                                formatConfig: '+7 ([000]) [000]-[00]-[00]',
                                style: 'formatted',
                                value: '9169492677',
                                title: 'Форматированное число',
                                readonly: true
                            },
                            {
                                id: 'text:datetime',
                                type: 'text',
                                style: 'datetime',
                                value: '2017-11-27T20:51:21+03',
                                title: 'Дата со временем',
                                readonly: true
                            },
                            {
                                id: 'text:datetime:masked',
                                type: 'text',
                                style: 'datetime',
                                masked: true,
                                value: '••.••.•••• 22:50',
                                title: 'Маскированные дата и время',
                                readonly: true
                            },
                            {
                                id: 'text:date',
                                type: 'text',
                                style: 'date',
                                value: '2017-11-27',
                                title: 'Дата',
                                readonly: true
                            },
                            {
                                id: 'text:date:masked',
                                type: 'text',
                                masked: true,
                                style: 'date',
                                value: '••.••.••••',
                                title: 'Маскированная дата',
                                readonly: true
                            },
                            {
                                id: 'text:resource:1',
                                value: '1',
                                type: 'text',
                                style: 'resource',
                                referenceId: 'resource',
                                title: 'Ресурс',
                                description: 'Ресурс списания, продукт клиента',
                                readonly: true
                            },
                            {
                                id: 'text:resource:2',
                                value: '2',
                                type: 'text',
                                style: 'resource',
                                referenceId: 'resource',
                                title: 'Ресурс',
                                description: 'Ресурс списания, продукт клиента',
                                readonly: true
                            },
                            {
                                id: 'text:icon',
                                value: 'Значение',
                                type: 'text',
                                style: 'icon:core/cards/maestro-32',
                                title: 'Текст с иконкой',
                                description: 'style равен идентификатору иконки в компоненте Icon',
                                readonly: true
                            },
                            {
                                id: 'text:link:external',
                                type: 'text',
                                value: 'https://www.sberbank.ru',
                                style: 'link',
                                title: 'Внешняя ссылка',
                                description: 'Значение - url, описание - текст ссылки',
                                readonly: true
                            },
                            {
                                id: 'text:link:internal',
                                value: 'cards.debit',
                                type: 'text',
                                style: 'link',
                                title: 'Внутренняя ссылка на дебетовки',
                                description: 'Значение - url, описание - текст ссылки',
                                readonly: true
                            },
                            {
                                id: 'text:link:file',
                                value: 'https://www.front.node2.online.sberbank.ru',
                                type: 'text',
                                style: 'link:pdf',
                                title: 'Внутренняя ссылка на файл',
                                description: 'Значение - url, описание - текст ссылки',
                                readonly: true
                            },
                            {
                                id: 'total:1',
                                value: '1',
                                type: 'text',
                                style: 'total',
                                referenceId: 'commission',
                                title: 'Коммиссия: ошибка',
                                readonly: true
                            },
                            {
                                id: 'total:2',
                                value: '2',
                                type: 'text',
                                style: 'total',
                                referenceId: 'commission',
                                title: 'Коммиссия: отсутствует',
                                readonly: true
                            },
                            {
                                id: 'total:3',
                                value: '3',
                                type: 'text',
                                style: 'total',
                                referenceId: 'commission',
                                title: 'Коммиссия: посчитано',
                                readonly: true
                            },
                            {
                                id: 'total:4',
                                value: '4',
                                type: 'text',
                                style: 'total',
                                referenceId: 'commission',
                                title: 'Коммиссия: посчитано',
                                readonly: true
                            }
                        ]
                    }
                ]
            }],
            references: {
                resource: {
                    items: [
                        {
                            title: 'American Express',
                            value: '1',
                            properties: {
                                name: 'Карта',
                                maskedNumber: '•••• 7485',
                                type: 'card',
                                paymentSystem: 'card:amex',
                                balance: '1200.85',
                                currency: 'RUB'
                            }
                        },
                        {
                            title: 'Счет №1254',
                            value: '2',
                            properties: {
                                name: 'Вклад',
                                number: '342 92 783 8 273482347238',
                                type: 'account',
                                balance: '500000.00',
                                currency: 'USD'
                            }
                        }
                    ]
                },
                commission: {
                    properties: {},
                    items: [
                        {
                            title: '00,00',
                            value: '1',
                            properties: {
                                currency: 'RUB',
                                commission: 'error'
                            }
                        },
                        {
                            title: '100,01',
                            value: '2',
                            properties: {
                                currency: 'RUB',
                                commission: 'none'
                            }
                        },
                        {
                            title: '1337,00',
                            value: '3',
                            properties: {
                                currency: 'EUR',
                                commission: 'success',
                                value: '42'
                            }
                        },
                        {
                            title: '1337,00',
                            value: '4',
                            properties: {
                                currency: 'EUR',
                                commission: 'success',
                                value: '42',
                                message: 'Сообщение от сервера'
                            }
                        }
                    ]
                }
            }
        }
        var store = createStorybookStore()
    }
    <RendererWithReduxForm name={'Summary3'} store={store} output={output} />
```
