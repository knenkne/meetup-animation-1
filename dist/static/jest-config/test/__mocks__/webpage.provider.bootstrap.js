import _ from 'lodash'

module.exports = {
    getApps: _.noop,
    getInitOptions: _.noop,
    getOptions: _.noop,
    getNotFound: _.noop,
    getHistory: () => ({
        createHref: () => ''
    }),
    getBroker: () => ({
        publish: _.noop,
        subscribe: _.noop
    }),
    name: '@sbol/webpage.provider.bootstrap'
}
