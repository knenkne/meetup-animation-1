const Ajv = require('ajv')
const _ = require('lodash')

const schema = require('../response.json')

const ajv = new Ajv()
ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-04.json'))

const validate = ajv.compile(schema)

describe('SBOL UI Workflow RS :: v2.0', () => {
    it('is available', () => {
        expect(schema).to.be.not.undefined
    })

    it('allows successful response', () => {
        expect(
            validate({
                success: true,
                body: {
                    result: 'SUCCESS'
                },
            })
        ).to.be.true
    })

    it('allows response with error messages', () => {
        expect(
            validate({
                success: true,
                body: {
                    result: 'ERROR'
                },
                messages: [
                    {
                        type: 'error',
                        title: 'Произошла ошибка!'
                    }
                ]
            })
        ).to.be.true
    })

    it('allows response with error', () => {
        expect(
            validate({
                success: false,
                error: {
                    uuid: '123',
                    code: 'foo',
                    system: 'erib',
                    title: 'Everything is fine',
                    text: '...not!'
                }
            })
        ).to.be.true
    })

    it('requires success attribute', () => {
        expect(
            validate({})
        ).to.be.false
    })

    it('does not allow additional properties', () => {
        expect(
            validate({
                success: false,
                wow: false
            })
        ).to.be.false
    })

    it('allows reference properties to contain primitive values', () => {
        expect(
            validate({
                success: true,
                body: {
                    result: 'SUCCESS',
                    output: {
                        references: {
                            foo: {
                                properties: {
                                    bar: 'baz',
                                    quux: 0,
                                    quuz: false,
                                    nulled: null
                                }
                            }
                        }
                    }
                },
            })
        ).to.be.true
    })

    it('allows reference properties to contain empty array', () => {
        expect(
            validate({
                success: true,
                body: {
                    result: 'SUCCESS',
                    output: {
                        references: {
                            foo: {
                                properties: {
                                    list: []
                                }
                            }
                        }
                    }
                },
            })
        ).to.be.true
    })

    it('allows UPS id as reference id', () => {
        expect(
            validate({
                success: true,
                body: {
                    result: 'SUCCESS',
                    output: {
                        references: {
                            'S32352518644A64405403343': {}
                        }
                    }
                },
            })
        ).to.be.true
    })

    it('allows prefixed UPS id as reference id', () => {
        expect(
            validate({
                success: true,
                body: {
                    result: 'SUCCESS',
                    output: {
                        references: {
                            'UPS-S32352518644A64405403343': {}
                        }
                    }
                },
            })
        ).to.be.true
    })

    it('allows reference properties to mix primitive values with arrays', () => {
        expect(
            validate({
                success: true,
                body: {
                    result: 'SUCCESS',
                    output: {
                        references: {
                            foo: {
                                properties: {
                                    bar: 'baz',
                                    quux: 0,
                                    quuz: false,
                                    nulled: null,
                                    listOne: [
                                        '0',
                                        '1',
                                        '2'
                                    ],
                                    listTwo: [
                                        '0',
                                        '1',
                                        '2'
                                    ]
                                }
                            }
                        }
                    }
                },
            })
        ).to.be.true
    })

    it('allows screens without title and with title', () => {
        expect(
            validate({
                success: true,
                body: {
                    result: 'SUCCESS',
                    output: {
                        screens: [
                            {},
                            {
                                title: 'Foo'
                            }
                        ]
                    }
                },
            })
        ).to.be.true
    })

    it('requires screens to have only non-empty properties', () => {
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
                                properties: {
                                    foo: 'foo'
                                }
                            }
                        ]
                    }
                },
            })
        ).to.be.true
    })

    it('requires screens to have only non-empty widgets', () => {
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
                                widgets: [
                                    {
                                        type: 'CoreFieldset'
                                    }
                                ]
                            }
                        ]
                    }
                },
            })
        ).to.be.true
    })

    it('requires screens to have only non-empty header', () => {
        expect(
            validate({
                success: true,
                body: {
                    result: 'SUCCESS',
                    output: {
                        screens: [
                            {
                                header: []
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
                                header: [
                                    {
                                        type: 'CoreFieldset'
                                    }
                                ]
                            }
                        ]
                    }
                },
            })
        ).to.be.true
    })

    it('requires screens to have only non-empty footer', () => {
        expect(
            validate({
                success: true,
                body: {
                    result: 'SUCCESS',
                    output: {
                        screens: [
                            {
                                footer: []
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
                                footer: [
                                    {
                                        type: 'CoreFieldset'
                                    }
                                ]
                            }
                        ]
                    }
                },
            })
        ).to.be.true

    })

    it('allows empty screens', () => {
        expect(
            validate({
                success: true,
                body: {
                    result: 'SUCCESS',
                    output: {
                        screens: [
                            {
                                title: 'Valid'
                            }
                        ]
                    }
                },
            })
        ).to.be.true

        expect(
            validate({
                success: true,
                body: {
                    result: 'SUCCESS',
                    output: {
                        screens: [
                            {}
                        ]
                    }
                },
            })
        ).to.be.true
    })

    it('allows UPS id as field id', () => {
        expect(
            validate({
                success: true,
                body: {
                    result: 'SUCCESS',
                    output: {
                        screens: [
                            {
                                widgets: [
                                    {
                                        type: 'Foo',
                                        fields: [
                                            {
                                                id: 'S32352518644A64405403343',
                                                value: '',
                                                type: 'text'
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                },
            })
        ).to.be.true
    })

    it('allows prefixed UPS id as field id', () => {
        expect(
            validate({
                success: true,
                body: {
                    result: 'SUCCESS',
                    output: {
                        screens: [
                            {
                                widgets: [
                                    {
                                        type: 'Foo',
                                        fields: [
                                            {
                                                id: 'UPS-S32352518644A64405403343',
                                                value: '',
                                                type: 'text'
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                },
            })
        ).to.be.true
    })

    it('allows guid as field id', () => {
        expect(
            validate({
                success: true,
                body: {
                    result: 'SUCCESS',
                    output: {
                        screens: [
                            {
                                widgets: [
                                    {
                                        type: 'Foo',
                                        fields: [
                                            {
                                                id: '8536c7f3-5e76-4f1a-a986-5c3cdb355afd',
                                                value: '',
                                                type: 'text'
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                },
            })
        ).to.be.true
    })

    it('allows multiselect as field type', () => {
        expect(
            validate({
                success: true,
                body: {
                    result: 'SUCCESS',
                    output: {
                        screens: [
                            {
                                widgets: [
                                    {
                                        type: 'Foo',
                                        fields: [
                                            {
                                                id: '8536c7f3-5e76-4f1a-a986-5c3cdb355afd',
                                                values: ['value1', 'value2'],
                                                type: 'multiselect'
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                },
            })
        ).to.be.true
    })


    it('allows response with url property for subflow', () => {
        expect(
            validate({
                success: true,
                body: {
                    pid: "89a8b6e0-b33a-11e7-a69a-01cd9368c910",
                    result: "EXTERNAL_ENTER",
                    url: "http://localhost:4242/api/workflow-gate-confirmation-subflow"
                }
            })
        ).to.be.true
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
