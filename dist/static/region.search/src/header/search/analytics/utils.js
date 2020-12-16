const COUNT_OF_DIGITS = 4

export const hideNumbers = (str) => {
    if (!str) {
        return str
    }

    let counter = COUNT_OF_DIGITS
    let result = ''

    for (let i = 0; i < str.length; i++) {
        const isNumber = /^[0-9]{1}$/.test(str[i])

        if (isNumber && counter === 0) {
            result += '*'
        } else if (isNumber && counter !== 0) {
            counter -= 1
            result += str[i]
        } else {
            result += str[i]
        }
    }

    return result
}
