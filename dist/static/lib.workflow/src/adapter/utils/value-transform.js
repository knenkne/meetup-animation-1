import _ from 'lodash'

import { checkbox, multiselect, text, fieldTypes } from '../../constants'

const EMPTY_VALUE_MULTISELECT = []
const EMPTY_STRING = ''
const validCheckboxValues = ['true', 'false']
const validFieldTypes = _.keys(fieldTypes)

const validateField = (field) => {
    const { type, value, values } = field
    const docURL = 'https://sbtatlas.sigma.sbrf.ru/wiki/pages/viewpage.action?pageId=124912257'

    if (!_.includes(validFieldTypes, type)) {
        console.warn(`"${type}" type`, '"format" property')
    }

    if (type === multiselect && !_.isArray(values)) {
        throw new Error(`Поле с типом multiselect должно содержать values в виде массива (или пустой массив). ${docURL}`)
    }

    if (type !== multiselect && _.isArray(value)) {
        throw new Error(`Только поле с типом multiselect может содержать values в виде массива. ${docURL}`)
    }

    if (type === checkbox && _.has(field, 'value') && !validCheckboxValues.includes(value)) {
        throw new Error(`Значение, переданное шлюзом для поля с типом 'checkbox', может отсутвовать, быть 'true' или 'false'. ${docURL}`)
    }
}

export const parse = (field) => {
    if (process.env.NODE_ENV !== 'production') {
        validateField(field)
    }

    const { type, value } = field

    switch (type) {
        case multiselect:
            return field.values || EMPTY_VALUE_MULTISELECT
        case checkbox:
            return value === 'true'
        case text:
            return field.value || EMPTY_STRING
        default:
            return value
    }
}

export const normalize = (value) => {
    if (_.isArray(value)) {
        return value
    }

    return _.isBoolean(value) ? _.toString(value) : value
}
