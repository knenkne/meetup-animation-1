let classMap = {}

module.exports = class ExtractClassMapPlugin {
    static getLocalIdentDecorator ({
        getLocalIdent = require('css-loader/dist/utils').getLocalIdent,
        originalIdentName = '[path][name]--[local]'
    } = {}) {
        return (loaderContext, localIdentName, localName, options) => {
            const source = getLocalIdent(loaderContext, originalIdentName, localName, options)
            const hash = getLocalIdent(loaderContext, localIdentName, localName, options)
            classMap[source] = hash

            return hash
        }
    }

    constructor ({
        toFile = 'css-class-map.json',
        assignBefore = {},
        assignAfter = {},
        mapKeys
    } = {}) {
        this.classMapName = toFile
        this.assignBefore = assignBefore
        this.assignAfter = assignAfter
        this.mapKeys = mapKeys

        // TODO: возможно, следует использовать внутренние механизмы шары webpack
        classMap = {}
    }

    apply (compiler) {
        compiler.plugin('emit', (compilation, cb) => {
            classMap = {
                ...this.assignBefore,
                ...classMap,
                ...this.assignAfter,
            }

            if (this.mapKeys) {
                classMap = Object.keys(classMap)
                    .reduce((memo, metaPath) => {
                        const nextKey = typeof this.mapKeys === 'function' ? this.mapKeys(metaPath) : this.mapKeys[metaPath]

                        if (!nextKey) {
                            return memo
                        }

                        return {
                            ...memo,
                            [nextKey]: memo[metaPath]
                        }
                    }, classMap)
            }

            const classMapString = JSON.stringify(classMap, null, 2)

            Object.assign(
                compilation.assets,
                {
                    [this.classMapName]: {
                        source () {
                            return classMapString
                        },
                        size () {
                            return classMapString.length
                        }
                    }
                }
            )

            cb()
        })
    }
}
