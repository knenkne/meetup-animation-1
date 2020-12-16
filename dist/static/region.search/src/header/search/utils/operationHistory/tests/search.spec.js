import {
    saveOperations,
    preFetchedAdditionalRequest,
    searchInPreFetched,
    searchedAdditionalRequest,
    searchInSearched,
    searchOperations
} from '../search'
import { sortOperations } from '../sort'

import data from './data.json'

describe('Тестирование функций поиска в истории операций:', () => {
    let foo = null

    beforeEach(() => {
        foo = {
            dispatch: (f) => f,
            getOperations: (f) => f
        }

        spyOn(foo, 'dispatch')
        spyOn(foo, 'getOperations').and.returnValue(() => Promise.resolve([]))
    })

    it('saveOperations', () => {
        const totalCount = 3
        const result = saveOperations(foo.dispatch, ['a', 'b', 'c'], totalCount)

        expect(foo.dispatch).toHaveBeenCalledTimes(1)
        expect(result).toEqual({
            type: 'OPERATIONS_RESULT',
            operations: ['a', 'b', 'c'],
            showAll: false,
            totalCount
        })
    })

    it('preFetchedAdditionalRequest', () => {
        const result = preFetchedAdditionalRequest(foo.dispatch, data.operations, data.fetchedOperations)
        const MAX_COUNT = 4
        const totalCount = 4
        const filterAdditionalOperations = data.operations.filter((item) => data.fetchedOperations[0].id !== item.id)

        expect(foo.dispatch).toHaveBeenCalledTimes(1)
        // сначало slice, а потом sort, чтобу не потерять предзагруженные операции
        expect(result).toEqual({
            type: 'OPERATIONS_RESULT',
            operations: sortOperations([...data.fetchedOperations, ...filterAdditionalOperations].slice(0, MAX_COUNT)),
            showAll: false,
            totalCount
        })
    })

    it('searchInPreFetched - найдет 4 операции в предзагруженных данных', () => {
        const query = 'Заявка'

        searchInPreFetched(foo.dispatch, query, data.operations, foo.getOperations)

        expect(foo.dispatch).toHaveBeenCalledTimes(1)
        expect(foo.getOperations).toHaveBeenCalledTimes(0)
    })

    //TODO: Переделать, когда getFeatureValue('useSearchWithConvertedQuery', 'region.search') вернёт true

    // it('searchInPreFetched - найдет 4 операции по слову "Карта" в to и "rfhnf" в to:', () => {
    //     const query = 'Карта'
    //     const result = searchInPreFetched(foo.dispatch, query, data.operations, foo.getOperations)
    //
    //     expect(foo.dispatch).toHaveBeenCalledTimes(1)
    //     expect(foo.getOperations).toHaveBeenCalledTimes(0)
    //     expect(result.operations.map((item) => item.id)).toEqual([4, 1, 2, 3])
    //
    // })

    it('searchInPreFetched - найдет 1 операцию в предзагруженных данных', () => {
        const query = '100000'
        searchInPreFetched(foo.dispatch, query, data.operations, foo.getOperations)

        expect(foo.dispatch).toHaveBeenCalledTimes(0)
        expect(foo.getOperations).toHaveBeenCalledTimes(1)
    })

    it('searchedAdditionalRequest', () => {
        const result = searchedAdditionalRequest(foo.dispatch, data.operations)
        const totalCount = 4
        const MAX_COUNT = 4

        expect(foo.dispatch).toHaveBeenCalledTimes(1)
        expect(result).toEqual({
            type: 'OPERATIONS_RESULT',
            operations: sortOperations(data.operations).slice(0, MAX_COUNT),
            showAll: false,
            totalCount
        })
    })

    it('searchInSearched - найдет 4 операции в предзагруженных данных', () => {
        const query = 'Заявка'

        searchInSearched(foo.dispatch, query, data.operations, foo.getOperations)

        expect(foo.dispatch).toHaveBeenCalledTimes(1)
        expect(foo.getOperations).toHaveBeenCalledTimes(0)
    })

    it('searchInSearched - найдет 1 операцию в предзагруженных данных', () => {
        const query = '100000'
        searchInSearched(foo.dispatch, query, data.operations, foo.getOperations)

        expect(foo.dispatch).toHaveBeenCalledTimes(0)
        expect(foo.getOperations).toHaveBeenCalledTimes(1)
    })

    it('searchOperations - requestCount = 0, найдено операций более костанты', () => {
        const query = 'Заявка'
        const state = {
            operations: {
                searched: {
                    requestCount: 0
                },
                preFetched: {
                    operations: data.operations
                },
                result: {
                    lastQuery: ''
                }
            }
        }
        searchOperations(foo.dispatch, query, state, foo.getOperations)

        expect(foo.dispatch).toHaveBeenCalledTimes(1)
        expect(foo.getOperations).toHaveBeenCalledTimes(0)
    })

    it('searchOperations - requestCount = 0, найдено операций менее костанты', () => {
        const query = 'Заявка'
        const state = {
            operations: {
                searched: {
                    requestCount: 0
                },
                preFetched: {
                    operations: data.fetchedOperations
                },
                result: {
                    lastQuery: ''
                }
            }
        }
        searchOperations(foo.dispatch, query, state, foo.getOperations)

        expect(foo.dispatch).toHaveBeenCalledTimes(0)
        expect(foo.getOperations).toHaveBeenCalledTimes(1)
    })

    it('searchOperations - requestCount > 0, пользователь продолжает вводить текст, найдено операций более костанты', () => {
        const query = 'Заявк'
        const state = {
            operations: {
                searched: {
                    requestCount: 1,
                    operations: data.operations
                },
                preFetched: {
                    operations: []
                },
                result: {
                    lastQuery: 'Заяв'
                }
            }
        }
        searchOperations(foo.dispatch, query, state, foo.getOperations)

        expect(foo.dispatch).toHaveBeenCalledTimes(1)
        expect(foo.getOperations).toHaveBeenCalledTimes(0)
    })

    it('searchOperations - requestCount > 0, пользователь продолжает вводить текст, найдено операций менее костанты', () => {
        const query = 'Заявк'
        const state = {
            operations: {
                searched: {
                    requestCount: 1,
                    operations: data.fetchedOperations
                },
                preFetched: {
                    operations: []
                },
                result: {
                    lastQuery: 'Заяв'
                }
            }
        }
        searchOperations(foo.dispatch, query, state, foo.getOperations)

        expect(foo.dispatch).toHaveBeenCalledTimes(0)
        expect(foo.getOperations).toHaveBeenCalledTimes(1)
    })

    it('searchOperations - requestCount > 0, пользователь продолжает вводить текст, найдено операций менее костанты', () => {
        const query = 'Заяв'
        const state = {
            operations: {
                searched: {
                    requestCount: 1,
                    operations: data.operations
                },
                preFetched: {
                    operations: []
                },
                result: {
                    lastQuery: 'Заявк'
                }
            }
        }
        searchOperations(foo.dispatch, query, state, foo.getOperations)

        expect(foo.dispatch).toHaveBeenCalledTimes(1)
        expect(foo.getOperations).toHaveBeenCalledTimes(0)
    })

    it('searchOperations - requestCount > 0, поиск с предыдущим значением параметра search уже не имеет смысла 1', () => {
        const query = 'З'
        const state = {
            operations: {
                searched: {
                    requestCount: 1,
                    operations: []
                },
                preFetched: {
                    operations: data.operations
                },
                result: {
                    lastQuery: 'поиск с предыдущим значением параметра search уже не имеет смысла'
                }
            }
        }
        searchOperations(foo.dispatch, query, state, foo.getOperations)

        const dispatchCalls = 2

        expect(foo.dispatch).toHaveBeenCalledTimes(dispatchCalls)
        expect(foo.getOperations).toHaveBeenCalledTimes(0)
    })

    it('searchOperations - requestCount > 0, поиск с предыдущим значением параметра search уже не имеет смысла 2', () => {
        const query = 'поиск с предыдущим значением параметра search уже не имеет смысла'
        const state = {
            operations: {
                searched: {
                    requestCount: 1,
                    operations: []
                },
                preFetched: {
                    operations: data.operations
                },
                result: {
                    lastQuery: 'Заявк'
                }
            }
        }
        searchOperations(foo.dispatch, query, state, foo.getOperations)

        expect(foo.dispatch).toHaveBeenCalledTimes(1)
        expect(foo.getOperations).toHaveBeenCalledTimes(1)
    })

    it('Пустой поисковый запрос, поиск не должен производиться', () => {
        const query = ''
        const state = {
            operations: {
                searched: {
                    requestCount: 1,
                    operations: []
                },
                preFetched: {
                    operations: data.operations
                },
                result: {
                    lastQuery: 'Заявк'
                }
            }
        }
        searchOperations(foo.dispatch, query, state, foo.getOperations)

        expect(foo.dispatch).toHaveBeenCalledTimes(1)
        expect(foo.getOperations).toHaveBeenCalledTimes(0)
    })
})
