import { hasSingleScreen, getModifiedScreens } from '..'

describe('Adapter :: selectors', () => {
    describe('hasSingleScreen', () => {
        it('возвращает true, если один экран', () => {
            const expected = true

            const screens = [{}]
            const actual = hasSingleScreen.resultFunc(screens)
            expect(actual).toEqual(expected)
        })
        it('возвращает false, если больше одного экрана', () => {
            const expected = false

            const screens = [{}, {}]
            const actual = hasSingleScreen.resultFunc(screens)
            expect(actual).toEqual(expected)
        })
    })
    describe('getModifiedScreens', () => {
        it('возвращает массив экранов с наполненными данными', () => {

            const stateName = 'firstState'
            const screens = [
                {
                    title: 'Title',
                    description: 'Description',
                    widgets: [
                        {
                            type: 'CoreFieldset',
                            properties: {},
                            fields: [
                                {
                                    id: 'field:one',
                                    readonly: false,
                                    value: '',
                                    type: 'text',
                                    title: 'Фамилия',
                                    validators: []
                                },
                                {
                                    id: 'field:two',
                                    readonly: false,
                                    value: '',
                                    type: 'text',
                                    title: 'Имя',
                                    validators: []
                                }
                            ],
                            state: 'firstState',
                            widgetIndex: 0,
                            screenIndex: 0,
                        },
                        {
                            type: 'CoreFieldset',
                            properties: {},
                            fields: [
                                {
                                    id: 'field:three',
                                    readonly: false,
                                    value: 'true',
                                    type: 'checkbox',
                                    title: '',
                                    validators: []
                                }
                            ],
                            state: 'firstState',
                            widgetIndex: 1,
                            screenIndex: 0,
                        }
                    ],
                    properties: {}
                },
                {
                    title: 'Title2',
                    description: 'Description2',
                    widgets: [
                        {
                            type: 'CoreFieldset',
                            readonly: true,
                            properties: {},
                            fields: [
                                {
                                    id: 'field:four',
                                    value: '',
                                    type: 'text',
                                    title: 'Фамилия',
                                    validators: []
                                }
                            ],
                            state: 'firstState',
                            widgetIndex: 0,
                            screenIndex: 1
                        }
                    ],
                    properties: {}
                }
            ]

            const expected = [
                {
                    title: 'Title',
                    description: 'Description',
                    widgets: [
                        {
                            type: 'CoreFieldset',
                            readonly: false,
                            properties: {},
                            fields: [
                                {
                                    id: 'field:one',
                                    readonly: false,
                                    value: '',
                                    type: 'text',
                                    title: 'Фамилия',
                                    validators: []
                                },
                                {
                                    id: 'field:two',
                                    readonly: false,
                                    value: '',
                                    type: 'text',
                                    title: 'Имя',
                                    validators: []
                                }
                            ],
                            state: stateName,
                            widgetIndex: 0,
                            screenIndex: 0
                        },
                        {
                            type: 'CoreFieldset',
                            readonly: false,
                            properties: {},
                            fields: [
                                {
                                    id: 'field:three',
                                    readonly: false,
                                    value: 'true',
                                    type: 'checkbox',
                                    title: '',
                                    validators: []
                                }
                            ],
                            state: stateName,
                            widgetIndex: 1,
                            screenIndex: 0
                        }
                    ],
                    footer: [],
                    header: [],
                    properties: {}
                },
                {
                    title: 'Title2',
                    description: 'Description2',
                    widgets: [
                        {
                            type: 'CoreFieldset',
                            readonly: true,
                            properties: {},
                            fields: [
                                {
                                    id: 'field:four',
                                    value: '',
                                    type: 'text',
                                    readonly: true,
                                    title: 'Фамилия',
                                    validators: []
                                }
                            ],
                            state: stateName,
                            widgetIndex: 0,
                            screenIndex: 1
                        }
                    ],
                    footer: [],
                    header: [],
                    properties: {}
                }

            ]

            const actual = getModifiedScreens.resultFunc(screens, stateName)
            expect(actual).toEqual(expected)
        })
    })
})
