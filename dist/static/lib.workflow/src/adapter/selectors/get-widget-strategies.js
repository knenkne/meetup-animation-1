import { getWidgetByIndex } from './get-widget-by-index'
import { createSelector } from './selector'

export const getWidgetStrategies = createSelector([getWidgetByIndex], (widget) => widget?.strategies)
