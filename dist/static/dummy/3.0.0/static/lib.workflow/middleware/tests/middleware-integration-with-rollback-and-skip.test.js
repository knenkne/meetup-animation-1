/* global describe, it, before, after, beforeEach  */

const request = require('request')
const { expect } = require('chai')

const { DEFAULT_PID, DEFAULT_DOCUMENT_ID } = require('../constants')

const { makeServer, flushServerState } = require('./make-server')
const step1JSON = require('./fixtures/step1-response')
const step1WithValuesJSON = require('./fixtures/step1-response-with-values')
const step2JSON = require('./fixtures/step2-response')
const processEndJSON = require('./fixtures/process-end-response')
const flow = require('./fixtures/steps')

const WF_ENDPOINT = 'http://127.0.0.1:3000'

describe('Middleware - интеграционные тесты', () => {
    describe('Сценарий из 2 шагов c rollback и skip', () => {
        let server
        before(() => {
            server = makeServer([flow])
        })
        after((done) => {
            server.close(done)
        })

        it('Отправляет данные первого шага в процессе в ответ на команду START', (done) => {
            const requestOptions = {
                url: `${WF_ENDPOINT}/test?cmd=START&name=test`,
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
                url: `${WF_ENDPOINT}/test?cmd=EVENT&name=next&pid=${DEFAULT_PID}`,
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
        it('Отправляет данные первого шага (со значениями) в ответ на команду ROLLBACK', (done) => {
            const requestOptions = {
                url: `${WF_ENDPOINT}/test?cmd=ROLLBACK&name=step1&pid=${DEFAULT_PID}`,
                json: true,
                body: {}
            }

            request.post(requestOptions, (error, readableStream, response) => {
                expect(error).to.equal(null)
                expect(response).to.deep.equal(step1WithValuesJSON)
                done()
            })
        })
        it('Отправляет данные второго шага (без сохранения данных) в ответ на команду EVENT=skip', (done) => {
            const requestOptions = {
                url: `${WF_ENDPOINT}/test?cmd=EVENT&name=next&pid=${DEFAULT_PID}`,
                json: true,
                body: {}
            }

            request.post(requestOptions, (error, readableStream, response) => {
                expect(error).to.equal(null)
                expect(response).to.deep.equal(step2JSON)
                done()
            })
        })
        it('Отправляет признак окончания процесса в ответ на команду EVENT=skip', (done) => {
            const requestOptions = {
                url: `${WF_ENDPOINT}/test?cmd=EVENT&name=skip&pid=${DEFAULT_PID}`,
                json: true,
                body: {}
            }

            request.post(requestOptions, (error, readableStream, response) => {
                expect(error).to.equal(null)
                expect(response).to.deep.equal(processEndJSON)
                done()
            })
        })
    })
})
