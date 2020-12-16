/* eslint-disable no-undef, comment: Переопределение пути модуля */
/* eslint-disable camelcase, comment: Потому что __webpack_public_path__ */
import './polyfills'
import { setCommonConfig, setLauncherConfig, getCommonConfigValue } from './configuration/config'
import { setNavigation } from './configuration/navigation'
import { setInitOptions } from './configuration/init'
import parser from './configuration/parser'
import { i18n } from './configuration/i18n'
import logger from './logger'
import { Bootstrap } from './bootstrap'
import { getEnvironmentPLMiddle } from './get-environment-pl-middle'
import { ENTRY_MIN_TIMING, ENTRY_MAX_TIMING, ENTRY } from './entry/consts'
import { startBootstrap } from './start-bootstrap'
import { bizoneAdapter } from './utils/bizone-adapter'
import { collapseAppsWithVersions } from './utils/collapse-apps-with-versions'
import { designAdapter } from './utils/design-adapter'
import { createApplicationConfig } from './utils/create-application-config'
import { makeNavigationAbsolute } from './utils/make-navigation-absolute'
import intervalCallback from './utils/interval-callback'

const get = (from = {}, selectors = []): any =>
    selectors.reduce((prev, cur: string) => prev && prev[cur], from)

let stopInitialLoader = () => {
    const entry = document.getElementById(ENTRY)
    if (entry) {
        entry.style.opacity = 0

        setTimeout(() => {
            if (entry.parentNode) {
                entry.parentNode.removeChild(entry)
            }
        }, 500)
    }
}

const getEribFonts = (fontsPath) => `<style>
@font-face {
    font-family: 'SBSans';
    font-display: swap;
    src: url('${fontsPath}/regular/sbsans.eot');
    src:
        url('${fontsPath}/regular/sbsans.eot?#iefix') format('embedded-opentype'),
        url('${fontsPath}/regular/sbsans.woff2') format('woff2'),
        url('${fontsPath}/regular/sbsans.woff') format('woff'),
        url('${fontsPath}/regular/sbsans.ttf') format('truetype'),
        url('${fontsPath}/regular/sbsans.svg#SBSans') format('svg');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'SBSans';
    font-display: swap;
    src: url('${fontsPath}/semibold/sbsans.eot');
    src:
        url('${fontsPath}/semibold/sbsans.eot?#iefix') format('embedded-opentype'),
        url('${fontsPath}/semibold/sbsans.woff2') format('woff2'),
        url('${fontsPath}/semibold/sbsans.woff') format('woff'),
        url('${fontsPath}/semibold/sbsans.ttf') format('truetype'),
        url('${fontsPath}/semibold/sbsans.svg#SBSans') format('svg');
    font-weight: 600;
    font-style: normal;
}

@font-face {
    font-family: 'SBSans';
    font-display: swap;
    src: url('${fontsPath}/bold/sbsans.eot');
    src:
        url('${fontsPath}/bold/sbsans.eot?#iefix') format('embedded-opentype'),
        url('${fontsPath}/bold/sbsans.woff2') format('woff2'),
        url('${fontsPath}/bold/sbsans.woff') format('woff'),
        url('${fontsPath}/bold/sbsans.ttf') format('truetype'),
        url('${fontsPath}/bold/sbsans.svg#SBSans') format('svg');
    font-weight: bold;
    font-style: normal;
}
</style>`

