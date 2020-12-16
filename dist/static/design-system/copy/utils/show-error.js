/**
 *   Функция вычисляет необходимость показа ошшибки валидации
 *
 * @param {bool} touched - поле тачнуто
 * @param {bool} active - поле в фокусе
 * @param {bool} submitFailed - форма засабмичена, но есть ошибки валидации
 * @param {string} error - текст ошибки валидации
 * @param {any} value - значение в инпуте
 * @return {string}
 */

export const showError = ({ touched, active, submitFailed, error, value }) =>
    (!touched && value && !active) || (touched && !active) || submitFailed ? error : ''
