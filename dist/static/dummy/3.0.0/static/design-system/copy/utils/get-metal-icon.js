const DEFAULT_NAMESPACE = 'icon:core/products'

const iconDictionary = {
    default: `${DEFAULT_NAMESPACE}/argentum`,
    ghost: `${DEFAULT_NAMESPACE}/ghostMetal`,
    arg: `${DEFAULT_NAMESPACE}/argentum`,
    aur: `${DEFAULT_NAMESPACE}/aurum`,
    ptr: `${DEFAULT_NAMESPACE}/platinum`,
    pdr: `${DEFAULT_NAMESPACE}/palladium`,
}

export const getMetalIcon = ({ balance }) => {
    const key = String(balance?.currency.code).toLowerCase()

    return iconDictionary[key] || iconDictionary.default
}
