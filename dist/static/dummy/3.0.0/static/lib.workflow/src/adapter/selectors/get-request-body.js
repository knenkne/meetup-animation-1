import _ from 'lodash'

import { createSelector } from './selector'

import { getDocumentProperties, getFilteredValues } from '.'

export const getRequestBody = createSelector(
    [getFilteredValues, getDocumentProperties],
    (values, documentProperties) => {

        const body = {
            fields: values,
            document: documentProperties
        }

        const cleanedBody = _.omitBy(body, _.isEmpty)

        return _.isEmpty(cleanedBody) ? null : cleanedBody
    }
)
