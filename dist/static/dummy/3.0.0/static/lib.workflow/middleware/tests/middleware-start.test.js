const request = require('request')
const { expect } = require('chai')

const { makeServer, flushServerState } = require('./make-server')
const flow = require('./fixtures/steps')


const host = 'http://127.0.0.1:3000'
const WFGate = `${host}/test`
const START_URL = `${WFGate}?cmd=START`

describe('Workflow server - START', () => {
    let server

    beforeEach((done) => {
        flushServerState()
        server = makeServer([flow])
        done()
    })
    afterEach((done) => {
        flushServerState()
        server.close(done)
    })

    it('Возвращает ошибку в messages, если не передано имя флоу (name=...) в query', (done) => {
        const expected = 'Request does not have required name property'

        request.post({ url: START_URL, json: true }, (error, readableStream, responseBody) => {
            expect(error).to.equal(null)
            expect(responseBody.messages).not.to.equal([])
            expect(responseBody.messages[0].title).to.equal(expected)
            done()
        })
    })
    it('Возвращает SUCCESS:true и идентификатор процесса PID', (done) => {
        const MIN_PID_LENGTH = 10
        request.post({ url: `${START_URL}&name=12345`, json: true }, (error, readableStream, responseBody) => {
            expect(error).to.equal(null)
            expect(responseBody.success).to.equal(true)
            expect(responseBody.body.pid).to.have.length.above(MIN_PID_LENGTH)
            done()
        })
    })
    it('Сохраняет PID, flowName и state в global', (done) => {
        request.post({ url: `${START_URL}&name=12345`, json: true }, (error, readableStream, responseBody) => {
            expect(error).to.equal(null)
            expect('step1').to.equal(global.flow.state)
            expect(responseBody.body.pid).to.equal(global.flow.pid)
            expect(responseBody.body.flow).to.equal(global.flow.flowName)
            done()
        })
    })
})
