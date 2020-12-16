// https://ru.wikipedia.org/wiki/Расчётный_счёт

const COEFFICIENTS = [7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1] // eslint-disable-line
const LAST_THREE_SYMBOLS = -3

export function isValidAccount (account, bik) {
    const bikRs = `${bik.slice(LAST_THREE_SYMBOLS)}${account}`

    let checksum = 0

    COEFFICIENTS.forEach((c, i) => {
        checksum += c * (bikRs[i] % 10) // eslint-disable-line
    })

    return checksum % 10 === 0 // eslint-disable-line
}

