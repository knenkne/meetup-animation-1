import { Input } from '@sbol/lib.ui'
import _ from 'lodash'
import i18next from 'i18next'

const measureTypes = ['single', 'min', 'max']
const formatNumber = (value) => Input.formatNumberValue(value, {})


export const getValue = (properties) => {
    const measures = _(properties)
        .pick(measureTypes)
        .mapValues(formatNumber)
        .value()

    if (properties.type === 'plain') {
        return properties.title
    }

    const unit = properties.unit === '%' ? properties.unit : ` ${properties.unit}`

    if (properties.type === 'single') {
        return `${measures.single}${unit}`
    } else if (properties.type === 'range') {
        let output = ''
        if (measures.min) {
            output += `${i18next.t('lib.widgets.web:product.range.from')} ${measures.min}`
        }
        if (measures.max) {
            output += `${output ? ' ' : ''}${i18next.t('lib.widgets.web:product.range.to')} ${measures.max}`
        }
        return `${output}${properties.unit}`
    }

    return ''
}
