import { a as _taggedTemplateLiteral } from '../_rollupPluginBabelHelpers-3e859d87.js';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { letterSpacing, fontSizeHeadline1, lineHeightHeadline1, fontSizeHeadline2, lineHeightHeadline2, fontSizeHeadline3, lineHeightHeadline3, fontSizeHeadline4, lineHeightHeadline4, fontSizeHeadline5, lineHeightHeadline5 } from '../styles/font-sizes.config.style.js';

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        font-size: ", ";\n        line-height: ", ";\n        letter-spacing: ", ";\n        font-weight: ", "; \n        margin: 0;\n        padding: 0;\n        padding-top: ", ";\n        padding-bottom: ", ";\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var indentConsts = {
  openspace: 'openspace',
  innerspace: 'innerspace'
};

var variantStyle = function variantStyle(indent) {
  return {
    h1: {
      fontSize: fontSizeHeadline1,
      lineHeight: lineHeightHeadline1,
      paddingTop: indent === indentConsts.innerspace ? 0 : '40px',
      paddingBottom: '16px'
    },
    h2: {
      fontSize: fontSizeHeadline2,
      lineHeight: lineHeightHeadline2,
      paddingTop: indent === indentConsts.innerspace ? 0 : '36px',
      paddingBottom: '12px'
    },
    h3: {
      fontSize: fontSizeHeadline3,
      lineHeight: lineHeightHeadline3,
      paddingTop: indent === indentConsts.innerspace ? 0 : '28px',
      paddingBottom: '8px'
    },
    h4: {
      fontSize: fontSizeHeadline4,
      lineHeight: lineHeightHeadline4,
      paddingTop: indent === indentConsts.innerspace ? 0 : '24px',
      paddingBottom: '4px'
    },
    h5: {
      fontSize: fontSizeHeadline5,
      lineHeight: lineHeightHeadline5,
      paddingTop: indent === indentConsts.innerspace ? 0 : '20px',
      paddingBottom: 0
    }
  };
};

var fontWeightStyle = {
  semibold: 600,
  bold: 700,
  regular: 400
};
var modeStyles = function modeStyles(_ref) {
  var variant = _ref.variant,
      mode = _ref.mode,
      indent = _ref.indent;
  var modeStyle = variantStyle(indent)[variant] || variantStyle.h1;
  return css(_templateObject(), modeStyle.fontSize, modeStyle.lineHeight, letterSpacing, fontWeightStyle[mode] || fontWeightStyle.semibold, modeStyle.paddingTop, modeStyle.paddingBottom);
};
var HeadlineStyled = styled.h1(modeStyles);

export { HeadlineStyled, modeStyles };
//# sourceMappingURL=headline.style.js.map
