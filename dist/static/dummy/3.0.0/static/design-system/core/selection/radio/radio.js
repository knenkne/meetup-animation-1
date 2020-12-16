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
import { IndentWrapper } from '../../indent-wrapper/indent-wrapper.style.js';
import '../../utils/get-display-name.js';
import { metaOmitter } from '../../utils/hoc/omittere.js';
import { RadioWrapperLabelStyled, InputStyled, ButtonStyled, RadioTypograpyStyled } from './radio.style.js';

/**
 * [Zeplin](https://app.zeplin.io/project/59312e1ebdf1da6fc8d37ffb/dashboard?q=Selection%20Radio)
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */

var Radio = function Radio(props) {
  var inputProps = _(props).omit(['children', 'error', 'formName', 'size']).extend({
    type: 'radio',
    disabled: props.disabled,
    name: props.name,
    value: props.value,
    onChange: disableHandler(props.onChange, props.disabled),
    form: props.formName
  }).value();

  return /*#__PURE__*/React.createElement(IndentWrapper, {
    size: props.size,
    vertical: "micro"
  }, /*#__PURE__*/React.createElement(RadioWrapperLabelStyled, {
    className: props.className,
    error: props.error
  }, /*#__PURE__*/React.createElement(InputStyled, inputProps), /*#__PURE__*/React.createElement(ButtonStyled, {
    size: props.size
  }), /*#__PURE__*/React.createElement(RadioTypograpyStyled, {
    size: props.size,
    indent: "zero"
  }, props.children)));
};
Radio.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  formName: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md'])
};
Radio.defaultProps = {
  name: void 0,
  children: void 0,
  disabled: false,
  onChange: _.noop,
  value: void 0,
  error: void 0,
  formName: void 0,
  size: 'md'
};
var radio = metaOmitter(Radio);

export default radio;
export { Radio };
//# sourceMappingURL=radio.js.map
