const path = require('path')

const VisualRegressionCompare = require('./wdio-utils/plugins/visual-regression-compare')
const getSeleniumParams = require('./wdio-utils/getters/get-selenium-params')
const getBrowserCapabilities = require('./wdio-utils/getters/get-browsers-capabilities')
const getSeleniumInstallArgs = require('./wdio-utils/getters/get-selenium-install-args')
const getCucumberRequire = require('./wdio-utils/getters/get-cucumber-require')
const onPrepare = require('./wdio-utils/lifecycle/on-prepare')
const onComplete = require('./wdio-utils/lifecycle/on-complete')

const {
    TAG_EXPRESSION,
    WDIO_INSTANCES,
    SELENIUM_SERVER,
    PORT_DEV_SERVER
} = process.env

const seleniumInstallArgs = getSeleniumInstallArgs()
const seleniumParams = getSeleniumParams(SELENIUM_SERVER)
const cucumberRequire = getCucumberRequire()
const capabilities = getBrowserCapabilities()

const wdioLifeCycle = {
    // Перед запуском необходимо поднять зеркало и заглушку (и собрать проект)
    onPrepare,
    // После запуска необходимо подчистить процессы
    onComplete
}

const seleniumProperties = {
    // host, port, path для поднятого selenium standalone server
    ...seleniumParams,
    // Локальное зеркало установки драйверов, необходимо, поскольку на серверах Jenkins нет интернета
    seleniumArgs: seleniumInstallArgs,
    seleniumInstallArgs,
}

const framework = {
    // Фреймворк тестирования (BDD выбран за основу)
    framework: 'cucumber',
    specs: [
        // Размещение фич (globs), берем всегда проектные
        path.resolve('cucumber', '**', '*.feature')
    ],
    cucumberOpts: {
        // Файлы для инициализации cucumber (броккр + проект)
        require: cucumberRequire,
        // Выбор тегов для запуска тестов
        tagExpression: TAG_EXPRESSION,
        timeout: 120000
    }
}

const browsers = {
    // Запуск в заданных браузерах
    capabilities
}

const reporters = {
    // Allure выбран основным отчетом тестирования
    reporters: ['allure'],
    reporterOptions: {
        allure: {
            // Не менять! Необходим Jenkins для прикрепления отчета и должен лежать в папке reports
            outputDir: './reports/allure-results',
            // Отключаем самобытные шаги webdriver
            disableWebdriverStepsReporting: true,
            // Используем те шаги, которые написали
            useCucumberStepReporter: true
        }
    }
}

const plugins = {
    services: [
        // Плагин работы с персональным selenium, обязателен
        'selenium-standalone',
        // Плагин регрессии, подключает функционал для проведения регресса
        'visual-regression'
    ],
    plugins: {
        'wdio-screenshot': {}
    },
    // Инициализация метода webdriverio (browser) для регрессионного тестирования картинки
    visualRegression: {
        compare: VisualRegressionCompare
    }
}

const commonWdioConfig = {
    // Максимальное количество параллельных запусков (самое надежное - 1, но это ведет к долгому прохождению тестов)
    maxInstances: Number(WDIO_INSTANCES),
    // Синхронный код вместо промисов
    sync: true,
    // Уровень логирования: silent | verbose | command | data | result | error
    logLevel: 'error',
    // Повышаем восприятие логов
    coloredLogs: true,
    // Стараемся максимально провести все тесты, не смотря на ошибки; значение ноль игнорирует ошибки тестов
    bail: 0,
    // Если шаг с ошибкой, то сохраняем скриншот по данному пути
    screenshotPath: './reports/error-shots/',
    // Базовый путь для команд типа browser.url()
    baseUrl: `http://localhost:${PORT_DEV_SERVER}`,
    // Исходный таймаут для команд типа browser.waitFor(), стремимся минимизировать
    waitforTimeout: 10000,
    // Время ожидания ответа от selenium, стремимся минимизировать
    connectionRetryTimeout: 90000,
    // Количество попыток подключиться к selenium, стремимся минимизировать
    connectionRetryCount: 3
}

exports.config = {
    ...wdioLifeCycle,
    ...seleniumProperties,
    ...framework,
    ...browsers,
    ...reporters,
    ...plugins,
    ...commonWdioConfig
}
