import { getFormValues, getFormInitialValues } from 'redux-form'

/**
 * Возвращает значения полей формы
 * @param {Object} state - стор
 * @param {Object} properties - объект со свойством name - название формы
 * @return {Object} - объект со значениями полей формы
 */
export const getValues = (state, properties = {}) => getFormValues(properties.name)(state)

export const getInitialValues = (state, { name }) => getFormInitialValues(name)(state)
