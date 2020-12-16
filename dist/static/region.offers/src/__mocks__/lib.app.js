import _ from 'lodash'
import { createLibAppMock } from '@sbol/jest-config/test/__mocks__/lib.app'

import modules from '../../stub/templates/modules'
import config from '../../stub/templates/config'
import navigation from '../../stub/templates/navigation'

module.exports = {
    ...createLibAppMock(modules, config, navigation),
    getHistory: () => ({
        createHref: _.noop,
        push: _.noop,
        listen: _.noop,
        location: {
            pathname: ''
        }
    }),
    NotFound: () => null,
    getConfigValue: (key, defaultValue) => config[key] === void 0 ? defaultValue : config[key]
}
