import _ from 'lodash'

const replacer = (symbol) => {
    switch (symbol) {
        case '0':
            return /\d/
        case '9':
            // TODO: optional
            return /\d/
        case 'S':
            return /[A-Za-z]/
        case 's':
            // TODO: optional
            return /[A-Za-z]/
        case 'Ы':
            return /[А-Яа-яЁё]/
        case 'ы':
            // TODO: optional
            return /[А-Яа-яЁё]/
        case '_':
            return /./
        case '-':
            // TODO: optional
            return /./
        default:
            return ''
    }
}

const replacerNumber = (symbol) => {
    switch (symbol) {
        case '0':
            return /\d/
        case '9':
            // TODO: optional
            return /\d/
        default:
            return ''
    }
}

const splitFormattedBlock = (formattedBlock, isNumeric) => {
    const symbols = formattedBlock.slice(1, -1)
    let result = []
    if (formattedBlock[0] === '[') {
        result = _.map(symbols.split(''), isNumeric ? replacerNumber : replacer)
    }

    if (formattedBlock[0] === '<') {
        result = new RegExp(`[${symbols}]`)
    }
    return result
}

export const createInputMask = (mask, isNumeric = false) => {
    const regex = /(?:\[|\<)[^\[\]\<\>]+?(?:\]|\>)/ig // eslint-disable-line no-useless-escape, comment: deprecation warning
    let arr = []
    let pos = 0
    let result
    if (mask) {
        while (result = regex.exec(mask)) { // eslint-disable-line no-cond-assign, comment: deprecation warning
            const fixedArr = mask.slice(pos, result.index).split('')
            const formattedArr = splitFormattedBlock(result[0], isNumeric)

            arr = _.concat(arr, fixedArr, formattedArr)
            pos = regex.lastIndex
        }
        arr = _.concat(arr, mask.slice(pos).split(''))
    }
    return arr
}
