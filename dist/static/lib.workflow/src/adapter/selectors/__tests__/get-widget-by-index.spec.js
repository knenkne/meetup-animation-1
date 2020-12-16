import { getWidgetFromScreens } from '../get-widget-by-index'
import { mockScreensWithIndex } from '../../reducer/__tests__/fixtures/mock-screens-with-index'
import { SCREEN_PARTS } from '../../../builder/components/structure/const'

describe('SELECTORS:: getWidgetByIndex', () => {

    test('It should return correct widget by it index', () => {
        const expected = {
            type: 'CoreFieldset',
            fields: [
                {
                    id: 'switch',
                    type: 'checkbox',
                    format: 'switch',
                    title: 'Мой email изменился'
                }
            ]
        }

        expect(getWidgetFromScreens({
            screens: mockScreensWithIndex,
            screenIndex: 0,
            screenPart: SCREEN_PARTS.widgets,
            widgetIndex: 1
        }))
            .toEqual(expected)
    })
})
