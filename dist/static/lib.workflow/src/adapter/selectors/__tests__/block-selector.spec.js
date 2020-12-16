import { getBodyScreens, getFooterWidgets } from '..'

import {
    isWidgetVisible,
    getFilteredScreens,
    getScreensWithVisibleWidgets
} from '../general'

import {
    multiScreensWithWebUpcomingStep,
    multiScreensWithDocumentOverview,
    screenWithCoreStatusGroupWidgets
} from './fixtures/screens20'
import { screenWithDependantWidgets } from './fixtures/screen-with-visible-widgets'

describe('Adapter :: selectors', () => {

    let visibilityCache

    beforeEach(() => {
        visibilityCache = new WeakMap()
    })

    describe('general (фильтрация скринов)', () => {
        it('фильтрует (исключает) виджеты с coreStatusGroup', () => {
            const expected = [
                {
                    properties: {
                        coreStatus: true
                    },
                    header: [{
                        type: 'WebUpcomingStep',
                        properties: {
                            header: true
                        },
                        fields: []
                    }],
                    widgets: [{
                        type: 'CoreStatus',
                        title: 'Text',
                        properties: {
                            level: 'waiting',
                            timestamp: '2018-01-01T20:51:21+03',
                        },
                        fields: []
                    }, {
                        type: 'WebEvents',
                        title: 'Детали перевода',
                        fields: []
                    }],
                    footer: [{
                        type: 'WebUpcomingStep',
                        properties: {
                            footer: true
                        },
                        fields: []
                    }],
                }
            ]
            const screens = screenWithCoreStatusGroupWidgets

            const actual = getBodyScreens.resultFunc(screens)

            expect(actual).toEqual(expected)
        })
        it('фильтрует documentOverview скрин', () => {

            const expected = [
                {
                    title: 'Скрин 1',
                    description: 'Описание скрина 1',
                    widgets: [
                        {
                            type: 'FullName',
                            properties: {},
                            fields: [
                                {
                                    id: 'transfer:fullName:lastName',
                                    value: 'Парамонов',
                                    type: 'text',
                                    referenceId: 'swiftPurposes',
                                    title: 'Фамилия',
                                    validators: []
                                },
                                {
                                    id: 'transfer:fullName:firstName',
                                    value: 'Василий',
                                    type: 'text',
                                    referenceId: 'text',
                                    title: 'Имя',
                                    validators: []
                                }
                            ]
                        }
                    ],
                    properties: {}
                }
            ]

            const screens = multiScreensWithDocumentOverview

            const actual = getFilteredScreens.resultFunc(screens)

            expect(actual).toEqual(expected)
        })
        it('getVisibleWidgets возвращает истину', () => {

            const values = {
                'has:comission:checkbox': true
            }

            const widget = {
                type: 'CoreFieldset',
                title: 'Виджет, который отображается, если значение кода has:comission:checkbox истинно(возвращает истину припроверке регулярного выражения)',
                fields: [
                    {
                        id: 'comission:amount',
                        type: 'decimal',
                        title: 'сумма комиссии'
                    }
                ],
                visible: {
                    id: 'has:comission:checkbox',
                    regexp: 'true'
                }
            }

            const actual = isWidgetVisible(widget, values, screenWithDependantWidgets[0].widgets, visibilityCache)

            expect(actual).toBe(true)
        })
        it('isWidgetVisible возвращает ложь, если проверка по регулярному выражению ложна', () => {

            const values = {
                'has:comission:checkbox': false
            }

            const widget = {
                type: 'CoreFieldset',
                title: 'Виджет, который отображается, если значение кода has:comission:checkbox истинно(возвращает истину припроверке регулярного выражения)',
                fields: [
                    {
                        id: 'comission:amount',
                        type: 'decimal',
                        title: 'сумма комиссии'
                    }
                ],
                visible: {
                    id: 'has:comission:checkbox',
                    regexp: 'true'
                }
            }


            const actual = isWidgetVisible(widget, values, screenWithDependantWidgets[0].widgets, visibilityCache)

            expect(actual).toBe(false)
        })

        it('isWidgetVisible возвращает истину, если объект visible не передан', () => {

            const values = {
                'has:comission:checkbox': false
            }

            const widget = {
                type: 'CoreFieldset',
                title: 'Виджет, который отображается, если значение кода has:comission:checkbox истинно(возвращает истину припроверке регулярного выражения)',
                fields: [
                    {
                        id: 'comission:amount',
                        type: 'decimal',
                        title: 'сумма комиссии'
                    }
                ]
            }


            const actual = isWidgetVisible(widget, values, screenWithDependantWidgets[0].widgets, visibilityCache)

            expect(actual).toBe(true)
        })

        it('фильтрует виджеты, для которых проверка по условию visible.regexp истинно', () => {

            const values = {
                'has:comission:checkbox': true
            }

            const expected = [
                {
                    widgets: [
                        {
                            type: 'WebHeadline',
                            title: 'Виджет без полей',
                        },
                        {
                            type: 'CoreFieldset',
                            title: 'Виджет с управляющим чекбоксом',
                            fields: [
                                {
                                    id: 'has:comission:checkbox',
                                    type: 'checkbox',
                                    title: 'Комиссия включена?'
                                }
                            ]
                        },
                        {
                            type: 'CoreFieldset',
                            title: 'Виджет, который отображается, если значение кода has:comission:checkbox истинно(возвращает истину припроверке регулярного выражения)',
                            fields: [
                                {
                                    id: 'comission:amount',
                                    type: 'text',
                                    title: 'сумма комиссии'
                                }
                            ],
                            visible: {
                                id: 'has:comission:checkbox',
                                regexp: '^true$'
                            }
                        },
                        {
                            type: 'CoreFieldset',
                            title: 'Виджет, который отображается, если значение comission:amount равно 0 и поле comission:amount видимо',
                            fields: [
                                {
                                    id: 'comission:currency',
                                    type: 'text',
                                    title: 'валюта комиссии'
                                }
                            ],
                            visible: {
                                id: 'comission:amount',
                                regexp: '^0$'
                            }
                        }
                    ],
                    footer: [],
                    header: []
                }
            ]


            const actual = getBodyScreens.resultFunc(screenWithDependantWidgets, values)

            expect(actual).toEqual(expected)
        })
        it('фильтрует виджеты, для которых проверка по условия visible.regexp ложна', () => {

            const values = {
                'has:comission:checkbox': false
            }

            const stateName = 'state'
            const expected = [
                {
                    widgets: [
                        {
                            state: 'state',
                            title: 'Виджет без полей',
                            type: 'WebHeadline',
                        },
                        {
                            type: 'CoreFieldset',
                            title: 'Виджет с управляющим чекбоксом',
                            fields: [
                                {
                                    id: 'has:comission:checkbox',
                                    type: 'checkbox',
                                    title: 'Комиссия включена?'
                                }
                            ],
                            state: stateName
                        }
                    ],
                    header: [],
                    footer: []
                }
            ]

            const actual = getScreensWithVisibleWidgets.resultFunc(screenWithDependantWidgets, values, stateName)

            expect(actual).toEqual(expected)
        })

    })

    describe('getFooterWidgets', () => {
        it('возвращает список виджетов с типом WebUpcomingStep для всех экранов', () => {
            const expected = [
                {
                    type: 'WebUpcomingStep',
                    properties: {
                        abc: 4
                    },
                    fields: []
                },
                {
                    type: 'WebUpcomingStep',
                    properties: {
                        abc: 2
                    },
                    fields: []
                }
            ]

            const screens = multiScreensWithWebUpcomingStep

            const actual = getFooterWidgets.resultFunc(screens)
            expect(actual).toEqual(expected)

        })
    })
})
