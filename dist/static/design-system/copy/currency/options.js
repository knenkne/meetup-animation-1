import _ from 'lodash'

import { symbols } from './locales'

export const options = {
    symbols,
    display: {}
}

export function setCurrencyDisplayName (currencyCode, currencyNames) {
    let names = currencyNames

    if (_.isString(currencyNames)) {
        // sonarQube, c'mon
        names = [currencyNames, currencyNames, currencyNames]
    }
    
    options.display[_.lowerCase(currencyCode)] = names
}
