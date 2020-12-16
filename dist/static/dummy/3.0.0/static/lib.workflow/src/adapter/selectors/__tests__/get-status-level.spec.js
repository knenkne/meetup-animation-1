import { getStatusLevel } from '..'

describe('Adapter :: selectors', () => {
    describe('getStatusLevel', () => {
        it('возвращает статус процесса done для виджета WebStatusHeadline', () => {
            const expected = 'done'

            const state = {
                workflow: {
                    screens: [
                        {
                            widgets: [
                                {
                                    type: 'WebStatusHeadline',
                                    title: 'Заявка одобрена',
                                    properties: {
                                        level: 'done'
                                    },
                                    fields: []
                                }
                            ]
                        }
                    ]
                }
            }

            const actual = getStatusLevel(state)
            expect(actual).toBe(expected)
        })

        it('возвращает статус процесса done для виджета WebStatus', () => {
            const expected = 'done'

            const state = {
                workflow: {
                    screens: [
                        {
                            widgets: [
                                {
                                    type: 'WebStatus',
                                    title: 'Заявка одобрена',
                                    properties: {
                                        level: 'done'
                                    },
                                    fields: []
                                }
                            ]
                        }
                    ]
                }
            }

            const actual = getStatusLevel(state)
            expect(actual).toBe(expected)
        })

        it('возвращает статус процесса done для виджета CoreStatusHeadline', () => {
            const expected = 'done'

            const state = {
                workflow: {
                    screens: [
                        {
                            widgets: [
                                {
                                    type: 'CoreStatusHeadline',
                                    title: 'Заявка одобрена',
                                    properties: {
                                        level: 'done'
                                    },
                                    fields: []
                                }
                            ]
                        }
                    ]
                }
            }

            const actual = getStatusLevel(state)
            expect(actual).toBe(expected)
        })

        it('возвращает статус процесса done для виджета CoreStatus', () => {
            const expected = 'done'

            const state = {
                workflow: {
                    screens: [
                        {
                            widgets: [
                                {
                                    type: 'CoreStatus',
                                    title: 'Заявка одобрена',
                                    properties: {
                                        level: 'done'
                                    },
                                    fields: []
                                }
                            ]
                        }
                    ]
                }
            }

            const actual = getStatusLevel(state)
            expect(actual).toBe(expected)
        })

        it('не возвращает статус процесса для виджета CoreFieldset', () => {
            const expected = void 0

            const state = {
                workflow: {
                    screens: [
                        {
                            widgets: [
                                {
                                    type: 'CoreFieldset',
                                    title: 'Заявка одобрена',
                                    properties: {
                                        level: 'done'
                                    },
                                    fields: []
                                }
                            ]
                        }
                    ]
                }
            }

            const actual = getStatusLevel(state)
            expect(actual).toBe(expected)
        })
    })
})
