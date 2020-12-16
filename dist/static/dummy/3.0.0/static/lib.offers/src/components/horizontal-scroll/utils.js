export const leftCheck = (contents) => {
    if (!contents) {
        return false
    }

    return contents.scrollLeft > 0
}

export const rightCheck = (contents) => {
    if (!contents) {
        return false
    }

    return contents.scrollWidth - contents.scrollLeft - contents.clientWidth > 0
}

/* eslint-disable no-mixed-operators, comment: smooth scroll */
const easeInOutQuad = (time, start, change, duration) => {
    const half = 2
    let halvedTime = time / (duration / half)
    if (halvedTime < 1) {
        return ((change / half) * halvedTime * halvedTime) + start
    }
    halvedTime -= 1
    return -change / half * (halvedTime * (halvedTime - half) - 1) + start
}

export const smoothScroll = (element, change, duration) => {
    const start = element.scrollLeft
    let currentTime = 0
    const increment = 20

    const animateScroll = () => {
        currentTime += increment
        element.scrollLeft = easeInOutQuad(currentTime, start, change, duration)
        if (currentTime < duration) {
            requestAnimationFrame(animateScroll)
        }
    }
    animateScroll()
}
