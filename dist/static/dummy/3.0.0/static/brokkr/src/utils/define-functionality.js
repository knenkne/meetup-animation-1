const _ = require('lodash')

module.exports = (regexp, func) => {
    // eslint-disable-next-line no-param-reassign, comment: данной функцией объединяем regexp и function
    func.r = _.isArray(regexp) ? regexp : [regexp]
    return func
}
