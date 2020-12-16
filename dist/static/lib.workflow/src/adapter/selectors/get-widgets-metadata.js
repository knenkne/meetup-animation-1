import _ from 'lodash'

import { metaWidgetsSections } from '../../constants'

import { createSelector } from './selector'

const getFlattenedWidgetsListMetadata = (screens) =>
    _.flatMap(screens, (screen, screenIndex) =>
        _.map(metaWidgetsSections, (position) => ({
            screenIndex,
            position,
            widgets: _.get(screen, position, [])
        }))
    )

export const getWidgetsMetadata = createSelector(
    [getFlattenedWidgetsListMetadata],
    (flattenedWidgetsList) =>
        _.flatMap(flattenedWidgetsList, ({ screenIndex, position, widgets }) =>
            _.map(widgets, (widget, index) => ({
                screenIndex,
                position,
                widgetIndex: index,
                widget
            }))
        )
)
