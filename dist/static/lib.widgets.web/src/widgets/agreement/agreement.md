```js
    {
        const { createStorybookStore, RendererWithReduxForm, stubRequest } = require('provider')
        var output = {
            document: {
                documentId: '1519829956448'
            },
            screens: [
                {
                    title: 'Виджет WebAgreement',
                    widgets: [
                        {
                            type: 'WebAgreement',
                            title: 'WebAgreement: Несколько документов',
                            description: 'pdf, md и требуется просмотр всех документов',
                            properties: {},
                            fields: [
                                {
                                    id: 'agreement',
                                    value: 'false',
                                    type: 'checkbox',
                                    referenceId: 'agreement',
                                    title: 'Я согласен',
                                    validators: [
                                        {
                                            type: 'required',
                                            value: 'true',
                                            message: 'Вы не согласились с лицензионным соглашением'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            type: 'WebAgreement',
                            title: 'WebAgreement: Только один документ Markdown',
                            properties: {},
                            fields: [
                                {
                                    id: 'agreementOnly',
                                    value: 'false',
                                    type: 'checkbox',
                                    referenceId: 'agreementOnly',
                                    title: 'Я согласен',
                                    validators: [
                                        {
                                            type: 'required',
                                            value: 'true',
                                            message: 'Вы не согласились с лицензионным соглашением'
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    properties: {}
                }
            ],
            events: [],
            references: {
                agreementOnly: {
                    properties: {
                        requireVisitAll: false
                    },
                    items: [{
                        title: 'Документ в формате MD 3',
                        value: 'agreement-md-3',
                        properties: {
                            format: 'md',
                            src: '/api/dictionaries/agreement'
                        }
                    }]
                },
                agreement: {
                    properties: {
                        requireVisitAll: true
                    },
                    items: [{
                        title: 'Документ в формате PDF 1',
                        value: 'agreement-pdf-1',
                        properties: {
                            format: 'pdf',
                            src: 'http://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf'
                        }
                    }, {
                        title: 'Документ в формате PDF 2',
                        value: 'agreement-pdf-2',
                        properties: {
                            format: 'pdf',
                            src: 'http://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf'
                        }
                    }, {
                        title: 'Документ в формате MD 1',
                        value: 'agreement-md-1',
                        properties: {
                            format: 'md',
                            src: 'https://github.com/facebook/react/blob/master/README.md'
                        }
                    }, {
                        title: 'Документ в формате MD 2',
                        value: 'agreement-md-2',
                        properties: {
                            format: 'md',
                            src: 'https://github.com/mozilla/pdf.js/blob/master/README.md'
                        }
                    }]
                }
            }
        }

        // STUB SERVER

        var stubMdResponse = {
            status: 200,
            data: {
                agreement: '# MD agreement\n\nПараграф 1\n\nПараграф 2\n\n+ Пункт 1\n+ Пункт 2'
            }
        }

        stubRequest('/api/dictionaries/agreement', stubMdResponse, 1000)

        var store = createStorybookStore()
        var references = output.references
        var widgets = output.screens[0].widgets
    }


    <RendererWithReduxForm name={'WebAgreement'} store={store} output={output} />

```
