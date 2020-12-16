import _ from 'lodash'

import * as types from '../../action-types'
import { SCREEN_PARTS } from '../../../builder/components/structure/const'

const initialState = []

const findInScreenPart = (screen, fieldId) => {
    let result = void 0
    Object.keys(screen).map((key) => screen[key].forEach((widget, widgetIndex) => {
        if (!widget.fields) {
            return
        }
        widget.fields.forEach((field) => {
            if (field.id === fieldId) {
                result = { key, widgetIndex }
            }
        })
    })
    )
    return result
}

const findPathToUpdatedWidget = (screens, fieldId) => {
    let result = void 0
    screens.forEach((screen, index) => {
        const fromScreen = findInScreenPart(screen, fieldId)
        if (fromScreen) {
            result = { screenIndex: index, ...fromScreen }
        }
    })
    return result
}

export const updateWidgetTitleReducer = (screens = [], fieldId, newTitle) => {
    const path = findPathToUpdatedWidget(screens, fieldId)
    if (path) {
        const updatedWidget = {
            ..._.get(screens, `${path.screenIndex}.${path.key}.${path.widgetIndex}`),
            title: newTitle
        }
        const screenForUpdate = {
            ..._.get(screens, `${path.screenIndex}`)
        }

        const updatedScreen = {
            ...screenForUpdate,
            [path.key]: screenForUpdate[path.key].map((widget, index) => index === path.widgetIndex ? updatedWidget : widget)
        }
        return screens.map((item, index) => index === path.screenIndex ? updatedScreen : item)
    }
    return screens
}

export const enhancedScreens = (screens) => screens.map((screen, screenIndex) => {
    const result = { ...screen }
    Object.keys(SCREEN_PARTS).map((screenPart) => {
        if (screen[screenPart]?.length) {
            result[screenPart] = [...screen[screenPart]?.map((widget, widgetIndex) => ({ ...widget, screenIndex, widgetIndex }))]
        }
        return void 0
    })
    return result
})

const changeWidgetVisibility = (screens, screenIndex, screenPart, widgetIndex, hiddenByStrategy) =>
    screens.map((screen, index) => index === screenIndex ?
        {
            ...screen,
            [screenPart]: [
                ...screen[screenPart].map((widget, oneIndex) => oneIndex === widgetIndex ? { ...widget, hiddenByStrategy } : widget)
            ]
        } : screen)

export default (state = initialState, action) => {
    switch (action.type) {
        case types.UPDATE:
            return enhancedScreens(action.screens)
        case types.REMOVE_SCREENS:
            return initialState
        case types.UPDATE_WIDGET_TITLE:
            return updateWidgetTitleReducer(state, action.fieldId, action.newTitle)
        case types.CHANGE_WIDGET_VISIBILITY:
            return changeWidgetVisibility(state, action.screenIndex, action.screenPart, action.widgetIndex, action.hiddenByStrategy)
        default:
            return state
    }
}
