const middleware = require('../2.0')

describe('Workflow validation middleware :: v2.0', () => {
    let app, serverInstance

    beforeEach((done) => {
        const createApp = require('../../tests/helpers/server')

        const server = createApp()

        app = server.app

        app.use('/test', middleware)
        app.all('/test/no-rs-check', (req, res) => {
            res.send({
                status: 'ok'
            })
        })
        app.all('/test/invalid-rs', (req, res) => {
            res.validateAndSend({
                status: 'ok'
            })
        })

        serverInstance = server.run(done)
    })

    it('is function that accepts 3 args', () => {
        expect(typeof middleware).to.equal('function')
        expect(middleware.length).to.equal(3)
    })

    it('does not allow GET', (done) => {
        chai.request(serverInstance)
            .get('/test/no-rs-check')
            .end((err, res) => {
                expect(err).to.be.not.null
                expect(res).to.have.status(500)
                done()
            })
    })

    it('allows valid POST request', (done) => {
        chai.request(serverInstance)
            .post('/test/no-rs-check', {})
            .end((err, res) => {
                expect(err).to.be.null
                expect(res).to.have.status(200)
                done()
            })
    })

    it('does not allow invalid POST response', (done) => {
        chai.request(serverInstance)
            .post('/test/invalid-rs', {})
            .end((err, res) => {
                expect(err).to.be.not.null
                expect(res).to.have.status(500)
                done()
            })
    })

    afterEach((done) => {
        serverInstance.close(done)
    })
})
