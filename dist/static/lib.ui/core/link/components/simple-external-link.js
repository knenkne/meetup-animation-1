import { j as _objectWithoutProperties, a as _slicedToArray } from '../../_rollupPluginBabelHelpers-687385f0.js';
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import 'lodash';
import classnames from 'classnames';
import '../../icon/style.css';
import { Icon } from '../../icon/icon.js';
import '../../index-85b17782.js';
import '../../external-969f6c5f.js';
import '../../icon/index.js';
import defaultTheme from '../link.css';

var lastWorldRegExp = /[^ ]*$/;
var SimpleExternalLink = function SimpleExternalLink(_ref) {
  var iconName = _ref.iconName,
      theme = _ref.theme,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["iconName", "theme", "children"]);

  var _useMemo = useMemo(function () {
    return [children.replace(lastWorldRegExp, ''), children.match(lastWorldRegExp)[0]];
  }, [children]),
      _useMemo2 = _slicedToArray(_useMemo, 2),
      droppedLast = _useMemo2[0],
      lastWord = _useMemo2[1];

  return /*#__PURE__*/React.createElement("a", props, droppedLast && /*#__PURE__*/React.createElement("span", {
    className: theme.content
  }, droppedLast), /*#__PURE__*/React.createElement("span", {
    className: theme.externalWrapper
  }, lastWord && /*#__PURE__*/React.createElement("span", {
    className: theme.last
  }, lastWord), /*#__PURE__*/React.createElement(Icon, {
    name: iconName,
    size: "self",
    theme: {
      self: classnames(Icon.theme.self, theme.icon, theme.right)
    }
  })));
};
SimpleExternalLink.propTypes = {
  children: PropTypes.string.isRequired,
  iconName: PropTypes.string,
  theme: PropTypes.object
};
SimpleExternalLink.defaultProps = {
  iconName: void 0,
  theme: defaultTheme
};

export { SimpleExternalLink };
//# sourceMappingURL=simple-external-link.js.map
