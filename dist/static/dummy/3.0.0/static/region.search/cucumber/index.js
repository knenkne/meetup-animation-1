const { defineStep } = require('cucumber')
const { getProjectUrlByCode, getCssHashMapUrl, dictionaries, loginBase } = require('@sbol/brokkr')
const assert = require('assert')

const { customVersion, version } = require('../package')

require('./searchResults')
require('./suggests')
require('./searchInput')

getProjectUrlByCode.options.getDevProjectUrl = (code) => `http://localhost:${process.env.PORT_DEV_SERVER}/${code}`
getCssHashMapUrl.getDevMapUrl = (code) => `http://localhost:${process.env.PORT_DEV_SERVER}/static/${code}/${customVersion || version}/temp/css-hash-map.json`

defineStep(
    /^пользователь собирается гуглить перевод$/,
    () => {
        browser.url('https://translate.google.ru/')
    }
)

defineStep(
    /^пользователь ждет$/,
    () => {
        browser.pause(500)
    }
)

defineStep(
    /^пользователь долго ждет$/,
    () => {
        browser.pause(1000)
    }
)

defineStep(/пользователь проверяет доступность страницы/, function () {
    this.checkAccessibility({ checkUrl: false })
})

defineStep(
    /^установить фокус в строке поиска$/,
    () => {
        const elem = $('#global-search')

        elem.click()
    }
)

defineStep(
    /^очистить строку поиска$/,
    () => {
        const elem = $('//*[@id="header-region"]/div/div/div/div[2]/div/div[1]/button')

        elem.click()
    }
)

defineStep(
    /^проверить, что строка поиска пустая$/,
    () => {
        const elem = $('#global-search')

        assert.equal(elem.getValue(), '')
    }
)

// Расширяем словари для возможности использовать семантичный текст вместо технических селекторов или xpath
Object.assign(dictionaries.selectors, {
    'поле для перевода': '#source',
    'результат выдачи': '#result_box'
})

// Расширяем перечень клиентов
Object.assign(loginBase, {
    'Иван Иванович - успешный клиент': {
        login: 'success',
        password: 'success'
    },
    'Иван Иванович - менее успешный клиент': {
        login: 'reject',
        password: 'reject'
    },
})
