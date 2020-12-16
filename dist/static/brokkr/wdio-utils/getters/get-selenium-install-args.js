module.exports = () => {
    const {
        SELENIUM_VERSION,
        CHROME_DRIVER_VERSION,
        GECKO_DRIVER_VERSION,
        IE_DRIVER_VERSION,
        DRIVERS_MIRROR,
        BROWSERS
    } = process.env

    const browsers = BROWSERS.split(',')

    const installArgs = {
        baseURL: DRIVERS_MIRROR ? `${DRIVERS_MIRROR}/selenium-server` : void 0,
        version: SELENIUM_VERSION,
        drivers: {}
    }

    if (CHROME_DRIVER_VERSION && browsers.includes('chrome')) {
        Object.assign(installArgs.drivers, {
            chrome: {
                version: CHROME_DRIVER_VERSION,
                arch: process.arch,
                baseURL: DRIVERS_MIRROR ? `${DRIVERS_MIRROR}/chromedriver` : void 0,
                processNames: ['chromedriver', 'chromedriver *32']
            }
        })
    }

    if (GECKO_DRIVER_VERSION && browsers.includes('firefox')) {
        Object.assign(installArgs.drivers, {
            firefox: {
                version: GECKO_DRIVER_VERSION,
                arch: process.arch,
                baseURL: DRIVERS_MIRROR ? `${DRIVERS_MIRROR}/geckodriver` : void 0,
                processNames: ['geckodriver']
            }
        })
    }

    if (IE_DRIVER_VERSION && browsers.includes('ie')) {
        Object.assign(installArgs.drivers, {
            ie: {
                version: IE_DRIVER_VERSION,
                arch: process.arch,
                baseURL: DRIVERS_MIRROR ? `${DRIVERS_MIRROR}/iedriver` : void 0,
                processNames: ['IEDriverServer']
            }
        })
    }

    return installArgs
}
