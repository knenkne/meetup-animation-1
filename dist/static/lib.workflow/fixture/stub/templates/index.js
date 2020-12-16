const devServer = require('@sbol/dev.server')

const config = require('./config')

module.exports = () => {
    const devServerConfig = devServer.getDefaultConfig()

    return {
        ...devServerConfig,
        config: {
            ...devServerConfig.config,
            ...config
        },
        navigation: {
            ...devServerConfig.navigation,
            'lib.workflow': '/lib.workflow',
            'payments.dashboard': '/payments.dashboard',
            'workflow-example': '/workflow-example'
        },

        apps: {
            ...devServerConfig,
            'lib.workflow': {
                name: 'lib.workflow',
                version: 'master'
            }
        },
        regions: {
            'scaffold-region': {
                name: 'region.scaffold',
                version: require('@sbol/region.scaffold/package').version
            },
        },
        launcher: {
            ...devServerConfig.launcher,
            'confirmation.synthetic.v3': {
                version: '3.0.28'
            },
            'lib.workflow': {
                features: {
                    subFlowRegions: {
                        options: {
                            'confirmation.synthetic.v3': '/region-sub-flows-sub'
                        },
                        value: true
                    },
                }
            }
        }
    }
}
