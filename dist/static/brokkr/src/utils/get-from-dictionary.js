/* eslint-disable quote-props, comment: единообразие описания */
const _ = require('lodash')

module.exports = (dictionary, key) => {
    if (_.has(dictionary, key)) {
        return _.get(dictionary, key)
    }

    const value = _.find(dictionary, (v, k) => {
        if (/\/.*\//.test(k)) {
            const regexp = new RegExp(_.trim(k, '/'))
            return regexp.test(key)
        }

        return false
    })

    if (value) {
        return value
    }

    throw new Error(`Ошибка в описании АФТ-шага: нет селектора "${key}" в справочнике селекторов`)
}
