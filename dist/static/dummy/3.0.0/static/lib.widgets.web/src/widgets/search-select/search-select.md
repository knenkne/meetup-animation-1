```js
    {
        const { createStorybookStore, RendererWithReduxForm, stubRequest } = require('provider')
        const { countries } = require('./stub/countries')

        var output = {
            screens: [
                {
                    title: 'Виджет SearchSelect',
                    description: 'На примере выбора страны',
                    widgets: [
                        {
                            type: 'WebSearchSelect',
                            title: 'WebSearchSelect: Справочник статический',
                            properties: {
                                filterKeys: 'titleRus;alias',
                                itemImgType: 'code',
                                itemImgSrc: 'flag',
                                itemDescriptionKey: 'titleRus'
                            },
                            fields: [{
                                id: 'search:select:country:context',
                                value: 'ITALY:value',
                                type: 'text',
                                referenceId: 'countriesContext',
                                title: 'Выбор страны из справочника',
                                description: 'Выбор страны из загруженного справочника',
                                validators: [{
                                    type: 'required',
                                    value: '',
                                    message: 'Выберите из списка'
                                }]
                            }]
                        },
                        {
                            type: 'WebSearchSelect',
                            title: 'WebSearchSelect: Сервис недоступен',
                            properties: {
                                filterKeys: 'titleRus;alias',
                                itemImgType: 'base64',
                                itemImgSrc: 'flag',
                                itemDescriptionKey: 'titleRus'
                            },
                            fields: [{
                                id: 'search:select:no:service',
                                value: 'default value',
                                type: 'text',
                                referenceId: 'noService',
                                title: 'Выбор страны (несуществующий url)',
                                description: 'Выбор страны (несуществующий url)',
                                validators: [{
                                    type: 'required',
                                    value: '',
                                    message: 'Выберите из списка'
                                }]
                            }]
                        },
                        {
                            type: 'WebSearchSelect',
                            title: 'WebSearchSelect: Сервис труднодоступен',
                            properties: {
                                filterKeys: 'titleRus;alias',
                                itemImgType: 'base64',
                                itemImgSrc: 'flag',
                                itemDescriptionKey: 'titleRus'
                            },
                            fields: [{
                                id: 'search:select:lazy:service',
                                value: '',
                                type: 'text',
                                referenceId: 'lazyService',
                                title: 'Выбор страны (долгий запрос)',
                                description: 'Выбор страны (долгий запрос)',
                                validators: [{
                                    type: 'required',
                                    value: '',
                                    message: 'Введите значение'
                                }]
                            }]
                        },
                        {
                            type: 'WebSearchSelect',
                            title: 'WebSearchSelect: выбор только из списка',
                            properties: {
                                filterKeys: 'titleRus;alias',
                                itemImgType: 'base64',
                                itemImgSrc: 'flag',
                                itemDescriptionKey: 'titleRus',
                                mode: 'only',
                                suggestMessage: 'Выберите из списка'
                            },
                            fields: [{
                                id: 'search:select:validation',
                                value: '',
                                type: 'text',
                                referenceId: 'countriesContext',
                                title: 'Пример с валидацией',
                                description: 'Если ввести что-то не из списка должна появится ошибка',
                                
                                }]
                        }

                    ],
                    properties: {}
                }
            ],
            references: {
                countriesContext: {
                    properties: {},
                    items: countries
                },
                noService: {
                    properties: {
                        url: '/api/dictionaries/no-service',
                        debounce: 500,
                        requestRepeatTimeout: 3000
                    },
                    items: []
                },
                lazyService: {
                    properties: {
                        url: '/api/dictionaries/lazy-service',
                        debounce: 500,
                        requestRepeatTimeout: 3000
                    },
                    items: []
                },
            },
            events: []
        }

        var store = createStorybookStore()


        var lazyResponse = (request) => {
            console.log(request)

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

            var filters = output.screens[0].widgets[2].properties.filterKeys.split(';')
            var data = {
                "success": true,
                "body": _.filter(countries, (country) => {
                    return (
                        _.some(filters, (filter) => {
                            if (country.properties[filter]) {
                                return country.properties[filter].toLowerCase().includes(query.toLowerCase())
                            }
                            return false
                        })
                    )
                }),
                "messages": []
            }

            return { status: 200, data }
        }

        stubRequest('/api/dictionaries/lazy-service', lazyResponse, 3000)
    }

    <RendererWithReduxForm name={'SearchSelect'} store={store} output={output} />
```
