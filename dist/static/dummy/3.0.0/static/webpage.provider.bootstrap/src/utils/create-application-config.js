import mergeWith from 'lodash.mergewith'

const concatPath = (host = '', path = '') => `${host}${path}`

export const createApplicationConfig = (launcherApplicationModuleOptions, launcherApplicationModuleFeatures, launcherApplication) => {
    const launcherApplicationModule = {
        ...(launcherApplicationModuleOptions || {}),
        ...Object.keys(launcherApplicationModuleFeatures || {})
            .reduce((memo, key) => {
                memo[key] = launcherApplicationModuleFeatures[key].value
                return memo
            }, {})
    }
    return mergeWith(launcherApplication || {}, launcherApplicationModule, concatPath)
}
