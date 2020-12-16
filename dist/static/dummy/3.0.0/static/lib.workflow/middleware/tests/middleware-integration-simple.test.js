/* global describe, it, before, after, beforeEach  */
/* eslint global-require: 0 */

const request = require('request')
const { expect } = require('chai')

const { DEFAULT_PID, DEFAULT_DOCUMENT_ID } = require('../constants')

const { makeServer, flushServerState } = require('./make-server')
const step1JSON = require('./fixtures/step1-response')
const step2JSON = require('./fixtures/step2-response')
const processEndJSON = require('./fixtures/process-end-response')
const finishedProcessErrorJSON = require('./fixtures/finished-process-error-response')
const flow = require('./fixtures/steps')

const WF_ENDPOINT = 'http://127.0.0.1:3000'
const WF_GATE = `${WF_ENDPOINT}/test`

describe('Middleware - интеграционные тесты', () => {
    describe('Простой сценарий из 2 шагов', () => {
        let server
        before(() => {
            flushServerState()
            server = makeServer([flow])
        })
        after((done) => {
            flushServerState()
            server.close(done)
        })

        it('Отправляет данные первого шага в процессе в ответ на команду START', (done) => {
            const requestOptions = {
                url: `${WF_GATE}?cmd=START&name=test`,
                json: true,
                body: {}
            }

            request.post(requestOptions, (error, readableStream, response) => {
                expect(error).to.equal(null)
                expect(response).to.deep.equal(step1JSON)
                done()
            })
        })
        it('Отправляет данные второго шага в ответ на команду EVENT=next', (done) => {
            const requestOptions = {
                url: `${WF_GATE}?cmd=EVENT&name=next&pid=${DEFAULT_PID}`,
                json: true,
                body: {
                    fields: {
                        'transfer:fullName:lastName': '1',
                        'transfer:fullName:firstName': '2',
                        'transfer:fullName:noMiddleName': 'true'
                    },
                    document: {
                        documentId: DEFAULT_DOCUMENT_ID
                    }
                }
            }

            request.post(requestOptions, (error, readableStream, response) => {
                expect(error).to.equal(null)
                expect(response).to.deep.equal(step2JSON)
                done()
            })
        })
        it('Отправляет признак окончания процесса в ответ на команду EVENT=next', (done) => {
            const requestOptions = {
                url: `${WF_ENDPOINT}/test?cmd=EVENT&name=next&pid=${DEFAULT_PID}`,
                json: true,
                body: {
                    fields: {
                        'transfer:amount:value': '100'
                    },
                    document: {
                        documentId: DEFAULT_DOCUMENT_ID
                    }
                }
            }

            request.post(requestOptions, (error, readableStream, response) => {
                expect(error).to.equal(null)
                expect(response).to.deep.equal(processEndJSON)
                done()
            })
        })
        it('Отправляет message.error, при попытке работы с законченным процессом', (done) => {
            const requestOptions = {
                url: `${WF_ENDPOINT}/test?cmd=EVENT&name=next&pid=${DEFAULT_PID}`,
                json: true,
                body: {
                    fields: {
                        'field:for:ended:process': 'someValue'
                    },
                    document: {
                        documentId: DEFAULT_DOCUMENT_ID
                    }
                }
            }

            request.post(requestOptions, (error, readableStream, response) => {
                expect(error).to.equal(null)
                expect(response).to.deep.equal(finishedProcessErrorJSON)
                done()
            })
        })
    })
})
