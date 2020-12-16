import _ from 'lodash'

const separatos = [' ', '-']

export const capitalize = (str) => {
    if (!str || typeof str !== 'string') {
        return ''
    }

    let result = _.capitalize(str)

    for (let i = 0; i < str.length; i += 1) {
        if (separatos.includes(str[i])) {
            result = result.slice(0, i + 1) + _.capitalize(result.slice(i + 1))
        }
    }

    return result
}
