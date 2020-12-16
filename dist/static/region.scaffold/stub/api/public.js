const express = require('express')
const _ = require('lodash')

const products = require('./jsons/private/products/list.do')
const carLoans = require('./jsons/car-loan/v1/CarLoans')
const investments = require('./jsons/private/investments/list')
const brokerage = require('./jsons/private/brokerage/list')
const ufsLoans = require('./jsons/ib-dashboard-bh/loans')
const insuranceContracts = require('./jsons/private/insurance/contract/list')
const mainScreen = require('./jsons/main-screen/index')
const creditabilitySuccess = require('./jsons/creditability/success')

const managerSbolPro = require('./jsons/private/getManagerInfo/sbol-pro')
const managerSb1 = require('./jsons/private/getManagerInfo/cm-sberbank-1')
const manager = require('./jsons/private/getManagerInfo/cm')

const userPropBlockedCards = require('./jsons/private/userProperties.do')
const userPropTheme = require('./jsons/private/userProperties.do.theme')

const eribRouter = express
    .Router()
    .use('/PhizIC/user/images/SMALL', express.static('./stub/avatars'))

const clientApiRouter = express
    .Router()
    .all('/private/products/list.do', (req, res) => {
        let pickedProducts = products.response
        if (req.query.showProductType === 'depoaccounts') {
                // атмосфера ериба
                const lowercaseDepo = products.response['depoaccounts'] ? { depoaccounts: products.response['depoaccounts'] } : null
                const camelCaseDepo = products.response['depoAccounts'] ? { depoAccounts: products.response['depoAccounts'] } : null
                pickedProducts = lowercaseDepo || camelCaseDepo
        } else if (req.query.showProductType) {
            pickedProducts = _.pick(
                pickedProducts,
                req.query.showProductType.split(',')
            )
        }
        res.send({
            response: pickedProducts
        })
    })
    .all('/private/payments/list.do', (req, res) => {
        const operations = require('./jsons/private/payments/list.do').response.operations.operation
        const operation = []

        res.send({
            "response": {
                "status": {
                    "code": 0
                },
                "operations": {
                    "operation": operation.length ? operation : operations
                }
            }
        })
    })
    .all('/private/messages/list.do', (req, res) => {
        const messages = require(`./jsons/private/messages/list.do`)

        const maxMessages = Math.floor(Math.random() * (messages.response.Messages.Message.length - 1)) + 1

        const responseBody = _.cloneDeep(messages)
        responseBody.response.Messages.Message = responseBody.response.Messages.Message.slice(0, maxMessages)

        res.send(responseBody)
    })
    .all('/private/getManagerInfo.do', (req, res, next) => {
        if (_.isEmpty(req.query)) {
            // для SB1
            setTimeout(() => res.send(managerSb1), 1000)
            // для премьеров
            //res.send(manager)
        } else {
            res.send(managerSbolPro)
        }
    })
    .all('/private/profile/info.do', (req, res, next) => {
        try {
            setTimeout(() => res.send(require(`./jsons/private/profile/info.do.json`)), 3000)
        } catch (e) {
            next()
        }
    })
    .all('/private/userProperties.do', (req, res, next) => {
        if (req.query.key === 'com.rssl.phizic.userSettings.design.theme') {
            res.send(userPropTheme)
        } else {
            res.send(userPropBlockedCards)
        }
    })
    .all('/private/*', (req, res, next) => {
        try {
            res.send(require(`./jsons/private/${req.params[0]}`))
        } catch (e) {
            next()
        }
    })

const ufsRouter = express
    .Router()
    .all('/main-screen/rest/v1/web/section/meta',
        (req, res) => {
            setTimeout(() => res.send(mainScreen), 500)
        }
    )
    .all(
        '/car-loan/v1/sbol/Banking/Products/Loans/CarLoans/Application/list',
        (req, res) => {
            res.send(carLoans)
        }
    )
    .all(
        '/bh-ubagreements-ib/v3.0/ib/banking/products/investments/contract/list',
        (req, res) => {
            setTimeout(() => res.send(investments), 500)
        }
    )
    .all(
        '/ib-dashboard-bh/person-credit/v1/ib/banking/products/loans/application/list',
        (req, res) => {
            setTimeout(() => res.send(ufsLoans), 500)
        }
    )
    .all(
        '/brokerage-info-ib/rest/v1.0/ib/Banking/Product/Brokerage/Registry/List',
        (req, res) => {
            setTimeout(() => res.send(brokerage), 500)
            // return res.code(500)
        }
    )
    .all(
        '/private/insurance/contract/list',
        (req, res) => {
            setTimeout(() => res.send(insuranceContracts), 500)
        }
    )
    .post('/person-credit/v7/ib/banking/products/loans/lending-capacity/creditability/summary', (req, res) =>
        setTimeout(() => res.send(creditabilitySuccess), 2000)
    )

module.exports = express
    .Router()
    .use('/ERIB', eribRouter)
    .use('/UFS', ufsRouter)
    .use('/ERIB/clientapi', clientApiRouter)

module.exports.eribRouter = eribRouter
module.exports.ufsRouter = ufsRouter
module.exports.clientApiRouter = clientApiRouter
