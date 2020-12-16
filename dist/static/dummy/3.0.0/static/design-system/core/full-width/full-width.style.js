import { a as _taggedTemplateLiteral } from '../_rollupPluginBabelHelpers-3e859d87.js';
import styled from '@emotion/styled';
import { menuOpenedWidth, lgWidth, menuClosedWidth, mdWidth, smWidth, mediaMd, mediaSm, mediaLg } from '../styles/media.config.style.js';

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n   ", " {\n    padding-left: ", ";\n    padding-right: ", ";\n  }\n  \n  ", " {\n    padding-left: ", ";\n    padding-right: ", ";\n  }\n  \n  ", " {\n    padding-left: ", ";\n    padding-right: ", ";\n  }\n  \n  ", " {\n    padding-left: ", ";\n    padding-right: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", " {\n    margin-left: ", ";\n    margin-right: ", ";\n  }\n  \n  ", " {\n    margin-left: ", ";\n    margin-right: ", ";\n  }\n  \n  ", " {\n    margin-left: ", ";\n    margin-right: ", ";\n  }\n  \n  ", " {\n    margin-left: ", ";\n    margin-right: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var lgFullOffsetWidth = "calc(50vw - (".concat(menuOpenedWidth + lgWidth, "px) / 2)");
var lgShortOffsetWidth = "calc(50vw - (".concat(menuClosedWidth + lgWidth, "px) / 2)");
var mdShortOffsetWidth = "calc(50vw - (".concat(menuClosedWidth + mdWidth, "px) / 2)");
var smOffsetWidth = "calc(50vw - ".concat(smWidth, "px / 2)");
var lgFullOffsetWidthNegative = "calc((".concat(menuOpenedWidth + lgWidth, "px) / 2 - 50vw)");
var lgShortOffsetWidthNegative = "calc((".concat(menuClosedWidth + lgWidth, "px) / 2 - 50vw)");
var mdShortOffsetWidthNegative = "calc((".concat(menuClosedWidth + mdWidth, "px) / 2 - 50vw)");
var smOffsetWidthNegative = "calc(".concat(smWidth, "px / 2 - 50vw)");
var mediaLgFull = '@media (min-width: 1312px)';
var mediaLgShort = "".concat(mediaLg, " and (max-width: 1311px)");
var OuterStyled = styled.div(_templateObject(), mediaLgFull, lgFullOffsetWidthNegative, lgFullOffsetWidthNegative, mediaLgShort, lgShortOffsetWidthNegative, lgShortOffsetWidthNegative, mediaMd, mdShortOffsetWidthNegative, mdShortOffsetWidthNegative, mediaSm, smOffsetWidthNegative, smOffsetWidthNegative);
var InnerStyled = styled.div(_templateObject2(), mediaLgFull, lgFullOffsetWidth, lgFullOffsetWidth, mediaLgShort, lgShortOffsetWidth, lgShortOffsetWidth, mediaMd, mdShortOffsetWidth, mdShortOffsetWidth, mediaSm, smOffsetWidth, smOffsetWidth);

export { InnerStyled, OuterStyled, lgFullOffsetWidth, lgFullOffsetWidthNegative, lgShortOffsetWidth, lgShortOffsetWidthNegative, mdShortOffsetWidth, mdShortOffsetWidthNegative, smOffsetWidth, smOffsetWidthNegative };
//# sourceMappingURL=full-width.style.js.map
