import { createSelector } from 'reselect'
import { selectors } from '@sbol/lib.workflow'
import _ from 'lodash'

const getProps = (state, props) => props

export const isExistsIndent = createSelector(
    [selectors.getScreens, getProps],
    (screens, props) => {
        const structurePosition = props.structurePosition === 'body' ? 'widgets' : props.structurePosition
        return _.isEmpty(_.get(screens, [props.screenIndex, structurePosition, props.widgetIndex + 1, 'events']))
    }
)
