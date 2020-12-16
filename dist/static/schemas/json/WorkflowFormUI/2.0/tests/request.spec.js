const Ajv = require('ajv')
const _ = require('lodash')

const schema = require('../request.json')

const rqFull = require('./fixtures/rq-full.json')

const ajv = new Ajv()
ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-04.json'))

const validate = ajv.compile(schema)

describe('SBOL UI Workflow RQ :: v2.0', () => {
    it('has all required definitions', () => {
        expect(schema).to.have.nested.property('definitions.DocflowPropertiesType')
        expect(schema).to.have.nested.property('definitions.FieldsKeyValueType')
        expect(schema).to.have.nested.property('definitions.FlatArrayType')
    })

    it('allows string flow id and state id', () => {
        expect(
            validate({
                document: {
                    flow: 'foo',
                    state: 'bar'
                }
            })
        ).to.be.true
    })

    it('allows any other camel case document property', () => {
        expect(
            validate({
                document: {
                    someDocumentProperty: 'foo'
                }
            })
        ).to.be.true
    })

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

    it('allows field string value', () => {
        expect(
            validate({
                fields: {
                    foo: 'foo'
                }
            })
        ).to.be.true
    })

    it('allows empty field string value', () => {
        expect(
            validate({
                fields: {
                    foo: ''
                }
            })
        ).to.be.true
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

    it('allows array field value', () => {
        expect(
            validate({
                fields: {
                    foo: []
                }
            })
        ).to.be.true
    })

    it('allows strings in array field value', () => {
        expect(
            validate({
                fields: {
                    foo: [
                        'foo0',
                        'foo1'
                    ]
                }
            })
        ).to.be.true
    })

    it('does not allow numeric values in array field value', () => {
        expect(
            validate({
                fields: {
                    foo: [
                        0
                    ]
                }
            })
        ).to.be.false
    })

    it('does not allow boolean values in array field value', () => {
        expect(
            validate({
                fields: {
                    foo: [
                        true
                    ]
                }
            })
        ).to.be.false
    })

    it('does not allow object values in array field value', () => {
        expect(
            validate({
                fields: {
                    foo: [
                        {}
                    ]
                }
            })
        ).to.be.false
    })

    it('does not allow array values in array field value', () => {
        expect(
            validate({
                fields: {
                    foo: [
                        []
                    ]
                }
            })
        ).to.be.false
    })

    it('allows lowercase and uppercase in key', () => {
        expect(
            validate({
                fields: {
                    aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ: 'foo'
                }
            })
        ).to.be.true
    })

    it('allows colon to split strings in key', () => {
        expect(
            validate({
                fields: {
                    'foo:bar': 'foo'
                }
            })
        ).to.be.true
    })

    it('allows colon to split strings and numbers in key', () => {
        expect(
            validate({
                fields: {
                    'foo:0:bar': 'foo',
                    'foo:bar:0': 'foo'
                }
            })
        ).to.be.true
    })

    it('allows mixed letters and numbers in key', () => {
        expect(
            validate({
                fields: {
                    foo0: 'foo',
                }
            })
        ).to.be.true
    })

    it('allows key to start with number', () => {
        expect(
            validate({
                fields: {
                    0: 'foo',
                }
            })
        ).to.be.true

        expect(
            validate({
                fields: {
                    '0foo': 'foo',
                }
            })
        ).to.be.true
    })

    it('allows to mix letters and numbers inside group in field key', () => {
        expect(
            validate({
                fields: {
                    'foo:0a:bar': 'foo',
                }
            })
        ).to.be.true
    })

    it('allows prefixed guid as field key', () => {
        expect(
            validate({
                fields: {
                    'guid:123e4567-e89b-12d3-a456-426655440000': 'foo',
                }
            })
        ).to.be.true
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

    it('allows maximal request', () => {
        expect(
            validate(rqFull)
        ).to.be.true
    })
})
