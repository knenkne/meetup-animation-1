// @flow

import { Bootstrap } from '../../bootstrap'
// import { getNotFound } from '../../pages'
import { getInitOptions } from '../../configuration/init'
import { getCommonConfig, getLauncherConfig, getLauncherConfigValue } from '../../configuration/config'

import broker from './message-bus'

type TCreateVirtualModule = () => {
    getOptions: (selectors: [], defaultValue: string) => any,
    getInitOptions: (
        projectName: string,
        selectors: [],
        defaultValue: string
    ) => any,
    getHistory: () => {},
    getBroker: () => {},
    getNotFound: () => {},
    getNetworkError: () => {},
    getAllFeatures: (pkg: string) => any,
    getFeature: (id: string, pkg: string) => any,
    getFeatureValue: (id: string, pkg: string) => any,
    getFeatureOption: (id: string, option: string, pkg: string) => any,
    getAllOptions: (pkg: string) => any,
    getOption: (id: string, pkg: string) => any,
    getPrefetch: string => {} | void,
    getAppStartLoader: () => {},
    getAppStopLoader: () => {},
    getLauncherConfig: () => {},
    getLauncherConfigValue: (id: string) => any,
}

const get = (from = {}, selectors = []): any =>
    selectors.reduce((prev, cur: string) => prev && prev[cur], from)

export const VIRTUAL_MODULE_NAME = '@sbol/webpage.provider.bootstrap'

export const defineVirtualModule = (virtualModule: TCreateVirtualModule) => {
    global.define(VIRTUAL_MODULE_NAME, [], virtualModule)
}

const createVirtualModule = (
    bootstrap,
    { navigation, data, messages, launcher = {} }
): TCreateVirtualModule => () => ({
    // Используется в скафолде для отображения сообщений
    getApps: () => bootstrap.apps,
    getOptions: (selectors, defaultValue) =>
        get({ config: getCommonConfig(), navigation, messages }, selectors) ||
        defaultValue,
    getLauncherConfig,
    getLauncherConfigValue,
    getInitOptions: (projectName, selectors, defaultValue) =>
        get(getInitOptions(projectName), [...selectors]) || defaultValue,
    getHistory: () => bootstrap.history,
    getBroker: () => broker,
    getNotFound: () => {
        const nextApp = bootstrap.apps.findApp(
            bootstrap.history.location.pathname
        )

        if (
            nextApp &&
            bootstrap.apps.currentApp.appData &&
            nextApp.name !== bootstrap.apps.currentApp.appData.name
        ) {
            return new Promise((resolve) => {
                resolve({
                    default: () => document.createElement('div'),
                    mount: () => null,
                    unmount: () => null
                })
            })
        }

        return import(
            /* webpackChunkName: "not-found" */ '../not-found-page/not-found-page'
        )
    },
    getNetworkError: () => import(
        /* webpackChunkName: "network-page" */ '../network/network-page'
    ),
    // Launcher functions
    getAllLauncher: (pkg) => get(launcher, [pkg]),
    getAllFeatures: (pkg) => get(launcher, [pkg, 'features']),
    getFeature: (id, pkg) => get(launcher, [pkg, 'features', id]),
    getFeatureValue: (id, pkg) => get(launcher, [pkg, 'features', id, 'value']),
    getFeatureOption: (id, option, pkg) =>
        get(launcher, [pkg, 'features', id, 'options', option]),
    getAllOptions: (pkg) => get(launcher, [pkg, 'options']),
    getOption: (id, pkg) => get(launcher, [pkg, 'options', id]),

    getPrefetch: (id) => (data || {})[id],

    getAppStartLoader: ({ longRequest }: { longRequest: boolean } = {}) =>
        bootstrap.hooks.appStartLoadingData.promise(longRequest),
    getAppStopLoader: () => bootstrap.hooks.appFinishLoadingData.promise()
})

export const AMDVirtualModulePlugin = ({
    navigation,
    data,
    messages,
    launcher
}: {
    navigation: { [key: string]: string },
    data: { [key: string]: {} } | void,
    messages: { [key: string]: string },
    launcher: {
        [key: string]: {
            features?: {},
            options?: {},
            version: string
        }
    } | null
}) => (bootstrap: Bootstrap) =>
    defineVirtualModule(
        createVirtualModule(bootstrap, { navigation, data, messages, launcher })
    )
