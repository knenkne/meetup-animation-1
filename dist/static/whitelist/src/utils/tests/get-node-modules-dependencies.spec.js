const getNodeModulesDependencies = require('../get-node-modules-dependencies')

jest.mock('../safe-npm-list') // eslint-disable-line no-undef, comment: jest is def

describe('getNodeModulesDependencies', () => {
    it('npm@5', () => {
        const fixtureInsteadPath = {
            name: 'foo',
            version: '1.0.0',
            dependencies: {
                bar: {
                    version: '4.17.11',
                    from: 'bar@^4.17.5'
                },
                baz: {
                    version: '2.88.0',
                    from: 'baz',
                    dependencies: {
                        qux: {
                            version: '0.7.0',
                            from: 'qux@~0.7.0'
                        }
                    }
                },
                qux: {
                    version: '0.7.0',
                    from: 'qux@~0.7.0'
                }
            }
        }

        const expected = {
            'foo@1.0.0': [
                ['foo@1.0.0']
            ],
            'bar@4.17.11': [
                ['foo@1.0.0', 'bar@4.17.11']
            ],
            'baz@2.88.0': [
                ['foo@1.0.0', 'baz@2.88.0']
            ],
            'qux@0.7.0': [
                ['foo@1.0.0', 'baz@2.88.0', 'qux@0.7.0'],
                ['foo@1.0.0', 'qux@0.7.0']
            ]
        }

        expect(getNodeModulesDependencies(fixtureInsteadPath)).toEqual(expected)
    })
    it('npm@5 with required name and version', () => {

        const fixtureInsteadPath = {
            name: 'foo',
            required: {
                name: 'foo',
                version: '1.0.0',
            },
            dependencies: {
                bar: {
                    required: {
                        name: 'bar',
                        version: '4.17.11',
                    },
                    version: '4.17.11',
                    from: 'bar@^4.17.5'
                },
                baz: {
                    version: '2.88.0',
                    from: 'baz',
                    required: {
                        name: 'baz',
                        version: '2.88.0',
                    },
                    dependencies: {
                        qux: {
                            version: '0.1.0',
                            from: 'qux@~0.1.0'
                        }
                    }
                },
                qux: {
                    version: '0.7.0',
                    from: 'qux@~0.7.0'
                }
            }
        }

        const expected = {
            'foo@1.0.0': [
                ['foo@1.0.0']
            ],
            'bar@4.17.11': [
                ['foo@1.0.0', 'bar@4.17.11']
            ],
            'baz@2.88.0': [
                ['foo@1.0.0', 'baz@2.88.0']
            ],
            'qux@0.1.0': [
                ['foo@1.0.0', 'baz@2.88.0', 'qux@0.1.0']
            ],
            'qux@0.7.0': [
                ['foo@1.0.0', 'qux@0.7.0']
            ]
        }

        expect(getNodeModulesDependencies(fixtureInsteadPath)).toEqual(expected)
    })
})