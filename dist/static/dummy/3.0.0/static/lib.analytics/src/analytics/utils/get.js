export const get = (source = {}, key, ...pathArray) => {
    const subSource = source[key]
    return pathArray.length && subSource !== void 0 ? get(subSource, ...pathArray) : subSource
}
