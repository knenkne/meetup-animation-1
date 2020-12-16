export default (parentUrl) => {
    // Первозапрашивающим модулем являемся мы
    if (!parentUrl) {
        return void 0
    }

    const [cleanParentUrl, rootPkgName] = parentUrl.split('#')

    // parentUrl = .../pkg_name/pkg_version/index.js#root_pkg_name
    if (rootPkgName) {
        return rootPkgName
    }

    // cleanParentUrl = .../pkg_name/pkg_version/index.js
    // Берем pkg_name за основу
    const matches = cleanParentUrl.match(/\/([^/]+)\/[^/]*\/index\.js$/)

    if (matches) {
        return matches[1]
    }

    return void 0
}
