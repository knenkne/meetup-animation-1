import { scrollToElement as baseScrollToElement } from '@sbol/lib.ui'

const TOP_FIELD_OFFSET = 80

// Функция скролла к полю redux-form при наличии в нём валидационной ошибки
export const scrollToError = (formErrors = {}, offset = TOP_FIELD_OFFSET) => {

    const fieldsWithErrors = Object.keys(formErrors)

    if (fieldsWithErrors.length) {

        const firstFieldElement = document.getElementById(fieldsWithErrors[0])

        if (firstFieldElement) {
            baseScrollToElement(firstFieldElement, { offset }, () => {
                if (typeof firstFieldElement.focus === 'function') {
                    firstFieldElement.focus()
                }
            })
        }
    }
}

export const scrollToElement = (element, offset = TOP_FIELD_OFFSET, cb) =>
    baseScrollToElement(element, { offset }, cb)
