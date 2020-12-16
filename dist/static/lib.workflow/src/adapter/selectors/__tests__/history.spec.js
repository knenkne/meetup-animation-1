import { getHistory, getActiveProcessSteps, getActiveProcessStepIDs } from '../'

import { history } from './fixtures/history'

describe('Adapter :: selectors', () => {
    const state = {
        workflow: {
            history: []
        }
    }
    describe('getHistory возвращает', () => {
        it('все элементы истории ', () => {
            state.workflow.history = history.historyAll3Active

            const expected = [
                {
                    id: '25ee2dfa-2913-4535-941b-a03419bfc0c4',
                    flow: 'process',
                    state: 'third',
                    title: 'третий',
                    status: 'ACTIVE'
                },
                {
                    id: '62e6b9a3-a940-4743-af4b-4db194b44491',
                    flow: 'process',
                    state: 'second',
                    title: 'второй',
                    status: 'ACTIVE'
                },
                {
                    id: 'e40780e0-b093-4d32-ad56-1307f7564e89',
                    flow: 'process',
                    state: 'first',
                    title: 'первый',
                    status: 'ACTIVE'
                }
            ]

            const actual = getHistory(state)

            expect(actual).toEqual(expected)
        })
    })
    describe('getActiveProcessSteps возвращает все элементы истории с признаком ACTIVE,', () => {
        it('если все элементы имеют признак status = ACTIVE', () => {
            const expected = [
                {
                    id: '25ee2dfa-2913-4535-941b-a03419bfc0c4',
                    flow: 'process',
                    state: 'third',
                    title: 'третий',
                    status: 'ACTIVE'
                },
                {
                    id: '62e6b9a3-a940-4743-af4b-4db194b44491',
                    flow: 'process',
                    state: 'second',
                    title: 'второй',
                    status: 'ACTIVE'
                },
                {
                    id: 'e40780e0-b093-4d32-ad56-1307f7564e89',
                    flow: 'process',
                    state: 'first',
                    title: 'первый',
                    status: 'ACTIVE'
                }
            ]

            const actual = getActiveProcessSteps.resultFunc(history.historyAll3Active)

            expect(actual).toEqual(expected)
        })
        it('если, в истории есть элементы, не содержащие ACTIVE', () => {
            const expected = [
                {
                    id: '25ee2dfa-2913-4535-941b-a03419bfc0c4',
                    flow: 'process',
                    state: 'third',
                    title: 'третий',
                    status: 'ACTIVE'
                },
                {
                    id: '62e6b9a3-a940-4743-af4b-4db194b44491',
                    flow: 'process',
                    state: 'second',
                    title: 'второй',
                    status: 'ACTIVE'
                }
            ]

            const actual = getActiveProcessSteps.resultFunc(history.historyWithDisabled)

            expect(actual).toEqual(expected)
        })
        it('если, в истории есть элементы, содержащие признаки status HIDDEN, DISABLED', () => {
            const expected = [
                {
                    id: '23423f-2913-4535-941b-3242fsdf3435',
                    flow: 'process',
                    state: 'sixth',
                    title: 'шестой',
                    status: 'ACTIVE'
                },
                {
                    id: '25ee2dfa-2913-4535-941b-a03419bfc0c4',
                    flow: 'process',
                    state: 'fifth',
                    title: 'пятый',
                    status: 'ACTIVE'
                },
                {
                    id: '25ee2dfa-2913-4535-941b-a03419bfc0c4',
                    flow: 'process',
                    state: 'fourth',
                    title: 'четвертый',
                    status: 'ACTIVE'
                },
            ]

            const actual = getActiveProcessSteps.resultFunc(history.historyWithDisabledAndHidden)

            expect(actual).toEqual(expected)
        })
    })
    describe('getActiveProcessStepIDs возвращает все ID элементов истории с признаком ACTIVE', () => {
        it('если все элементы имеют признак status = ACTIVE', () => {
            const expected = [
                '25ee2dfa-2913-4535-941b-a03419bfc0c4',
                '62e6b9a3-a940-4743-af4b-4db194b44491',
                'e40780e0-b093-4d32-ad56-1307f7564e89'
            ]

            const actual = getActiveProcessStepIDs.resultFunc(history.historyAll3Active)

            expect(actual).toEqual(expected)
        })
    })
})
