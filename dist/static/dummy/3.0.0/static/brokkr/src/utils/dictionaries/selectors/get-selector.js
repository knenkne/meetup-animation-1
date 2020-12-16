const chalk = require('chalk')

const HASH_PATTERN = /:hash\([^(]+\)/g
const INVALID_HASH_KEY_STUB = '._invalid_hash_key'

const globalReplace = (str, from, to) => {
    const result = str.replace(from, to)

    if (result === str) {
        return result
    }

    return globalReplace(result, from, to)
}

module.exports = (selector, map) => {
    const hashKeys = selector.match(HASH_PATTERN)

    if (!hashKeys) {
        return selector
    }

    const currentMap = map.get()

    return hashKeys
        .reduce((memo, hashKey) => {
            const clearHashKey = hashKey.replace(':hash(', '').replace(')', '')

            if (currentMap[clearHashKey]) {
                return globalReplace(memo, hashKey, `.${currentMap[clearHashKey]}`)
            } else if (clearHashKey.includes('*')) {
                const pattern = new RegExp(`^${globalReplace(clearHashKey, '*', '.+')}$`)
                const matches = Object.keys(currentMap).filter((key) => pattern.test(key))

                if (matches.length) {
                    return matches.map((match) => globalReplace(memo, hashKey, `.${currentMap[match]}`)).join(', ')
                }
            }

            console.warn(chalk.yellow(`Warning: Не был найден хэш-класс для ${hashKey}`))
            return globalReplace(memo, hashKey, INVALID_HASH_KEY_STUB)
        }, selector)
}
