import '../../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import 'prop-types';
import _ from 'lodash';
import 'classnames';
import { getDisplayName } from '../../utils/get-display-name.js';
import '../../utils/hoc/style.css';
import '../../utils/hoc/deprecate.js';
import '../../utils/hoc/experimental.js';
import '../../utils/hoc/error-adapter.js';
import '../../utils/hoc/omittere.js';
import '../../utils/hoc/accessibility-relocation.js';
import '../../utils/handlers.js';
import '../../utils/pluralize.js';
import '../../utils/scroll-to.js';
import '../../utils/format-phone-number.js';
import '../../utils/memoize-func-with-args.js';
import '../../utils/auto-top-check-by-window.js';
import '../../utils/merge-theme.js';
import '../../utils/styles/media.config.css';
import '../../utils/adaptive.js';
import '../../utils/pseudo/pseudo-button.js';
import '../../utils/get-card-icon.js';
import '../../utils/get-ivestments-icon.js';
import '../../utils/get-metal-icon.js';
import '../../utils/get-target-icon.js';
import '../../icon/style.css';
import '../../icon/icon.js';
import '../../index-85b17782.js';
import '../../external-969f6c5f.js';
import '../../icon/index.js';
import '../../utils/set-project-id.js';
import '../../utils/make-direction.js';
import '../../utils/show-error.js';
import '../../tooltip/style.css';
import '../../tooltip/tip.js';
import { Tooltip } from '../../tooltip/tooltip.js';
import '../../tooltip/hover-tooltip.js';
import 'react-onclickoutside';
import '../../perimeter/perimeter.js';
import '../../perimeter/index.js';
import '../../tooltip/click-tooltip.js';
import '../../tooltip/index.js';

var defaultCondition = function defaultCondition(props) {
  return {
    direction: props.direction,
    mode: props.mode,
    forceOpened: props.forceOpened,
    tooltip: props.tooltip
  };
};

var tooltipMap = {
  hover: Tooltip.Hover,
  click: Tooltip.Click,
  default: Tooltip
};
var omitProps = ['direction', 'mode', 'forceOpened', 'tooltip'];
var tooltipedFactory = function tooltipedFactory() {
  var getTooltipProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultCondition;
  var widthMode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : void 0;
  var tooltipType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'default';
  var omitSameProps = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  return function (Component) {
    var TooltipedComponent = function TooltipedComponent(props) {
      var _getTooltipProps = getTooltipProps(props),
          direction = _getTooltipProps.direction,
          mode = _getTooltipProps.mode,
          forceOpened = _getTooltipProps.forceOpened,
          tooltip = _getTooltipProps.tooltip;

      var TooltipComponent = tooltipMap[tooltipType];
      var passedProps = omitSameProps ? _.omit(props, omitProps) : props;
      return /*#__PURE__*/React.createElement(TooltipComponent, {
        forceOpened: forceOpened,
        mode: widthMode
      }, /*#__PURE__*/React.createElement(Component, passedProps), /*#__PURE__*/React.createElement(Tooltip.Tip, {
        mode: mode,
        direction: direction
      }, tooltip));
    };

    TooltipedComponent.propTypes = Component.propTypes;
    TooltipedComponent.defaultProps = Component.defaultProps;
    TooltipedComponent.displayName = getDisplayName(Component, 'TooltipedComponent');
    TooltipedComponent.WrappedComponent = Component;
    return TooltipedComponent;
  };
};

export { tooltipedFactory };
//# sourceMappingURL=tooltiped.js.map
