import '../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import PropTypes from 'prop-types';
import 'lodash';
import classnames from 'classnames';
import '../icon/style.css';
import { Icon } from '../icon/icon.js';
import '../index-85b17782.js';
import '../external-969f6c5f.js';
import '../icon/index.js';

var SelectedOption = function SelectedOption(_ref) {
  var icon = _ref.icon,
      title = _ref.title,
      description = _ref.description,
      additional = _ref.additional,
      additionalDescription = _ref.additionalDescription,
      theme = _ref.theme;
  return /*#__PURE__*/React.createElement(React.Fragment, null, icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    theme: {
      icon: classnames(Icon.theme.icon, theme.itemIcon)
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: theme.itemColumn
  }, /*#__PURE__*/React.createElement("div", {
    className: classnames(theme.itemTitle, !description && theme.itemCentered)
  }, title), description && /*#__PURE__*/React.createElement("div", {
    className: theme.itemDescription
  }, description)), (additional || additionalDescription) && /*#__PURE__*/React.createElement("div", {
    className: theme.itemColumn
  }, additional && /*#__PURE__*/React.createElement("div", {
    className: classnames(theme.itemAside, !description && !additionalDescription && theme.itemCentered)
  }, additional), additionalDescription && /*#__PURE__*/React.createElement("div", {
    className: theme.itemDescription
  }, additionalDescription)));
};
SelectedOption.propTypes = {
  icon: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  additional: PropTypes.string,
  additionalDescription: PropTypes.string,
  theme: PropTypes.object.isRequired
};
SelectedOption.defaultProps = {
  icon: '',
  children: void 0,
  description: '',
  additional: '',
  additionalDescription: ''
};

export { SelectedOption };
//# sourceMappingURL=selected-option.js.map
