export const LIGHT = 'light'
export const DARK = 'dark'

// eslint-disable-next-line complexity, comment: complexity of 13
export const getLoaderColorScheme = (colorScheme) => {
    switch (colorScheme) {
        case 'secondary':
        case 'link':
        case 'dark':
            return DARK

        case 'base':
        case 'purple':
        case 'blue':
        case 'green':
        case 'skyblue':
        case 'black':
        case 'gold':
        case 'aqua':
        case 'light':
        default:
            return LIGHT
    }
}
