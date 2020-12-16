import { a as _taggedTemplateLiteral } from '../_rollupPluginBabelHelpers-3e859d87.js';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { letterSpacing, fontSizeS, lineHeightS, fontSizeM, lineHeightM, fontSizeL, lineHeightL } from '../styles/font-sizes.config.style.js';
import { bJ as colors } from '../colors.config.style-69a09a5b.js';

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n       font-size: ", ";\n       line-height: ", ";\n       margin-top: ", ";\n       margin-bottom: ", ";\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    letter-spacing: ", ";\n    font-weight: ", ";\n    padding: 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    color: ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var baseX = 4;
var dynamicColor = function dynamicColor(_ref) {
  var colorScheme = _ref.colorScheme,
      theme = _ref.theme;
  return css(_templateObject(), colors[colorScheme] || colorScheme || theme.primary);
};
var sizes = {
  sm: {
    fontSize: fontSizeS,
    lineHeight: lineHeightS
  },
  md: {
    fontSize: fontSizeM,
    lineHeight: lineHeightM
  },
  lg: {
    fontSize: fontSizeL,
    lineHeight: lineHeightL
  }
};

var dynamicIndent = function dynamicIndent(size) {
  var _ref2 = sizes[size] || sizes.md,
      lineHeight = _ref2.lineHeight;

  var lineHeightNum = Number.parseInt(lineHeight, 10);
  return {
    openspace: {
      marginVertical: "".concat(lineHeightNum, "px")
    },
    innerspace: {
      marginVertical: "".concat(lineHeightNum - baseX, "px")
    },
    micro: {
      marginVertical: "".concat(lineHeightNum - 2 * baseX, "px")
    },
    nano: {
      marginVertical: "".concat(lineHeightNum - 3 * baseX, "px")
    },
    zero: {
      marginVertical: '0px'
    }
  };
};

var typographyCommonStyled = function typographyCommonStyled(_ref3) {
  var mode = _ref3.mode;
  return css(_templateObject2(), letterSpacing, mode === 'semibold' ? 600 : 400);
};

var dynamicSize = function dynamicSize(_ref4) {
  var size = _ref4.size,
      indent = _ref4.indent,
      last = _ref4.last;

  var _ref5 = sizes[size] || sizes.md,
      fontSize = _ref5.fontSize,
      lineHeight = _ref5.lineHeight;

  return css(_templateObject3(), fontSize, lineHeight, dynamicIndent(lineHeight)[indent || 'openspace'].marginVertical, !last ? dynamicIndent(lineHeight)[indent || 'openspace'].marginVertical : 0);
};

var TypographyStyled = styled.p(typographyCommonStyled, dynamicSize, dynamicColor);

export { TypographyStyled, dynamicColor };
//# sourceMappingURL=typography.style.js.map
