import _ from 'lodash'

export const themeCheck = (exports, parentPath) => {
    if (!parentPath) {
        themeCheck.warnList = []
    }

    _.forEach(exports, (Component, name) => {
        if (themeCheck.componentRegExp.test(name) && name !== themeCheck.decoratorsShortcut) {
            const path = parentPath ? `${parentPath}.${name}` : name

            if (!Component.theme) {
                themeCheck.warnList.push(path)
                themeCheck(Component, path)
            }
        }
    })

    if (!parentPath && themeCheck.warnList.length) {
        console.warn(`Test Warning: В следующих компонентах отсутствует свойство theme. Возможно, его следует добавить:
    ${themeCheck.warnList.join('\n    ')}`)
    }
}
themeCheck.componentRegExp = /^[A-Z]/
themeCheck.decoratorsShortcut = 'WrappedComponent'
themeCheck.warnList = []
