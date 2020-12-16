import _ from 'lodash'

export const MASK_SYMBOL = '•'

const mapFormat = (char) => {
    if (typeof char === 'object') {
        return new RegExp(`[${char.source.replace(/[[\]]/g, '')}${MASK_SYMBOL}]`)
    }
    return char
}

export const isMaskedValue = (value) => _.includes(value, MASK_SYMBOL)

export const maskedFormat = (format, value) => {
    if (isMaskedValue(value)) {
        if (_.isFunction(format)) {
            return (v) => format(v).map(mapFormat)
        }

        return format.map(mapFormat)
    }

    return format
}
