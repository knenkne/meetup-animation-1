const _ = require('lodash')

const extractRefs = require('./extractRefs')

function includeRefsRecursive (defsSchemas, allDefinitions, currentDefinitions) {
    const dependencies = _.chain(currentDefinitions)
        .reduce((memo, def) => _.extend(memo, def.dependencies), {})
        .omitBy((dep, name) => !!allDefinitions[name])
        .mapValues((dep, id) => defsSchemas[id])
        .value()

    if (_.size(dependencies) > 0) {
        _.extend(allDefinitions, dependencies)
        includeRefsRecursive(defsSchemas, allDefinitions, dependencies)
    }
}

// Check definitions for duplicate type names
function checkForDuplicateDefinitions (defs) {
    _.reduce(defs, (index, def, id) => {
        if (index[def.typeName]) {
            throw new Error(`types have name conflict in schemas "${index[def.typeName]}" and "${id}"`)
        }
        index[def.typeName] = id
        return index
    }, {})
}

module.exports = function includeDefs (defsSchemas) {
    return function includeDefsToSchema (schema) {
        const defsList = extractRefs(schema, {})
        const definitions = _.mapValues(defsList, (def, id) => defsSchemas[id])

        includeRefsRecursive(defsSchemas, definitions, definitions)
        // check list only for verified dependencies of this particular schema
        checkForDuplicateDefinitions(definitions)

        schema.definitions = _.extend(
            {},
            _.reduce(definitions, (memo, def) => {
                memo[def.typeName] = def.schema
                return memo
            }, {}),
            schema.definitions
        )

        return schema
    }
}
