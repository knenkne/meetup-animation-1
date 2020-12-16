const path = require('path')

const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const CircularDependencyPlugin = require('circular-dependency-plugin')

const ExtractClassMapPlugin = require('../plugins/extract-class-map-plugin')
const PublicPath = require('../plugins/public-path')
const ImportMap = require('../plugins/import-map')
const sumCssClassMaps = require('../utils/sum-css-class-maps')
const getProjectPackage = require('../utils/get-project-package')
const calcImportMap = require('../utils/calc-import-map')
const getLibsVersions = require('../utils/get-libs-versions')
const getLibsLocales = require('../utils/get-libs-locales')

const {
    __: {
        cleanName,
        cwd
    }
} = getProjectPackage()

const {
    CSS_HASH_MAP,
    CSS_HASH_MAP_DEPRECATED,
    NODE_ENV,
    VIZUALIZER,
    VERSION
} = process.env

const CSS_MAP_PATH = 'temp/css-hash-map.json'

module.exports = [
    // Copy locale files
    new CopyWebpackPlugin([
        {
            from: path.resolve(cwd, 'locales', '*.json'),
            to: 'locales',
            flatten: true
        },
        {
            from: path.resolve(cwd, 'assets', '**'),
            to: '.'
        }
    ]),
    new webpack.ContextReplacementPlugin(
        /moment[\\/]locale$/,
        /^\.\/(ru|en-gb)$/
    ),
    new webpack.DefinePlugin({
        DEBUG: NODE_ENV === 'development',
        'process.env.BROWSER': JSON.stringify(true),
        'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
        'process.env.PKG_ID': JSON.stringify(cleanName),
        'process.env.VERSION': JSON.stringify(VERSION),
        'process.env.LIBS': JSON.stringify(getLibsVersions()),
        'process.env.LOCALES': JSON.stringify(getLibsLocales())
    }),
    new PublicPath(),
    new ImportMap({
        app: cleanName,
        map: calcImportMap()
    }),
    new CircularDependencyPlugin({
        exclude: /node_modules/,
        failOnError: false
    }),
]

if (CSS_HASH_MAP_DEPRECATED) {
    console.warn('Пожалуйста, перейдите на вариант сборки с минимальным словарем css-hash-map.json, используя переменную среды CSS_HASH_MAP')
    module.exports.push(
        new ExtractClassMapPlugin({
            toFile: CSS_MAP_PATH,
            assignBefore: sumCssClassMaps(CSS_MAP_PATH)
        })
    )
} else if (CSS_HASH_MAP) {
    module.exports.push(
        new ExtractClassMapPlugin({
            toFile: CSS_MAP_PATH
        })
    )
}

if (VIZUALIZER) {
    module.exports.push(
        new BundleAnalyzerPlugin({
            reportFilename: './temp/statistics.html',
            analyzerMode: 'static',
            defaultSizes: 'gzip',
            openAnalyzer: false
        })
    )
}
