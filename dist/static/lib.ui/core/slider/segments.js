import '../_rollupPluginBabelHelpers-687385f0.js';
import React from 'react';
import PropTypes from 'prop-types';
import 'lodash';
import 'classnames';
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
import '../utils/merge-theme.js';
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
import 'bignumber.js';
import { makeDelimiters } from './utils.js';
import defaultTheme from './style.css';

var Segments = function Segments(_ref) {
  var min = _ref.min,
      max = _ref.max,
      step = _ref.step,
      grid = _ref.grid;
  var delimiters = makeDelimiters(min, max, step, grid);

  if (!delimiters || !delimiters.length) {
    return null;
  }

  return /*#__PURE__*/React.createElement("div", {
    className: defaultTheme.segments
  }, delimiters.map(function (left) {
    return /*#__PURE__*/React.createElement("div", {
      key: left,
      className: defaultTheme.segment,
      style: {
        left: "".concat(left, "%")
      }
    });
  }));
};
Segments.propTypes = {
  step: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  min: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  max: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  grid: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string]))
};
Segments.defaultProps = {
  step: void '',
  min: void '',
  max: void '',
  grid: void ''
};

export { Segments };
//# sourceMappingURL=segments.js.map
