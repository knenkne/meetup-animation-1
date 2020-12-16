export const makeNavigationAbsolute = (navigation = {}, plUrl = '') => {
    const result = {}
    Object.keys(navigation).forEach((key) => {
        const link = navigation[key]
        result[key] = link.startsWith('http') ? link : `${plUrl}${link}`
    })
    return result
}
