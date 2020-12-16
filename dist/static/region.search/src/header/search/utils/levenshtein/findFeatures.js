import { N_GRAM_LENGTH } from '../../../search/constants'

import { calculate } from './nGramms'

import { distance } from '.'

export const find = (features, query) => {
    const searchQuery = query.toLowerCase()
    const nGram = query.length >= N_GRAM_LENGTH ? calculate(query) : []
    const searchResult = features
        .map((item) => {
            const scores = item.keyWordsArray.map((word) => {
                const levenshteinDistance = distance(searchQuery, word)

                return { distance: levenshteinDistance < word.length ? levenshteinDistance : -1, word }
            })
                .filter((element) => {
                    if (nGram.length) {
                        return nGram.find((g) => element.word.indexOf(g) >= 0)
                    }

                    return true
                })
                .filter((element) => element.distance >= 0)

            return { ...item,
                score: scores.length
                    ? scores.sort((a, b) => a.distance - b.distance)[0]
                    : { distance: -1, word: '' }
            }
        })
        .filter((item) => item.score.distance >= 0)

    return Promise.resolve(searchResult)
}
