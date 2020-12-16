import '../../../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import PropTypes from 'prop-types';
import 'lodash';
import classnames from 'classnames';
import '../../../utils/get-display-name.js';
import '../../../utils/hoc/style.css';
import '../../../utils/hoc/deprecate.js';
import '../../../utils/hoc/experimental.js';
import '../../../utils/hoc/error-adapter.js';
import '../../../utils/hoc/omittere.js';
import '../../../utils/hoc/accessibility-relocation.js';
import '../../../icon/style.css';
import { Icon } from '../../../icon/icon.js';
import '../../../index-85b17782.js';
import '../../../external-969f6c5f.js';
import '../../../icon/index.js';
import '../../../typography/style.css';
import '../../../typography/headline.js';
import '../../../typography/title.js';
import '../../../typography/subheader.js';
import '../../../typography/caption.js';
import '../../../typography/uppercase.js';
import '../../../typography/description.js';
import { Typography } from '../../../typography/index.js';
import style from './navigation.css';

var Navigation = function Navigation(_ref) {
  var handlePrevClick = _ref.handlePrevClick,
      handleNextClick = _ref.handleNextClick,
      children = _ref.children,
      wrapperClassName = _ref.wrapperClassName,
      isLastDecade = _ref.isLastDecade;
  return /*#__PURE__*/React.createElement("div", {
    role: "navigation",
    className: classnames(style.navigation, wrapperClassName)
  }, /*#__PURE__*/React.createElement("button", {
    className: style.navigationPeriod,
    onMouseDown: handlePrevClick,
    type: "button"
  }, /*#__PURE__*/React.createElement("span", {
    className: style.arrow
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "icon:core/common/calendarArrowLeft"
  }))), /*#__PURE__*/React.createElement("div", {
    className: classnames(Typography.theme.body, Typography.theme.bodySemibold)
  }, children), /*#__PURE__*/React.createElement("button", {
    className: style.navigationPeriod,
    onMouseDown: handleNextClick,
    type: "button",
    disabled: isLastDecade
  }, /*#__PURE__*/React.createElement("span", {
    className: classnames(style.arrow, style.arrowRight)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "icon:core/common/calendarArrowLeft"
  }))));
};

Navigation.propTypes = {
  handlePrevClick: PropTypes.func,
  handleNextClick: PropTypes.func,
  children: PropTypes.node,
  wrapperClassName: PropTypes.string,
  isLastDecade: PropTypes.bool
};
Navigation.defaultProps = {
  handlePrevClick: void 0,
  handleNextClick: void 0,
  children: void 0,
  wrapperClassName: '',
  isLastDecade: false
};

export default Navigation;
//# sourceMappingURL=navigation.js.map
