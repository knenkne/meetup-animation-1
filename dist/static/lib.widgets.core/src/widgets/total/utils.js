import axios from 'axios'
import _ from 'lodash'
import { Input } from '@sbol/lib.ui'

export const getDataPost = (fields, values) => {
    const dataPost = {}

    _.forEach(fields, (item) => {
        const value = values[item]

        if (!_.isUndefined(value)) {
            dataPost[item] = value
        }
    })

    return dataPost
}

export const isValuesChanged = (prevValues, nextValues, remoteLookupFieldIds) => _.some(
    remoteLookupFieldIds,
    (item) => prevValues[item] !== nextValues[item]
)

export const fetchData = (url, params) => axios.post(url, { params })

const formatOptions = {
    allowDecimal: true,
    decimalSymbol: ',',
    prefix: '',
    suffix: '',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: ' ',
    decimalLimit: null,
    integerLimit: null,
    requireDecimal: false,
    allowNegative: true,
    allowLeadingZeroes: false
}

export const formatNumber = (amount) => Input.formatNumberValue(amount.toString(), formatOptions)
