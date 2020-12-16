import * as types from '../../action-types'
import { replaceReference, updateReference } from '../actions'

describe('Adapter :: actions', () => {
    describe('references', () => {
        it('создаёт action REPLACE_REFERENCE с payload', () => {

            const expected = {
                type: types.REPLACE_REFERENCE,
                referenceId: 'sample',
                items: [{ value: 'value', title: 'title', properties: {} }]
            }

            const actual = replaceReference('sample', [{ value: 'value', title: 'title', properties: {} }])

            expect(actual).toEqual(expected)
        })
        it('создаёт action UPDATE_REFERENCE с payload', () => {

            const expected = {
                type: types.UPDATE_REFERENCE,
                referenceId: 'sample',
                items: [{ value: 'value', title: 'title', properties: {} }],
                properties: { url: '/updated/url' }
            }

            const actual = updateReference('sample', [{
                value: 'value',
                title: 'title',
                properties: {}
            }], { url: '/updated/url' })

            expect(actual).toEqual(expected)
        })
    })
})
