const getRouteLikeName = require('../utils/get-route-like-name')
const getProjectPackage = require('../utils/get-project-package')

const {
    __: {
        cleanName: name
    },
    version
} = getProjectPackage()

module.exports = {
    [getRouteLikeName(name)]: {
        name,
        version
    }
}
