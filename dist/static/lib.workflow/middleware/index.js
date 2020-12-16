const getMiddleware = require('./workflow')
const { helpers: { createValidationMessage, createMessageWithValidationError } } = require('./validators')

const {
    helpers: {
        flushServerState,
        startAutoFlush,
        stopAutoFlush
    }
} = getMiddleware

module.exports = {
    /**
     * Создание state-machine с помощью конфигурации формы
     * Принимает первым аргументом - конфиг
     * Вторым аргументом - параметры (например, disableSchemaValidation для отключения валидации по json-schema)
     */
    getMiddleware,
    middlewareUtils: {
        /**
         * Создание сообщения валидации
         */
        createValidationMessage,
        /**
         * Создание валидационной ошибки
         */
        createMessageWithValidationError,
        /**
         * Сброс состояния формы
         */
        flushServerState,
        /**
         * Включени автосброса состояния формы по достижению finish
         */
        startAutoFlush,
        /**
         * Отключение автосброса состояния формы
         */
        stopAutoFlush
    }
}
