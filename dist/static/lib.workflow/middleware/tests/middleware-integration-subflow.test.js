/* global describe, it, before, after, beforeEach  */
/* eslint global-require: 0 */

const request = require('request')
const { expect } = require('chai')

const { DEFAULT_PID, DEFAULT_DOCUMENT_ID } = require('../constants')

const { makeServer, flushServerState } = require('./make-server')
const mainFlowConfig = require('./fixtures/subflow/flow-config-with-entering-subflow-and-return')
const confirmationSubflowConfig = require('./fixtures/subflow/confirmation-subflow-config')
const step1Response = require('./fixtures/subflow/step1-response')
const step2Response = require('./fixtures/subflow/step2-response')
const step3Response = require('./fixtures/subflow/step3-response')
const step1ConfirmationResponse = require('./fixtures/subflow/step1-confirmation-response')
const confirmationWrongPassword = require('./fixtures/subflow/step1-confirmation-wrong-password-response')


const WF_ENDPOINT = 'http://127.0.0.1:3000'
const MAIN_FLOW_GATE = `${WF_ENDPOINT}/main`
const SUBFLOW_FLOW_GATE = `${WF_ENDPOINT}/confirmation`

describe('Middleware - интеграционные тесты (subflow - confirmation)', () => {
    let server

    before((done) => {
        flushServerState()
        server = makeServer([mainFlowConfig, confirmationSubflowConfig])
        done()
    })

    after((done) => {
        flushServerState()
        server.close(done)
    })

    it('Отправляет данные первого шага в процессе в ответ на команду START', (done) => {
        const requestOptions = {
            url: `${MAIN_FLOW_GATE}?cmd=START&name=main`,
            json: true,
            body: {}
        }

        request.post(requestOptions, (error, readableStream, response) => {
            expect(error).to.equal(null)
            expect(response).to.deep.equal(step1Response)
            done()
        })
    })
    it('Отправляет данные второго шага в ответ на команду EVENT=next', (done) => {
        const requestOptions = {
            url: `${MAIN_FLOW_GATE}?cmd=EVENT&name=next&pid=${DEFAULT_PID}`,
            json: true,
            body: {
                document: {
                    documentId: DEFAULT_DOCUMENT_ID
                }
            }
        }

        request.post(requestOptions, (error, readableStream, response) => {
            expect(error).to.equal(null)
            expect(response).to.deep.equal(step2Response)
            done()
        })
    })
    it('Отправляет инстрцукцию о необходимости перехода в подпроцесс', (done) => {
        const requestOptions = {
            url: `${MAIN_FLOW_GATE}?cmd=EVENT&name=next&pid=${DEFAULT_PID}`,
            json: true,
            body: {}
        }

        const expected = {
            success: true,
            body: {
                pid: '123456789-pid',
                result: 'EXTERNAL_ENTER',
                url: '/confirmation'
            },
        }

        request.post(requestOptions, (error, readableStream, responseBody) => {
            expect(error).to.equal(null)
            expect(responseBody).to.deep.equal(expected)
            done()
        })
    })
    it('Отправляет данные первого шага подпроцесса в ответ на команду EVENT on-enter', (done) => {
        const requestOptions = {
            url: `${SUBFLOW_FLOW_GATE}?cmd=EVENT&name=on-enter&pid=${DEFAULT_PID}`,
            json: true,
            body: {}
        }

        request.post(requestOptions, (error, readableStream, response) => {
            expect(error).to.equal(null)
            expect(response).to.deep.equal(step1ConfirmationResponse)
            done()
        })
    })
    it('Отправляет message, если пароль не верный', (done) => {
        const requestOptions = {
            url: `${SUBFLOW_FLOW_GATE}?cmd=EVENT&name=confirmation-next&pid=${DEFAULT_PID}`,
            json: true,
            body: {
                fields: {
                    'confirmation:password': '12323'
                }
            }
        }

        request.post(requestOptions, (error, readableStream, response) => {
            expect(error).to.equal(null)
            expect(response).to.deep.equal(confirmationWrongPassword)
            done()
        })
    })
    it('Отправляет инструкцию о возрате в основной процесс, если пароль верный', (done) => {
        const requestOptions = {
            url: `${SUBFLOW_FLOW_GATE}?cmd=EVENT&name=confirmation-next&pid=${DEFAULT_PID}`,
            json: true,
            body: {
                fields: {
                    'confirmation:password': '12345'
                }
            }
        }

        const expected = {
            body: {
                pid: '123456789-pid',
                result: 'EXTERNAL_RETURN',
                url: '/api/main'
            },
            success: true
        }

        request.post(requestOptions, (error, readableStream, response) => {
            expect(error).to.equal(null)
            expect(response).to.deep.equal(expected)
            done()
        })
    })
    it('Отправляет третий шаг основного процесса при возвращении', (done) => {
        const requestOptions = {
            url: `${MAIN_FLOW_GATE}?cmd=EVENT&name=on-return&pid=${DEFAULT_PID}`,
            json: true,
            body: {}
        }

        request.post(requestOptions, (error, readableStream, response) => {
            expect(error).to.equal(null)
            expect(response).to.deep.equal(step3Response)
            done()
        })
    })
    it('Отправляет признак завершения процесса ', (done) => {
        const requestOptions = {
            url: `${MAIN_FLOW_GATE}?cmd=EVENT&name=next&pid=${DEFAULT_PID}`,
            json: true,
            body: {}
        }

        const expected = {
            body: {
                result: 'END'
            },
            success: true
        }

        request.post(requestOptions, (error, readableStream, response) => {
            expect(error).to.equal(null)
            expect(response).to.deep.equal(expected)
            done()
        })
    })
})
