const _ = require('lodash')

const { updateFieldValuesAtScreens } = require('../utils')

const getPersistedFieldsMiddleware = (req, res, next) => {

    const values = _.reduce(global.flow.values, (result, value) => _.assign({}, result, value), {})
    const originalScreens = _.get(res, ['locals', 'form', 'data', 'screens'], [])

    if (_.isEmpty(values) || _.isEmpty(originalScreens)) {
        return next()
    }
    res.locals.form.data.screens = updateFieldValuesAtScreens(originalScreens, values) // eslint-disable-line no-param-reassign, comment: Расширение объекта ответа express

    return next()
}

module.exports = getPersistedFieldsMiddleware
