const path = require('path')
const fs = require('fs')

const glob = require('glob')
const _ = require('lodash')

const readSchema = require('./readSchema')
const extractRefs = require('./extractRefs')
const includeDefs = require('./includeDefs')

const defs = _.chain(glob.sync('json/**/defs/*.json'))
    // Read schema from path by glob added to current working directory
    .map(readSchema)
    // Normalize list structure
    .reduce((memo, schema) => {
        Object
            .keys(schema.definitions)
            .forEach((typeName) => {
                memo[`${schema.id}#/definitions/${typeName}`] = {
                    typeName,
                    schema: schema.definitions[typeName]
                }
            })

        return memo
    }, {})
    // List dependencies for each definition
    .mapValues((def) => {
        def.dependencies = extractRefs(def.schema, {})
        return def
    })
    .value()

const rootPaths = glob.sync('json/**/src/*.json')
const roots = rootPaths
    .map(readSchema)
    .map(includeDefs(defs))

rootPaths.forEach((p, idx) => {
    const filePath = path.resolve(p, '../..', path.basename(p))
    fs.writeFileSync(
        filePath,
        JSON.stringify(roots[idx], null, '  ') + '\n'
    )
    console.log(`Compiled: ${filePath}`)
})
