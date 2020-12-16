const { defineStep } = require('cucumber')
const assert = require('assert')
const { getProjectUrlByCode, getCssHashMapUrl, dictionaries, loginBase } = require('@sbol/brokkr')

const { version } = require('../package')

getProjectUrlByCode.options.getDevProjectUrl = (code) =>
    `http://localhost:${process.env.PORT_DEV_SERVER || process.env.PORT}/${code}`
getCssHashMapUrl.getDevMapUrl = (code) =>
    `http://localhost:${
        process.env.PORT_DEV_SERVER || process.env.PORT
    }/static/${
        code
    }/${
        process.env.VERSION || version
    }/temp/css-hash-map.json`


defineStep(/пользователь проверяет доступность страницы/, function () {
    this.checkAccessibility({ checkUrl: false })
})

defineStep(/пользователь проверяет относительный адрес страницы равный "([^"]+)"/, function (path) {
    const [, ...rest] = browser.getUrl().replace('http://', '').split('/')

    assert.equal(path, `/${rest.join('/')}`)
})

Object.assign(loginBase, {
    main: {
        login: 'main',
        password: 'main'
    }
})

Object.assign(dictionaries.selectors, {
    'главная картинка': ':hash(promo-*--src-pages-promo-builder--image-right)',
    'текстовый блок в заголовке': ':hash(promo-*--src-pages-promo-builder--promo-header) :hash(promo-*--src-pages-promo-builder--primitive)',
    'быстрые заметки': ':hash(promo-*--src-pages-promo-builder--card-container-3) :hash(promo-*--src-pages-promo-builder--card-top-icon)',
    'текстовый блок в ссылках': ':hash(promo-*--src-pages-promo-builder--promo-app-links) :hash(promo-*--src-pages-promo-builder--primitive)',
    'QR-коды': ':hash(promo-*--src-pages-promo-builder--promo-app-links) :hash(promo-*--src-pages-promo-builder--qr)',
    'блок дополнительной информации': ':hash(promo-*--src-pages-promo-builder--card-container-2x2) :hash(promo-*--src-pages-promo-builder--card-top-icon-borderless)',
    'кнопка оформленного сервиса': ':hash(promo-*--src-pages-promo-style--done) a'
})