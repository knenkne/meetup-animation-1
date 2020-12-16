module.exports = {
    getNotFound: () => {},
    getNetworkError: () => {},
    getInitOptions: () => {},
    getPrefetch: () => {},
    getAppStartLoader: () => {},
    getAppStopLoader: () => {},
    getLauncherConfig: () => {},
    getLauncherConfigValue: () => {},
    getHistory: () => ({
        location: {
            search: '',
            pathname: ''
        },
        listen: () => {}
    }),
    getConfig: () => {},
    getConfigValue: () => {},
    getNavigation: () => {},
    getNavigationValue: () => {},
    getMessages: () => {},
    getMessagesValue: () => {},
    getAllFeatures: () => {},
    getFeature: () => {},
    getFeatureValue: () => {},
    getFeatureOption: () => {},
    getAllOptions: () => {},
    getOption: () => {},
    getBroker: () => ({
        on: () => {}
    })
}
