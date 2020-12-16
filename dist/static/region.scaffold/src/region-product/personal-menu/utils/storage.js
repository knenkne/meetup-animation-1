import { getConfigValue } from '@sbol/lib.app'

const userId = getConfigValue('user.id')

/**
 * Parse from localStorage
 * @param  {String} name - name of localStorage field
 * @param {String|Boolean|Number} fallback - value if localStorage is empty
 * @return {String|Boolean|Number} - value from localStorage
 */
export const getFromStorage = (name, fallback) => {
    const parsedField = JSON.parse(localStorage.getItem(`${name}:${userId}`))
    return parsedField !== null ? parsedField : fallback
}

export const setToStorage = (name, value) => {
    if (userId) {
        localStorage.setItem(`${name}:${userId}`, value)
    }
}
