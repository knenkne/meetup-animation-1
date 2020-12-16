export const createUrlParams = (params) => Object.entries(params)
    .reduce((acc, [key, value]) => `${acc ? acc + '&' : acc}${key}=${value}`, '')
