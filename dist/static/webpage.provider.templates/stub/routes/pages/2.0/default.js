const defaultData = require('../../../models/2.0/main.json')
const navigation = require('../../../models/2.0/navigation.json')

const windowConfig = {
    'ufs.block.root.url': 'http://sbt-okdbo-0078.sigma.sbrf.ru/multistub',
    resUrl:
        'http://sbt-okdbo-0078.sigma.sbrf.ru/builds/sbol/payments.intertransfer/r-1.0.0',
    resourcesRootUrl: 'http://sbt-okdbo-0078.sigma.sbrf.ru/builds/sbol'
}

module.exports = require('express')
    .Router()
    // CASES
    .get('/', (req, res) => {
        res.redirect('/2.0/default')
    })
    .get('/default', (req, res) => {
        res.redirect('/2.0/default/payments/intertransfer')
    })
    .get('/default/payments/intertransfer', (req, res) => {
        const options = {
            ...defaultData,
            config: windowConfig
        }

        res.render('2.0/index.hbs', options)
    })
    .get('/default-secondary', (req, res) => {
        const options = {
            ...defaultData,
            pageAlias: 'brokerage',
            menuSelected: 'OTHER'
        }

        options.navMap.MAINMENU.primaryElements.LOANS.menuSelected = 'OTHER'
        options.navMap.MAINMENU.secondaryElements.BROKERAGE.menuSelected =
            'BROKERAGE'

        res.render('2.0/index.hbs', options)
    })
    .get('/no-fast-payments', (req, res) => {
        const options = {
            ...defaultData,
            showFastPayments: false
        }

        res.render('2.0/index.hbs', options)
    })
    .get('/no-secondary-elements', (req, res) => {
        const options = {
            ...defaultData,
            isSecondaryElements: false
        }

        res.render('2.0/index.hbs', options)
    })
    .get('/no-avatar', (req, res) => {
        const options = {
            ...defaultData,
            person: defaultData.person
        }

        options.person.avatar.temporaryUrl = ''

        res.render('index.hbs', options)
    })
    .get('/clear-panel', (req, res) => {
        res.render('2.0/index.hbs', require('../../../models/2.0/clear.json'))
    })
    .get('/chat', (req, res) => {
        const options = {
            ...defaultData,
            showChat: true,
            chatUrl:
                'http://sbt-okdbo-0078.sigma.sbrf.ru/builds/sbol/chat/r-0.0.1/index.js'
        }

        res.render('2.0/index.hbs', options)
    })
    .get('/navigation', (req, res) => {
        const options = {
            ...defaultData,
            isNewMenuEnabled: true,
            navigationStaticUrl:
                'http://sbt-okdbo-0078.sigma.sbrf.ru/builds/sbol/common.navigation/1.1.3',
            // TODO: заполнить данными и сделать заглушку для наглядности работы
            navSettings: JSON.stringify(navigation)
        }

        res.render('2.0/index.hbs', options)
    })
