export const isEmptyInput = (field, formValues) => !formValues[field.id]

export const isDisabledCheckbox = (textFields, index, checkboxFields, formValues, syncErrors, disableIfPrevOmitted) => {
    if (!index) {
        return false
    }

    const prevCheckbox = checkboxFields[textFields[index - 1].id]
    const prevIsOmitted = prevCheckbox && formValues[prevCheckbox.id]
    const prevField = textFields[index - 1].field

    return (!prevIsOmitted || disableIfPrevOmitted) && (isEmptyInput(prevField, formValues)
        || !!syncErrors[prevField.id])
}

export const isDisabledText = (textFields, index, checkboxFields, formValues, syncErrors, disableIfPrevOmitted) => {
    const fieldId = textFields[index].id
    const isOmitted = !!checkboxFields[fieldId] && formValues[checkboxFields[fieldId].id]

    return isDisabledCheckbox(textFields, index, checkboxFields, formValues, syncErrors, disableIfPrevOmitted)
        || isOmitted
}

export const ADDRESS_KIND = {
    REGION: 'REGION',
    CITY: 'CITY',
    STREET: 'STREET',
    HOUSE: 'HOUSE',
    APARTMENT: 'APARTMENT'
}

export const SOURCE_ID_MAPPING = {
    ФИАС: 'fiasId',
    КЛАДР: 'kladrId'
}

export const ADDRESS_FIELD_MAPPING = {
    [ADDRESS_KIND.REGION]: 'region',
    [ADDRESS_KIND.CITY]: 'region',
    [ADDRESS_KIND.STREET]: 'street',
    [ADDRESS_KIND.HOUSE]: 'house',
}

export const getQuery = (option, kind) => {
    const id = ADDRESS_FIELD_MAPPING[kind]

    return `${option[`${id}Type`]} ${option[id]}`
}

export const getOption = (option, kind, source) => ({
    title: getQuery(option, kind),
    value: option[SOURCE_ID_MAPPING[source]] || option[ADDRESS_FIELD_MAPPING[kind]]
})

export const getParentId = (textFields, index, checkboxFields, formValues) => {
    if (!index) {
        return void 0
    }

    const prevTextField = textFields[index - 1]
    const prevCheckbox = checkboxFields[prevTextField.id]
    const prevIsOmitted = prevCheckbox && formValues[prevCheckbox.id]

    if (prevIsOmitted) {
        return getParentId(textFields, index - 1, checkboxFields, formValues)
    }

    return formValues[prevTextField.field.id]
}

export const getInitialQuery = (references, referenceId, kind) => {
    const currentOption = references?.[referenceId]?.properties

    if (!currentOption) {
        return void 0
    }

    return getQuery(currentOption, kind)
}
