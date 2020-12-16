import { _ as _extends } from '../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import PropTypes from 'prop-types';
import 'classnames';
import defaultTheme from './style.css';
import { Cell } from './cell.js';

/**
 * [Zeplin](https://app.zeplin.io/project/5c74ef0d753f3ebccdf8f33d?seid=5ca5ec9f7ad7e610e25df8ed)
 * Указатель инициализации верстки по сетке
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */

var Grid = function Grid(_ref) {
  var props = _extends({}, _ref);

  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: defaultTheme.grid
  }));
};
Grid.propTypes = {
  children: PropTypes.node
};
Grid.defaultProps = {
  children: void 0
};
Grid.theme = defaultTheme;
Grid.Cell = Cell;
Grid.displayName = 'Grid';

export default Grid;
export { Grid };
//# sourceMappingURL=grid.js.map
