import log from '../../bootstrap-logger'
import { loaderViewPlugin } from '../loader-view'

import './style.css'

const camelCase = (str) =>
    str
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())

const globalVars = (
    app,
    {
        navigation,
        config,
        initResponse: { settings, options, features, messages }
    }
) => {
    const legacyConfiguration = Object.keys(config).reduce(
        (memo, key) => ({
            ...memo,
            [key]: config[key],
            [camelCase(key)]: config[key]
        }),
        {}
    )

    const plainPermissions = Object.keys(config.permissions || {}).filter(
        (permission) => {
            const perm = config.permissions[permission]

            // TODO: обратная совместимость с массивом строк
            return perm.isPl || perm.isERIB || perm.isUFS
        }
    )

    const plainPermissionsObject = plainPermissions.reduce((memo, right) => {
        Object.assign(memo, { [right]: 'true' })

        return memo
    }, {})

    window.modules = {
        [app.name]: {
            version: app.version,
            features,
            options
        }
    }
    window.navigation = navigation
    window.Message = messages
    window.config = {
        // Brokerage compatible
        ...plainPermissionsObject,
        // Service settings
        ...settings,
        // Раньше почти все называли в camelCase
        ...legacyConfiguration,
        // Корень стат.ресурсов размещался по длинному названию
        resourcesRootUrl: config['res.url'],
        // Права пользователя превращались в строку
        permissions: JSON.stringify(plainPermissions),
        // Подменяем главную старую на главную новую
        eribMainUrl: navigation.index,
        // erib.url -> eribNode
        eribNode: config['erib.url'],
        // Вместо корня стат.ресурсов передавался путь до версии модуля
        resUrl: `${config['res.url']}/${app.name}/${app.version}`,
        logLevel: 'SILENT',
        'log.level': 'SILENT'
    }
}

const prepareEntryNode = () => {
    const mainTag = document.getElementById('main') // TODO: хардкод элемента
    mainTag.innerHTML = ''
    const appTag = document.createElement('legacy')
    appTag.id = 'app'
    mainTag.appendChild(appTag)
}

const addPseudoAside = () => {
    const div1 = document.createElement('div')
    div1.style.display = 'none'
    const div2 = document.createElement('div')
    const aside = document.createElement('aside')
    aside.id = 'left'

    div1.appendChild(div2)
    div1.appendChild(aside)
    document.body.appendChild(div1)
}

const addPseudoScript = () => {
    const script = document.createElement('script')
    script.id = 'config'

    script.setAttribute('ping-url', window.config['ping.url'])
    script.setAttribute('base-url', window.config['base.url'])
    script.setAttribute('res-url', window.config.resUrl)
    script.setAttribute('user-id', window.config['user.id'])
    script.setAttribute('erib-node', window.config['erib.url'])
    script.setAttribute('erib-main-url', window.config.eribMainUrl)

    document.body.appendChild(script)
}

const addAnalyticsVendors = () => {
    const rutargetConfig = document.createElement('script')
    rutargetConfig.innerHTML =
        'window._rtgParams = {rtgNoSync: true, rtgSyncFrame: false};'
    const rutarget = document.createElement('script')
    rutarget.src = '//cdn.rutarget.ru/static/tag/tag.js'
    const yandex = document.createElement('script')
    yandex.src = '//mc.yandex.ru/metrika/watch.js'
    const google = document.createElement('script')
    google.src = 'https://www.google-analytics.com/analytics.js'

    document.body.appendChild(rutargetConfig)
    document.body.appendChild(rutarget)
    document.body.appendChild(yandex)
    document.body.appendChild(google)
}

const stubLoaderApi = () => {
    window.startLoader = () => loaderViewPlugin.currentLoader.start(30)
    window.stopLoader = () => {
        loaderViewPlugin.currentLoader.setPercent(100)
        setTimeout(() => loaderViewPlugin.currentLoader.stop(), 500)
    }
}

const startApp = (app, resUrl) => {
    // Вендорный скрипт
    const scriptVendor = document.createElement('script')
    scriptVendor.src = `${resUrl}/lib.vendor/${app.vendor ||
    app.vendorVersion}/index.js`
    scriptVendor.crossOrigin = 'anonymous'
    // Скрипт приложения
    const scriptApp = document.createElement('script')
    scriptApp.src = `${resUrl}/${app.name}/${app.version}/index.js`
    scriptApp.crossOrigin = 'anonymous'

    scriptApp.onload = () => {
        // Чистим все lib.* скрипты из head ради чанков модулей 2.4 дизайна (мешаются модули дизайна 3.0)
        [...document.head.querySelectorAll('[src*="lib."]')].forEach((node) => node.removeAttribute('src'))
    }

    // После загрузки вендоров загрузить приложение
    scriptVendor.onload = () => {
        // Адаптация прежнего тега и очистка скелетонов
        prepareEntryNode()
        // Brokerage
        addPseudoAside()
        addPseudoScript()
        // Analytics blocker
        addAnalyticsVendors()
        // Start, stop loader
        stubLoaderApi()

        // Start app
        // TODO: дополнительная проверка, если пользователь ушел на другую страницу не дождавшись загрузки модуля 2.4, то appendChild делать не нужно
        document.body.appendChild(scriptApp)
    }

    // Старт приложения
    document.body.appendChild(scriptVendor)
}

const compatibleMatches = (node, ...args) => {
    if (node.matches) {
        return node.matches(...args)
    } else if (node.msMatchesSelector) {
        return node.msMatchesSelector(...args)
    }

    throw new Error('No compatible method for HTMLElement.matches')
}

const addLibScriptObserver = (() => {
    let observer
    const container = document.head

    const onMutate = (mutationsList) => {
        mutationsList.forEach((mutation) => {
            if (mutation.addedNodes.length) {
                mutation.addedNodes.forEach((node) => {
                    if ((node instanceof HTMLElement) && compatibleMatches(node, '[src*="lib."]')) {
                        // Чистим все lib.* скрипты из head ради чанков модулей 2.4 дизайна (мешаются модули дизайна 3.0)
                        node.removeAttribute('src')
                    }
                })
            }
        })
    }

    return () => {
        if (observer) {
            return
        }

        observer = new MutationObserver(onMutate)
        observer.observe(container, { childList: true })
    }
})()

// Делаем доступной работу v2.4
export default (extraArgs, props) => {
    log.info(
        `Start module (for 2.4): ${extraArgs.name}/${
            extraArgs.version
        }/index.js`
    )
    // Устанавливаем глобальные переменные в дизайне 2.4
    globalVars(extraArgs, props)
    // Вешаем MutationObserver на удаление lib.* скриптов из head ради чанков модулей 2.4
    addLibScriptObserver()

    try {
        // Подготовка скриптов и их запуск
        startApp(extraArgs, props.config['res.url'])
    } catch (error) {
        log.error(extraArgs.name, error)
        // toErrorPage()
    }
}
