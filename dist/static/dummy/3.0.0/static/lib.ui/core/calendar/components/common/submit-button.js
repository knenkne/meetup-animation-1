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
import '../../../icon/icon.js';
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
import '../../../link/link.css';
import '../../../link/components/simple-external-link.js';
import { Link } from '../../../link/link.js';
import style from './submit-button.css';

var SubmitButton = function SubmitButton(_ref) {
  var onSubmit = _ref.onSubmit,
      text = _ref.text,
      isReset = _ref.isReset;
  return /*#__PURE__*/React.createElement("div", {
    className: style.submitButtonWrapper
  }, /*#__PURE__*/React.createElement("button", {
    className: classnames(Link.theme.link, Typography.theme.caption, style.submitButton, isReset && style.resetButton),
    onClick: onSubmit,
    type: "button"
  }, text));
};

SubmitButton.propTypes = {
  isReset: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};
SubmitButton.defaultProps = {
  isReset: false
};

export { SubmitButton };
//# sourceMappingURL=submit-button.js.map
