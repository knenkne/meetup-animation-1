import _ from 'lodash'

const isEmpty = (value) => !value || _.isNil(value) || value?.length === 0 || value === 0

export const getProductIcon = (src = '', colorScheme = '') => ({
    src,
    ...{ colorScheme: !isEmpty(colorScheme) && colorScheme }
})
