import _ from 'lodash'

const isEmpty = (value) => !value || _.isNil(value) || value?.length === 0 || value === 0

export const getProductMessage = (text, style, params = {}) => ({
    message: {
        ...{ text: !isEmpty(text) && text },
        ...{ style: !isEmpty(style) && style },
        ...params
    }
})
