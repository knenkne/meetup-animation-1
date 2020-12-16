import '../../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import PropTypes from 'prop-types';
import 'lodash';
import classnames from 'classnames';
import '../../utils/get-display-name.js';
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
import { Icon } from '../../icon/icon.js';
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
import 'remarkable';
import 'remarkable/lib/common/utils';
import '../../markdown/utils.js';
import '../../markdown/style.css';
import '../../markdown/full.js';
import '../../markdown/short.js';
import { Markdown } from '../../markdown/index.js';
import styles from './hint.css';

var iconTheme = {
  icon: classnames(Icon.theme.icon, styles.hintIcon)
};
var Hint = function Hint(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/React.createElement(Tooltip.Hover, null, /*#__PURE__*/React.createElement(Icon, {
    name: "icon:core/common/moreInfo",
    theme: iconTheme
  }), /*#__PURE__*/React.createElement(Tooltip.Tip, {
    mode: "info"
  }, /*#__PURE__*/React.createElement(Markdown.Full, {
    content: text
  })));
};
Hint.propTypes = {
  text: PropTypes.string.isRequired
};

export { Hint };
//# sourceMappingURL=hint.js.map
