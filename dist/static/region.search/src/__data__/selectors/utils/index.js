import _ from 'lodash'
import { getFeatureValue } from '@sbol/lib.app'

import { getConvertedString } from '../../../header/search/utils/searchString/changeLanguage'
import { N_GRAM_LENGTH } from '../../../header/search/constants'

export const filterByFields = (fields = []) => (items, query) => {
    const useLevenshteinWithFeatures = getFeatureValue('useLevenshteinWithFeatures', 'region.search')

    if (useLevenshteinWithFeatures && useLevenshteinWithFeatures === 'true' && query.length >= N_GRAM_LENGTH) {
        return items
    }

    const searchQuery = _.toLower(query)

    return items.filter((item) => {
        const searchValues = fields.map((field) => _.toLower(item[field]))
        return searchValues.some((val) => val.includes(searchQuery))
    })
}

export const filterWithConvertedQuery = (fields = []) => (items, query) => {
    const useLevenshteinWithFeatures = getFeatureValue('useLevenshteinWithFeatures', 'region.search')

    if (useLevenshteinWithFeatures && useLevenshteinWithFeatures === 'true' && query.length >= N_GRAM_LENGTH) {
        return []
    }

    const convertedSearchQuery = _.toLower(getConvertedString(query))

    if (convertedSearchQuery) {
        return items.filter((item) => {
            const searchValues = fields.map((field) => _.toLower(item[field]))
            return searchValues.some((val) => val.includes(convertedSearchQuery))
        })
    } return []
}

