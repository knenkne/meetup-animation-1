/* eslint-disable no-console, comment: отслеживаем состояние композитного шага */
const df = require('../../utils/define-functionality')
const loginBase = require('../../utils/login-base')
const getAuthUrl = require('../../utils/get-auth-url')
const { userEyesFocus } = require('../../utils/user-eyes-focus')
const { authTimeout } = require('../../utils/config')

const loginActions = {

    loginByIdInSBOL: df(
        /^пользователь (?:авторизуется|аутентифицируется) в СБОЛ по id "([^"]*)"$/,
        function loginByIdInSBOL (id) {
            getAuthUrl.options.userId = id

            const {
                isDev,
                isIft,
            } = getAuthUrl.options

            console.log('===========')
            console.log('Начинаю процесс авторизации')
            browser.url(getAuthUrl())
            const url = browser.getUrl()
            console.log(`Посещаю URL: ${url}`)

            if (isIft()) {
                const prevUrl = browser.getUrl()
                const { login, password } = loginBase[id]

                // Вводим логин/пароль и жмем кнопку
                if (browser.isExisting('#login')) {
                    console.log('CSA')
                    userEyesFocus.getElementBySelector('#login').setValue(login)
                    userEyesFocus.getElementBySelector('#password').setValue(password)
                    userEyesFocus.getElementBySelector('#buttonSubmit .b-btn').click()
                } else if (browser.isExisting('#homeAuth [name="loginByLogin"]')) {
                    console.log('ESA')
                    userEyesFocus.getElementBySelector('#homeAuth [name="loginByLogin"]').setValue(login)
                    userEyesFocus.getElementBySelector('#homeAuth [name="password"]').setValue(password)
                    userEyesFocus.getElementBySelector('#homeAuth [data-unit="button:general"], #homeAuth [data-unit="button:action"]').click()
                } else {
                    throw new Error('brokkr не нашел известную ему форму аутентификации')
                }

                // Ждем, пока нас аутентифицируют
                console.log('Отправляю данные аутентификации')
                console.time('Аутентификация окончена. Она длилась')
                browser.waitUntil(
                    () => prevUrl !== browser.getUrl(),
                    authTimeout,
                    `Аутентифицируемся в течение ${authTimeout} миллисекунд`
                )
                console.timeEnd('Аутентификация окончена. Она длилась')

                // Если не подключен Мобильный Банк, то нужно обойти этот шаг
                if (browser.isExisting('form[name="StartMobileBankRegistrationForm"]')) {
                    console.log('У клиента не подключен Мобильный шаг, будем обходить этот шаг')
                    browser.click('.commandButton > div')
                    console.log('Нажимаю Подключить')
                }
            } else if (isDev()) {
                console.log('Полагается, что пользователь аутентифицировался, его id сохранен')
            }
        }
    ),

}

module.exports = loginActions
