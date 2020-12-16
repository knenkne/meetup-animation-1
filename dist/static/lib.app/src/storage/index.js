import { getConfigValue } from '../config'
import projectName from '../application/project-name'

const getKey = (pkg, key) => `${getConfigValue('user.id')}::${pkg || projectName.get()}::${key}`

const local = {
    set: (key, value, pkg) => {
        if (window && window.localStorage) {
            window.localStorage.setItem(getKey(pkg, key), value)
        }
    },
    get: (key, pkg) => {
        if (window && window.localStorage) {
            return window.localStorage.getItem(getKey(pkg, key))
        }

        return void ''
    },
    remove: (key, pkg) => {
        if (window && window.localStorage) {
            window.localStorage.removeItem(getKey(pkg, key))
        }
    }
}

export const storage = {
    getKey,
    local
}
