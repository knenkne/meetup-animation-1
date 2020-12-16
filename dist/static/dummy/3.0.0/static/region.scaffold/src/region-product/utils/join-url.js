export const joinUrl = (...paths) =>
    paths.reduce((memo, part = '') => {
        if (part.startsWith('http')) {
            return part
        }

        if (part === '/') {
            return memo
        }

        return `${memo}/${part.replace(/^\//g, '')}`
    }, '')
