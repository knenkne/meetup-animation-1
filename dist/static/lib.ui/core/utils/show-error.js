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
var showError = function showError(_ref) {
  var touched = _ref.touched,
      active = _ref.active,
      submitFailed = _ref.submitFailed,
      error = _ref.error,
      value = _ref.value;
  return !touched && value && !active || touched && !active || submitFailed ? error : '';
};

export { showError };
//# sourceMappingURL=show-error.js.map
