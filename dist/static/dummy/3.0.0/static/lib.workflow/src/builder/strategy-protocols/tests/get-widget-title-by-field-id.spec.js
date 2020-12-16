import { createStore } from '../../../tests/utils'
import { getWidgetTitleByFieldId } from '../get-widget-title-by-field-id'

import { storeMock } from './fixtures/store.mock'

describe('Protocols: getWidgetTitleByFieldId', () => {
    let store

    beforeEach(() => {
        store = createStore(storeMock)
    })

    test('it should return widget title by field id', () => {
        const lookupId = storeMock.workflow.screens[0].widgets[0].fields[0].id
        const expected = storeMock.workflow.screens[0].widgets[0].title
        const title = getWidgetTitleByFieldId(store.getState(), lookupId)
        expect(title).toBe(expected)
    })
})
