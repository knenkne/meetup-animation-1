module.exports = () => {
    const {
        DEBUG,
        WITH_HEAD,
        CHROME_BIN_PATH,
        BROWSERS
    } = process.env

    const browsersBlank = {
        chrome: {
            binary: CHROME_BIN_PATH,
            browserName: 'chrome',
            enableVNC: true,
            enableVideo: true,
            chromeOptions: {
                args: [
                    '--disable-gpu',
                    '--disable-infobars',
                    '--allow-running-insecure-content',
                    '--ignore-certificate-errors',
                    '--allow-insecure-localhost',
                    '--reduce-security-for-testing',
                    '--start-maximized',
                    // Консолью съедать часть экрана - не надо!
                    // '--auto-open-devtools-for-tabs'
                ]
            }
        },
        firefox: {
            browserName: 'firefox',
            maxInstances: 1,
            'moz:firefoxOptions': {
                args: []
            }
        },
        ie: {
            browserName: 'internet explorer',
            maxInstances: 1,
            platform: 'ANY',
            version: '11'
        },
        safari: {
            browserName: 'safari',
            maxInstances: 1
        }
    }

    if (!DEBUG && !WITH_HEAD) {
        browsersBlank.chrome.chromeOptions.args.push('--headless')
        browsersBlank.firefox['moz:firefoxOptions'].args.push('--headless')
    }

    return BROWSERS
        .split(',')
        .map((browser) => browsersBlank[browser])
}
