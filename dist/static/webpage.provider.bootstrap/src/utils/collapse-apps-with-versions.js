export const collapseAppsWithVersions = (launcher, map = {}) => {
    if (!launcher) {
        return map
    }
    return Object.entries(map).reduce(
        (memo, [path, app]) => {
            const nextVersion = (launcher[app.name] || {}).version || app.version
            const nextVendor = launcher[`${app.name}.3`]
                ? void 0
                : app.vendorVersion

            if (!nextVersion) {
                delete memo[path]
                return memo
            }

            Object.assign(memo, {
                [path]: {
                    ...app,
                    version: nextVersion,
                    vendorVersion: nextVendor
                }
            })

            return memo
        },
        {}
    )
}
