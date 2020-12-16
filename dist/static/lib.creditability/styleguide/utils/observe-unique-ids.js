import _ from 'lodash'

export const checkUniqueIds = (ids, node, {
    filter = _.stubTrue
} = {}) => {
    if (node.id && filter(ids[node.id], node)) {
        if (ids[node.id]) {
            console.error(`Неуникальный id "${node.id}"`, ids[node.id], node) // eslint-disable-line no-console, comment: задача обсервера - консолить
        } else {
            _.set(ids, node.id, node)
        }
    }

    _.forEach(node.childNodes, (subNode) => {
        checkUniqueIds(ids, subNode, { filter })
    })
}

export const observeUniqueIds = ({
    filter,
    root = document,
    observeOptions = { attributes: true, childList: true, subtree: true, attributeFilter: ['id'] },
} = {}) => {
    const observer = new MutationObserver(() => checkUniqueIds({}, root, { filter }))
    observer.observe(root, observeOptions)
    observeUniqueIds.observers.push(observer)
}
observeUniqueIds.observers = []

// const SVG_TAGS = ['rect', 'g', 'path', 'mask', 'polygon', 'use', 'circle', 'text']
// observeUniqueIds({ filter: (prevNode, nextNode) => !_.includes(SVG_TAGS, nextNode.nodeName) })
