/**
 * Parse from localStorage
 * @param  {String} name - name of localStorage field
 * @param {String|Boolean|Number} fallback - value if localStorage is empty
 * @return {String|Boolean|Number} - value from localStorage
 */
export const getFromStorage = (name, fallback) => {
    const parsedField = localStorage.getItem(name)
    return parsedField !== null ? parsedField : fallback
}

export const setToStorage = (name, value) => {
    if (name) {
        localStorage.setItem(name, value)
    }
}
