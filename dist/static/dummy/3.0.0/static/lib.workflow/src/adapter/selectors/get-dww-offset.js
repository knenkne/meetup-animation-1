import _ from 'lodash'

import { STRUCTURE_POSITION } from '../../builder/components/structure/const'

import { dwwOffsetCalculators } from './dwwOffsetCalculators'
import { getScreensWithVisibleWidgets } from './general'
import { getName } from './core'

export const getDwwOffset = (state, props) => {
    const { screenIndex, structurePosition, widgetIndex } = props

    if (_.isUndefined(screenIndex) || _.isUndefined(structurePosition) || _.isUndefined(widgetIndex)) {
        return ''
    }

    const name = getName(state)
    const screens = getScreensWithVisibleWidgets(state, { name })
    const currentScreen = structurePosition === STRUCTURE_POSITION.body ?
        screens[screenIndex].widgets : screens[screenIndex][structurePosition]

    const currentWidget = currentScreen?.find((widget) => widget.widgetIndex === props.widgetIndex)

    return currentWidget && dwwOffsetCalculators[currentWidget.type]
        ? dwwOffsetCalculators[currentWidget.type]({ props, screen: currentScreen })
        : ''
}
