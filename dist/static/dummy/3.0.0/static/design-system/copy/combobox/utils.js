import _ from 'lodash'

export const canBeRequestedByScrolling = (withPagination, event, allLoaded, loading) => {
    if (withPagination && !allLoaded && !loading && event.target) {
        return event.target.scrollHeight !== 0 && event.target.scrollHeight === event.target.scrollTop + event.target.clientHeight
    }

    return false
}

export const canBeRequestedByTyping = (query, value) =>
    query || value

export const autoScroll = (node, contentPlate) => {
    if (contentPlate && node) {
        const elementPos = contentPlate.scrollTop + node.getBoundingClientRect().top - contentPlate.getBoundingClientRect().top
        const height = contentPlate.clientHeight
        const currentPos = contentPlate.scrollTop

        if (!_.inRange(elementPos, currentPos, currentPos + height)) {
            contentPlate.scrollTop = Math.abs(currentPos - elementPos) < Math.abs(currentPos + height - elementPos) ? elementPos : elementPos - height + node.clientHeight // eslint-disable-line no-param-reassign, comment: скролл по клавиатуре
        } else if (!_.inRange(elementPos + node.clientHeight, currentPos, currentPos + height)) {
            contentPlate.scrollTop = elementPos - height + node.clientHeight // eslint-disable-line no-param-reassign, comment: скролл по клавиатуре
        }
    }
}
