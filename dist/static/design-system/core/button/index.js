import { a as _taggedTemplateLiteral } from '../_rollupPluginBabelHelpers-3e859d87.js';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { focusBorder } from '../styles/semantic.config.style.js';
import '../styles/radius.config.style.js';
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import '../styles/font-sizes.config.style.js';
import '../colors.config.style-69a09a5b.js';
import '../typography/typography.style.js';
import '../typography/typography.js';
import _ from 'lodash';
import '../icon/icon.style.js';
import '../icon/icon.js';
import '../icon/icon-loader.js';
import '../icon/index.js';
import { ButtonBaseStyled, ButtonTypographyStyled, ButtonContainerStyled, IconStyled } from './button.style.js';
import { disableHandler } from '../utils/handlers.js';
import { THEMES } from '../styles/semantic-palette.config.style.js';

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n            color: ", ";\n        "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        &:hover {\n            background-color: ", ";\n            outline: none;\n        }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";\n    \n    ", "\n   \n    body:not(.pointer-events) &:focus {\n        background-color: ", ";\n        box-shadow: ", ";\n    }\n\n    &:active {\n        background-color: ", ";\n        outline: none;\n    }\n    \n    ", " {\n        color: ", ";\n        \n        ", "\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var LIGHT_THEME = THEMES.LIGHT_THEME;
var borderWidth = '1px';

var focusBorderColor = function focusBorderColor(color) {
  return focusBorder(borderWidth)(color);
};

var ButtonStyled = styled(ButtonBaseStyled)(_templateObject(), LIGHT_THEME.buttonPrimaryNormal, function (_ref) {
  var mode = _ref.mode;
  return mode !== 'loading' && css(_templateObject2(), LIGHT_THEME.buttonPrimaryHover);
}, LIGHT_THEME.buttonPrimaryFocusBody, focusBorderColor(LIGHT_THEME.buttonPrimaryFocusBorder), LIGHT_THEME.buttonPrimaryClick, ButtonTypographyStyled, LIGHT_THEME.buttonPrimaryTextNormal, function (_ref2) {
  var mode = _ref2.mode;
  return mode === 'loading' && css(_templateObject3(), LIGHT_THEME.buttonPrimaryNormal);
});

var ButtonPrimary = function ButtonPrimary(props) {
  var isLoading = useMemo(function () {
    return props.mode === 'loading';
  }, [props.mode]);

  var passedProps = _(props).omit(['title']).extend({
    onClick: disableHandler(props.onClick, isLoading),
    'aria-live': 'polite',
    'aria-busy': props.mode === 'loading'
  }).value();

  return /*#__PURE__*/React.createElement(ButtonStyled, passedProps, /*#__PURE__*/React.createElement(ButtonContainerStyled, {
    iconReverse: props.iconReverse
  }, /*#__PURE__*/React.createElement(ButtonTypographyStyled, {
    indent: "innerspace",
    mode: "semibold",
    colorScheme: "white",
    size: props.size
  }, props.title), props.icon && /*#__PURE__*/React.createElement(IconStyled, {
    icon: props.icon,
    colorScheme: "white"
  })));
};
ButtonPrimary.propTypes = {
  title: PropTypes.string,
  mode: PropTypes.oneOf(['loading', void 0]),
  tabIndex: PropTypes.number,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['md', 'sm', 'lg']),
  theme: PropTypes.shape({
    buttonPrimaryTextNormal: PropTypes.string,
    buttonPrimaryNormal: PropTypes.string,
    buttonPrimaryHover: PropTypes.string,
    buttonPrimaryClick: PropTypes.string,
    buttonPrimaryFocusBody: PropTypes.string,
    buttonPrimaryFocusBorder: PropTypes.string
  }),
  icon: PropTypes.string,
  iconReverse: PropTypes.bool,
  fullWidth: PropTypes.bool
};
ButtonPrimary.defaultProps = {
  title: void 0,
  mode: void 0,
  tabIndex: 0,
  onClick: _.noop,
  size: 'md',
  icon: void 0,
  iconReverse: false,
  fullWidth: false
};

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n    box-shadow: ", ";\n    background-color: ", ";\n\n    body:not(.pointer-events) &:focus {\n        box-shadow: ", ";\n    }\n    \n    &:hover {\n        box-shadow: ", ";\n        outline: none;\n    }\n     \n    &:active {\n        outline: none;\n        box-shadow: ", ";\n    }\n    \n    ", " {\n        color: ", ";\n    }\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var LIGHT_THEME$1 = THEMES.LIGHT_THEME;
var borderWidth$1 = '2px';

