import _ from 'lodash'

const cache = []

/**
 * Фабричная функция, которая кеширует саму функцию её аргументы
 * Мемоизация позволяет избежать перерендеринга, если и функция, и аргументы поменялись
 * @param {Function} func - функция, которая будет закэширована по ссылке
 * @param {...any} args - параметры, которые будут закеширован по ссылке или значению;
 *                        привязываются к результирующей функции
 * @return {Function} - закешированная функция c привязанным аргументом.
 *                      Функция будет содержать в себе переданные для кэширования
 *                      аргументы, соответственно, повторные вызовы можно делать без
 *                      аргументов
 */
export const memoizeFuncWithArgs = (...args) => {
    let existingCachedItem = _.find(cache, (cachedItem) => _.isEqual(cachedItem.args, args))

    if (!existingCachedItem) {
        const [func, ...subs] = args

        existingCachedItem = {
            args,
            result: (...nextArgs) => func(...subs, ...nextArgs)
        }

        cache.push(existingCachedItem)
    }

    return existingCachedItem.result
}
