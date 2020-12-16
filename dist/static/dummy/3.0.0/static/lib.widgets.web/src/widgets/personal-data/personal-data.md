```js
    {
        const { createStorybookStore, RendererWithReduxForm } = require('provider')
        var output = {
            screens: [
                {
                    title: 'Widgets | WebPersonalDataSummary',
                    widgets: [
                        {
                            type: 'WebPersonalDataSummary',
                            title: 'Данные пользователя без свича (рекомендуемое использование)',
                            description: 'Виджет выстраивается в 2 колонки если есть properties -> twoColumn: true',
                            properties: {
                                twoColumn: true
                            },                       
                            fields: [
                                {
                                    id: 'personal:data:name',
                                    type: 'text',
                                    title: 'Вас зовут',
                                    value: 'Имя Отчество Ф.',
                                    readonly: true
                                },
                                {
                                    id: 'personal:data:passport',
                                    type: 'text',
                                    title: 'Паспортные данные',
                                    value: '1234 ••••90, отдел УФМС России, 19.04.1986, 123-456 ',
                                    readonly: false
                                },
                                {
                                    id: 'personal:data:phone',
                                    type: 'text',
                                    title: 'Мобильный телефон',
                                    value: '+7 901 ••• 11-22'
                                },
                                {
                                    id: 'personal:data:phone',
                                    type: 'text',
                                    title: 'Мобильный телефон',
                                    value: '+7 901 ••• 11-22'
                                }
                            ]
                        },
                        {
                            type: 'WebPersonalDataSummary',
                            title: 'Данные пользователя без свича (рекомендуемое использование)',
                            properties: {
                                borderBottom: true,
                            },                       
                            fields: [
                                {
                                    id: 'personal:data:name',
                                    type: 'text',
                                    title: 'Вас зовут',
                                    value: 'Имя Отчество Ф.',
                                    readonly: true
                                },
                                {
                                    id: 'personal:data:passport',
                                    type: 'text',
                                    title: 'Паспортные данные',
                                    value: '1234 ••••90, отдел УФМС России, 19.04.1986, 123-456 ',
                                    readonly: false
                                },
                                {
                                    id: 'personal:data:phone',
                                    type: 'text',
                                    title: 'Мобильный телефон',
                                    value: '+7 901 ••• 11-22'
                                },
                                {
                                    id: 'personal:data:phone',
                                    type: 'text',
                                    title: 'Серая граница снизу рисуется если есть properties -> bottomBorder: true',
                                    value: ''
                                }
                            ]
                        },
                        {  
                            type: 'WebPersonalDataSummary',
                            properties: {
                                borderBottom: true
                            },                       
                            fields: [
                                {
                                    id: 'personal:data:name',
                                    type: 'text',
                                    title: 'Вас зовут',
                                    value: 'Имя Отчество Ф.',
                                    readonly: true
                                },
                                {
                                    id: 'personal:data:passport',
                                    type: 'text',
                                    title: 'Паспортные данные',
                                    value: '1234 ••••90, отдел УФМС России, 19.04.1986, 123-456 ',
                                    readonly: false
                                },
                                {
                                    id: 'personal:data:phone',
                                    type: 'text',
                                    title: 'Мобильный телефон',
                                    value: '+7 901 ••• 11-22'
                                },
                              
                            ]
                        },
                        {
                            type: 'WebPersonalDataSummary',
                            title: 'Данные пользователя со встроенным свичом (deprecated!! Уберем в версии 2, если нужен со свичом, использовать format:switch, по нему показывать ProcessAlert, пример есть в lib.workflow)',
                            properties: {
                                tooltipTitle: 'Мои данные изменились',
                                tooltipContents: 'Текст предупреждения',
                                switchFieldName: 'switch:personal:data'
                            },
                            description: 'My Personal Data Summary',
                            fields: [
                                {
                                    id: 'personal:data:name',
                                    type: 'text',
                                    title: 'Вас зовут',
                                    value: 'Имя Отчество Ф.',
                                    readonly: true
                                },
                                {
                                    id: 'personal:data:passport',
                                    type: 'text',
                                    title: 'Паспортные данные',
                                    value: '1234 ••••90, отдел УФМС России, 19.04.1986, 123-456 ',
                                    readonly: false
                                },
                                {
                                    id: 'personal:data:phone',
                                    type: 'text',
                                    title: 'Мобильный телефон',
                                    value: '+7 901 ••• 11-22'
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


    <RendererWithReduxForm name={'FullName'} store={store} output={output} />
```
