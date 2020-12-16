```jsx
    {
        const { createStorybookStore, RendererWithReduxForm } = require('provider')
        var output = {
            screens: [
                {
                    widgets: [
                        {
                            "type": "WebStatusHeadline",
                            "title": "Дождитесь обработки операции",
                            "properties": {
                                "level": "waiting"
                            }
                        },
                        {
                            type: 'WebFastActions',
                            properties: {
                                reference: 'fastActions'
                            }
                        },
                    ],
                },
            ],
            events: [],
            references: {
                fastActions: {
                    items: [
                        {
                            value: 'reload',
                            title: 'Перезагрузить страницу',
                            properties: {
                                icon: 'icon:core/product-status/reload'
                            }
                        },
                        {
                            value: 'alert',
                            title: 'Сделать алерт',
                            properties: {
                                icon: 'icon:core/products/loan-auto'
                            }
                        },
                        {
                            value: 'link',
                            title: 'Перейти на Госуслуги',
                            properties: {
                                icon: 'icon:core/cars/lamborghini',
                                href: 'http://gosuslugi.ru/',
                                external: true,
                            }
                        },
                        {
                            value: 'timer',
                            title: 'ПУСК!',
                            properties: {
                                description: 'Кнопка будет доступна после окончания таймера',
                                icon: 'icon:core/products/target-holidays',
                                type: 'timer',
                                initialTimer: '60',
                                timer: '120',
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

    <RendererWithReduxForm name={'WebFastActions'} store={store} output={output} />
```

```jsx
    {
        const { createStorybookStore, RendererWithReduxForm } = require('provider')
        var output = {
            screens: [
                {

                    widgets: [
                        {
                        type: "WebHeadline",
                        title: "Не на статусном экране можно передавать фон иконки"
                       },
                        {
                            type: 'WebFastActions',
                            properties: {
                                reference: 'fastActions'
                            }
                        },
                    ],
                },
            ],
            events: [],
            references: {
                fastActions: {
                    items: [
                        {
                            value: 'reload',
                            title: 'Перезагрузить страницу',
                            properties: {
                                icon: 'icon:core/product-status/reload',
                                colorScheme: 'green'
                            }
                        },
                        {
                            value: 'alert',
                            title: 'Сделать алерт',
                            properties: {
                                icon: 'icon:core/products/loan-auto',
                                colorScheme: 'sky-blue'
                            }
                        },
                        {
                            value: 'link',
                            title: 'Перейти на Госуслуги',
                            properties: {
                                icon: 'icon:core/cars/lamborghini',
                                href: 'http://gosuslugi.ru/',
                                external: true,
                                colorScheme: 'yellow'
                            }
                        },
                        {
                            value: 'timer',
                            title: 'ПУСК!',
                            properties: {
                                description: 'Кнопка будет доступна после окончания таймера',
                                icon: 'icon:core/products/target-holidays',
                                type: 'timer',
                                initialTimer: '60',
                                timer: '120',
                                colorScheme: 'black'
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

    <RendererWithReduxForm name={'WebFastActions'} store={store} output={output}/>
```
