import _ from 'lodash'

import { getModifiedScreens } from '../general'

import * as screens20 from './fixtures/screens20'

describe('SELECTORS', () => {
    describe('getScreens', () => {
        it('При установке поля readonly для виджета, все поля становятся readonly', () => {

            const fieldsLength = screens20.singleWithReadonlyWidget[0].widgets[0].fields.length

            const actual = getModifiedScreens.resultFunc(screens20.singleWithReadonlyWidget)
            const readonlyFieldsLength = _.filter(actual[0].widgets[0].fields, (elements) => elements.readonly === true).length

            expect(fieldsLength).toBe(readonlyFieldsLength)

        })
    })
})
