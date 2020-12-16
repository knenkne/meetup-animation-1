import { N_GRAM_LENGTH } from '../../../search/constants'

const NEXT_LETTER = 1
const LAST_LETTER = 2

export const calculate = (query) => {
    const queryLength = query.length

    if (queryLength < N_GRAM_LENGTH) {
        return []
    }

    if (queryLength === N_GRAM_LENGTH) {
        return [query]
    }

    const result = []

    for (let i = 0; i < query.length - LAST_LETTER; i++) {
        result.push(`${query[i]}${query[i + NEXT_LETTER]}${query[i + LAST_LETTER]}`)
    }

    return result
}
