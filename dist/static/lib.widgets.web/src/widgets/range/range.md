```js
    {
        const { createStorybookStore, RendererWithReduxForm } = require('provider')
        var output = {
            screens: [
                {
                    title: 'WebRange',
                    widgets: [
                        {
                            type: 'WebRange',
                            title: 'Widgets | WebRange',
                            description: 'Default state',
                            properties: {
                                minValue: 1,
                                maxValue: 10500
                            },
                            fields: [
                                {
                                    id: 'credit:sum',
                                    value: '2000',
                                    type: 'text',
                                    title: 'Выбор суммы вклада',
                                    description: 'Выбери число от 1 до 10 500'
                                }
                            ]
                        },
                        {
                            type: 'WebRange',
                            properties: {
                                minValue: 1,
                                maxValue: 10500,
                                suffix: '%'
                            },
                            fields: [
                                {
                                    id: 'credit:percent',
                                    value: '15',
                                    type: 'text',
                                    title: 'Процент зачисления',
                                    validators: [
                                        {
                                            type: 'minValue',
                                            value: '8',
                                            message: 'Минимум 8%'
                                        },
                                        {
                                            type: 'maxValue',
                                            value: '90',
                                            message: 'Максимум 90%'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            type: 'WebRange',
                            title: 'Widgets | WebRange',
                            description: 'readonly',
                            properties: {
                                minValue: 1,
                                maxValue: 10500
                            },
                            fields: [
                                {
                                    id: 'credit:sum:readonly',
                                    value: '2000',
                                    type: 'text',
                                    title: 'Выбор суммы вклада',
                                    readonly: true,
                                    validators: [
                                        {
                                            type: 'minValue',
                                            value: '1',
                                            message: 'Минимум 1 руб.'
                                        },
                                        {
                                            type: 'maxValue',
                                            value: '10500',
                                            message: 'Максимум 10 500 руб.'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                             type: 'WebRange',
                             title: 'Widgets | WebRange',
                             description: 'customized',
                             properties: {
                                 size: 'large',
                                 allowDecimal: true,
                                 prefix: '',
                                 suffix: ' ₽',
                                 minValue: 1,
                                 maxValue: 10500
                             },
                             fields: [
                                 {
                                     id: 'credit:sum:customized',
                                     value: '2000',
                                     type: 'text',
                                     title: 'Выбор суммы вклада',
                                     validators: [
                                         {
                                             type: 'minValue',
                                             value: '-1000',
                                             message: 'Минимум 1 руб.'
                                         },
                                         {
                                             type: 'maxValue',
                                             value: '10500',
                                             message: 'Максимум 10 500 руб.'
                                         }
                                     ]
                                 }
                             ]
                         },
                         {
                            type: 'WebRange',
                            title: 'Widgets | WebRange',
                            description: 'with grid',
                            properties: {
                                minValue: 1,
                                maxValue: 10500,
                                grid: ['1', '5', '10', '50', '100', '500', '1000', '5000', '10500']
                            },
                            fields: [
                                {
                                    id: 'credit:sum:grid',
                                    value: '2000',
                                    type: 'text',
                                    title: 'Выбор суммы вклада'
                                }
                            ]
                        },
                    ],
                    properties: {}
                }
            ],
            events: [],
            references: {}
        }

        var store = createStorybookStore()
        var references = output.references
        var widgets = output.screens[0].widgets
    }

    <RendererWithReduxForm name={'WebRange'} store={store} output={output} />
```
