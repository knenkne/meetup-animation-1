export default (id, module) => {
    if (module) {
        return `/${id}#${module}`
    }

    return `/${id}`
}
