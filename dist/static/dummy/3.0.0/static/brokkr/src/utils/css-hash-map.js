const rp = require('request-promise')
const chalk = require('chalk')

const config = require('./config')

const cssHashMap = {}

module.exports = {
    update (nextMap) {
        Object.assign(cssHashMap, nextMap)
    },
    logError (error, url) {
        console.warn(chalk.yellow(`Warning: Не удалось обновить cssHashMap по url ${url}. ${error.name} ${error.statusCode}.
    Возможно, ее нет и быть не должно.`))
    },
    updateByUrl (urls) {
        urls = Array.isArray(urls) ? urls : [urls]

        for (let i = 0; i < urls.length; i += 1) {
            let resolved = false
            rp({
                url: urls[i],
                method: 'get',
                json: true,
                timeout: config.cssHashMapTimeout
            })
                .then(this.update)
                .catch((error) => this.logError(error, urls[i]))
                .then(() => {
                    console.log(`Дозапросил css-hash-map по URL ${urls[i]}`)
                    resolved = true
                })

            browser.waitUntil(() => resolved, {
                timeout: 2000,
                timeoutMsg: `${urls[i]} не отвечает. Проверьте работу приложения!`
            })
        }
    },
    get () {
        return cssHashMap
    }
}
