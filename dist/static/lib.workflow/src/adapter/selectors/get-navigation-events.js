import _ from 'lodash'

import { navigationWidgets } from '../../constants'

import { createSelector } from './selector'

const getWidgetsList = (screens) =>
    _(screens).flatMap((screen) => [
        ...screen.header,
        ...screen.widgets,
        ...screen.footer
    ])

const getEvents = createSelector(
    [getWidgetsList],
    (metaWidgets) =>
        _(metaWidgets)
            .filter((widget) => _.includes(navigationWidgets, widget.type))
            .flatMap('events')
)

export const getNavigationEvents = createSelector(
    [getEvents],
    (events) =>
        _(events)
            .reject((event) => _.startsWith(_.get(event, 'uri', ''), 'nav:'))
            .map((event) => ({
                ...event,
                type: event.type || event.name || _.toLower(event.cmd)
            }))
            .value()
)
