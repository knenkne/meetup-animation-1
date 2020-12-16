import React from 'react';
import _ from 'lodash';
import { getDisplayName } from '../get-display-name.js';

var warnCache = {};

function warnInDevelopmentOnce(name) {
  // Using console conditionally
  if (process.env.NODE_ENV !== 'production' && !name) {
    console.warn('Component Usage Warning: You are using an experimental component. Component\'s API could be changed. Please be careful in usage of it'); // eslint-disable-line no-console, comment: предупреждение об экспериментальном характере компонента
  } else if (process.env.NODE_ENV !== 'production' && !warnCache[name]) {
    console.warn("Component Usage Warning: ".concat(name, " is experimental component. ").concat(name, "'s API could be changed. Please be careful in usage of ").concat(name)); // eslint-disable-line no-console, comment: предупреждение об экспериментальном характере компонента

    warnCache[name] = true;
  }
}

var experimental = function experimental(pathName) {
  return function (Component) {
    function ExperimentalComponent(props) {
      warnInDevelopmentOnce(pathName || Component.displayName || Component.name);
      return /*#__PURE__*/React.createElement(Component, props);
    }

    _.forEach(Component, function (prop, key) {
      ExperimentalComponent[key] = prop;
    });

    ExperimentalComponent.displayName = getDisplayName(Component, 'ExperimentalComponent');
    ExperimentalComponent.WrappedComponent = Component;
    return ExperimentalComponent;
  };
};

export { experimental };
//# sourceMappingURL=experimental.js.map
