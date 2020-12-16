import _ from 'lodash'

import { multiselect, dateFormats } from '../../constants'

/**
 * @desc Функция конструирует функцию-валидатор
 * @param {Function} condition - Функция-проверка
 * @param {String} message - Сообщение об ошибке валидации
 * @param {Boolean} masked - Маскированное значение
 * @param {String} fieldId - Идентификатор поля
 * @return {Function} - Функция-валидатор для redux-form поля
 */
export const validatorFunctionFactory = (
    condition,
    message,
    masked,
    fieldId
) => (value, values, form) => {
    const isMaskedPristine = masked && value === form.initialValues[fieldId]

    return isMaskedPristine || condition(value) ? void 0 : message
}

const getDayWithTime = (date, hours, minutes, seconds) => new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    hours, minutes, seconds)

const getStartOfTheDay = (date) => getDayWithTime(date, 0, 0, 0)

const getEndOfTheDay = (date) => getDayWithTime(date, 23, 59, 59)

export const regexpTest = (validatorValue, value) => new RegExp(validatorValue, 'g', 'i').test(value)

export const mapConditionsOfValidatorTypes = {
    regexp: (validatorValue) => (value) =>
        _.isEmpty(value) || regexpTest(validatorValue, value),
    minLength: (validatorValue) => (value) =>
        _.isEmpty(value) || value.length >= Number(validatorValue),
    maxLength: (validatorValue) => (value) =>
        _.isEmpty(value) || value.length <= Number(validatorValue),
    required: () => (value) => Boolean(value) !== false,
    requiredNotEmptyArray: () => (value) =>
        _.isArray(value) && !_.isEmpty(value),
    minValue: (validatorValue) => (value) =>
        Number(value) >= Number(validatorValue),
    maxValue: (validatorValue) => (value) =>
        Number(value) <= Number(validatorValue),
    minDate: (validatorValue) => (value) =>
        new Date(value) >= getStartOfTheDay(new Date(validatorValue)),
    maxDate: (validatorValue) => (value) =>
        new Date(value) <= getEndOfTheDay(new Date(validatorValue))
}

const getValidatorType = (fieldType, fieldFormat, type) => {
    if (fieldType === multiselect) {
        return 'requiredNotEmptyArray'
    }
    if (dateFormats.indexOf(fieldFormat) !== -1) {
        if (type === 'minValue') {
            return 'minDate'
        }
        if (type === 'maxValue') {
            return 'maxDate'
        }
    }
    return type
}
/**
 * @desc Функция создаёт функции-валидаторы для redux-form полей из валидаторов пришедших из workflow
 * @typedef {Object} Объект описывающий валидацию для поля
 * @property {String} type - Тип валидации
 * @property {String} value - Значение ограничений валидации
 * @property {String} message - Сообщение в случае провала валидации
 * @param {Object} validator - Параметры валидации
 * @param {String} fieldType - Тип поля
 * @param {String} fieldFormat - Формат поля
 * @param {Boolean} masked - Маскированное значение
 * @param {String} fieldId - Идентификатор поля
 * @return {Function} - Функция-валидатор для redux-form поля
 *
 * validatorFactory :: Object -> Function
 */
export const validatorFactory = (
    validator,
    {
        type: fieldType,
        format,
        masked = false,
        id
    }
) => {
    const { type, value: validatorValue, message: validatorMessage } = validator

    const validatorType = getValidatorType(fieldType, format, type)

    if (process.env.NODE_ENV !== 'production') {
        if (!mapConditionsOfValidatorTypes[validatorType]) {
            const docURL =
                'https://sbtatlas.sigma.sbrf.ru/wiki/pages/viewpage.action?pageId=96993382#id-ПротоколобменаСБОЛUIWorkflow-FieldType'
            throw new Error(
                `Неизвестный тип валидатора: ${validatorType}.\nПожалуйста, используйте один из описанных в документации. ${docURL}`
            )
        }
    }

    return validatorFunctionFactory(
        mapConditionsOfValidatorTypes[validatorType](validatorValue),
        validatorMessage,
        masked,
        id
    )
}
