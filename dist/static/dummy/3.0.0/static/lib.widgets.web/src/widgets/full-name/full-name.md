```js
    {
        const { createStorybookStore, RendererWithReduxForm } = require('provider')
        var output = {
            screens: [{
                title: 'WebFullName',
                description: '',
                widgets: [{
                        type: 'WebFullName',
                        properties: {},
                        fields: [
                            {
                                id: 'last:name',
                                value: '',
                                type: 'text',
                                title: 'Фамилия',
                                readonly: false,
                                tooltip: {
                                    title: 'Подсказка',
                                    contents: 'Подсказка'
                                },
                                validators: [{
                                    type: 'required',
                                    value: '',
                                    message: 'Обязательное поле, заполни плез'
                                }]
                            },
                            {
                                id: 'first:name',
                                value: '',
                                type: 'select',
                                title: 'Имя',
                                validators: [{
                                    type: 'required',
                                    value: '',
                                    message: 'Обязательное поле, заполни плез'
                                }]
                            },
                            {
                                id: 'middle:name',
                                value: '',
                                type: 'text',
                                title: 'Отчество',
                                validators: [{
                                    type: 'required',
                                    value: '',
                                    message: 'Обязательное поле, заполни плез'
                                }]
                            },
                            {
                                id: 'no:middle:name:checkbox',
                                value: 'false',
                                type: 'checkbox',
                                title: 'Нет отчества',
                                validators: []
                            }
                        ]
                    },
                    {
                        type: 'WebFullName',
                        properties: {},
                        title: 'WebFullName',
                        description: 'Readonly',
                        fields: [
                            {
                                id: 'last:name:readonly',
                                value: 'Петров',
                                readonly: true,
                                type: 'select',
                                title: 'Фамилия',
                                validators: []
                            },
                            {
                                id: 'first:name:readonly',
                                value: 'Петр',
                                readonly: true,
                                type: 'select',
                                title: 'Имя',
                                validators: []
                            },
                            {
                                id: 'middle:name:readonly',
                                value: 'Петрович',
                                readonly: true,
                                type: 'text',
                                title: 'Отчество',
                                validators: []
                            },
                            {
                                id: 'no:middle:name:checkbox:readonly',
                                value: 'false',
                                readonly: true,
                                type: 'checkbox',
                                title: 'Нет отчества',
                                validators: []
                            }
                        ]
                    },
                    {
                        type: 'WebFullName',
                        properties: {},
                        title: 'WebFullName',
                        description: 'Readonly & noMiddleName',
                        fields: [
                            {
                                id: 'last:name:readonly:2',
                                value: 'Петров',
                                readonly: true,
                                type: 'select',
                                title: 'Фамилия',
                                validators: []
                            },
                            {
                                id: 'first:name:readonly:2',
                                value: 'Петр',
                                readonly: true,
                                type: 'select',
                                title: 'Имя',
                                validators: []
                            },
                            {
                                id: 'middle:name:readonly:2',
                                value: '',
                                readonly: true,
                                type: 'text',
                                title: 'Отчество',
                                validators: []
                            },
                            {
                                id: 'no:middle:name:checkbox:readonly:2',
                                value: 'true',
                                readonly: true,
                                type: 'checkbox',
                                title: 'Нет отчества',
                                validators: []
                            }
                        ]
                    }

                ],
                properties: {}
            }],
            events: [],
            references: {}
        }

        var store = createStorybookStore()
        var references = output.references
        var widgets = output.screens[0].widgets
    }


    <RendererWithReduxForm name={'FullName'} store={store} output={output} />
```
