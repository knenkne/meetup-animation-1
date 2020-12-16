import { getDwwOffset } from '../get-dww-offset'

describe('Selectors: getDwwOffset', () => {
    it.only('should return outer-offset-top-lg2 for WebFastActions widget', () => {
        const state = {
            workflow: {
                process: {},
                status: {},
                document: {},
                screens: [
                    {
                        header: [],
                        widgets: [
                            {
                                type: 'WebFastActions',
                                widgetIndex: 0,
                                screenIndex: 0,
                                properties: {
                                    reference: 'fastActions'
                                }
                            }
                        ]
                    }
                ],
                progress: {},
                references: {},
                history: [],
                error: {},
                messages: [],
                subFlow: {}
            }
        }
        const props = {
            screenIndex: 0,
            widgetIndex: 0,
            structurePosition: 'body',
        }

        expect(getDwwOffset(state, props)).toEqual('outer-offset-top-lg2')
    })

    it('should return offset-md for second CoreButtons widget', () => {
        const state = {
            form: {},
            workflow: {
                process: {},
                status: {},
                document: {},
                screens: [
                    {
                        header: [],
                        widgets: [
                            {
                                type: 'CoreFieldset',
                                description: 'Поле, обязательное для заполнения',
                                fields: [
                                    {
                                        type: 'text',
                                        value: '',
                                        id: 'one',
                                        validators: [
                                            {
                                                type: 'required',
                                                value: '',
                                                message: 'Обязательное поле!!'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'CoreButtons',
                                description: 'Обе кнопки зеленые потому что есть style: accept',
                                properties: {
                                    validation: true
                                },
                                events: []
                            },
                            {
                                type: 'CoreButtons',
                                events: []
                            }
                        ]
                    }
                ],
                progress: {},
                references: {},
                history: [],
                error: {},
                messages: [],
                subFlow: {}
            }
        }
        const props = {
            properties: {},
            fields: [],
            references: {},
            events: [],
            eventsActions: {},
            title: '',
            description: '',
            readonly: false,
            screenIndex: 0,
            widgetIndex: 2,
            state: 'step1',
            structurePosition: 'body',
            isLoading: false,
        }

        expect(getDwwOffset(state, props)).toEqual('offset-md')
    })

    it('should return empty string for widget without any exceptions', () => {
        const state = {
            workflow: {
                process: {},
                status: {},
                document: {},
                screens: [
                    {
                        header: [],
                        widgets: [
                            {
                                type: 'WebStatusHeadline',
                                title: 'Спасибо, услуга оформлена',
                                properties: {
                                    level: 'done'
                                }
                            }
                        ]
                    }
                ],
                progress: {},
                references: {},
                history: [],
                error: {},
                messages: [],
                subFlow: {}
            }
        }
        const props = {
            screenIndex: 0,
            widgetIndex: 0,
            structurePosition: 'body',
        }

        expect(getDwwOffset(state, props)).toEqual('')
    })
})
