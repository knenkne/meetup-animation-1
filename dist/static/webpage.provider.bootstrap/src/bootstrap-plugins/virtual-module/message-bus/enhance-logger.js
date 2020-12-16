import log from '../../../bootstrap-logger'

/**
 * Добавляет к определенным методам логирование
 * @param {Object} logMap - Мапа где ключ метод, значение текст логирования
 * @param {Function} instance - Экземпляр класса
 * @return {Function} instance Экземпляр класса
 */
export const enhanceLogger = (logMap = {}) => (instance) => {
    Object.keys(logMap).forEach((method) => {
        const text = logMap[method]
        const ownMethod = instance[method]
        instance[method] = (...args) => {
            const listVariableTemplate = args.reduce(
                (memo, value, key) =>
                    Object.assign(memo, { [`$${key + 1}`]: value }),
                {}
            )
            log.debug(
                text.replace(/\$\d+/g, (type) => listVariableTemplate[type]),
                instance
            )
            return ownMethod.apply(instance, args)
        }
    })
    return instance
}
