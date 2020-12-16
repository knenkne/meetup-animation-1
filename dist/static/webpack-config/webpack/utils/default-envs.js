process.noDeprecation = true /* svg-inline-loader: https://github.com/webpack-contrib/svg-inline-loader/pull/57  */

const getProjectPackage = require('./get-project-package')

const {
    version,
    customVersion,
    main
} = getProjectPackage()

if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = 'production'
}

if (!process.env.VERSION) {
    process.env.VERSION = customVersion || version
}

if (!process.env.ENTRY) {
    process.env.ENTRY = main || process.cwd()
}
