import { createSelector } from 'reselect'
import _ from 'lodash'

import {
    PRODUCTS_FIELDS_FOR_SEARCH,
    PAGES_FIELDS_FOR_SEARCH
} from '../../header/constants'

import {
    filterByCategory,
    filterByEmptyLink,
    filterByAvailability,
    sortPages
} from './pages'
import { getUnifiedProducts } from './products'
import { getAutocomplete, getSuggests, getHistory } from './suggests'
import { getProviderResult, getProvidersShowAll } from './providers'
import { filterByFields, filterWithConvertedQuery } from './utils'
import { getFeatureValue } from "@sbol/lib.app"

export const simpleSearchQuerySelector = (state) => state.search.query

export const simpleProductsSelector = (state) => state.products || {}

export const simpleOperationsSearchedSelector = (state) => state.operations.searched.operations
export const simpleOperationsRequestCountSelector = (state) => state.operations.searched.requestCount
export const simpleIsLoadingOperationsSelector = (state) => state.operations.searched.isLoading || state.operations.preFetched.isLoading
export const simpleLoadingFailedOperationsSelector = (state) => state.operations.searched.loadingFailed || state.operations.preFetched.loadingFailed
export const simpleOperationsPreFetchedSelector = (state) => state.operations.preFetched.operations
export const simpleOperationsResultSelector = (state) => state.operations.result.operations
export const simpleOperationsShowAllSelector = (state) => state.operations.result.showAll
export const simpleOperationsTotalCountSelector = (state) => state.operations.result.totalCount
export const simpleOperationsLastQuerySelector = (state) => state.operations.result.lastQuery

export const simpleProvidersSelector = (state) => state.providers.providers
export const simpleIsLoadingProvidersSelector = (state) => state.providers.isLoading
export const simpleLoadingFailedProvidersSelector = (state) => state.providers.loadingFailed

export const simplePagesSelector = (state) => state.pages.pages
export const simpleServerDataSelector = (state) => state.pages.serverData
export const simpleIsLoadingPagesSelector = (state) => state.pages.isLoading
export const simpleIsLoadedPagesSelector = (state) => state.pages.isLoaded
export const simplePagesProductsToShowSelector = (state) => state.pages.productsToShow
export const pagesAvailabilitySelector = (state) => state.pages.pagesUnAvailable

export const simpleSearchedValuesSelector = (state) => state.suggests.searchedValues
export const simpleSearchQuerySuggestions = (state) => state.suggests.searchQuerySuggestions
export const simpleQuickSuggestions = (state) => state.suggests.quick.data

export const simpleScreenUrl = (state) => state.screen.url
export const simpleScreenBlockOrder = (state) => state.screen.blockOrder

export const unifiedProducts = createSelector(
    [simpleProductsSelector],
    getUnifiedProducts
)

export const getFilteredProducts = createSelector(
    [unifiedProducts, simpleSearchQuerySelector],
    (products, query) => {
        const useSearchWithConvertedQuery = getFeatureValue('useSearchWithConvertedQuery', 'region.search')
        const filteredProducts = filterByFields(PRODUCTS_FIELDS_FOR_SEARCH)(products, query)

        if (useSearchWithConvertedQuery && useSearchWithConvertedQuery === 'true') {
            const productsByConvertedQuery = filterWithConvertedQuery(PRODUCTS_FIELDS_FOR_SEARCH)(products, query)
            return filteredProducts.concat(productsByConvertedQuery)
        }
        return filteredProducts
    }
)

export const getProductsFromPages = createSelector(
    [simpleProductsSelector, simplePagesProductsToShowSelector],
    (allProducts, productsToShow) => {
        const category = _.toLower(productsToShow.prodListType)
        const { link } = productsToShow

        const products = Object.keys(allProducts)
            .reduce((acc, prod) => ({
                ...acc,
                [prod]: prod === category ? allProducts[prod] || [] : []
            }), {})

        // в функциях приходит ссылка типа '/PhizIC/private/accounts/info.do?id={{accountId}}'
        // заменяем {{accountId}} на id продукта
        return getUnifiedProducts(products)
            .map((product) => ({
                ...product,
                href: link.replace(/{{\w+}}/, product.id)
            }))
    }
)

export const getFilteredPages = createSelector(
    [simplePagesSelector, simpleSearchQuerySelector],
    (pages, query) => {
        const useSearchWithConvertedQuery = getFeatureValue('useSearchWithConvertedQuery', 'region.search')
        const filteredPages = filterByFields(PAGES_FIELDS_FOR_SEARCH)(pages, query)

        if (useSearchWithConvertedQuery && useSearchWithConvertedQuery === 'true') {
            const pagesByConvertedQuery = filterWithConvertedQuery(PAGES_FIELDS_FOR_SEARCH)(pages, query)
            
            return _.uniqBy(filteredPages.concat(pagesByConvertedQuery), (item) => `${item.action}::${item.link}`)
        }
        return filteredPages
    }
)

export const selectOperations = createSelector(
    [simpleOperationsResultSelector],
    (operations) => operations
)

export const selectProvidersResult = createSelector(
    [simpleProvidersSelector],
    getProviderResult
)

export const selectProvidersShowAll = createSelector(
    [simpleProvidersSelector],
    getProvidersShowAll
)

export const isProductFromPagesSelector = createSelector(
    [simplePagesProductsToShowSelector],
    (simplePagesProductsToShow) => !_.isEmpty(simplePagesProductsToShow)
)

export const pagesProductsTitleSelector = createSelector(
    [simplePagesProductsToShowSelector],
    (simplePagesProductsToShow) => simplePagesProductsToShow.action || ''
)


export const isSearchEmptySelector = createSelector(
    [
        getFilteredPages,
        getFilteredProducts,
        simpleOperationsResultSelector,
        simpleProvidersSelector
    ],
    (pages, products, operationsResult, providers) =>
        _.isEmpty([...pages, ...products, ...operationsResult, ...providers])
)

export const isLoadingSelector = createSelector(
    [
        simpleIsLoadingPagesSelector,
        simpleIsLoadingOperationsSelector,
        simpleIsLoadingProvidersSelector
    ],
    (isLoadingPages, isLoadingOperations, isLoadingProviders) =>
        isLoadingPages || isLoadingOperations || isLoadingProviders
)

export const suggestSelector = createSelector(
    [simpleQuickSuggestions],
    getSuggests
)

export const historySelector = createSelector(
    [simpleSearchedValuesSelector],
    getHistory
)

/**
 * Выбрать значение (suggest) для добавления в строку поиска (когда происходит ввод текста)
 */
export const autocompleteSelector = createSelector(
    [simpleSearchQuerySelector, simpleSearchedValuesSelector, simpleSearchQuerySuggestions],
    getAutocomplete
)
