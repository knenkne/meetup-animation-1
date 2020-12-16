import reducer from '..'

import * as types from '../../action-types'

describe('Adapter :: reducer :: references', () => {
    it('Обновляет конкретный справочник по экшену UPDATE_REFERENCE', () => {

        const state = {
            references: {
                countries: {
                    properties: {},
                    items: [{ value: 'value', title: 'title', properties: {} }]
                }
            }
        }

        const action = {
            type: types.UPDATE_REFERENCE,
            referenceId: 'countries',
            properties: {
                url: '/api/countries_info_services'
            },
            items: [
                { value: 'secondValue', title: 'secondTitle', properties: {} },
                { value: 'thirdValue', title: 'thirdTitle', properties: {} }
            ]
        }

        const expected = {
            countries: {
                properties: {
                    url: '/api/countries_info_services'
                },
                items: [
                    { value: 'value', title: 'title', properties: {} },
                    { value: 'secondValue', title: 'secondTitle', properties: {} },
                    { value: 'thirdValue', title: 'thirdTitle', properties: {} }
                ]
            }
        }

        const actual = reducer(state, action)

        expect(actual.references).toEqual(expected)
    })
    it('Дополняет коллекцию информационных сервисов по action UPDATE_REFERENCES', () => {

        const state = {
            references: {
                countries: {
                    properties: {},
                    items: [{ value: 'value', title: 'title', properties: {} }]
                }
            }
        }

        const action = {
            type: types.UPDATE_REFERENCES,
            references: {
                cities: {
                    properties: {},
                    items: [{ value: 'Moscow', title: 'Moscow', properties: {} }]
                }
            }
        }

        const expected = {
            references: {
                countries: {
                    properties: {},
                    items: [{ value: 'value', title: 'title', properties: {} }]
                },
                cities: {
                    properties: {},
                    items: [{ value: 'Moscow', title: 'Moscow', properties: {} }]
                }
            }
        }

        const actual = reducer(state, action)

        expect(actual.references).toEqual(expected.references)
    })
    it('Дополняет коллекцию информационных сервисов по action UPDATE_REFERENCES', () => {

        const state = {
            references: {
                countries: {
                    properties: {},
                    items: [{ value: 'value', title: 'title', properties: {} }]
                }
            }
        }

        const action = {
            type: types.UPDATE_REFERENCES,
            references: {
                cities: {
                    properties: {},
                    items: [{ value: 'Moscow', title: 'Moscow', properties: {} }]
                }
            }
        }

        const expected = {
            references: {
                countries: {
                    properties: {},
                    items: [{ value: 'value', title: 'title', properties: {} }]
                },
                cities: {
                    properties: {},
                    items: [{ value: 'Moscow', title: 'Moscow', properties: {} }]
                }
            }
        }

        const actual = reducer(state, action)

        expect(actual.references).toEqual(expected.references)

    })
    it('Обновляет записи информационных сервисов по action UPDATE_REFERENCES', () => {

        const state = {
            references: {
                countries: {
                    properties: {},
                    items: [{ value: 'value', title: 'title', properties: {} }]
                }
            }
        }

        const action = {
            type: types.UPDATE_REFERENCES,
            references: {
                countries: {
                    properties: {},
                    items: [{ value: 'Russia', title: 'Russia', properties: {} }]
                }
            }
        }

        const expected = {
            references: {
                countries: {
                    properties: {},
                    items: [{ value: 'Russia', title: 'Russia', properties: {} }]
                }
            }
        }

        const actual = reducer(state, action)

        expect(actual.references).toEqual(expected.references)
    })
    it('Заменяет коллекцию информационных сервисов по action REPLACE_REFERENCE', () => {

        const state = {
            references: {
                cities: {
                    properties: {},
                    items: [{ value: 'value', title: 'title', properties: {} }]
                },
                cars: {
                    properties: {},
                    items: [
                        { value: 'honda', title: 'honda', properties: { fast: true } },
                        { value: 'subaru', title: 'subaru', properties: { fast: false } }
                    ]
                }
            }
        }

        const action = {
            type: types.REPLACE_REFERENCE,
            referenceId: 'cities',
            items: [
                { value: 'Saint-Petersburg', title: 'Saint-Petersburg', properties: {} },
                { value: 'Ekaterinburg', title: 'Ekaterinburg', properties: {} },
            ]
        }

        const expected = {
            references: {
                cities: {
                    properties: {},
                    items: [
                        { value: 'Saint-Petersburg', title: 'Saint-Petersburg', properties: {} },
                        { value: 'Ekaterinburg', title: 'Ekaterinburg', properties: {} },
                    ],
                },
                cars: {
                    properties: {},
                    items: [
                        { value: 'honda', title: 'honda', properties: { fast: true } },
                        { value: 'subaru', title: 'subaru', properties: { fast: false } }
                    ]
                }
            }
        }

        const actual = reducer(state, action)

        expect(actual.references).toEqual(expected.references)
    })
    it('Обнуляет коллекцию информационных сервисов по action REPLACE_REFERENCE и payload items=[]', () => {

        const state = {
            references: {
                cities: {
                    properties: {},
                    items: [{ value: 'value', title: 'title', properties: {} }]
                },
                cars: {
                    properties: {},
                    items: [
                        { value: 'honda', title: 'honda', properties: { fast: true } },
                        { value: 'subaru', title: 'subaru', properties: { fast: false } }
                    ]
                }
            }
        }

        const action = {
            type: types.REPLACE_REFERENCE,
            referenceId: 'cities',
            items: []
        }

        const expected = {
            references: {
                cities: {
                    properties: {},
                    items: [],
                },
                cars: {
                    properties: {},
                    items: [
                        { value: 'honda', title: 'honda', properties: { fast: true } },
                        { value: 'subaru', title: 'subaru', properties: { fast: false } }
                    ]
                }
            }
        }

        const actual = reducer(state, action)

        expect(actual.references).toEqual(expected.references)
    })
})
