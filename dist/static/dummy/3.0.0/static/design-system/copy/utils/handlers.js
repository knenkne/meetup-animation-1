import _ from 'lodash'

const cache = []

export const argsResolver = (...args) => {
    const existingCachedItem = _.find(cache, (cachedItem) => _.isEqual(cachedItem, args))

    if (!existingCachedItem) {
        cache.push(args)
    }

    return existingCachedItem || args
}

export const handlePreventDefault = (event) => {
    if (typeof event.preventDefault === 'function') {
        event.preventDefault()
    }
    return event
}
export const handleStopPropagation = (event) => {
    if (typeof event.stopPropagation === 'function') {
        event.stopPropagation()
    }
    return event
}
export const handleSelectAll = (event) => {
    if (_.has(event, 'target.value.length') && event.target && event.target.type !== 'number') {
        const input = event.target
        input.selectionStart = 0
        input.selectionEnd = input.value.length
    }
    return event
}

export const disableHandler = _.memoize((handler, isDisabled) => isDisabled ? handlePreventDefault : handler, argsResolver)

export const preventHandler = _.memoize((handler) => _.flow(handlePreventDefault, handler))
export const stopPropagationHandler = _.memoize((handler) => _.flow(handleStopPropagation, handler))
export const selectAllHandler = _.memoize((handler) => _.flow(handleSelectAll, handler))

export const eventValueHandler = _.memoize((handler) => (event) => handler(_.get(event, 'target.value', event), event))
export const eventCheckedHandler = _.memoize((handler) => (event) => handler(_.get(event, 'target.checked', event), event))
