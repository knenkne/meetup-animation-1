import { getReferenceByReferenceId } from '../'

describe('Adapter :: selectors', () => {
    describe('getReferenceByReferenceId', () => {
        const references = {
            first: {
                properties: {
                    someProperty: true
                },
                items: [
                    {
                        value: 'value',
                        title: 'title'
                    },
                    {
                        value: 'otherValue',
                        title: 'otherTitle',
                        properties: {
                            someItemProperty: 'someItemProperty'
                        }
                    }
                ]
            },
            second: {
                properties: {}
            }
        }

        it('возвращает объект', () => {
            const expected = 'object'
            const actual = typeof getReferenceByReferenceId.resultFunc(references)

            expect(actual).toBe(expected)
        })

        it('возвращает пустой объект, если справочник по id не найден', () => {
            const expected = {}
            const actual = getReferenceByReferenceId.resultFunc(references, 'third')

            expect(actual).toEqual(expected)
        })

        it('возвращает пустой объект, если id не передан', () => {
            const expected = {}
            const actual = getReferenceByReferenceId.resultFunc(references)

            expect(actual).toEqual(expected)
        })

        it('возвращает объект справочника по id', () => {
            const expected = {
                properties: {
                    someProperty: true
                },
                items: [
                    {
                        value: 'value',
                        title: 'title'
                    },
                    {
                        value: 'otherValue',
                        title: 'otherTitle',
                        properties: {
                            someItemProperty: 'someItemProperty'
                        }
                    }
                ]
            }
            const actual = getReferenceByReferenceId.resultFunc(references, 'first')

            expect(actual).toEqual(expected)
        })
        it('не осуществляет повторный вызов тела селектора, если справочники и id не изменился', () => {
            let state = {
                workflow: {}
            }

            const SINGLE_COMPUTATION = 1
            const DOUBLE_COMPUTATION = 2
            const TRIPLE_COMPUTATION = 3

            expect(getReferenceByReferenceId(state, 'first')).toEqual({})
            expect(getReferenceByReferenceId.recomputations()).toBe(SINGLE_COMPUTATION)

            expect(getReferenceByReferenceId(state, 'second')).toEqual({})
            expect(getReferenceByReferenceId.recomputations()).toBe(DOUBLE_COMPUTATION)


            state = {
                workflow: {
                    references
                }
            }

            expect(getReferenceByReferenceId(state, 'first')).toEqual({
                properties: {
                    someProperty: true
                },
                items: [
                    {
                        value: 'value',
                        title: 'title'
                    },
                    {
                        value: 'otherValue',
                        title: 'otherTitle',
                        properties: {
                            someItemProperty: 'someItemProperty'
                        }
                    }
                ]
            })

            expect(getReferenceByReferenceId(state, 'first')).toEqual({
                properties: {
                    someProperty: true
                },
                items: [
                    {
                        value: 'value',
                        title: 'title'
                    },
                    {
                        value: 'otherValue',
                        title: 'otherTitle',
                        properties: {
                            someItemProperty: 'someItemProperty'
                        }
                    }
                ]
            })

            expect(getReferenceByReferenceId.recomputations()).toBe(TRIPLE_COMPUTATION)
        })
    })
})
