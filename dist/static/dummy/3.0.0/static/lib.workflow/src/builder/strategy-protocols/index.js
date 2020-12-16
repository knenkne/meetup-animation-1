import { changeWidgetVisibility } from '../../adapter/actions/actions'

import { updateWidgetTitle } from './update-widget-title'
import { subscribeToFieldValueById } from './subscribe-to-field-value-by-id'

export const protocols = {
    changeWidgetVisibility,
    updateWidgetTitle,
    subscribeToFieldValueById
}
