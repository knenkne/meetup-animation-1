import { _ as _extends } from '../../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import { getDisplayName } from '../get-display-name.js';

var defaultCondition = function defaultCondition(props) {
  return props.touched || props.value ? props.error : '';
}; // TODO упростить api

var errorAdapterFactory = function errorAdapterFactory() {
  var calcError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultCondition;
  return function (Component) {
    var Wrapped = function Wrapped(props) {
      return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
        error: calcError(props)
      }));
    };

    Wrapped.displayName = getDisplayName(Component, 'ErrorAdapter');
    Wrapped.WrappedComponent = Component;
    return Wrapped;
  };
};

export { defaultCondition, errorAdapterFactory };
//# sourceMappingURL=error-adapter.js.map
