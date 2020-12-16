import _ from 'lodash'

/*
 * Multiple Fetch for array of promises
 * @param {Array} promisesArray - array of promises
 * @return Promise
 */
export const mulptipleFetch = (promisesArray) =>
    // todo: возможно сделать common dispatch loading
    Promise.allSettled(promisesArray.map((link) => {
        if (_.isFunction(link)) {
            return link()
        }
        return () => {}
    }))
        .then((results) => results
            // todo: сюда логирование rejected
            // todo: возможно сделать common dispatch error
        )

