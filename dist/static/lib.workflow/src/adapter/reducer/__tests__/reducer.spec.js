import reducer from '..'

import * as types from '../../action-types'

const subFlow = {
    status: '',
    startData: {
        regionName: '',
        url: '',
        pid: ''
    },
    onReturnUrl: ''
}

describe('Adapter :: reducer', () => {
    let mockState

    beforeEach(() => {
        mockState = {
            references: {},
            document: {},
            screens: [],
            progress: {},
            history: [],
            error: {},
            messages: [],
            process: {
                pid: null,
                url: null,
                flow: null,
                state: null,
                name: null,
                mainProcessId: null
            },
            status: {
                isInSubflow: false,
                isLoading: true,
                isFailed: false,
                isFinished: false,
                shouldRestart: false
            },
            subFlow
        }
    })

    it('инициализирует первичное состояние', () => {
        const actual = reducer(void 0, {})
        expect(actual).toEqual(mockState)
    })
    it('инициализирует стор со свойствами, переданными в payload action INIT', () => {

        const expectedState = {
            ...mockState,
            process: {
                ...mockState.process,
                url: '/url',
                name: 'test',
                mainProcessId: void 0
            }
        }

        const actual = reducer(void 0, {
            type: types.INIT,
            options: {
                url: '/url',
                name: 'test'
            }
        })

        expect(actual).toEqual(expectedState)
    })
    it('возвращает новое состояние после экшена WORKFLOW/SUCCESS c payload pid', () => {
        const expectedState = {
            ...mockState,
            process: {
                ...mockState.process,
                pid: '12345',
            }
        }

        const actual = reducer(mockState, { type: types.SUCCESS, pid: '12345' })

        expect(actual).toEqual(expectedState)
    })

    it('возвращает новое состояние после экшена WORKFLOW/START_REQUEST', () => {
        const expectedState = {
            ...mockState
        }

        const actual = reducer(mockState, { type: types.START_REQUEST })

        expect(actual).toEqual(expectedState)
    })

    it('возвращает новое состояние после экшена WORKFLOW/STOP_REQUEST', () => {
        const expectedState = {
            ...mockState,
            status: {
                isInSubflow: false,
                isLoading: false,
                isFailed: false,
                isFinished: false,
                shouldRestart: false
            }
        }

        const actual = reducer(mockState, { type: types.STOP_REQUEST })

        expect(actual).toEqual(expectedState)
    })

    it('возвращает новое состояние после экшена WORKFLOW/FAILED', () => {
        const expectedState = {
            ...mockState,
            error: {
                title: 'error',
                code: void 0,
                text: void 0
            },
            status: {
                isInSubflow: false,
                isLoading: false,
                isFailed: true,
                isFinished: false,
                shouldRestart: false
            }
        }

        const actual = reducer(mockState, { type: types.FAILED, error: { title: 'error' } })

        expect(actual).toEqual(expectedState)
    })

    it('возвращает новое состояние после экшена WORKFLOW/UPDATE_MESSAGES', () => {
        const expectedState = {
            ...mockState,
            messages: [
                { type: 'VALIDATION', code: 'field:id', title: 'title' }
            ]
        }

        const actual = reducer(mockState, {
            type: types.UPDATE_MESSAGES,
            messages: [{ type: 'VALIDATION', code: 'field:id', title: 'title' }]
        })

        expect(actual).toEqual(expectedState)
    })
    it('возвращает новое состояние после экшенов ENTERING_SUBFLOW / RETURNING_FROM_SUBFLOW', () => {
        const expectedStateInSubflow = {
            ...mockState,
            process: {
                ...mockState.process,
                url: '/new_url',
            },
            status: {
                isInSubflow: true,
                isLoading: true,
                isFailed: false,
                isFinished: false,
                shouldRestart: false
            }
        }

        expect(reducer(mockState, { type: types.ENTERING_SUBFLOW, url: '/new_url' })).toEqual(expectedStateInSubflow)

        const expectedStateInMainFLow = {
            ...mockState,
            process: {
                ...mockState.process,
                url: '/main_flow'
            },
            status: {
                isInSubflow: false,
                isLoading: true,
                isFailed: false,
                isFinished: false,
                shouldRestart: false
            }
        }

        expect(reducer(mockState, { type: types.RETURNING_FROM_SUBFLOW, url: '/main_flow' })).toEqual(expectedStateInMainFLow)
    })
    it('возвращает новое состояние после экшена WORKFLOW/UPDATE', () => {
        const expectedState = {
            references: {
                referenceId: {
                    properties: {},
                    items: []
                }
            },
            document: {
                documentId: 12345
            },
            screens: [
                {
                    title: 'screen-title'
                }
            ],
            progress: {
                range: 2,
                position: 1
            },
            history: [
                'historyItem1',
                'historyItem2'
            ],
            error: {},
            messages: [],
            process: {
                pid: 'pid-id',
                url: null,
                flow: 'flowName',
                state: 'newState',
                name: null,
                mainProcessId: null,
            },
            status: {
                isInSubflow: false,
                isLoading: false,
                isFailed: false,
                isFinished: false,
                shouldRestart: false
            },
            subFlow
        }

        const actual = reducer(mockState, {
            type: types.UPDATE,
            pid: 'pid-id',
            flow: 'flowName',
            state: 'newState',

            document: {
                documentId: 12345
            },
            screens: [
                {
                    title: 'screen-title'
                }
            ],
            references: {
                referenceId: {
                    properties: {},
                    items: []
                }
            },
            progress: {
                range: 2,
                position: 1
            },
            history: [
                'historyItem1',
                'historyItem2'
            ],
            isInSubflow: false
        })

        expect(actual).toEqual(expectedState)
    })
})
