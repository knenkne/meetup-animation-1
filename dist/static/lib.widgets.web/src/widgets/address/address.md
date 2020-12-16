```js
    {
       const { createStorybookStore, RendererWithReduxForm, stubRequest } = require('provider')
       const _ = require('lodash')
            
        var countriesCodes = [
            'ABH',
            'AUS',
            'AUT',
            'AZE',
            'ALB',
            'DZA',
            'ASM',
            'AIA',
            'AGO',
            'AND',
            'ATA',
            'ATG',
            'ARG',
            'ARM',
            'ABW',
            'AFG',
            'BHS'
        ]

        var output = {
            screens: [
                {
                    title: 'Виджет WebAddress',
                    widgets: [
                        {
                            type: 'WebAddress',
                            title: 'WebAddress: Адрес был предзаполнен',
                            description: 'Адрес маскирован',
                            properties: {
                                suggest: ['only', 'only', 'only', 'only', 'on', 'on', 'off'],
                                suggestMessage: 'Из списка, по-братски'
                            },
                            fields: [
                                {
                                    id: 'country',
                                    value: 'RUS',
                                    type: 'select',
                                    referenceId: 'countries',
                                    title: 'Страна',
                                    description: 'Выберите страну из списка',
                                    tooltip: { title: 'Подсказка', contents: 'Текст подсказки' },
                                    validators: [
                                        {
                                            type: 'required',
                                            value: '',
                                            message: 'Обязательное поле, заполни плез'
                                        }
                                    ]
                                },
                                {
                                    id: 'region',
                                    value: '01',
                                    type: 'text',
                                    referenceId: 'region',
                                    title: 'Регион',
                                    description: 'Укажите регион',
                                    tooltip: { title: 'Подсказка', contents: 'Текст подсказки' },
                                    validators: [
                                        {
                                            type: 'required',
                                            value: '',
                                            message: 'Обязательное поле, заполни плез'
                                        }
                                    ]
                                },
                                {
                                    id: 'district',
                                    value: '0001',
                                    type: 'text',
                                    referenceId: 'district',
                                    title: 'Район',
                                    description: 'Укажите район',
                                    tooltip: { title: 'Подсказка', contents: 'Текст подсказки' },
                                    validators: [
                                        {
                                            type: 'required',
                                            value: '',
                                            message: 'Обязательное поле, заполни плез'
                                        }
                                    ]
                                },
                                {
                                    id: 'settlement',
                                    value: '000001',
                                    type: 'text',
                                    referenceId: 'settlement',
                                    title: 'Населённый пункт',
                                    description: 'Укажите населенный пункт',
                                    tooltip: { title: 'Подсказка', contents: 'Текст подсказки' },
                                    masked: true,
                                    validators: [
                                        {
                                            type: 'required',
                                            value: '',
                                            message: 'Обязательное поле, заполни плез'
                                        }
                                    ]
                                },
                                {
                                    id: 'street',
                                    value: '00000001',
                                    type: 'text',
                                    referenceId: 'street',
                                    title: 'Улица',
                                    masked: true,
                                    description: 'Укажите улицу',
                                    tooltip: { title: 'Подсказка', contents: 'Текст подсказки' },
                                    validators: [
                                        {
                                            type: 'required',
                                            value: '',
                                            message: 'Обязательное поле, заполни плез'
                                        }
                                    ]
                                },
                                {
                                    id: 'street:checkbox',
                                    value: 'false',
                                    type: 'checkbox',
                                    title: 'Нет улицы'
                                },
                                {
                                    id: 'building',
                                    value: '0000000001',
                                    type: 'text',
                                    referenceId: 'building',
                                    title: 'Строение',
                                    description: 'Укажите строение',
                                    tooltip: { title: 'Подсказка', contents: 'Текст подсказки' },
                                    masked: true,
                                    validators: [
                                        {
                                            type: 'required',
                                            value: '',
                                            message: 'Обязательное поле, заполни плез'
                                        }
                                    ]
                                },
                                {
                                    id: 'building:checkbox',
                                    value: 'false',
                                    type: 'checkbox',
                                    title: 'Нет строения'
                                },
                                {
                                    id: 'quarters',
                                    value: '000000000001',
                                    type: 'text',
                                    referenceId: 'quarters',
                                    title: 'Помещение',
                                    masked: true,
                                    description: 'Укажите помещение',
                                    tooltip: { title: 'Подсказка', contents: 'Текст подсказки' },
                                    validators: [
                                        {
                                            type: 'required',
                                            value: '',
                                            message: 'Обязательное поле, заполни плез'
                                        }
                                    ]
                                },
                                {
                                    id: 'quarters:checkbox',
                                    value: 'false',
                                    type: 'checkbox',
                                    title: 'Нет помещения'
                                },
                            ]
                        }
                    ],
                    properties: {}
                }
            ],
            events: [],
            references: {
                region: { properties: {}, items: [{ title: 'Московская область', value: '01' }] },
                district: { properties: {}, items: [{ title: 'Солнечногорский район', value: '0001' }] },
                settlement: { properties: {}, items: [{ title: 'г. Солнечног****', value: '000001' }] },
                street: { properties: {}, items: [{ title: 'ул. Кра****', value: '00000001' }] },
                building: { properties: {}, items: [{ title: '*****', value: '0000000001' }] },
                quarters: { properties: {}, items: [{ title: '**', value: '000000000001' }] },
                countries: {
                    properties: {},
                    items: [
                        {
                            title: 'Российская Федерация',
                            value: 'RUS',
                            properties: {
                                aliases: ['Россия', 'Россиюшка', 'Родная Держава', 'Великая Держава'],
                                suggestUrl: '/api/dictionaries/address',
                                suggestMethod: 'GET',
                                debounce: 200,
                                timeout: 2000,
                                limit: 10
                            }
                        },
                        {
                            title: 'США',
                            value: 'USA',
                            properties: {
                                aliases: ['Америка', 'Штаты', 'Трамп', 'Трамп-пам-пам'],
                                suggestUrl: '/api/dictionaries/address'
                            }
                        }
                    ].concat(_.map(_.reject(countriesCodes, (code) => _.includes(['RUS', 'USA'], code)), (code) => ({
                        title: code,
                        value: code,
                        properties: {
                            aliases: [],
                            suggestUrl: '/api/dictionaries/address'
                        }
                    })))
                }
            }
        }

        var store = createStorybookStore()


        // STUB SERVER

        var stub = {
            region: [{
                title: 'Готэмская область',
                value: '10',
                properties: {
                    description: ''
                }
            }, {
                title: 'Московская область',
                value: '11',
                properties: {
                    description: ''
                }
            }, 
           {
                title: 'Аа',
                value: '12',
                properties: {
                    description: ''
                }
            }, {
                title: 'Аааа',
                value: '13',
                properties: {
                    description: ''
                }
            }, {
                title: 'Ааааа',
                value: '14',
                properties: {
                    description: ''
                }
            }, {
                title: 'Аааааа',
                value: '20',
                properties: {
                    description: ''
                }
            } , {
                title: 'Аааааа',
                value: '15',
                properties: {
                    description: ''
                }
            } , {
                  title: 'Ааааааа',
                  value: '16',
                  properties: {
                      description: ''
                  }
            } , {
                  title: 'Аааааааа',
                  value: '17',
                  properties: {
                      description: ''
                  }
            }, {
                   title: 'Аааааааааа',
                   value: '18',
                   properties: {
                       description: ''
                   }
            }
            ],
            district: [{
                title: 'Готэмский район',
                value: '1000',
                properties: {
                    description: 'Готэмский район 911'
                }
            }, {
                title: 'Солнечногорский район',
                value: '1001',
                properties: {
                    description: 'МО'
                }
            }],
            settlement: [{
                title: 'Город Готэм',
                value: '100000',
                properties: {
                    description: 'Город Готэм 911'
                }
            }, {
                title: 'Город Солнечногорск',
                value: '100001',
                properties: {
                    description: 'МО'
                }
            }],
            street: [{
                title: 'Готэмская улица',
                value: '10000000',
                properties: {
                    description: 'Готэмская улица 911'
                }
            }, {
                title: 'Улица Красная',
                value: '10000001',
                properties: {
                    description: 'МО, г. Солнечногорск'
                }
            }],
            building: [{
                title: 'д. 10, стр. 2, к. 2',
                value: '1000000000',
                properties: {}
            }, {
                title: 'д. 13, стр. 1, к. 5',
                value: '1000000001',
                properties: {
                    description: 'МО, г. Солнечногорск, ул. Красная'
                }
            }]
        }

        var possibleContext = ['region', 'district', 'settlement', 'street', 'building', 'quarters']

        var counter = {
            region: 0,
            district: 0,
            settlement: 0,
            street: 0,
            building: 0,
            quarters: 0
        }

        var addressResponse = (request) => {
            console.log(request.params)

            var {
                pid,
                context,
                query,
                region,
                district,
                settlement,
                street,
                building,
                limit = 10,
                offset = 0
            } = request.params

            var data = {}

            counter[context] += 1

            if (_.includes(possibleContext, context) && query) {
                data = { "success": true, "body": _.map(_.slice(stub[context], 0, limit), (item) => ({
                    ...item,
                    value: item.value + counter[context],
                    properties: {
                        description: `${item.properties.description}, request: ${counter[context]}`
                    }
                })), "messages": [] }
            } else {
                data = { "success": false, "errors": [], "messages": [] }
            }

            return { status: 200, data }
        }

        stubRequest('/api/dictionaries/address', addressResponse, 1000)
    }


    <RendererWithReduxForm name={'WebAddress'} store={store} output={output} />
```
