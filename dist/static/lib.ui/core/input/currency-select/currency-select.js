import { i as _objectSpread2 } from '../../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

/**
 * [Zeplin](https://app.zeplin.io/project/5c74ef0d753f3ebccdf8f33d/screen/5cadec9058ed0fbf55deeff4)
 * Технический компонент для выбора валюты
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */

var CurrencySelect = function CurrencySelect(props) {
  return /*#__PURE__*/React.createElement("div", null, React.Children.map(props.children, function (child) {
    return /*#__PURE__*/React.cloneElement(child, _objectSpread2(_objectSpread2(_objectSpread2({}, child.props), props), {}, {
      value: child.props.value,
      checked: child.props.value === props.value
    }));
  }));
};
CurrencySelect.propTypes = {
  value: PropTypes.string.isRequired,
  children: PropTypes.node
};
CurrencySelect.defaultProps = {
  onChange: _.noop,
  disabled: false,
  children: void 0,
  colorScheme: 'base'
};
CurrencySelect.theme = {};
CurrencySelect.displayName = 'Input.CurrencySelect';

export { CurrencySelect };
//# sourceMappingURL=currency-select.js.map