var borderColor = function borderColor(color) {
  return focusBorder(borderWidth$1)(color);
};

var ButtonStyled$1 = styled(ButtonBaseStyled)(_templateObject$1(), borderColor(LIGHT_THEME$1.buttonSecondaryNormal), LIGHT_THEME$1.noColor, borderColor(LIGHT_THEME$1.buttonSecondaryFocus), borderColor(LIGHT_THEME$1.buttonSecondaryHover), borderColor(LIGHT_THEME$1.buttonSecondaryClick), ButtonTypographyStyled, LIGHT_THEME$1.buttonSecondaryTextNormal);

var ButtonSecondary = function ButtonSecondary(props) {
  var passedProps = _(props).omit(['title']).extend({
    onClick: props.onClick,
    'aria-live': 'polite'
  }).value();

  return /*#__PURE__*/React.createElement(ButtonStyled$1, passedProps, /*#__PURE__*/React.createElement(ButtonContainerStyled, {
    iconReverse: props.iconReverse
  }, /*#__PURE__*/React.createElement(ButtonTypographyStyled, {
    indent: "innerspace",
    mode: "semibold",
    size: props.size
  }, props.title), props.icon && /*#__PURE__*/React.createElement(IconStyled, {
    icon: props.icon
  })));
};
ButtonSecondary.propTypes = {
  title: PropTypes.string,
  mode: PropTypes.oneOf(['loading', void 0]),
  tabIndex: PropTypes.number,
  onClick: PropTypes.func,
  theme: PropTypes.shape({
    buttonSecondaryTextNormal: PropTypes.string,
    buttonSecondaryNormal: PropTypes.string,
    buttonSecondaryHover: PropTypes.string,
    buttonSecondaryClick: PropTypes.string,
    buttonSecondaryFocus: PropTypes.string
  }),
  size: PropTypes.oneOf(['md', 'sm', 'lg']),
  icon: PropTypes.string,
  iconReverse: PropTypes.bool,
  fullWidth: PropTypes.bool
};
ButtonSecondary.defaultProps = {
  title: void 0,
  mode: void 0,
  tabIndex: 0,
  onClick: _.noop,
  size: 'md',
  icon: void 0,
  iconReverse: false,
  fullWidth: false
};

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n    box-shadow: ", ";\n    background-color: ", ";\n\n    body:not(.pointer-events) &:focus {\n        box-shadow: ", ";\n    }\n    \n    &:hover {\n        box-shadow: ", ";\n        outline: none;\n    }\n     \n    &:active {\n        outline: none;\n        box-shadow: ", ";\n    }\n    \n    ", " {\n        color: ", ";\n    }\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var LIGHT_THEME$2 = THEMES.LIGHT_THEME;
var borderWidth$2 = '1px';

var borderColor$1 = function borderColor(color) {
  return focusBorder(borderWidth$2)(color);
};

var ButtonStyled$2 = styled(ButtonBaseStyled)(_templateObject$2(), borderColor$1(LIGHT_THEME$2.buttonSecondaryNormal), LIGHT_THEME$2.noColor, borderColor$1(LIGHT_THEME$2.buttonSecondaryFocus), borderColor$1(LIGHT_THEME$2.buttonSecondaryHover), borderColor$1(LIGHT_THEME$2.buttonSecondaryClick), ButtonTypographyStyled, LIGHT_THEME$2.buttonSecondaryTextNormal);

