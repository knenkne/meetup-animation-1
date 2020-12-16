import { _ as _extends } from '../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import 'classnames';
import '../utils/get-display-name.js';
import '../utils/hoc/style.css';
import '../utils/hoc/deprecate.js';
import '../utils/hoc/experimental.js';
import '../utils/hoc/error-adapter.js';
import '../utils/hoc/omittere.js';
import '../utils/hoc/accessibility-relocation.js';
import '../typography/style.css';
import '../typography/headline.js';
import '../typography/title.js';
import '../typography/subheader.js';
import '../typography/caption.js';
import '../typography/uppercase.js';
import '../typography/description.js';
import { Typography } from '../typography/index.js';
import defaultTheme from './style.css';

var Caption = Typography.Caption;
var Additional = function Additional(props) {
  var passedProps = _.omit(props, 'children');

  return /*#__PURE__*/React.createElement(Caption, null, /*#__PURE__*/React.createElement("ul", _extends({}, passedProps, {
    className: defaultTheme.additional,
    "data-unit": "status:additional"
  }), React.Children.map(props.children, function (child, idx) {
    return /*#__PURE__*/React.createElement("li", {
      className: defaultTheme.additionalItem,
      key: idx,
      "data-unit": "status:additional:item"
    }, child);
  })));
};
Additional.propTypes = {
  children: PropTypes.node
};
Additional.defaultProps = {
  children: void 0
};
Additional.displayName = 'Status.Additional';

export { Additional };
//# sourceMappingURL=additional.js.map
