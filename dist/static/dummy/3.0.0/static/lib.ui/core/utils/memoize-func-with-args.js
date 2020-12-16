import { b as _toConsumableArray } from '../_rollupPluginBabelHelpers-687385f0.js';
import _ from 'lodash';

var cache = [];
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

var memoizeFuncWithArgs = function memoizeFuncWithArgs() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var existingCachedItem = _.find(cache, function (cachedItem) {
    return _.isEqual(cachedItem.args, args);
  });

  if (!existingCachedItem) {
    var func = args[0],
        subs = args.slice(1);
    existingCachedItem = {
      args: args,
      result: function result() {
        for (var _len2 = arguments.length, nextArgs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          nextArgs[_key2] = arguments[_key2];
        }

        return func.apply(void 0, _toConsumableArray(subs).concat(nextArgs));
      }
    };
    cache.push(existingCachedItem);
  }

  return existingCachedItem.result;
};

export { memoizeFuncWithArgs };
//# sourceMappingURL=memoize-func-with-args.js.map
