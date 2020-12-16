import _ from 'lodash'

import { statusTypePrefix, statusScreenType } from '../../constants'

import { createSelector } from './selector'

const getScreenStatusWidgets = (screens) => {
    const statusScreen = _.find(
        screens,
        (screen) => screen.type === statusScreenType
    )

    if (!statusScreen) {
        return []
    }

    return [
        ...statusScreen.header,
        ...statusScreen.widgets,
        ...statusScreen.footer
    ]
}

const getStatusWidgets = createSelector(
    [getScreenStatusWidgets],
    (widgetList) =>
        _.filter(widgetList, (widget) =>
            _.startsWith(widget.type, statusTypePrefix)
        )
)

export const getStatusWidget = createSelector(
    [getStatusWidgets],
    (statusWidgets) => {
        const StatusHeaderIcon = _.find(
            statusWidgets,
            (widget) => widget.type === 'StatusHeaderIcon'
        )
        const StatusHeaderResult = _.find(
            statusWidgets,
            (widget) => widget.type === 'StatusHeaderResult'
        )

        if (StatusHeaderResult && StatusHeaderIcon) {
            return {
                type: 'CoreStatus',
                title: StatusHeaderResult.title,
                description: StatusHeaderResult.description,
                properties: {
                    level: StatusHeaderIcon.properties.status,
                    statusWidgets
                },
                fields: [],
                state: StatusHeaderIcon.state,
                screenIndex: StatusHeaderIcon.screenIndex,
                widgetIndex: 0
            }
        }

        return void 0
    }
)
