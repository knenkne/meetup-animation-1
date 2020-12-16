import _ from 'lodash'

export const exportCheck = (exports, exclusions, parentPath) => {
    if (!parentPath) {
        exportCheck.warnList = []
    }

    _.forEach(exports, (subExports, name) => {
        const path = parentPath ? `${parentPath}.${name}` : name
        if (exportCheck.componentRegExp.test(name) && name !== exportCheck.decoratorsShortcut) {
            const Component = subExports

            if (_.isUndefined(Component)) {
                exportCheck.warnList.push(path)
            }

            exportCheck(Component, exclusions, path)
        } else {
            const util = subExports

            if (_.isUndefined(util) && !_.includes(exclusions, path)) {
                exportCheck.warnList.push(path)
            }
        }
    })

    if (!parentPath && exportCheck.warnList.length) {
        fail(`Test Error: В следующих экспортируемых элементах присутствуют непридусмотренные undefined:
    ${exportCheck.warnList.join('\n    ')}`)
    }
}

exportCheck.componentRegExp = /^[A-Z]/
exportCheck.decoratorsShortcut = 'WrappedComponent'
exportCheck.warnList = []
