```js
    {
        const { createStorybookStore, RendererWithReduxForm } = require('provider')
        var output = {
            screens: [
                {
                    title: 'Параметры поездки',
                    widgets: [
                        {
                            "type": "WebProductDescription",
                            "title": "Default WebProductDescription",
                            "description": "Заказывайте скорее!",
                            "properties": {
                                "productFeaturesReferenceId": "aeroflotBonusFeatures"
                            }
                        },
                        {
                            "type": "WebProductDescription",
                            "title": "No description default WebProductDescription",
                            "properties": {
                                "productFeaturesReferenceId": "aeroflotBonusFeatures"
                            }
                        },
                        {
                            "type": "WebProductDescription",
                            "title": "Only Head WebProductDescription",
                            "properties": {
                                "productImgType": "code",
                                "productImgSrc": "icon:core/resource/card"
                            }
                        },
                        {
                            "type": "WebProductDescription",
                            "title": "WebProductDescription  With Image",
                            "description": "Description. College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem  Ipsum passage.",
                            "properties": {
                                "productImgType": "src",
                                "productImgSrc": "/stub/img/aeroflot-classic.png",
                                "productFeaturesReferenceId": "aeroflotBonusFeatures"
                            }
                        },
                        {
                            "type": "WebProductDescription",
                            "title": "WebProductDescription With Image collapsed",
                            "description": "Description. College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem  Ipsum passage.",
                            "properties": {
                                "productImgType": "src",
                                "productImgSrc": "/stub/img/aeroflot-classic.png",
                                "productFeaturesReferenceId": "aeroflotBonusFeatures",

                                // Новые свойства для 3.0
                                // С разделителем
                                divider: true,
                                // Скрываемый
                                collapsed: true,
                                // Картинка занимает больше пространства
                                imageFocus: false,
                                // Место размещения productImgSrc
                                productImgRoot: ''
                            }
                        },
                        {
                            "type": "WebProductDescription",
                            "title": "WebProductDescription With Image imageFocus",
                            "description": "Description. College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem  Ipsum passage.",
                            "properties": {
                                "productImgType": "src",
                                "productImgSrc": "/stub/img/aeroflot-classic.png",
                                "productFeaturesReferenceId": "aeroflotBonusFeatures",

                                // Новые свойства для 3.0
                                divider: true,
                                collapsed: false,
                                imageFocus: true,
                                productImgRoot: ''
                            }
                        },
                        {
                            "type": "WebProductDescription",
                            "title": "WebProductDescription с разными range",
                            "description": "Показываем отдельно от, отдельно до, или вместе от и до.",
                            "properties": {
                                "productFeaturesReferenceId": "halfRangeInfo"
                            }
                        }
                    ],
                    properties: {}
                }
            ],
            events: [],
            references: {
                "aeroflotBonusFeatures": {
                    "properties": {},
                    "items": [
                        {
                            "title": "Приветственные мили",
                            "value": "miles",
                            "properties": {
                                "type": "single",
                                "single": "500",
                                "unit": "миль"
                            }
                        },
                        {
                            "title": "Дополнительные мили",
                            "value": "miles.additional",
                            "properties": {
                                "type": "range",
                                "min": "0.5",
                                "max": "5",
                                "unit": "%",
                                "description": "в зависимости от суммы покупки"
                            }
                        }
                    ]
                },
                "halfRangeInfo": {
                    "properties": {},
                    "items": [
                        {
                            "title": "От скольки",
                            "value": "spasibo",
                            "properties": {
                                "type": "range",
                                "min": "0",
                                "unit": "%"
                            }
                        },
                        {
                            "title": "До скольки",
                            "value": "miles.additional",
                            "properties": {
                                "type": "range",
                                "max": "5",
                                "unit": "%"
                            }
                        },
                        {
                            "title": "От и До",
                            "value": "contactless",
                            "properties": {
                                "type": "range",
                                "min": "0",
                                "max": "5",
                                "unit": "%"
                            }
                        },
                    ]
                }
            }
        }

        var store = createStorybookStore()
    }


    <RendererWithReduxForm name={'WebProductDescription'} store={store} output={output} />
```

