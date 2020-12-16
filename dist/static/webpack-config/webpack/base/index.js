const path = require('path')

const _ = require('lodash')

const createExternalLibs = require('../utils/create-external-libs')
const getProjectPackage = require('../utils/get-project-package')
const getExternalVendors = require('../utils/get-external-vendors')

const rules = require('./rules')
const plugins = require('./plugins')

const {
    __: {
        cwd,
        cleanName
    }
} = getProjectPackage()

const {
    ENTRY,
    NODE_ENV,
    NO_EXTERNALS,
    VERSION
} = process.env

const externals = [
    // Виртуальный модуль оркестровщика приложений
    '@sbol/webpage.provider.bootstrap'
]

if (!NO_EXTERNALS) {
    // Динамических перечень библиотек СБОЛ
    externals.push(createExternalLibs)
    // Статический перечень вендорных модулей на основании package.json
    const vendors = getExternalVendors()
    if (vendors) {
        externals.push(vendors)
    } else {
        console.log('В проекте нет вендоров. Мы надеемся, что вы уверены в своих действиях!')
    }
}

module.exports = {
    // Сборка производится в контексте данного приложения
    context: cwd,
    // Входная точка для сборки проекта, может быть изменена и взята не из require('package.json').main
    entry: [path.resolve(ENTRY)],

    output: {
        // Путь сборки - дев сборки кладутся отдельно
        path: path.resolve(cwd, NODE_ENV === 'production' ? 'target' : 'target-dev'),
        // Главная входная точка всегда является index.js для простоты обращений к ней
        filename: 'index.js',
        // Путь относительно статических ресурсов, где данный модуль должен забирать свои чанки
        publicPath: `/${cleanName}/${VERSION}/`,
        // Для развилки чанков между регионами используется уникальное имя jsonp
        jsonpFunction: `__webpackJsonp_${_.snakeCase(cleanName)}_${_.snakeCase(VERSION)}`,
        // Для работы с system.js
        libraryTarget: 'umd',
        // Даем разрешение логировать ошибки js из чанков
        crossOriginLoading: 'anonymous'
    },

    resolve: {
        // Допустимые расширения js
        extensions: ['.jsx', '.js'],
        // Импорты применяются либо ко входной точке, либо к node_modules
        modules: [cwd, 'node_modules']
    },
    resolveLoader: {
        modules: [
            'node_modules',
            path.resolve(__dirname, '..', 'loaders')
        ]
    },

    module: {
        rules
    },

    mode: NODE_ENV,

    plugins,

    externals
}
