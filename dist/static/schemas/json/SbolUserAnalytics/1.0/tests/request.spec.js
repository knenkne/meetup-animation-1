const Ajv = require('ajv')
const _ = require('lodash')

const schema = require('../request.json')

const rqFull = require('./fixtures/rq-full.json')

const ajv = new Ajv()
ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-04.json'))

const validate = ajv.compile(schema)

describe('SBOL UI Workflow RQ :: v1.0', () => {

    it('does not allow document values longer than 256', () => {
        const value = _.repeat('x', 257)

        expect(
            validate({
                document: {
                    foo: value,
                }
            })
        ).to.be.false
    })

    it('does not allow more than 256 document properties', () => {
        function uniqueKey (number) {
            const availableChars = 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ'
            const chars = []
            do {
                chars.push(number % availableChars.length)
                number = Math.floor(number / availableChars.length)
            } while (number > 0)
            return _.map(chars, (char) => availableChars[char]).join('')
        }

        const document = _.reduce(Array(257), (memo, value, idx) => {
            memo[uniqueKey(idx)] = 'x'
            return memo
        }, {})

        expect(
            validate({
                document
            })
        ).to.be.false
    })

    it('does not allow numeric field value', () => {
        expect(
            validate({
                fields: {
                    foo: 0
                }
            })
        ).to.be.false
    })

    it('does not allow null field value', () => {
        expect(
            validate({
                fields: {
                    foo: null
                }
            })
        ).to.be.false
    })

    it('does not allow boolean field value', () => {
        expect(
            validate({
                fields: {
                    foo: true
                }
            })
        ).to.be.false
    })

    it('does not allow object field value', () => {
        expect(
            validate({
                fields: {
                    foo: {}
                }
            })
        ).to.be.false
    })

    it('does not allow array field value', () => {
        expect(
            validate({
                fields: {
                    foo: []
                }
            })
        ).to.be.false
    })

    it('does not allow field values longer than 1024', () => {
        const value = _.repeat('x', 1025)

        expect(
            validate({
                fields: {
                    'foo:bar': value,
                }
            })
        ).to.be.false
    })

    it('does not allow field keys longer than 256', () => {
        const value = _.repeat('x', 257)

        expect(
            validate({
                fields: {
                    [value]: 'foo',
                }
            })
        ).to.be.false
    })

    it('does not allow more than 1024 fields', () => {
        const fields = _.reduce(Array(1025), (memo, value, idx) => {
            memo[`foo:${idx}`] = 'x'
            return memo
        }, {})

        expect(
            validate({
                fields
            })
        ).to.be.false
    })
})
