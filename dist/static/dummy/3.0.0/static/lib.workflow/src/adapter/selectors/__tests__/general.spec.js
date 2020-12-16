import { getVisibleWidgets, isWidgetVisible, } from '../general'

import { screenWithDependantWidgets } from './fixtures/screen-with-visible-widgets'

const { widgets } = screenWithDependantWidgets[0]
const [widget1, widget2, widget3, widget4] = widgets

describe('Adapter :: selectors', () => {
    describe('general (фильтрация скринов)', () => {

        it('проверяем видимость виджета', () => {
            const values = { 'has:comission:checkbox': true, 'comission:amount': 1 }
            const cache = new WeakMap()

            expect(isWidgetVisible(null, values, widgets, cache)).toEqual(true)
            expect(isWidgetVisible(widget1, values, widgets, cache)).toEqual(true)
            expect(isWidgetVisible(widget2, values, widgets, cache)).toEqual(true)
            expect(isWidgetVisible(widget3, values, widgets, cache)).toEqual(true)
            expect(isWidgetVisible(widget4, values, widgets, cache)).toEqual(false)

            expect(cache.get(widget3)).toEqual(true)
            expect(cache.get(widget4)).toEqual(false)
        })

        it('фильтрует (исключает) скрытые виджеты и виджеты зависимые от скрытых', () => {
            const testCases = [
                { values: { 'has:comission:checkbox': false, 'comission:amount': '0' }, widgets: [widget1, widget2] },
                { values: { 'has:comission:checkbox': false, 'comission:amount': '1' }, widgets: [widget1, widget2] },
                { values: { 'has:comission:checkbox': true, 'comission:amount': '0' }, widgets: [widget1, widget2, widget3, widget4] },
                { values: { 'has:comission:checkbox': true, 'comission:amount': '1' }, widgets: [widget1, widget2, widget3] }
            ]
            testCases.forEach((testCase) => {
                const visible = getVisibleWidgets(widgets, testCase.values)
                expect(visible).toEqual(testCase.widgets)
            })
        })
    })
})
