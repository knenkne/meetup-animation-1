import { j as _objectSpread2, a as _taggedTemplateLiteral } from '../../_rollupPluginBabelHelpers-3e859d87.js';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import '../../styles/semantic.config.style.js';
import { xsBorderRadius } from '../../styles/radius.config.style.js';
import 'react';
import 'prop-types';
import '../../styles/font-sizes.config.style.js';
import '../../colors.config.style-69a09a5b.js';
import { TypographyStyled } from '../../typography/typography.style.js';
import '../../typography/typography.js';
import { THEMES } from '../../styles/semantic-palette.config.style.js';

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    display: inline-flex;\n    position: relative;\n    margin: 0 0 0 -12px;\n    border: 1px dotted ", ";\n    border-radius: ", ";\n    cursor: auto;\n    user-select: none;\n\n    body:not(.pointer-events) &:focus-within {\n        border-color: ", ";\n    }\n\n    svg {\n        margin: 0 auto;\n    }\n\n    ", "\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n           \n            /* Checkbox */\n            & ~ ", "::before {\n                border: 1px solid ", ";\n                background-color: ", ";\n            }\n            \n            &:hover ~ ", "::before {       \n                border-color: ", ";\n            }\n             \n            body:not(.pointer-events) &:focus {\n                & ~ ", "::before {\n                    border-color: ", ";\n                }\n            }\n            \n            &:active ~ ", "::before {\n                border-color: ", ";\n            }\n            \n            &:disabled ~ ", "::before {\n                border-color: ", ";\n                background-color: ", ";\n                cursor: default;\n            }\n            \n            &:checked {\n                & ~ ", "::before {\n                    border: 1px solid ", ";\n                    background-color: ", ";\n                }\n                \n                & ~ ", " ", " {\n                    display: block;\n                }\n                \n                &:hover ~ ", "::before {\n                    border-color: ", ";\n                    background-color: ", ";\n                }\n                \n                &:active ~ ", "::before {\n                    border-color: ", ";\n                    background-color: ", ";\n                }\n                \n                body:not(.pointer-events) &:focus {\n                    & ~ ", "::before {\n                        border-color: ", ";\n                    }\n                }\n                \n                &:disabled ~ ", "::before {\n                    border-color: ", ";\n                    background-color: ", ";\n                    cursor: default;\n                }\n                \n                &:disabled ~ ", " {\n                    position: relative;\n                }\n                \n                &:disabled ~ ", " ", " svg {\n                    fill: ", ";\n                }\n            }\n            \n            /* Switch */\n            & ~ ", " {\n                background-color: ", ";\n            }\n            \n            &:hover ~ ", " {\n                background-color: ", ";\n                cursor: default;\n            }\n            \n            &:active ~ ", " {\n                background-color: ", ";\n                cursor: default;\n            }\n            \n            &:disabled ~ ", " {\n                background-color: ", ";\n                cursor: default;\n            }\n            \n            &:disabled ~ ", "::before {\n                background-color: ", ";\n                cursor: default;\n            }\n            \n            &:checked {\n                & ~ ", " {\n                    background-color: ", ";\n                }\n                \n                & ~ ", "::before {\n                    transform: translateX(14px);\n                }\n                \n                &:hover ~ ", " {\n                    background-color: ", ";\n                    cursor: default;\n                }\n                \n                &:active ~ ", " {\n                    background-color: ", ";\n                    cursor: default;\n                }\n                \n                &:disabled ~ ", " {\n                    background-color: ", ";\n                    cursor: default;\n                }\n                \n                &:disabled ~ ", "::before {\n                    background-color: ", ";\n                    cursor: default;\n                }\n            }\n            \n            /* Text content */\n            &:hover ~ ", " {\n                color: ", ";\n            }\n            \n            body:not(.pointer-events) &:focus ~ ", " {\n                color: ", ";\n            }\n       \n            &:disabled {\n                & ~ ", " {\n                    color: ", ";\n                }\n        \n                &:hover ~ ", " {\n                    cursor: default;\n                }\n            }\n        \n            &:checked {\n                & ~ ", " {\n                    color: ", ";\n                }\n        \n                body:not(.pointer-events) &:focus {\n                    & ~ ", " {\n                        color: ", ";\n                    }\n                }\n            }\n        "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    opacity: 0;\n    top: 0;\n    left: 0;\n    margin: 3px;\n            \n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    height: ", ";\n    cursor: pointer;\n\n    &::before {\n        content: '';\n        display: block;\n        width: ", ";\n        height: ", ";\n        background-color: ", ";\n        border-radius: ", ";\n        box-sizing: border-box;\n        transition: background-color 0.17s ease-in-out, border-color 0.17s ease-in-out;\n    }\n\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    width: 36px;\n    height: 20px;\n    flex-shrink: 0;\n    cursor: pointer;\n    border-radius: 10px;\n    transition: background-color 0.17s ease-in-out;\n    \n    &::before {\n        content: '';\n        position: absolute;\n        left: 3px;\n        top: 2px;\n        height: 16px;\n        width: 16px;\n        border-radius: 100%;\n        box-shadow: 0px 2px 4px ", ";\n        background-color: ", ";\n        transition: 0.4s;\n        transition-timing-function: ease-in-out;\n    }\n    \n    & ~ ", " {\n        padding-left: 8px;\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    display: none;\n    position: absolute;\n    width: ", ";\n    height: ", ";\n    top: 0;\n    left: 0;\n    \n    svg {\n      width: 20px;\n      height: 20px;\n      fill: ", "\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    padding-left: 12px;\n    color: ", ";\n    cursor: pointer;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var LIGHT_THEME = THEMES.LIGHT_THEME;

