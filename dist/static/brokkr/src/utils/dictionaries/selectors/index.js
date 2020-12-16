/* eslint-disable quote-props, comment: единообразие описания */
const _ = require('lodash')

const cssHashMap = require('../../css-hash-map')
const getFromDictionary = require('../../get-from-dictionary')

const cssSelectors = require('./css-selectors')
const dataSelectors = require('./data-selectors')
const getSelector = require('./get-selector')

const clearSelectors = _.mergeWith(dataSelectors, cssSelectors, (dataSelector, cssSelector) => {
    if (dataSelector && cssSelector) {
        return `${dataSelector}, ${cssSelector}`
    }

    return cssSelector || dataSelector
})

module.exports = new Proxy(
    clearSelectors,
    {
        get (target = clearSelectors, word) {
            return getSelector(getFromDictionary(target, word), cssHashMap)
        }
    }
)
