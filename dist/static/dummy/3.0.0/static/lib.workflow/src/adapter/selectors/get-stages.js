import _ from 'lodash'

import { createSelector } from './selector'
import { getScreens, getReferences } from './core'

const getWidgetsList = createSelector([getScreens], (screens) =>
    _.flatMap(screens, ({ footer = [] }) => [...footer])
)

const getStagesWidget = createSelector([getWidgetsList], (widgets) =>
    widgets.find((widget) => widget.type === 'WebStages') || {}
)

const getStagesReferenceId = createSelector(
    [getStagesWidget],
    (widget) => widget.properties?.productFeaturesReferenceId
)

export const getStages = createSelector(
    [getReferences, getStagesReferenceId],
    (references, referenceId) => references[referenceId]?.items || []
)
