export const easeInOutQuad = (time, start, change, duration) => {
    /* eslint-disable no-mixed-operators, comment: лучше не скомпоновалось */
    const half = 2
    let halvedTime = time / (duration / half)
    if (halvedTime < 1) {
        return (change / half) * halvedTime * halvedTime + start
    }
    halvedTime -= 1
    return -change / half * (halvedTime * (halvedTime - half) - 1) + start
}

export const smoothScroll = (element, change, duration) => {
    const start = element.scrollLeft
    const el = element
    let currentTime = 0
    const increment = 20

    const animateScroll = () => {
        currentTime += increment
        el.scrollLeft = easeInOutQuad(currentTime, start, change, duration)
        if (currentTime < duration) {
            requestAnimationFrame(animateScroll)
        }
    }
    animateScroll()
}

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

    // В IE scrollWidth больше clientWidth на 1px, даже если нет скролла, поэтому  > 1, а не > 0.
    return Math.floor(contents.scrollWidth - contents.clientWidth - contents.scrollLeft) > 1
}
