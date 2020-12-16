import screensReducer, { enhancedScreens } from '../slice-reducers/screens-reducer'
import { changeWidgetVisibility } from '../../actions/actions'
import { SCREEN_PARTS } from '../../../builder/components/structure/const'
import { mockScreensWithIndex } from './fixtures/mock-screens-with-index'

const screens = [
    {
        title: 'Способ получения полиса',
        header: [
            {
                type: 'WebSummary',
                fields: [
                    {
                        id: 'radio',
                        type: 'text',
                        value: 'print',
                    },
                ]
            }
        ],
        widgets: [
            {
                type: 'CoreFieldset',
                fields: [
                    {
                        id: 'radio',
                        type: 'select',
                        value: 'print',
                        format: 'radio',
                        referenceId: 'radioRefs'
                    },
                ]
            },
            {
                type: 'CoreFieldset',
                fields: [
                    {
                        id: 'switch',
                        type: 'checkbox',
                        format: 'switch',
                        title: 'Мой email изменился'
                    }
                ]
            },
            {
                type: 'CoreFieldset',
                fields: [
                    {
                        id: 'checkbox',
                        type: 'checkbox',
                        format: 'checkbox',
                        title: 'Я даю согласие'
                    }
                ]
            },
            {
                type: 'CoreButtons',
                hiddenByStrategy: true,
                events: [
                    {
                        cmd: 'EVENT',
                        name: 'next',
                        title: 'Продолжить'
                    },
                ]
            }
        ],
        footer: [
            {
                type: 'CoreFieldset',
                fields: [
                    {
                        id: 'radio',
                        type: 'select',
                        value: 'print',
                        format: 'radio',
                        referenceId: 'radioRefs'
                    },
                ]
            }
        ]
    },
    {
        widgets: [
            {
                type: 'CoreFieldset',
                fields: [
                    {
                        id: 'radio: 2',
                        type: 'select',
                        value: 'print',
                        format: 'radio',
                        referenceId: 'radioRefs'
                    },
                ]
            },
        ]
    }
]

describe('Adapter:: reducer:: screenReducer', () => {
    test(':: enhancedScreens It should add widgetIndex and screenIndex to all widgets in response', () => {
        const screensWithIndex = [
            {
                title: 'Способ получения полиса',
                header: [
                    {
                        type: 'WebSummary',
                        screenIndex: 0,
                        widgetIndex: 0,
                        fields: [
                            {
                                id: 'radio',
                                type: 'text',
                                value: 'print',
                            },
                        ]
                    }
                ],
                widgets: [
                    {
                        type: 'CoreFieldset',
                        screenIndex: 0,
                        widgetIndex: 0,
                        fields: [
                            {
                                id: 'radio',
                                type: 'select',
                                value: 'print',
                                format: 'radio',
                                referenceId: 'radioRefs'
                            },
                        ]
                    },
                    {
                        type: 'CoreFieldset',
                        screenIndex: 0,
                        widgetIndex: 1,
                        fields: [
                            {
                                id: 'switch',
                                type: 'checkbox',
                                format: 'switch',
                                title: 'Мой email изменился'
                            }
                        ]
                    },
                    {
                        type: 'CoreFieldset',
                        screenIndex: 0,
                        widgetIndex: 2,
                        fields: [
                            {
                                id: 'checkbox',
                                type: 'checkbox',
                                format: 'checkbox',
                                title: 'Я даю согласие'
                            }
                        ]
                    },
                    {
                        type: 'CoreButtons',
                        screenIndex: 0,
                        widgetIndex: 3,
                        events: [
                            {
                                cmd: 'EVENT',
                                name: 'next',
                                title: 'Продолжить'
                            },
                        ]
                    }
                ],
                footer: [
                    {
                        type: 'CoreFieldset',
                        screenIndex: 0,
                        widgetIndex: 0,
                        fields: [
                            {
                                id: 'radio',
                                type: 'select',
                                value: 'print',
                                format: 'radio',
                                referenceId: 'radioRefs'
                            },
                        ]
                    }
                ]
            },
            {
                widgets: [
                    {
                        type: 'CoreFieldset',
                        screenIndex: 1,
                        widgetIndex: 0,
                        fields: [
                            {
                                id: 'radio: 2',
                                type: 'select',
                                value: 'print',
                                format: 'radio',
                                referenceId: 'radioRefs'
                            },
                        ]
                    },
                ],
            }
        ]
        expect(enhancedScreens(mockScreensWithIndex)).toEqual(screensWithIndex)
    })

    test('It should add hiddenByStrategy: true for visible widget on action.types === CHANGE_WIDGET_VISIBILITY', () => {
        const action = changeWidgetVisibility({ screenIndex: 0, screenPart: SCREEN_PARTS.widgets, widgetIndex: 3, hiddenByStrategy: true })
        expect(screensReducer(mockScreensWithIndex, action)).toEqual(screens)
    })

    test('It should add hiddenByStrategy: false for hiddenByStrategy widget on action === CHANGE_WIDGET_VISIBILITY', () => {
        const expected = [
            {
                title: 'Способ получения полиса',
                header: [
                    {
                        type: 'WebSummary',
                        fields: [
                            {
                                id: 'radio',
                                type: 'text',
                                value: 'print',
                            },
                        ]
                    }
                ],
                widgets: [
                    {
                        type: 'CoreFieldset',
                        fields: [
                            {
                                id: 'radio',
                                type: 'select',
                                value: 'print',
                                format: 'radio',
                                referenceId: 'radioRefs'
                            },
                        ]
                    },
                    {
                        type: 'CoreFieldset',
                        fields: [
                            {
                                id: 'switch',
                                type: 'checkbox',
                                format: 'switch',
                                title: 'Мой email изменился'
                            }
                        ]
                    },
                    {
                        type: 'CoreFieldset',
                        fields: [
                            {
                                id: 'checkbox',
                                type: 'checkbox',
                                format: 'checkbox',
                                title: 'Я даю согласие'
                            }
                        ]
                    },
                    {
                        type: 'CoreButtons',
                        hiddenByStrategy: false,
                        events: [
                            {
                                cmd: 'EVENT',
                                name: 'next',
                                title: 'Продолжить'
                            },
                        ]
                    }
                ],
                footer: [
                    {
                        type: 'CoreFieldset',
                        fields: [
                            {
                                id: 'radio',
                                type: 'select',
                                value: 'print',
                                format: 'radio',
                                referenceId: 'radioRefs'
                            },
                        ]
                    }
                ]
            },
            {
                widgets: [
                    {
                        type: 'CoreFieldset',
                        fields: [
                            {
                                id: 'radio: 2',
                                type: 'select',
                                value: 'print',
                                format: 'radio',
                                referenceId: 'radioRefs'
                            },
                        ]
                    },
                ]
            }
        ]
        const action = changeWidgetVisibility({ screenIndex: 0, screenPart: SCREEN_PARTS.widgets, widgetIndex: 3, hiddenByStrategy: false })
        expect(screensReducer(screens, action)).toEqual(expected)

    })

})
