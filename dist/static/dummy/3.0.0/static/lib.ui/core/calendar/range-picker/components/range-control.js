import '../../../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classnames from 'classnames';
import '../../../utils/get-display-name.js';
import '../../../utils/hoc/style.css';
import '../../../utils/hoc/deprecate.js';
import '../../../utils/hoc/experimental.js';
import '../../../utils/hoc/error-adapter.js';
import '../../../utils/hoc/omittere.js';
import '../../../utils/hoc/accessibility-relocation.js';
import '../../../utils/handlers.js';
import '../../../utils/pluralize.js';
import '../../../utils/scroll-to.js';
import '../../../utils/format-phone-number.js';
import '../../../utils/memoize-func-with-args.js';
import '../../../utils/auto-top-check-by-window.js';
import { mergeTheme } from '../../../utils/merge-theme.js';
import '../../../utils/styles/media.config.css';
import '../../../utils/adaptive.js';
import '../../../utils/pseudo/pseudo-button.js';
import '../../../utils/get-card-icon.js';
import '../../../utils/get-ivestments-icon.js';
import '../../../utils/get-metal-icon.js';
import '../../../utils/get-target-icon.js';
import '../../../icon/style.css';
import { Icon } from '../../../icon/icon.js';
import '../../../index-85b17782.js';
import '../../../external-969f6c5f.js';
import '../../../icon/index.js';
import '../../../utils/set-project-id.js';
import '../../../utils/make-direction.js';
import '../../../utils/show-error.js';
import '../../../typography/style.css';
import '../../../typography/headline.js';
import '../../../typography/title.js';
import '../../../typography/subheader.js';
import '../../../typography/caption.js';
import '../../../typography/uppercase.js';
import '../../../typography/description.js';
import '../../../typography/index.js';
import 'date-fns/esm/locale/ru';
import { FULL_ISO_FORMAT } from '../../constants.js';
import { parse } from 'date-fns';
import '../../components/common/control.css';
import Control from '../../components/common/control.js';
import style from './range-control.css';

var LAST_YEAR = 9999;
var LAST_MONTH = 11;

var RangeControl = function RangeControl(props) {
  var customControlClassName = props.customControlClassName,
      onControlClick = props.onControlClick,
      onPrevClick = props.onPrevClick,
      onNextClick = props.onNextClick,
      dataUnit = props.dataUnit,
      title = props.title,
      isActive = props.isActive,
      viewDate = props.viewDate;
  var parsedDate = parse(viewDate, FULL_ISO_FORMAT, new Date());
  var isNextDisabled = parsedDate.getFullYear() === LAST_YEAR && dataUnit === 'range:switcher:years' || parsedDate.getFullYear() === LAST_YEAR && parsedDate.getMonth() === LAST_MONTH && dataUnit === 'range:switcher:months';
  var isPrevDisabled = parsedDate.getFullYear() === 0 && dataUnit === 'range:switcher:years' || parsedDate.getFullYear() === 0 && parsedDate.getMonth() === 0 && dataUnit === 'range:switcher:months';
  return /*#__PURE__*/React.createElement("div", {
    className: style.rangeControlWrapper
  }, /*#__PURE__*/React.createElement("button", {
    tabIndex: "-1",
    type: "button",
    value: viewDate,
    onMouseDown: onPrevClick,
    className: classnames(style.arrowButton, style.arrowButtonLeft),
    disabled: isPrevDisabled
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "icon:core/common/calendarArrowLeft"
  })), /*#__PURE__*/React.createElement(Control, {
    title: title,
    withIcon: false,
    dataUnit: dataUnit,
    isActive: isActive,
    onClick: onControlClick,
    className: classnames(style.mainButton, customControlClassName)
  }), /*#__PURE__*/React.createElement("button", {
    tabIndex: "-1",
    type: "button",
    value: viewDate,
    onMouseDown: onNextClick,
    className: classnames(style.arrowButton, style.arrowButtonRight),
    disabled: isNextDisabled
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "icon:core/common/calendarArrowLeft",
    theme: mergeTheme(Icon.theme, {
      icon: classnames(style.arrowIcon, style.arrowIconReverted)
    })
  })));
};

RangeControl.propTypes = {
  customControlClassName: PropTypes.string,
  onControlClick: PropTypes.func,
  onPrevClick: PropTypes.func,
  onNextClick: PropTypes.func,
  dataUnit: PropTypes.string,
  title: PropTypes.string,
  isActive: PropTypes.bool,
  viewDate: PropTypes.string
};
RangeControl.defaultProps = {
  customControlClassName: '',
  onControlClick: _.noop,
  onPrevClick: _.noop,
  onNextClick: _.noop,
  dataUnit: '',
  title: '',
  isActive: _.false,
  viewDate: ''
};

export default RangeControl;
//# sourceMappingURL=range-control.js.map
