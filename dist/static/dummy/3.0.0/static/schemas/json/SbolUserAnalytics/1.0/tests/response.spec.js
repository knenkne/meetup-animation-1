const Ajv = require('ajv')
const _ = require('lodash')

const schema = require('../response.json')

const ajv = new Ajv()
ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-04.json'))

const validate = ajv.compile(schema)

describe('SBOL UI Workflow RS :: v1.0', () => {
    it('is available', () => {
        expect(schema).to.be.not.undefined
    })

    it('does not allow additional properties', () => {
        expect(
            validate({
                success: false,
                wow: false
            })
        ).to.be.false
    })

    it('requires screens to have both properties and widgets', () => {
        expect(
            validate({
                success: true,
                body: {
                    result: 'SUCCESS',
                    output: {
                        screens: [
                            {
                                properties: {}
                            }
                        ]
                    }
                },
            })
        ).to.be.false

        expect(
            validate({
                success: true,
                body: {
                    result: 'SUCCESS',
                    output: {
                        screens: [
                            {
                                widgets: []
                            }
                        ]
                    }
                },
            })
        ).to.be.false

        expect(
            validate({
                success: true,
                body: {
                    result: 'SUCCESS',
                    output: {
                        screens: [
                            {
                                title: 'Invalid'
                            }
                        ]
                    }
                },
            })
        ).to.be.false
    })

    it('does not allow response with url property longer than 512', () => {
        const url = _.repeat('x', 513)

        expect(
            validate({
                success: true,
                body: {
                    pid: "89a8b6e0-b33a-11e7-a69a-01cd9368c910",
                    result: "EXTERNAL_ENTER",
                    url
                }
            })
        ).to.be.false
    })
})
