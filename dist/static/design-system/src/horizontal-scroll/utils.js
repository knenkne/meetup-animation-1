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
