import _ from 'lodash'



const PATHS_TO_FIND_PATHS = [{
    childNode: 'data.h',
    currentNodeLastPartOfPath: 'h'
}, {
    childNode: 'data.l',
    currentNodeLastPartOfPath: 'l'
}]
const PATHS_TO_FIND_SUGGESTIONS = [{
    childNode: 'data.h',
    currentNodeLastPartOfPath: 'h'
}, {
    childNode: 'data.l',
    currentNodeLastPartOfPath: 'l'
}, {
    childNode: 'data.e',
    currentNodeLastPartOfPath: 'e'
}]
const CHILD_NODE_PLACE_TO_COMPARE_VALUE = 'data.c'
const CHILD_NODE_PLACE_IF_COMPARE_SUCCESS = 'data.e'

/**
 * Создать узел
 * @param {Object} node - базовый узел
 * @param {String} key - ключ, по нему ищется новый узел в node
 * @return {{path: String, data: Object}} - путь до узла и данные узла
 */
const createNode = (node, key) => ({ data: { ...node.data[key] }, path: `${node.path}${node.path && '.'}${key}` })

/**
 * Создать массив узлов
 * @param {Object} rootNode - корневой узел, ../../assets/merchantsData.json
 * @param {String[]} pathArray - массив путей, по ним можно найти узлы в rootNode
 * @return {{path: String, data: Object}[]} - массив - путь до узла и данные узла
 */
const createNodes = (rootNode, pathArray = []) => pathArray.length ?
    pathArray.map((path) => ({ data: _.get(rootNode, path), path })) :
    [{ data: rootNode, path: '' }]

/**
 * Натйти все пути до буквы (letter)
 * @param {String} letter - буква
 * @param {String[]} pathArray - массив путей, по ним можно найти узлы в rootNode
 * @param {Object} merchantsData - объект в котором искать саджесты.
 * @return {{nodes: Object[], paths: String[]}} - массив узлов (в них можно найти suggests), массив путей до узлов в
 *                                                которых можно найти suggests
 */
const findPaths = (letter, pathArray, merchantsData) => {
    const tmp = createNodes(merchantsData, pathArray)
    const nodes = []
    const paths = []

    while (tmp.length) {
        const node = tmp.shift()

        if (_.get(node, CHILD_NODE_PLACE_TO_COMPARE_VALUE) === letter && _.get(node, CHILD_NODE_PLACE_IF_COMPARE_SUCCESS)) {
            const result = createNode(node, 'e')

            tmp.push({ ...result })
            paths.push(result.path)
            nodes.push({ ...result })
        } else {
            PATHS_TO_FIND_PATHS.forEach(({ childNode, currentNodeLastPartOfPath }) => {
                if (_.get(node, childNode)) {
                    tmp.push(createNode(node, currentNodeLastPartOfPath))
                }
            })
        }
    }

    return { paths, nodes }
}

/**
 * Натйти suggests
 * @param {Object[]} nodes - массив узлов в которых можно найти suggests
 * @return {{suggestions: Object[]}} - массив suggests
 */
const findSuggestion = (nodes) => {
    const suggestions = []
    const tmp = [...nodes]

    while (tmp.length) {
        const node = tmp.shift()

        if (node.data.i) {
            node.data.i.forEach((item) => suggestions.push(item))
        } else {
            PATHS_TO_FIND_SUGGESTIONS.forEach(({ childNode, currentNodeLastPartOfPath }) => {
                if (_.get(node, childNode)) {
                    tmp.push(createNode(node, currentNodeLastPartOfPath))
                }
            })
        }
    }

    return {
        suggestions
    }
}

/**
 * Найти suggests и пути ло узлов где их можно найти
 * @param {String} query - значение из строки поиска
 * @param {Object} store - redux store
 * @param {Object} merchantsData - объект в котором искать саджесты.
 * @return {{key: String, value: Object}} - строка запроса и соответствующие ей suggests
 */
const findPathsSuggestions = (query, store, merchantsData) => {
    const suggests = store[query]
    let value = null

    if (!suggests) {
        if (query.length === 1) {
            const { paths, nodes } = findPaths(query, [], merchantsData)
            const { suggestions } = findSuggestion(nodes)

            value = { paths, suggestions }
        } else {
            const queryArray = query.split('')
            const key = queryArray.slice(0, query.length - 1).join('')
            const letter = queryArray[query.length - 1]
            const prevSuggests = store[key]
            const { paths, nodes } = findPaths(letter, prevSuggests.paths, merchantsData)
            const { suggestions } = findSuggestion(nodes)

            value = { paths, suggestions }
        }
    }

    return { key: query, value }
}

export default {
    createNode,
    createNodes,
    findPaths,
    findSuggestion,
    findPathsSuggestions
}