// eslint-disable-next-line complexity
export default async ({
    apps: rawApps = {},
    regions: rawRegions = {},
    options: { entry = false, config = {}, navigation = {}, data = {}, messages = {} } = {},
    launcher = {},
    launcher: {
        'application.config': {
            options: launcherApplicationModuleOptions,
            features: launcherApplicationModuleFeatures
        } = {}
    } = {},
    launcherConfig: {
        options: launcherApplication = {}
    } = {}
}) => {
    // Bi.Zone адаптер, не должен блокировать работу
    try {
        bizoneAdapter()
    } catch (error) {
        console.error(error, 'Failed bizone adapter definition')
    }

    // Если мы в ЕРИБ, то получаем окружение от PL Middle через /api/bootstrap
    if (config.isErib) {
        try {
            const plUrl = config['pl.url']
            const result = await getEnvironmentPLMiddle(plUrl)
            rawRegions = result.regions
            launcher = result.launcher
            config = {
                'pl.url': plUrl,
                ...result.options.config,
                isErib: true,
                'base.url': `${plUrl}${result.options.config['base.url']}`
            }
            navigation = makeNavigationAbsolute(
                result.options.navigation,
                plUrl
            )

            const fonts = document.createElement('style')
            fonts.innerHTML = getEribFonts(`${config['res.url']}/common.contents/${config['common.contents.version']}/fonts`)
            document.head.appendChild(fonts)
        } catch (error) {
            console.error(error, 'Failed request /sbtsbol/api/bootstrap')
        }
    }

    // FIXME: 💩💩💩 Заменяем base.client.url, если значение /sbtsbol/private. Выпилить, когда в PL Middle вынесут настройку base.client.url
    if (config['base.client.url'] === '/sbtsbol/private') {
        config['base.client.url'] = ''
    }

    // FIXME: 💩💩💩 Корректировка между старыми и новыми модулями, модуль foo.3 заменяет собой foo
    designAdapter(launcher)

    // Эмуляция корневого конфига лончера
    const applicationConfig = createApplicationConfig(
        launcherApplicationModuleOptions,
        launcherApplicationModuleFeatures,
        launcherApplication
    )

    // Фичи и опции приходят сразу, сохраняем их как init параметры без флага init запроса
    Object.keys(launcher || {}).forEach((module) => {
        setInitOptions(module, launcher[module])
    })

    // Легкое форматирование пришедших свойств
    setCommonConfig(parser(config))
    setLauncherConfig(applicationConfig)

    // Перезаписываем работу console.* для логирования клиентских сценариев
    try {
        const plUrl = getCommonConfigValue('pl.url') || ''
        const logUrl = getCommonConfigValue('log.url') || ''
        const defaultLogLevel = getCommonConfigValue('log.level') || 'SILENT'
        const loggerIgnoreListPath = ['webpage.provider.bootstrap', 'features', 'BootstrapLoggerIgnoreList', 'value']
        const loggerIgnoreList = get(launcher, loggerIgnoreListPath)
        logger(
            defaultLogLevel,
            `${plUrl}${logUrl}`,
            loggerIgnoreList ? loggerIgnoreList.split(',') : []
        )
    } catch (error) {
        console.error(error, 'Failed log module init')
    }

    // Прокидываем версии модулей из launcher в apps/regions
    const apps = collapseAppsWithVersions(launcher, rawApps)
    const regions = collapseAppsWithVersions(launcher, rawRegions)

    // Запоминаем навигацию
    setNavigation(navigation)

    // Поддержка чанков и для дочерних элементов (см. @sbol/webpack-config plugins)
    window.bootstrap.config = {
        'res.url': getCommonConfigValue('res.url')
    }

    /*eslint-disable */
    // Поддержка чанков bootstrap
    __webpack_public_path__ =
        getCommonConfigValue('res.url') + __webpack_public_path__
    /* eslint-enable */

    // Установка глобальных классов для специального css
    if (getCommonConfigValue('isErib')) {
        document.body.classList.add('is-erib')
    }
    if (getCommonConfigValue('isSbolPro')) {
        document.body.classList.add('is-sbol-pro')
    }

    // Сами вычищаем регионы
    // В SBOL.PRO чат недоступен
    // FIXME: 💩💩💩 управление отображением региона должно быть на PL Middle
    if (getCommonConfigValue('isSbolPro')) {
        const chatPlacement = Object.keys(regions).find(
            (placement) => regions[placement].name === 'chat'
        )
        if (chatPlacement) {
            delete regions[chatPlacement]
        }
    }

    // FIXME: 💩💩💩 вернуть чанкнутый IE
    // Если IE, то грузим его полифиллы
    // if (window.Symbol) {
    //     await import(/* webpackChunkName: "ie-polyfills" */ './polyfills/core-ie')
    // }


    const bootstrap = new Bootstrap({
        regions,
        apps
    })


    // Редиректы: либо по настройке, либо с экрана загрузки
    const redirectModule = window.sessionStorage.getItem('redirectPL')
    try {
        if (redirectModule) {
            stopInitialLoader()
            bootstrap.history.replace(navigation[redirectModule] || redirectModule || navigation.index)
            window.sessionStorage.removeItem('redirectPL')
        } else if (entry) {
            const redirectPath = ['webpage.provider.bootstrap', 'features', 'BootstrapEntryURLRedirect', 'value']
            const redirectLauncherModule = get(launcher, redirectPath)
            bootstrap.history.replace(navigation[redirectLauncherModule] || navigation.index)
        }
    } catch (error) {
        console.error(error, 'Failed redirect module')
        stopInitialLoader()
        bootstrap.history.replace(navigation.index)
    }

    // Локализация webpage.provider.bootstrap
    await i18n.init('ru', messages)

    stopInitialLoader = intervalCallback(
        stopInitialLoader,
        ENTRY_MIN_TIMING,
        ENTRY_MAX_TIMING
    )

    setTimeout(
        startBootstrap,
        ENTRY_MIN_TIMING,
        {
            bootstrap,
            navigation,
            data,
            messages,
            launcher,
            stopInitialLoader
        }
    )
}
