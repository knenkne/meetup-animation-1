const assert = require('assert')

const _ = require('lodash')

const df = require('../../../utils/define-functionality')
const { userEyesFocus } = require('../../../utils/user-eyes-focus')
const { loadTimeout } = require('../../../utils/config')

const getActualConsole = () => _.last(browser.log('browser').value).message
const checkConsoleText = (text) => getActualConsole().includes(text)
const getElementWithText = (text) => _.find(userEyesFocus.getAllElementsBySelector('*'), (element) => element.getText() === text)
const isVisibleElementWithText = (text) => getElementWithText(text).isVisible()

const basic = {

    checkUrl: df(
        /^открыт адрес сайта "([^"]*)"$/,
        (url) => {
            assert.equal(browser.getUrl(), url)
        }
    ),

    checkUrlExistsValue: df(
        /^адрес сайта содержит значение "([^"]*)"$/,
        (url) => {
            assert(browser.getUrl().includes(url))
        }
    ),

    checkDocumentTitle: df(
        /^пользователь проверяет заголовок документа "([^"]*)"$/,
        (documentTitle) => {
            assert.equal(browser.getTitle(), documentTitle)
        }
    ),

    checkTitle: df(
        /^пользователь проверяет заголовок страницы "([^"]*)"$/,
        (expectedText) => {
            // TODO: обвязка содержит еще один h1
            const headers = browser.getText('h1')
            assert.equal(_.isArray(headers) ? headers[1] : headers, expectedText)
        }
    ),

    checkPresent: df(
        /^присутствует (?:элемент|кнопка|поле) с текстом "([^"]*)"$/,
        (text) => {
            assert(isVisibleElementWithText(text))
        }
    ),

    checkMissing: df(
        /^(?:отсутствует|не отображается) (?:элемент|кнопка|поле) с текстом "([^"]*)"$/,
        (text) => {
            assert(!isVisibleElementWithText(text))
        }
    ),

    checkConsoleLog: df(
        /^в консоли появилось сообщение "([^"]*)"$/,
        (text) => {
            assert(checkConsoleText(text))
        }
    ),

    checkConsoleNoLog: df(
        /^в консоли отсутствует сообщения "([^"]*)"$/,
        (text) => {
            assert(!checkConsoleText(text))
        }
    ),

    // TODO: потенциально неработающий шаг
    waitChangeUrl: df(
        /^пользователь ждет смены адреса страницы$/,
        () => {
            browser.waitUntil(
                () => !browser.$('.app').isVisible(),
                loadTimeout,
                'Идет смена адреса страницы...'
            )
        }
    ),

}

module.exports = basic
