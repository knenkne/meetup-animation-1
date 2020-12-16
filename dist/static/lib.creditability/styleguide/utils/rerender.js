import _ from 'lodash'

const cache = []
export const rerender = (context, name) => {
    if (process.env.NODE_ENV !== 'production') {
        let cached = _.find(cache, { key: context._reactInternalInstance._debugID }) // eslint-disable-line no-underscore-dangle, comment: используем UID
        if (!cached) {
            cached = {
                key: context._reactInternalInstance._debugID, // eslint-disable-line no-underscore-dangle, comment: используем UID
                count: 0
            }
            cache.push(cached)
        }

        cached.count += 1

        console.log(`${name} рендер номер: ${cached.count}`) // eslint-disable-line no-console, comment: задача ререндера - консолить
    }
}
