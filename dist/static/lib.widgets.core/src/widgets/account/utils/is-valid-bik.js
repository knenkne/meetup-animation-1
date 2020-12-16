// https://ru.wikipedia.org/wiki/Банковский_идентификационный_код

import _ from 'lodash'

const BANK_NUMBER_RANGE_MIN = 50
const BANK_NUMBER_RANGE_MAX = 1000

const LAST_THREE_SYMBOLS = -3
const COUNTRY_CODE_LENGTH = 2

export function isValidBik (bik) {
    return bik.slice(0, COUNTRY_CODE_LENGTH) === '04' && _.inRange(bik.slice(LAST_THREE_SYMBOLS), BANK_NUMBER_RANGE_MIN, BANK_NUMBER_RANGE_MAX)
}
