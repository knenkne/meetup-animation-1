const _ = require('lodash')

// Caution! This operation changes $ref in passed json to relative one
function extractRefs (json, list) {
    if (json.$ref) {
        list[json.$ref] = (list[json.$ref] || 0) + 1
        json.$ref = `#${json.$ref.split('#')[1]}`
    }

    if (_.isPlainObject(json)) {
        Object
            .keys(json)
            .forEach((key) => extractRefs(json[key], list))

        return list
    } else if (_.isArray(json)) {
        json.forEach((item) => extractRefs(item, list))

        return list
    }

    return list
}

module.exports = extractRefs
