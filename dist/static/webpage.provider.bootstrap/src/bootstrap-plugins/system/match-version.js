export default (id, importMap = {}) => {
    if (importMap[id]) {
        return importMap[id]
    }

    const currentPseudoId = id.replace(/\/.+\/index\.js/, '/*/index.js')
    const pseudoId = Object.keys(importMap)
        .find((pattern) => pattern === currentPseudoId)

    return importMap[pseudoId]
}
