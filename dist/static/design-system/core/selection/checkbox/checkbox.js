import '../../_rollupPluginBabelHelpers-3e859d87.js';
import '@emotion/styled';
import '@emotion/core';
import '../../styles/semantic.config.style.js';
import '../../styles/radius.config.style.js';
import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/font-sizes.config.style.js';
import '../../colors.config.style-69a09a5b.js';
import '../../typography/typography.style.js';
import '../../typography/typography.js';
import _ from 'lodash';
import { disableHandler } from '../../utils/handlers.js';
import '../../styles/semantic-palette.config.style.js';
import { ic36CheckmarkAlt1 } from '../../icon/common/index.js';
import { IndentWrapper } from '../../indent-wrapper/indent-wrapper.style.js';
import '../../utils/get-display-name.js';
import { metaOmitter } from '../../utils/hoc/omittere.js';
import { CheckboxWrapperStyled, InputStyled, SwitchStyled, CheckboxStyled, IconStyled, CheckboxTypographyStyled } from './checkbox.style.js';

var Checkbox = function Checkbox(props) {
  var inputProps = _(props).omit(['children', 'formName', 'mode', 'size']).extend({
    value: props.value,
    type: 'checkbox',
    disabled: props.disabled,
    onChange: disableHandler(props.onChange, props.disabled),
    form: props.formName
  }).value();

  return /*#__PURE__*/React.createElement(IndentWrapper, {
    size: props.size,
    vartical: "micro"
  }, /*#__PURE__*/React.createElement(CheckboxWrapperStyled, {
    size: props.size,
    error: props.error
  }, /*#__PURE__*/React.createElement(InputStyled, inputProps), props.mode === 'switch' ? /*#__PURE__*/React.createElement(SwitchStyled, null) : /*#__PURE__*/React.createElement(CheckboxStyled, null, /*#__PURE__*/React.createElement(IconStyled, {
    name: "ic36CheckmarkAlt1",
    colorScheme: "whitePrimary",
    dangerouslySetInnerHTML: {
      __html: ic36CheckmarkAlt1
    }
  })), /*#__PURE__*/React.createElement(CheckboxTypographyStyled, {
    size: props.size,
    indent: "zero"
  }, props.children)));
};
Checkbox.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  value: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  error: PropTypes.string,
  formName: PropTypes.string,
  mode: PropTypes.oneOf(['switch', 'checkbox']),
  size: PropTypes.oneOf(['sm', 'md'])
};
Checkbox.defaultProps = {
  children: void 0,
  disabled: false,
  onChange: _.noop,
  value: false,
  checked: void 0,
  error: void 0,
  formName: void 0,
  mode: 'checkbox',
  size: 'md'
};
var checkbox = metaOmitter(Checkbox);

export default checkbox;
export { Checkbox };
//# sourceMappingURL=checkbox.js.map
