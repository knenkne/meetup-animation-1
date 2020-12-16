import _ from 'lodash'
import i18next from 'i18next'
import { format } from 'date-fns'
import { ru } from 'date-fns/esm/locale'

export const getReference = (references, field) => _.get(references, [field.referenceId])

export const getOption = (reference, value) => {
    const items = _.get(reference, ['items'], [])
    return items.find((ref) => ref.value === value) || {}
}

export const getValue = (fieldValue, referenceTitle, type) => {
    if (type === 'checkbox') {
        return fieldValue === 'true' ? i18next.t('lib.widgets.web:checkbox.checked') : i18next.t('lib.widgets.web:checkbox.unchecked')
    }
    return referenceTitle || fieldValue
}

export const formatDate = (field, dateFormat) => {
    if (field.masked) {
        return field.value
    }
    return format(field.value, dateFormat, { locale: ru })
}
