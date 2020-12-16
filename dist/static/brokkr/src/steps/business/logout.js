const df = require('../../utils/define-functionality')

const logout = {

    clickLogout: df(
        /^Пользователь выходит из системы$/,
        () => {
            const url = browser
                .getUrl()
                .replace('front.', '')
                .replace(/^(https?:\/\/)([^/]+)(.+)$/, '$1$2/PhizIC/logoff.do')

            browser.url(url)
        }
    )
}

module.exports = logout
