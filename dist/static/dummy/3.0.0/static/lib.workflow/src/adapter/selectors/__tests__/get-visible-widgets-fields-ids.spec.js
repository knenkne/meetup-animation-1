import { getVisibleWidgetsFieldsIDs } from '../'

import { screenWithDependantWidgets } from './fixtures/screen-with-visible-widgets'

describe('SELECTORS', () => {
    describe('getVisibleWidgetsFieldsIDs', () => {
        it('возвращает массив идентификаторов полей', () => {
            const expected = ['has:comission:checkbox', 'comission:amount', 'comission:currency']
            const actual = getVisibleWidgetsFieldsIDs.resultFunc(screenWithDependantWidgets)
            expect(actual).toEqual(expected)
        })
    })
})
