/* global describe, it, before, after, beforeEach  */

const request = require('request')
const { expect } = require('chai')
const _ = require('lodash')

const { DEFAULT_PID, DEFAULT_DOCUMENT_ID } = require('../constants')

const { makeServer, flushServerState } = require('./make-server')
const flow = require('./fixtures/steps')

const host = 'http://127.0.0.1:3000'
const WFGate = `${host}/test`

describe('Workflow server - EVENT', () => {
    let server
    before((done) => {
        server = makeServer([flow])
        done()
    })
    after((done) => {
        server.close(done)
    })

    beforeEach((done) => {
        flushServerState()
        done()
    })
    afterEach((done) => {
        flushServerState()
        done()
    })

    it('Возвращает ошибку, если не передан идентификатор процесса (pid) в query', (done) => {
        const url = `${WFGate}?cmd=EVENT`
        const errTitle = 'Request query should have pid'

        request.post({ url, json: true }, (error, readableStream, responseBody) => {
            expect(error).to.equal(null)
            const absentError = _.find(responseBody.messages, { title: errTitle })
            expect(absentError).not.to.be.an('undefined')
            done()
        })
    })
    it('Не возвращает ошибку, если в теле запроса нет контейнера fields', (done) => {
        const url = `${WFGate}?cmd=EVENT&name=next&pid=123`
        const errTitle = 'Request body does not have required fields object'

        request.post({ url, json: true }, (error, readableStream, responseBody) => {
            expect(error).to.equal(null)

            const absentError = _.find(responseBody.messages, { title: errTitle })
            expect(absentError).to.be.an('undefined')

            done()
        })
    })
    it('Возвращает ошибку, если не передано имя события (name) в query', (done) => {
        const url = `${WFGate}?cmd=EVENT`
        const errTitle = 'Request does not have required name property'

        request.post({ url, json: true }, (error, readableStream, responseBody) => {
            expect(error).to.equal(null)

            const absentError = _.find(responseBody.messages, { title: errTitle })
            expect(absentError).not.to.be.an('undefined')
            done()
        })
    })
    it('Возвращает ошибку, если указанный идентификатор процесса (pid) не существует', (done) => {
        const url = `${WFGate}?cmd=EVENT&name-next&pid=27346278364628`
        const errTitle = 'Process does not exist. provided process id is not correct'

        request.post({ url, json: true }, (error, readableStream, responseBody) => {
            expect(error).to.equal(null)

            const absentError = _.find(responseBody.messages, { title: errTitle })
            expect(absentError).not.to.be.an('undefined')

            done()
        })
    })
    it('Возвращает данные следующего шага, если нет ошибок', (done) => {
        global.flow.pid = DEFAULT_PID
        global.flow.state = 'step1'
        global.flow.flowName = 'someflow'
        global.flow.document = {
            documentId: DEFAULT_DOCUMENT_ID
        }

        const url = `${WFGate}?cmd=EVENT&pid=${DEFAULT_PID}&name=next`

        const requestBody = {
            fields: {
                'transfer:fullName:lastName': 'value1',
                'transfer:fullName:firstName': 'value2',
                'transfer:fullName:middleName': 'value3',
                'transfer:fullName:noMiddleName': 'value4',
            },
            document: {
                documentId: DEFAULT_DOCUMENT_ID
            }
        }

        request.post({ url, json: true, body: requestBody }, (error, readableStream, responseBody) => {
            expect(error).to.equal(null)
            expect(responseBody.success).to.equal(true)
            expect(responseBody.body.state).to.equal('step2')
            expect(responseBody.body.pid).to.equal(DEFAULT_PID)
            expect(responseBody.body.flow).to.equal('/test')
            expect(responseBody.messages).to.be.an('undefined')
            done()
        })
    })

    it('Возвращает значения для заполненных value на предыдущих шагах', (done) => {
        const url = `${WFGate}?cmd=EVENT&pid=${DEFAULT_PID}&name=next`

        global.flow.pid = DEFAULT_PID
        global.flow.state = 'step1'
        global.flow.flowName = 'someflow'
        global.flow.values = {
            [DEFAULT_PID]: {
                'transfer:fullName:lastName': 'value1'
            }
        }
        global.flow.document = {
            documentId: DEFAULT_DOCUMENT_ID
        }

        const requestBody = {
            fields: {
                a: 'b',
                d: 's'
            },
            document: {
                documentId: DEFAULT_DOCUMENT_ID
            }
        }

        request.post({ url, json: true, body: requestBody }, (error, readableStream, responseBody) => {
            expect(error).to.equal(null)
            const actual = _.get(responseBody, ['body', 'output', 'screens', '0', 'widgets', '0', 'fields', '0', 'value'], null)
            expect(actual).to.equal('value1')
            done()
        })
    })
})