var errorColors = function errorColors(theme) {
  return _objectSpread2(_objectSpread2({}, theme), {}, {
    checkboxBorderOffNormal: theme.checkboxWarningNormal,
    checkboxOnNormal: theme.checkboxWarningNormal,
    checkboxOffHover: theme.checkboxWarningHover,
    checkboxOnHover: theme.checkboxWarningHover,
    checkboxOffClick: theme.checkboxWarningClick,
    switchOffNormal: theme.switchWarningNormal,
    switchOnNormal: theme.switchWarningNormal,
    switchOffHover: theme.switchWarningHover,
    switchOnHover: theme.switchWarningHover,
    switchOffClick: theme.switchWarningClick
  });
};

var pointSize = '20px';
var CheckboxTypographyStyled = styled(TypographyStyled)(_templateObject(), LIGHT_THEME.tertiary);
var IconStyled = styled.span(_templateObject2(), pointSize, pointSize, LIGHT_THEME.whitePrimary);
var SwitchStyled = styled.div(_templateObject3(), LIGHT_THEME.additional24, LIGHT_THEME.whitePrimary, CheckboxTypographyStyled);
var CheckboxStyled = styled.div(_templateObject4(), pointSize, pointSize, pointSize, LIGHT_THEME.noColor, xsBorderRadius);
var InputStyled = styled.input(css(_templateObject5()), function (_ref) {
  var error = _ref.error,
      theme = _ref.theme;
  var checkboxColors = error ? errorColors(LIGHT_THEME) : LIGHT_THEME;
  return css(_templateObject6(), CheckboxStyled, checkboxColors.checkboxBorderOffNormal, checkboxColors.checkboxBody, CheckboxStyled, checkboxColors.checkboxOffHover, CheckboxStyled, checkboxColors.checkboxOffHover, CheckboxStyled, checkboxColors.checkboxOffClick, CheckboxStyled, checkboxColors.checkboxBorderOffDisabled, checkboxColors.checkboxBodyOffDisabled, CheckboxStyled, checkboxColors.checkboxOnNormal, checkboxColors.checkboxOnNormal, CheckboxStyled, IconStyled, CheckboxStyled, checkboxColors.checkboxOnHover, checkboxColors.checkboxOnHover, CheckboxStyled, checkboxColors.checkboxOnNormal, checkboxColors.checkboxOnNormal, CheckboxStyled, checkboxColors.checkboxOffHover, CheckboxStyled, checkboxColors.checkboxBorderOnDisabled, checkboxColors.checkboxBorderOnDisabled, CheckboxStyled, CheckboxStyled, IconStyled, checkboxColors.checkboxBodyOnDisabled, SwitchStyled, checkboxColors.switchOffNormal, SwitchStyled, checkboxColors.switchOffHover, SwitchStyled, checkboxColors.switchOffClick, SwitchStyled, checkboxColors.switchBodyOffDisabled, SwitchStyled, checkboxColors.switchToggleDisabled, SwitchStyled, checkboxColors.switchOnNormal, SwitchStyled, SwitchStyled, checkboxColors.switchOnHover, SwitchStyled, checkboxColors.switchOnNormal, SwitchStyled, checkboxColors.switchBodyOnDisabled, SwitchStyled, checkboxColors.switchToggleDisabled, CheckboxTypographyStyled, LIGHT_THEME.secondary, CheckboxTypographyStyled, LIGHT_THEME.secondary, CheckboxTypographyStyled, LIGHT_THEME.tertiary, CheckboxTypographyStyled, CheckboxTypographyStyled, LIGHT_THEME.primary, CheckboxTypographyStyled, LIGHT_THEME.primary);
});
var mdStyle = css(_templateObject7());
var smStyle = css(_templateObject8());

var dynamicSize = function dynamicSize(props) {
  switch (props.size) {
    case 'md':
      return mdStyle;

    case 'sm':
      return smStyle;
  }

  return null;
};

var CheckboxWrapperStyled = styled.label(_templateObject9(), LIGHT_THEME.noColor, xsBorderRadius, LIGHT_THEME.primary, dynamicSize);

export { CheckboxStyled, CheckboxTypographyStyled, CheckboxWrapperStyled, IconStyled, InputStyled, SwitchStyled };
//# sourceMappingURL=checkbox.style.js.map
