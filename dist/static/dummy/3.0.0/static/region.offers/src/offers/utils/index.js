import _ from 'lodash'
import { getBroker } from '@sbol/lib.app/src/config'

const elementInViewport = (element, parentElementId) => {
    const elementRect = element.getBoundingClientRect()

    if (parentElementId && document.getElementById(parentElementId)) {
        const parentElementRect = document.getElementById(parentElementId).getBoundingClientRect()

        return (
            elementRect.left >= parentElementRect.left &&
            elementRect.right <= parentElementRect.right
        )
    }

    return (
        elementRect.top >= 0 &&
        elementRect.left >= 0 &&
        elementRect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        elementRect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
}

const SCROLL_THROTTLE = 300

export const onViewportAdd = (element, callback, parentElementId) => {
    const handler = _.throttle(() => {
        if (elementInViewport(element, parentElementId)) {
            return callback()
        }

        return void ''
    }, SCROLL_THROTTLE)

    document.addEventListener('scroll', handler)
    document.addEventListener('resize', handler)

    return handler
}

export const onViewportRemove = (handler) => {
    document.removeEventListener('scroll', handler)
    document.removeEventListener('resize', handler)
}

export const setActivePromo = (nextPromo) => {
    getBroker().publish('PROMO:V1:PROMO', nextPromo)
}
