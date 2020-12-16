const { defineStep } = require('cucumber')
const { getProjectUrlByCode, getCssHashMapUrl, dictionaries, loginBase } = require('@sbol/brokkr')

const { customVersion, version } = require('../package')

getProjectUrlByCode.options.getDevProjectUrl = (code) => `http://localhost:${process.env.PORT_DEV_SERVER}/${code}`
getCssHashMapUrl.getDevMapUrl = (code) => `http://localhost:${process.env.PORT_DEV_SERVER}/static/${code}/${customVersion || version}/temp/css-hash-map.json`

defineStep(
    /^пользователь ждет$/,
    () => {
        browser.pause(500)
    }
)

defineStep(
    /^пользователь ждет подольше$/,
    () => {
        browser.pause(5000)
    }
)

defineStep(/пользователь проверяет доступность страницы/, function () {
    this.checkAccessibility({ checkUrl: false })
})

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
