const stub = require('@sbol/webpack-config/stub')
const { version } = require('@sbol/webpack-config/package')

module.exports = () => {
    if (version.startsWith('10.')) {
        const vendorsPath = require.resolve('@sbol/lib.vendor/dist/vendor.min.js')

        return (app) => {
            // В 10 вебпак-конфиге функция заглушки не является фабрикой
            stub(app)

            // Вендоры для дев сервера в 10 вебпак-конфиге подкладываются в папку таргет
            app.use('/lib.vendor/*', (req, res) => {
                res.sendFile(vendorsPath)
            })
        }
    }

    return stub(true)
}
