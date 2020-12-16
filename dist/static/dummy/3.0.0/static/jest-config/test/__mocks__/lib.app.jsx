import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'

import getTemplates from '../../utils/get-templates'

const testPkgAdapter = () => process.env.PKG_ID

const templates = getTemplates()

const getStorageKey = (pkg, key) => `${pkg}::${key}`

const createLibAppMock = ({ modules = templates.launcher, config = templates.config, navigation = templates.navigation }) => {
    const MODULES = _.isFunction(modules) ? _.attempt(modules) : modules

    const getNavigationValue = (key) => navigation[key]

    return {
        getConfigValue: (key) => config[key],
        getAllFeatures: (pkg) => MODULES[testPkgAdapter(pkg)]?.features,
        getFeature: (id, pkg) => MODULES[testPkgAdapter(pkg)]?.features[id],
        getFeatureValue: (id, pkg) => MODULES[testPkgAdapter(pkg)]?.features[id],
        getFeatureOption: (id, option, pkg) => MODULES[testPkgAdapter(pkg)]?.features[id]?.options[option],
        getNavigation: () => navigation,
        getOption: (id, pkg) => MODULES[testPkgAdapter(pkg)]?.options[id],
        getNavigationValue,
        getConfig: () => config,
        Link: class Link extends React.Component {
            static propTypes = {
                children: PropTypes.node
            }
            static defaultProps = {
                children: null
            }
            static createUrl (id, additional = {}) {
                const url = getNavigationValue(id)
                if (!url) {
                    return void ''
                }

                if (typeof additional === 'object') {
                    return Object.entries(additional).reduce(
                        (memo, [key, value]) => memo.replace(`{{${key}}}`, value),
                        url
                    )
                } else if (typeof additional === 'string') {
                    return `${url}${additional}`
                }
                return url
            }
            render () {
                return <a>{this.props.children}</a>
            }
        },
        NotFound: () => <div>{'Not Found'}</div>,
        log: {
            info: _.noop,
            error: _.noop,
            debug: _.noop,
            warn: _.noop
        },
        getBroker: () => ({
            _events: {},
            _eventsCount: 7,
            _maxListeners: 7,
            state: new Map(),
            getLastPayload: _.noop,
            addListener: _.noop,
            on: _.noop,
            emit: _.noop,
            publish: _.noop,
            subscribe: _.noop,
            once: _.noop
        }),
        getHistory: () => ({
            createHref: _.noop,
            push: _.noop,
            listen: _.noop,
            location: {
                pathname: ''
            }
        }),
        storage: {
            local: {
                set: (key, value, pkg) => {
                    if (global.localStorage) {
                        global.localStorage.setItem(getStorageKey(pkg, key), value)
                    }
                },
                get: (key, pkg) => {
                    if (global.localStorage) {
                        return global.localStorage.getItem(getStorageKey(pkg, key))
                    }

                    return void ''
                },
                remove: (key, pkg) => {
                    if (global.localStorage) {
                        global.localStorage.removeItem(getStorageKey(pkg, key))
                    }
                }
            },
            getKey: getStorageKey
        },
        axiosConfig: {
            useMultipleInterceptors: (axios) => axios,
            rq: {
                defaultInterceptors: [],
                ufsInterceptors: [],
                mapiInterceptors: [],
                sbolInterceptors: [],
            },
            rs: {
                defaultInterceptors: [],
                ufsInterceptors: [],
                mapiInterceptors: [],
                sbolInterceptors: [],
                loggerModifyFactory: _.noop
            }
        }
    }
}

module.exports = createLibAppMock({})
module.exports.createLibAppMock = createLibAppMock
