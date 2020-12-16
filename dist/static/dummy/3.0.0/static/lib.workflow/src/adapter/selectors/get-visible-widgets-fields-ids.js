import _ from 'lodash'

import { createSelector } from './selector'

import { getBodyScreens } from '.'

export const getVisibleWidgetsFieldsIDs = createSelector(
    [getBodyScreens],
    (screens) => _.reduce(screens, (result, screen) => {
        _.forEach(screen.widgets, (widget) =>
            _.forEach(widget.fields, (field) => result.push(field.id))
        )
        return result
    }, [])
)
