import { _ as _extends } from '../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classnames from 'classnames';
import '../utils/get-display-name.js';
import '../utils/hoc/style.css';
import { deprecate } from '../utils/hoc/deprecate.js';
import '../utils/hoc/experimental.js';
import '../utils/hoc/error-adapter.js';
import '../utils/hoc/omittere.js';
import '../utils/hoc/accessibility-relocation.js';
import defaultTheme from './style.css';

var omitProps = ['colorScheme'];
/**
 * @deprecated С версии 4.0.0.
 * [Zeplin](https://app.zeplin.io/project/5c74ef0d753f3ebccdf8f33d?seid=5ca73031b14aee19ff3f343)
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */

var Subheader = function Subheader(props) {
  return /*#__PURE__*/React.createElement("h3", _extends({}, _.omit(props, omitProps), {
    className: classnames(defaultTheme.subheader, defaultTheme[props.colorScheme]),
    "data-unit": "subheader"
  }), props.children);
};
Subheader.propTypes = {
  children: PropTypes.node,
  colorScheme: PropTypes.oneOf(['black', 'dark-gray', 'gray', 'green', 'orange', 'white'])
};
Subheader.defaultProps = {
  children: void 0,
  colorScheme: 'black'
};
Subheader.displayName = 'Typography.Subheader';
var subheader = deprecate()(Subheader);

export default subheader;
export { Subheader };
//# sourceMappingURL=subheader.js.map
