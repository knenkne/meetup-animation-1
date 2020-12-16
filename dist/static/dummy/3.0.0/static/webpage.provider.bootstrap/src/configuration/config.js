const commonConfig = {}
const launcherConfig = {}

export const setCommonConfig = (nextCommonConfig = {}) => {
    Object.assign(commonConfig, nextCommonConfig)
}
export const getCommonConfig = () => commonConfig
export const getCommonConfigValue = (key) => commonConfig[key]

export const setLauncherConfig = (nextLauncherConfig = {}) => {
    Object.assign(launcherConfig, nextLauncherConfig)
}
export const getLauncherConfig = () => launcherConfig
export const getLauncherConfigValue = (key) => launcherConfig[key]
