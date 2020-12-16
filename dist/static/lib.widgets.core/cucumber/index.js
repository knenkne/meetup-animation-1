const { defineStep } = require('cucumber')

defineStep(/пользователь проверяет доступность примеров библиотеки по пути "([^"]*)"/, function (relativePath) {
    browser.url(`http://localhost:${process.env.PORT_DEV_SERVER}/?cleanInterface=true#!/${relativePath}`)
    this.checkAccessibility({ checkUrl: false })
})
