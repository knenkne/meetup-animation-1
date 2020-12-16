import { a as _taggedTemplateLiteral } from '../_rollupPluginBabelHelpers-3e859d87.js';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { baseX } from '../styles/semantic.config.style.js';
import 'react';
import 'prop-types';
import '../styles/font-sizes.config.style.js';
import '../colors.config.style-69a09a5b.js';
import { TypographyStyled as TypographyStyled$1 } from '../typography/typography.style.js';
import '../typography/typography.js';
import { THEMES } from '../styles/semantic-palette.config.style.js';

function _templateObject9() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    cursor: pointer;\n    padding: 0;\n    background-color: ", ";\n    overflow: visible;\n    position: relative;\n    outline: none;\n    ", ";\n    \n    &:first-child {\n        margin-left: 0;\n    }\n    \n    &::before {\n      content: \"\"; \n      position: absolute;\n      bottom: 0;\n      left: 0;\n      width: 100%;\n      height: 3px;\n      border-radius: 2px;\n      background-color: ", ";\n      transition: background-color 0.17s ease-in-out;\n    }\n    \n    ", "\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["    \n    &::before {\n        background-color: ", ";\n    }\n    \n    &:hover {\n        &::before {\n          background-color: ", ";\n        }\n    }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    margin-left: ", ";\n    margin-right: ", ";\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    border-bottom: 1px solid ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    position: sticky;\n    top: 0;\n    background-color: ", ";\n    z-index: 35;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var TabsStyled = styled.div(_templateObject());
var TabsContentSectionStyled = styled.section(_templateObject2());
var LIGHT_THEME = THEMES.LIGHT_THEME;
var stickyStyle = css(_templateObject3(), LIGHT_THEME.noColor);
var TabsHeaderStyled = styled.div(_templateObject4(), function (_ref) {
  var sticky = _ref.sticky;
  return sticky && stickyStyle;
});
var TabsScrollStyled = styled.div(_templateObject5(), LIGHT_THEME.additional8);
var tabHorizontalIndent = {
  lg: {
    margin: "".concat(baseX * 4, "px")
  },
  md: {
    margin: "".concat(baseX * 3, "px")
  },
  sm: {
    margin: "".concat(baseX * 2, "px")
  }
};

var dynamicTabHorizontalIndent = function dynamicTabHorizontalIndent(_ref2) {
  var size = _ref2.size;
  return css(_templateObject6(), tabHorizontalIndent[size].margin, tabHorizontalIndent[size].margin);
};

var selectedStyle = css(_templateObject7(), LIGHT_THEME.brandPrimary, LIGHT_THEME.brandPrimary);
var TabButtonStyled = styled.button(_templateObject8(), LIGHT_THEME.noColor, dynamicTabHorizontalIndent, LIGHT_THEME.noColor, function (_ref3) {
  var selected = _ref3.selected;
  return selected && selectedStyle;
});
var TypographyStyled = styled(TypographyStyled$1)(_templateObject9());

export { TabButtonStyled, TabsContentSectionStyled, TabsHeaderStyled, TabsScrollStyled, TabsStyled, TypographyStyled };
//# sourceMappingURL=tabs.style.js.map
