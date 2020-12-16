import _ from 'lodash'

import { normalize } from '../utils'

import { createSelector } from './selector'
import { getEditableFieldIDs } from './get-editable-field-ids'
import { getMaskedPristineFieldIDs } from './get-masked-pristine-field-ids'
import { getVisibleWidgetsFieldsIDs } from './get-visible-widgets-fields-ids'
import { getValues } from './redux-form-values'

export const getFilteredValues = createSelector(
    [getValues, getEditableFieldIDs, getMaskedPristineFieldIDs, getVisibleWidgetsFieldsIDs],
    (values, editable, maskedPristineIDs, visibleFieldsIDs) =>
        _(values)
            .pick(_.intersection(editable, visibleFieldsIDs))
            .omit(maskedPristineIDs)
            .omitBy((value) => _.isNil(value))
            .mapValues(normalize)
            .value()
)
