import utilsCollection from '../suggests'
import merchantsData from '../../../assets/merchantsData.json'
import preparedData from './data.json'

describe('Тестирование поиска suggests в assets/merchantsData.json:', () => {
    it('createNode, путь пустой', () => {
        const result = utilsCollection.createNode({ data: { key: { 1: 1 } }, path: '' }, 'key')

        expect(result).toEqual({
            path: 'key',
            data: { 1: 1 }
        })
    })

    it('createNode, путь не пустой', () => {
        const result = utilsCollection.createNode({ data: { key: { 1: 1 } }, path: 'path' }, 'key')

        expect(result).toEqual({
            path: 'path.key',
            data: { 1: 1 }
        })
    })

    it('createNodes, pathArray пустой', () => {
        const result = utilsCollection.createNodes({ isRoot: true }, [])

        expect(result).toEqual([{ data: { isRoot: true }, path: '' }])
    })

    it('createNodes, pathArray не пустой', () => {
        const result = utilsCollection.createNodes(merchantsData, ['h.h.l.h.h.h.h.e.e.e'])

        expect(result).toEqual([{ data: preparedData.data_1, path: 'h.h.l.h.h.h.h.e.e.e' }])
    })

    it('findPaths, letter = "о", pathArray = ["h.h.l.h.h.h.h.e.e"]', () => {
        const result = utilsCollection.findPaths('о', ['h.h.l.h.h.h.h.e.e'], merchantsData)

        expect(result).toEqual({ nodes: [{ data: preparedData.data_1, path: 'h.h.l.h.h.h.h.e.e.e' }], paths: ['h.h.l.h.h.h.h.e.e.e'] })
    })

    it('findPaths, letter = "2", pathArray = []', () => {
        const result = utilsCollection.findPaths('2', [], merchantsData)

        expect(result).toEqual({ nodes: [{ data: preparedData.data_2, path: 'e' }], paths: ['e'] })
    })

    it('findSuggestion', () => {
        const result = utilsCollection.findSuggestion([{ data: preparedData.data_1, path: 'h.h.l.h.h.h.h.e.e.e' }])

        expect(result).toEqual({ suggestions: preparedData.s_1 })
    })

    it('findSuggestion', () => {
        const result = utilsCollection.findSuggestion([{ data: preparedData.data_2, path: 'e' }])

        expect(result).toEqual({ suggestions: preparedData.s_2 })
    })
})
