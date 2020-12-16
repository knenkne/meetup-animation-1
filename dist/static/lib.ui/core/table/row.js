import { a as _slicedToArray } from '../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import PropTypes from 'prop-types';
import 'lodash';
import classnames from 'classnames';
import '../utils/get-display-name.js';
import '../utils/hoc/style.css';
import '../utils/hoc/deprecate.js';
import '../utils/hoc/experimental.js';
import '../utils/hoc/error-adapter.js';
import '../utils/hoc/omittere.js';
import '../utils/hoc/accessibility-relocation.js';
import '../utils/handlers.js';
import '../utils/pluralize.js';
import '../utils/scroll-to.js';
import '../utils/format-phone-number.js';
import '../utils/memoize-func-with-args.js';
import '../utils/auto-top-check-by-window.js';
import { mergeTheme } from '../utils/merge-theme.js';
import '../utils/styles/media.config.css';
import '../utils/adaptive.js';
import '../utils/pseudo/pseudo-button.js';
import '../utils/get-card-icon.js';
import '../utils/get-ivestments-icon.js';
import '../utils/get-metal-icon.js';
import '../utils/get-target-icon.js';
import '../icon/style.css';
import '../icon/icon.js';
import '../index-85b17782.js';
import '../external-969f6c5f.js';
import '../icon/index.js';
import '../utils/set-project-id.js';
import '../utils/make-direction.js';
import '../utils/show-error.js';
import '../typography/style.css';
import '../typography/headline.js';
import '../typography/title.js';
import '../typography/subheader.js';
import '../typography/caption.js';
import '../typography/uppercase.js';
import '../typography/description.js';
import { Typography } from '../typography/index.js';
import defaultTheme from './style.css';

var nameCaptionTheme = mergeTheme(Typography.theme, {
  caption: classnames(Typography.theme.caption, defaultTheme.alignLeft, defaultTheme.caption)
});
var valueCaptionTheme = mergeTheme(Typography.theme, {
  caption: classnames(Typography.theme.caption, defaultTheme.alignRight, defaultTheme.caption)
});
var Row = function Row(_ref) {
  var children = _ref.children;
  var childrenArray = React.Children.toArray(children);

  if (childrenArray.length < 2) {
    return null;
  }

  var _childrenArray = _slicedToArray(childrenArray, 2),
      name = _childrenArray[0],
      value = _childrenArray[1];

  return /*#__PURE__*/React.createElement("dl", {
    className: defaultTheme.row,
    "aria-label": "\u0421\u0442\u0440\u043E\u043A\u0430 \u0442\u0430\u0431\u043B\u0438\u0446\u044B"
  }, /*#__PURE__*/React.createElement("dt", {
    className: defaultTheme.item
  }, /*#__PURE__*/React.createElement(Typography.Caption, {
    mode: "body",
    colorScheme: "gray",
    theme: nameCaptionTheme
  }, name)), /*#__PURE__*/React.createElement("dd", {
    className: defaultTheme.item
  }, /*#__PURE__*/React.createElement(Typography.Caption, {
    mode: "body",
    colorScheme: "black",
    theme: valueCaptionTheme
  }, value)));
};
Row.propTypes = {
  children: PropTypes.node.isRequired
};
Row.defaultProps = {
  children: ''
};
Row.displayName = 'Table.Row';

export { Row };
//# sourceMappingURL=row.js.map
