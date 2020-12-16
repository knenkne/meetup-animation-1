import _ from 'lodash'

const cache = []

export const argsResolver = (...args) => {
    const existingCachedItem = _.find(cache, (cachedItem) => _.isEqual(cachedItem, args))

    if (!existingCachedItem) {
        cache.push(args)
    }

    return existingCachedItem || args
}

export const connectValidatorsWithCheckbox = _.memoize(
    (validators, connectedCheckbox) => _.map(validators, (validator) => (value, allValues, props) => {
        if (allValues[connectedCheckbox]) {
            return void 0
        }

        return validator(value, allValues, props)
    }),
    argsResolver
)