var ButtonTertiary = function ButtonTertiary(props) {
  var passedProps = _(props).omit(['title']).extend({
    onClick: props.onClick,
    'aria-live': 'polite'
  }).value();

  return /*#__PURE__*/React.createElement(ButtonStyled$2, passedProps, /*#__PURE__*/React.createElement(ButtonContainerStyled, {
    iconReverse: props.iconReverse
  }, /*#__PURE__*/React.createElement(ButtonTypographyStyled, {
    indent: "innerspace",
    mode: "regular",
    size: props.size
  }, props.title), props.icon && /*#__PURE__*/React.createElement(IconStyled, {
    icon: props.icon
  })));
};
ButtonTertiary.propTypes = {
  title: PropTypes.string,
  mode: PropTypes.oneOf(['loading', void 0]),
  tabIndex: PropTypes.number,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['md', 'sm', 'lg']),
  icon: PropTypes.string,
  iconReverse: PropTypes.bool,
  fullWidth: PropTypes.bool
};
ButtonTertiary.defaultProps = {
  title: void 0,
  mode: void 0,
  tabIndex: 0,
  onClick: _.noop,
  size: 'md',
  icon: void 0,
  iconReverse: false,
  fullWidth: false
};

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";\n\n    body:not(.pointer-events) &:focus {\n        box-shadow: ", ";\n    }\n    \n    &:hover {\n        background-color: ", ";\n        outline: none;\n    }\n     \n    &:active {\n        outline: none;\n        background-color: ", ";\n    }\n    \n    ", " {\n        color: ", ";\n    }\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var LIGHT_THEME$3 = THEMES.LIGHT_THEME;
var borderWidth$3 = '1px';

var focusBorderColor$1 = function focusBorderColor(color) {
  return focusBorder(borderWidth$3)(color);
};

var ButtonStyled$3 = styled(ButtonBaseStyled)(_templateObject$3(), LIGHT_THEME$3.buttonTextBodyNormal, focusBorderColor$1(LIGHT_THEME$3.buttonTextFocus), LIGHT_THEME$3.buttonTextHover, LIGHT_THEME$3.buttonTextClick, ButtonTypographyStyled, LIGHT_THEME$3.buttonTextNormal);

var ButtonTransparent = function ButtonTransparent(props) {
  var passedProps = _(props).omit(['title']).extend({
    onClick: props.onClick,
    'aria-live': 'polite'
  }).value();

  return /*#__PURE__*/React.createElement(ButtonStyled$3, passedProps, /*#__PURE__*/React.createElement(ButtonContainerStyled, {
    iconReverse: props.iconReverse
  }, /*#__PURE__*/React.createElement(ButtonTypographyStyled, {
    indent: "innerspace",
    mode: "regular",
    size: props.size
  }, props.title), props.icon && /*#__PURE__*/React.createElement(IconStyled, {
    icon: props.icon
  })));
};
ButtonTransparent.propTypes = {
  title: PropTypes.string,
  mode: PropTypes.oneOf(['loading', void 0]),
  tabIndex: PropTypes.number,
  onClick: PropTypes.func,
  theme: PropTypes.shape({
    buttonTextNormal: PropTypes.string,
    buttonTextBodyNormal: PropTypes.string,
    buttonTextBorderNormal: PropTypes.string,
    buttonTextHover: PropTypes.string,
    buttonTextClick: PropTypes.string,
    buttonTextFocus: PropTypes.string
  }),
  size: PropTypes.oneOf(['md', 'sm', 'lg']),
  icon: PropTypes.string,
  iconReverse: PropTypes.bool,
  fullWidth: PropTypes.bool
};
ButtonTransparent.defaultProps = {
  title: void 0,
  mode: void 0,
  tabIndex: 0,
  onClick: _.noop,
  size: 'md',
  icon: void 0,
  iconReverse: false,
  fullWidth: false
};

export { ButtonPrimary, ButtonSecondary, ButtonTertiary, ButtonTransparent };
//# sourceMappingURL=index.js.map
