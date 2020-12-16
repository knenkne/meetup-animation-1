const _ = require('lodash')

const df = require('../../../utils/define-functionality')
const { userEyesFocus } = require('../../../utils/user-eyes-focus')
const config = require('../../../utils/config')

const moveTab = (step) => {
    const currentTabId = browser.getCurrentTabId()
    const allTabs = browser.getTabIds()
    const tabHandle = _.indexOf(allTabs, currentTabId) + step
    // TODO: варнинг для любителей несуществующих вкладок
    browser.switchTab(allTabs[tabHandle])
}

module.exports = {

    openUrl: df(
        /^пользователь открывает сайт "([^"]*)"$/,
        function openUrl (pageUrl) {
            browser.url(pageUrl)

            this.checkAccessibility()
        }
    ),

    windowHandleSize: df(
        /^пользователь задает размер окна "([^"]*)" на "([^"]*)"$/,
        (width, height) => {
            browser.windowHandleSize({ width, height })
        }
    ),

    windowHandleFullscreen: df(
        /^пользователь разворачивает окно$/,
        () => {
            browser.windowHandleFullscreen()
        }
    ),

    windowScroll: df(
        /^пользователь скролит вниз$/,
        () => {
            browser.scroll(0, config.verticalScroll)
        }
    ),

    windowScrollInFocus: df(
        [
            /^пользователь скролит вниз в фокусе$/,
            /^пользователь скролит вниз в зрительном фокусе$/,
        ],
        () => {
            userEyesFocus.getBlock().scroll(0, config.verticalScroll)
        }
    ),

    windowScrollUp: df(
        /^пользователь скролит вверх до рабочей области$/,
        () => {
            browser.$('#app, #main').scroll()
        }
    ),

    windowRefresh: df(
        /^пользователь обновляет страницу$/,
        () => {
            browser.refresh()
        }
    ),

    windowBack: df(
        /^пользователь возвращается на предыдущую страницу$/,
        () => {
            browser.back()
        }
    ),

    windowClose: df(
        /^пользователь закрывает вкладку$/,
        () => {
            browser.close()
        }
    ),

    windowChangeTabRight: df(
        /^пользователь переключается на соседнюю вкладку справа$/,
        () => {
            if (_.includes(process.env.BROWSERS, 'firefox')) {
                // добавляем паузу из-за лага открытия страницы под некоторыми браузерами
                browser.pause(2000)
            }
            moveTab(1)
        }
    ),

    windowChangeTabLeft: df(
        /^пользователь переключается на соседнюю вкладку слева$/,
        () => {
            moveTab(-1)
        }
    ),

    debug: df(
        /^дебаг|debug$/,
        () => {
            browser.debug()
        }
    )

}
