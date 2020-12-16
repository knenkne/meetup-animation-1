import _ from 'lodash'

export const displayNameCheck = (exports, parentPath) => {
    if (!parentPath) {
        displayNameCheck.warnList = []
    }

    _.forEach(exports, (Component, name) => {
        if (displayNameCheck.componentRegExp.test(name) && name !== displayNameCheck.decoratorsShortcut) {
            const path = parentPath ? `${parentPath}.${name}` : name

            if (_.isFunction(Component) && path !== Component.displayName) {
                let message = _.padEnd(`Путь: ${path}`, 40, ' ')
                message += `displayName: ${Component.displayName}`
                displayNameCheck.warnList.push(message)
            }

            displayNameCheck(Component, path)
        }
    })

    if (!parentPath && displayNameCheck.warnList.length) {
        console.warn(`Test Warning: Выявлены следующие несоответствия displayName компонентов относительно их размещения:
    ${displayNameCheck.warnList.join('\n    ')}`)
    }
}
displayNameCheck.componentRegExp = /^[A-Z]/
displayNameCheck.decoratorsShortcut = 'WrappedComponent'
displayNameCheck.warnList = []
