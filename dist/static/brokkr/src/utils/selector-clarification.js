const COMMON_SELECTOR_SEPARATOR = ', '

const splitMultipleSelector = (selector) => selector.split(/,[ \n]*/)

module.exports = (selector, increment) => {
    if (selector === '') {
        return increment
    } else if (increment === '') {
        return selector
    }

    const originalSelectors = splitMultipleSelector(selector)
    const incrementalSelectors = splitMultipleSelector(increment)

    return originalSelectors
        .map((originalSelector) => incrementalSelectors
            .map((incrementalSelector) => `${originalSelector} ${incrementalSelector}`)
            .join(COMMON_SELECTOR_SEPARATOR))
        .join(COMMON_SELECTOR_SEPARATOR)
}
