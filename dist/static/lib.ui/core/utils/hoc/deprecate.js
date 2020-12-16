import React from 'react';
import _ from 'lodash';
import { getDisplayName } from '../get-display-name.js';
import style from './style.css';

var warnCache = {};

var deprecatedLabel = function deprecatedLabel(WrappedComponent) {
  return function (_ref) {
    var children = _ref.children;
    return /*#__PURE__*/React.createElement(WrappedComponent, null, /*#__PURE__*/React.createElement("div", {
      className: style.warningLabel
    }), children);
  };
};

var DivWithErrorHandling = deprecatedLabel(function (_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/React.createElement("div", null, children);
});

function warnInDevelopmentOnce(name, replacementName, removeVersion) {
  if (process.env.NODE_ENV !== 'production' && !warnCache[name]) {
    // Using console conditionally
    console.warn("Component Usage Warning: ".concat(name, " is deprecated and will be deleted").concat(removeVersion ? " since v".concat(removeVersion) : '', ". Please use ").concat(replacementName, " instead")); // eslint-disable-line no-console, comment: предупреждение о deprecate для компонентов

    warnCache[name] = true;
  }
}

var deprecate = function deprecate(removeVersion, pathName) {
  var replacementName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'no component';
  return function (Component) {
    var DeprecatedComponent = function DeprecatedComponent(props) {
      warnInDevelopmentOnce(pathName || getDisplayName(Component), replacementName, removeVersion);

      if (process.env.NODE_ENV !== 'production') {
        return /*#__PURE__*/React.createElement(DivWithErrorHandling, null, /*#__PURE__*/React.createElement(Component, props));
      }

      return /*#__PURE__*/React.createElement(Component, props);
    };

    _.forEach(Component, function (prop, key) {
      DeprecatedComponent[key] = prop;
    });

    DeprecatedComponent.displayName = getDisplayName(Component, 'DeprecatedComponent');
    DeprecatedComponent.WrappedComponent = Component;
    return DeprecatedComponent;
  };
};

export { deprecate };
//# sourceMappingURL=deprecate.js.map
