import { createStore } from '../../../tests/utils'
import { updateFieldValue } from '../update-field-value'
import { getFieldValue } from '../../../adapter/selectors'

import { storeMock } from './fixtures/store.mock'


describe('Protocols: updateFieldValue', () => {
    let store

    beforeEach(() => {
        store = createStore(storeMock)
    })

    test('it should update value for field with given id', () => {
        const lookupFieldId = 'amount'
        const newValue = '777'

        updateFieldValue({ store, lookupFieldId, newValue })
        const fieldValue = getFieldValue(store.getState(), lookupFieldId)

        expect(fieldValue).toBe(newValue)
    })
})
