import _ from 'lodash'
import { getConfigValue } from '@sbol/lib.app'

export const getUfsBlockRoot = (defaultValue) =>
    getConfigValue('ufs.block.root.url', '').indexOf('http') === 0
        ? getConfigValue('ufs.block.root.url')
        : defaultValue

const replaceStringsInObject = (source, from, to) => {
    if (_.isString(source)) {
        return source.replace(from, to)
    } else if (_.isObject(source)) {
        if (_.isArray(source)) {
            return _.map(source, (item) => replaceStringsInObject(item, from, to))
        }

        return _.mapValues(source, (item) => replaceStringsInObject(item, from, to))
    }

    return source
}

export const apiLinks = {
    handleSuccess: (response) => {
        const root = getUfsBlockRoot(getConfigValue('base.url', ''))
        const data = replaceStringsInObject(
            response.data,
            /^api:|\[[^\]]*]\(api:[^)]*\)/g,
            (all) => all.replace('api:', root)
        )

        Object.assign(response, { data })

        return Promise.resolve(response)
    }
}
