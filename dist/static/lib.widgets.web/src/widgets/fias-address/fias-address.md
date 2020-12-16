#### __WebFiasAddress с регионом и номером квартиры__
```js
    {
        const { createStorybookStore, RendererWithReduxForm, stubRequest } = require('provider')

        const { getApiResponse } = require('./stub/get-api-response')

        var output = {
            screens: [
                {
                    title: 'Виджет WebFiasAddress с регионом и квартирой',
                    widgets: [
                        {
                            type: 'WebFiasAddress',
                            title: 'WebFiasAddress: Адрес был предзаполнен',
                            properties: {
                                suggest: ['only', 'only', 'only', 'only', 'off'],
                                suggestMessage: 'Из списка, по-братски',
                                url: '/api/dictionaries/address',
                                source: 'ФИАС',
                                debounce: 200,
                                timeout: 2000,
                                count: 10
                            },
                            fields: [
                                {
                                    id: 'widget:region',
                                    value: '29251dcf-00a1-4e34-98d4-5c47484a36d4',
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
                                    id: 'widget:city',
                                    value: '0c5b2444-70a0-4932-980c-b4dc0d3f02b5',
                                    type: 'text',
                                    referenceId: 'city',
                                    title: 'Населённый пункт',
                                    description: 'Укажите населенный пункт',
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
                                    id: 'widget:street',
                                    value: 'f16404bb-14a0-43e5-8df6-abef067c564f',
                                    type: 'text',
                                    referenceId: 'street',
                                    title: 'Улица',
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
                                    id: 'widget:checkbox:street',
                                    value: 'false',
                                    type: 'checkbox',
                                    title: 'Нет улицы'
                                },
                                {
                                    id: 'widget:house',
                                    value: '9ecec74c-b9ad-4d0a-aff4-75e80ac5c5ca',
                                    type: 'text',
                                    referenceId: 'house',
                                    title: 'Дом',
                                    description: 'Укажите дом',
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
                                    id: 'widget:checkbox:house',
                                    value: 'false',
                                    type: 'checkbox',
                                    title: 'Нет дома'
                                },
                                {
                                    id: 'widget:apartment',
                                    value: '000000000001',
                                    type: 'text',
                                    title: 'Номер квартиры',
                                    description: 'Укажите номер квартиры',
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
                                    id: 'widget:checkbox:apartment',
                                    value: 'false',
                                    type: 'checkbox',
                                    title: 'Нет квартиры'
                                },
                            ]
                        }
                    ],
                    properties: {}
                }
            ],
            events: [],
            references: {
                region: {
                    properties: {
                        region: "Московская",
                        regionType: "обл",
                    }
                },
                city: {
                    properties: {
                        region: "Москва",
                        regionType: "г"
                    }
                },
                street: {
                    properties: {
                        street: "Кутузовский",
                        streetType: "пер"
                    }
                },
                house: {
                    properties: {
                        house: "1/8",
                        houseType: ""
                    }
                }
            }
        }

        var store = createStorybookStore()

        // STUB SERVER

        stubRequest('/api/dictionaries/address', getApiResponse, 1000)
    }


    <RendererWithReduxForm name={'WebFiasAddress'} store={store} output={output} />
```

#### __WebFiasAddress без региона и номера квартиры__
```js
    {
        const { createStorybookStore, RendererWithReduxForm, stubRequest } = require('provider')

        const { getApiResponse } = require('./stub/get-api-response')

        var output = {
            screens: [
                {
                    title: 'Виджет WebFiasAddress без региона и квартиры',
                    widgets: [
                        {
                            type: 'WebFiasAddress',
                            title: 'WebFiasAddress: Адрес был предзаполнен',
                            properties: {
                                suggest: ['only', 'only', 'only'],
                                suggestMessage: 'Из списка, по-братски',
                                url: '/api/dictionaries/address',
                                source: 'ФИАС',
                                debounce: 200,
                                timeout: 2000,
                                count: 10
                            },
                            fields: [
                                {
                                    id: 'widget:2:city',
                                    value: '0c5b2444-70a0-4932-980c-b4dc0d3f02b5',
                                    type: 'text',
                                    referenceId: 'city',
                                    title: 'Населённый пункт',
                                    description: 'Укажите населенный пункт',
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
                                    id: 'widget:2:street',
                                    value: 'f16404bb-14a0-43e5-8df6-abef067c564f',
                                    type: 'text',
                                    referenceId: 'street',
                                    title: 'Улица',
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
                                    id: 'widget:2:checkbox:street',
                                    value: 'false',
                                    type: 'checkbox',
                                    title: 'Нет улицы'
                                },
                                {
                                    id: 'widget:2:house',
                                    value: '9ecec74c-b9ad-4d0a-aff4-75e80ac5c5ca',
                                    type: 'text',
                                    referenceId: 'house',
                                    title: 'Дом',
                                    description: 'Укажите дом',
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
                                    id: 'widget:2:checkbox:house',
                                    value: 'false',
                                    type: 'checkbox',
                                    title: 'Нет дома'
                                }
                            ]
                        }
                    ],
                    properties: {}
                }
            ],
            events: [],
            references: {
                city: {
                    properties: {
                        region: "Москва",
                        regionType: "г"
                    }
                },
                street: {
                    properties: {
                        street: "Кутузовский",
                        streetType: "пер"
                    }
                },
                house: {
                    properties: {
                        house: "1/8",
                        houseType: ""
                    }
                }
            }
        }

        var store = createStorybookStore()

        // STUB SERVER

        stubRequest('/api/dictionaries/address', getApiResponse, 1000)
    }


    <RendererWithReduxForm name={'WebFiasAddress'} store={store} output={output} />
```