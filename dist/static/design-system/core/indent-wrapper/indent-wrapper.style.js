import { a as _taggedTemplateLiteral } from '../_rollupPluginBabelHelpers-3e859d87.js';
import styled from '@emotion/styled';
import '@emotion/core';
import { baseX } from '../styles/semantic.config.style.js';
import { lineHeightS, lineHeightM, lineHeightL } from '../styles/font-sizes.config.style.js';

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    margin-top: ", ";\n    margin-bottom: ", ";\n    margin-left: ", ";\n    margin-right: ", ";\n    display: block;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var sizes = {
  sm: {
    lineHeight: lineHeightS
  },
  md: {
    lineHeight: lineHeightM
  },
  lg: {
    lineHeight: lineHeightL
  }
};

var dynamicIndent = function dynamicIndent(size) {
  var lineHeightSrt = sizes[size].lineHeight;
  var lineHeight = Number.parseInt(lineHeightSrt, 10);
  return {
    openspace: {
      margin: "".concat(lineHeight, "px")
    },
    innerspace: {
      margin: "".concat(lineHeight - baseX, "px")
    },
    micro: {
      margin: "".concat(lineHeight - 2 * baseX, "px")
    },
    nano: {
      margin: "".concat(lineHeight - 3 * baseX, "px")
    },
    zero: {
      margin: '0px'
    }
  };
};

var IndentWrapper = styled.div(_templateObject(), function (_ref) {
  var size = _ref.size,
      vertical = _ref.vertical;
  return dynamicIndent(size || 'md')[vertical || 'innerspace'].margin;
}, function (_ref2) {
  var size = _ref2.size,
      vertical = _ref2.vertical;
  return dynamicIndent(size || 'md')[vertical || 'innerspace'].margin;
}, function (_ref3) {
  var size = _ref3.size,
      horizontal = _ref3.horizontal;
  return dynamicIndent(size || 'md')[horizontal || 'zero'].margin;
}, function (_ref4) {
  var size = _ref4.size,
      horizontal = _ref4.horizontal;
  return dynamicIndent(size || 'md')[horizontal || 'zero'].margin;
});

export { IndentWrapper };
//# sourceMappingURL=indent-wrapper.style.js.map
