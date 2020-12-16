import path from 'path'

import _ from 'lodash'

import getServerRc from './get-serverrc'
import defaultTemplates from './default-templates'

module.exports = () => {
    const serverRc = getServerRc()
    let templates = null

    if (serverRc.templates) {
        const appliedTemplates = require(path.resolve(serverRc.templates))

        templates = _.isFunction(appliedTemplates) ? appliedTemplates() : appliedTemplates
    }

    return templates || defaultTemplates
}
