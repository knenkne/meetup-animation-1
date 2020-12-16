import { createSelector } from './selector'
import { getScreens } from './core'

const statusWidgets = ['WebStatusHeadline', 'WebStatus', 'CoreStatusHeadline', 'CoreStatus']

/* eslint-disable no-extra-parens, comment: 'disable for spread construction' */
export const getStatusLevel = createSelector(getScreens, (screens) => {
    const widgets = screens.reduce(
        (memo, screen) => memo.concat([
            ...(screen?.header || []),
            ...(screen?.widgets || []),
            ...(screen?.footer || [])
        ]), []
    )

    const statusWidget = widgets.find((widget) => statusWidgets.includes(widget.type))

    return statusWidget?.properties?.level
})
