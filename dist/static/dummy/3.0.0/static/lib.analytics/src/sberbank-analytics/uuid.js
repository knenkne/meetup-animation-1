const VALUES_IN_BYTE = 256
const UUIDV4_PATTERN = '10000000-1000-4000-8000-100000000000'
const STRING_HEX_VIEW = 16

const SHIFTED_VALUE = 15
const UUID_DIVIDER = 4

const cryptoMock = {
    getRandomValues: (array) => {
        const filledArr = [...array]
        for (let i = 0; i < filledArr.length; i += 1) {
            filledArr[i] = Math.floor(Math.random() * VALUES_IN_BYTE)
        }
        return filledArr
    }
}

const crypto = window.crypto || window.msCrypto || cryptoMock

export const uuidv4 = () => UUIDV4_PATTERN
    .replace(
        /[018]/g,
        // eslint-disable-next-line no-bitwise, comment: манипуляция битами необходима для создания псевдослучайного числа
        (c) => (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (SHIFTED_VALUE >> (c / UUID_DIVIDER))))
            .toString(STRING_HEX_VIEW)
    )
