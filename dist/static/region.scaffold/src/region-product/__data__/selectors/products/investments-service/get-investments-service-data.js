import isEmpty from 'lodash/isEmpty'

import { productCategories } from './enums'
import {
    createObjectIisDu,
    findProduct,
    getMatchesInArray,
    getMatchesInArrayReverse
} from './utility'
import { anyDuAndIisEmpty } from './strategies/any-du-and-iis-empty'
import { duOffersEmpty } from './strategies/du-offers-empty'
import { duOffersEmptyAndIisAny } from './strategies/du-offers-empty-and-iis-any'
import { iisAnyAndDuAny } from './strategies/iis-any-and-du-any'
import { iisAnyAndDuEmpty } from './strategies/iis-any-and-du-empty'
import { iisEmptyAndDuEmpty } from './strategies/iis-empty-and-du-empty'

export const getInvestmentsServiceData = (arrayData, productsIisAndDu) => {

    const iisStrategiesList = createObjectIisDu(productsIisAndDu.iis)
    const duStrategiesList = createObjectIisDu(productsIisAndDu.du)

    const productList = arrayData
    const iisList = findProduct(productList, productCategories.catIis)
    const duList = findProduct(productList, productCategories.catDy)
    const matchedDu = getMatchesInArray(productList, duList)
    const duOffers = getMatchesInArrayReverse(duStrategiesList, matchedDu)

    const isIisListEmpty = isEmpty(iisList)
    const isDuListEmpty = isEmpty(duList)
    const isDuOffersListEmpty = isEmpty(duOffers)

    const data = {
        productList,
        duList,
        duOffers,
        duStrategiesList,
        iisList,
        iisStrategiesList,
        isDuListEmpty,
        isDuOffersListEmpty,
        isIisListEmpty,
    }

    const strategies = [
        anyDuAndIisEmpty,
        duOffersEmpty,
        duOffersEmptyAndIisAny,
        iisAnyAndDuAny,
        iisAnyAndDuEmpty,
        iisEmptyAndDuEmpty,
    ]

    return strategies.reduce((products, strategy) => {
        let productsList = products

        if (!isEmpty(strategy(data))) {
            productsList = strategy(data)
        }

        return productsList
    }, [])
}
