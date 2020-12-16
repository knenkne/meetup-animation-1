import { apiLinks, getUfsBlockRoot } from '../rs/api-links'

describe('axios-middlewares :: rs', () => {
    describe('apiLinks', () => {

        it('Replace `api:` for properties', (done) => {
            apiLinks.handleSuccess({
                data: {
                    screens: {
                        properties: {
                            link: 'api:/context'
                        }
                    }
                }
            })
                .then((parserResponse) => {
                    expect(parserResponse).toEqual({
                        data: {
                            screens: {
                                properties: {
                                    link: `${getUfsBlockRoot()}/context`
                                }
                            }
                        }
                    })
                    done()
                })
        })

        it('Not replace `api:` for custom strings', (done) => {
            apiLinks.handleSuccess({
                data: {
                    screens: {
                        properties: {
                            notLink: 'Text api: and http:'
                        }
                    }
                }
            })
                .then((parserResponse) => {
                    expect(parserResponse).toEqual({
                        data: {
                            screens: {
                                properties: {
                                    notLink: 'Text api: and http:'
                                }
                            }
                        }
                    })
                    done()
                })
        })

        it('Replace `api:` for md', (done) => {
            apiLinks.handleSuccess({
                data: {
                    screens: {
                        properties: {
                            md: 'foo [bar](api:/context) baz'
                        }
                    }
                }
            })
                .then((parserResponse) => {
                    expect(parserResponse).toEqual({
                        data: {
                            screens: {
                                properties: {
                                    md: `foo [bar](${getUfsBlockRoot()}/context) baz`
                                }
                            }
                        }
                    })
                    done()
                })
        })
    })
})
