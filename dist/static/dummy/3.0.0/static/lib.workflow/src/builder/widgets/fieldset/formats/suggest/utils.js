import _ from 'lodash'

export const generateGetIcon = _.memoize((itemImgSrc) => (option) => _.get(option, ['properties', itemImgSrc]))
export const generateGetDescription = _.memoize((itemDescriptionKey) => (option) => _.get(option, ['properties', itemDescriptionKey || 'description']))
