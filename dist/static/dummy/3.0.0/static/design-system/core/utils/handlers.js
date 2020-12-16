import _ from 'lodash';

var cache = [];
var argsResolver = function argsResolver() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var existingCachedItem = _.find(cache, function (cachedItem) {
    return _.isEqual(cachedItem, args);
  });

  if (!existingCachedItem) {
    cache.push(args);
  }

  return existingCachedItem || args;
};
var handlePreventDefault = function handlePreventDefault(event) {
  if (typeof event.preventDefault === 'function') {
    event.preventDefault();
  }

  return event;
};
var handleStopPropagation = function handleStopPropagation(event) {
  if (typeof event.stopPropagation === 'function') {
    event.stopPropagation();
  }

  return event;
};
var handleSelectAll = function handleSelectAll(event) {
  if (_.has(event, 'target.value.length') && event.target && event.target.type !== 'number') {
    var input = event.target;
    input.selectionStart = 0;
    input.selectionEnd = input.value.length;
  }

  return event;
};
var disableHandler = _.memoize(function (handler, isDisabled) {
  return isDisabled ? handlePreventDefault : handler;
}, argsResolver);
var preventHandler = _.memoize(function (handler) {
  return _.flow(handlePreventDefault, handler);
});
var stopPropagationHandler = _.memoize(function (handler) {
  return _.flow(handleStopPropagation, handler);
});
var selectAllHandler = _.memoize(function (handler) {
  return _.flow(handleSelectAll, handler);
});
var eventValueHandler = _.memoize(function (handler) {
  return function (event) {
    return handler(_.get(event, 'target.value', event), event);
  };
});
var eventCheckedHandler = _.memoize(function (handler) {
  return function (event) {
    return handler(_.get(event, 'target.checked', event), event);
  };
});

export { argsResolver, disableHandler, eventCheckedHandler, eventValueHandler, handlePreventDefault, handleSelectAll, handleStopPropagation, preventHandler, selectAllHandler, stopPropagationHandler };
//# sourceMappingURL=handlers.js.map
