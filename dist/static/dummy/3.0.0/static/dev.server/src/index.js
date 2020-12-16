const path = require('path')

const express = require('express')
const webpack = require('webpack')
const openBrowser = require('react-dev-utils/openBrowser')
const clearConsole = require('react-dev-utils/clearConsole')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const proxy = require('http-proxy-middleware')

const getDefaultConfig = require('./templates')
const noResponse = require('./middlewares/no-response')
const staticResources = require('./middlewares/static-resources')
const startLog = require('./utils/start-log')
const getServerrc = require('./utils/get-serverrc')
const getStartUrl = require('./utils/get-start-url')
const watchProjectApi = require('./utils/watch-project-api')

const {
    api: apiPath,
    html: renderHtmlPath = '3.0/index.hbs',
    templates: templatesPath = path.resolve(__dirname, 'templates'),
    hbs: hbsPath = path.resolve(
        'node_modules',
        '@sbol/webpage.provider.templates'
    ),
    locales: localesPath = path.resolve(__dirname, 'locales', 'ru.json'),
    webpackConfig: webpackConfigPath = path.resolve(
        'node_modules',
        '@sbol/webpack-config'
    ),
    proxy: proxyConfig = [],
    additionalStaticRoots = []
} = getServerrc()


module.exports = async ({ port, withOpenBrowser, withoutWebpack, onStart }) => {
    const app = express()

    const templates = require(path.resolve(templatesPath))
    const messages = require(path.resolve(localesPath))

    const {
        config: {
            'base.client.url': baseClientUrl,
            'ping.url': pingUrl,
            'api.url': apiUrl,
        },
        navigation,
        apps,
        regions,
        resourcesUrl,
        antifraudStaticRoot
    } = await templates()

    // Конфигурация proxy
    proxyConfig
        .forEach((config) =>
            app.use(proxy(config.context, config.options))
        )

    // Конфигурация json
    app.use(require('body-parser').json())

    // Конфигурация hbs
    require(path.resolve(hbsPath))
        .applyHbs(app, {
            messages,
            logger: console
        })

    // Бизнес-API (UFS, PL Middle, ERIB, ...etc)
    if (apiPath) {
        watchProjectApi({ app, location: path.resolve(apiPath) })
    }

    // Webpack обновление скриптов
    if (!withoutWebpack) {
        const webpackConfig = require(path.resolve(webpackConfigPath))
        const compiler = webpack(webpackConfig)

        app.use(
            webpackDevMiddleware(compiler, {
                publicPath: `${resourcesUrl}${webpackConfig.output.publicPath}`
            })
        )

        app.use(
            webpackHotMiddleware(compiler)
        )
    }

    // Эмуляция статических ресурсов
    app.use(
        resourcesUrl,
        express.Router()
            .all(
                /\/([.\w-]+)\/([a-z.\d-]+)\/(.*)/,
                staticResources(additionalStaticRoots)
            )
    )

    // Установка переменной среды для изменения работы заглушки
    app.all('/set_client/:client', (req, res) => {
        process.env.STUB_CLIENT = req.params.client
        res.send(`process.env.STUB_CLIENT в клиентской заглушке теперь равен ${req.params.client}`)
    })

    // Скрипты Antifraud, подогрев сессий, обновление сессий, логирование
    app.all(
        [
            `${antifraudStaticRoot}/hashtable.js`,
            `${antifraudStaticRoot}/rsa.js`,
            pingUrl,
            `${apiUrl}/warmUpSession`,
            `${apiUrl}/log`,
            `${apiUrl}/log/v2`,
            `${apiUrl}/ufs/create/session`
        ],
        noResponse
    )

    // Возврат htm-документа
    watchProjectApi({ location: path.resolve(templatesPath) })
    const htmlResolver = async (req, res) => {
        const hbsConfig = await require(path.resolve(templatesPath))(req, res)
        res.render(renderHtmlPath, {
            ...hbsConfig,
            design30: hbsConfig
        })
    }

    // Возврат html на основе объекта navigation
    app.use(Object.values(navigation), htmlResolver)

    // Активация сервера
    app.listen(port, null, () => {
        const url = getStartUrl(apps, regions, port, baseClientUrl)
        clearConsole()
        startLog(url)
        if (withOpenBrowser) {
            openBrowser(url)
        }
        if (onStart) {
            onStart()
        }
    })
}

// Дефолтная модель hbs
module.exports.getDefaultConfig = getDefaultConfig
