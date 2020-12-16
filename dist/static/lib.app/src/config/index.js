import {
    getOptions,
    getInitOptions,
    getHistory,
    getNotFound,
    getNetworkError,
    getBroker,
    getPrefetch,
    getAllLauncher as getAllLauncherBootstrap,
    getAllFeatures as getAllFeaturesLauncher,
    getFeature as getFeatureLauncher,
    getFeatureValue as getFeatureValueLauncher,
    getFeatureOption as getFeatureOptionLauncher,
    getAllOptions as getAllOptionsLauncher,
    getOption as getOptionLauncher,
    getAppStartLoader,
    getAppStopLoader,
    getLauncherConfig,
    getLauncherConfigValue
} from '@sbol/webpage.provider.bootstrap'

import projectName from '../application/project-name'

export {
    getHistory,
    getNotFound,
    getNetworkError,
    getInitOptions,
    getBroker,
    getPrefetch,
    getAppStartLoader,
    getAppStopLoader,
    getLauncherConfig,
    getLauncherConfigValue
}

export const getConfig = () => ({
    ...getOptions(['config'], {}),
    ...getInitOptions(projectName.get(), ['settings']) || {}
})
export const getNavigation = () => getOptions(['navigation'], {})
export const getMessages = () => ({
    ...getOptions(['messages'], {}),
    ...getInitOptions(projectName.get(), ['messages']) || {}
})

export const getConfigValue = (key, fallback = void 0) =>
    getInitOptions(projectName.get(), ['settings', key]) ||
    getOptions(['config', key], fallback)
export const getMessagesValue = (key, fallback = void 0) =>
    getInitOptions(projectName.get(), ['messages', key]) ||
    getOptions(['messages', key], fallback)
export const getNavigationValue = (key, fallback = void 0) =>
    getOptions(['navigation', key], fallback)


export const getAllLauncher = (pkg) => getAllLauncherBootstrap(pkg || projectName.get())
export const getAllFeatures = (pkg) => getAllFeaturesLauncher(pkg || projectName.get())
export const getFeature = (id, pkg) =>
    getFeatureLauncher(id, pkg || projectName.get())
export const getFeatureValue = (id, pkg) =>
    getFeatureValueLauncher(id, pkg || projectName.get())
export const getFeatureOption = (id, option, pkg) =>
    getFeatureOptionLauncher(id, option, pkg || projectName.get())
export const getAllOptions = (pkg) =>
    getAllOptionsLauncher(pkg || projectName.get())
export const getOption = (id, pkg) =>
    getOptionLauncher(id, pkg || projectName.get())
