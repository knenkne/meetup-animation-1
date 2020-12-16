import { a as _taggedTemplateLiteral } from '../_rollupPluginBabelHelpers-3e859d87.js';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import '../styles/semantic.config.style.js';
import { lgBorderRadius, xsBorderRadius } from '../styles/radius.config.style.js';
import '../colors.config.style-69a09a5b.js';
import { THEMES } from '../styles/semantic-palette.config.style.js';
import { mediaSm } from '../styles/media.config.style.js';
import { commonShadowHover } from '../styles/shadows.config.style.js';

function _templateObject16() {
  var data = _taggedTemplateLiteral(["width: 100%;"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n    outline: none;\n    position: relative;\n    margin: 0;\n    display: inline-block;\n    width: auto;\n    \n    ", ";\n    \n    &:hover {\n      ", " {\n        z-index: 202;\n      }\n    }\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n    cursor: pointer;\n    display: inline;\n    text-decoration: none;\n    width: 100%;\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["display: flex;"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n    width: ", ";\n    pointer-events: none;\n    position: absolute;\n    display: none;\n    \n    z-index: 201;\n    \n    &:hover {\n      z-index: 203;\n    }\n    \n    ", ";\n    ", ";\n    ", ";\n    \n    ", " {\n        width: ", ";\n    }\n    \n    ", "\n    \n    ", "\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n    right: 0;\n    justify-content: flex-end;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    left: 50%;\n    transform: translate(-50%);\n    justify-content: center;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    left: 0;\n    justify-content: flex-start;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  ", " {\n    border-top-right-radius: ", ";\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  ", " {\n    border-top-left-radius: ", ";\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  top: 100%;\n  \n  ", " {\n    padding-top: 8px;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  ", " {\n    border-bottom-right-radius: ", ";\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  ", " {\n    border-bottom-left-radius: ", ";\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  bottom: 100%;\n  \n  ", " {\n    padding-bottom: 8px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    pointer-events: auto;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: block;\n    position: relative;\n    margin: 0;\n    height: auto;\n    max-width: ", ";\n    border-radius: ", ";\n    background-color: ", ";\n    box-shadow: ", ";\n    overflow: hidden;\n    text-overflow: ellipsis;\n    \n    ", " {\n        width: ", "\n    }\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var LIGHT_THEME = THEMES.LIGHT_THEME;
var tipMaxWidthDesktop = '288px';
var tipMaxWidthMobile = '256px';
var fullWidth = 'fullWidth';
var ContentsStyled = styled.div(_templateObject(), tipMaxWidthDesktop, lgBorderRadius, LIGHT_THEME.noColor, commonShadowHover, mediaSm, tipMaxWidthMobile);
var ActiveZoneStyled = styled.div(_templateObject2());
var topStyle = css(_templateObject3(), ActiveZoneStyled);
var topLeftStyle = css(_templateObject4(), ContentsStyled, xsBorderRadius);
var topRightStyle = css(_templateObject5(), ContentsStyled, xsBorderRadius);
var bottomStyle = css(_templateObject6(), ActiveZoneStyled);
var bottomLeftStyle = css(_templateObject7(), ContentsStyled, xsBorderRadius);
var bottomRightStyle = css(_templateObject8(), ContentsStyled, xsBorderRadius);
var leftStyle = css(_templateObject9());
var centerStyle = css(_templateObject10());
var rightStyle = css(_templateObject11());

var dynamicVerticalDirection = function dynamicVerticalDirection(_ref) {
  var vd = _ref.vd;

  switch (vd) {
    case 'top':
      return topStyle;

    case 'bottom':
      return bottomStyle;
  }

  return null;
};

var dynamicHorizontalDirection = function dynamicHorizontalDirection(_ref2) {
  var hd = _ref2.hd;

  switch (hd) {
    case 'left':
      return leftStyle;

    case 'center':
      return centerStyle;

    case 'right':
      return rightStyle;
  }

  return null;
};

var dynamicComposeDirection = function dynamicComposeDirection(_ref3) {
  var vd = _ref3.vd,
      hd = _ref3.hd;

  if (vd === 'top' && hd === 'left') {
    return topLeftStyle;
  }

  if (vd === 'top' && hd === 'right') {
    return topRightStyle;
  }

  if (vd === 'bottom' && hd === 'left') {
    return bottomLeftStyle;
  }

  if (vd === 'bottom' && hd === 'right') {
    return bottomRightStyle;
  }

  return null;
};

var TipStyled = styled.div(_templateObject12(), tipMaxWidthDesktop, dynamicVerticalDirection, dynamicHorizontalDirection, dynamicComposeDirection, mediaSm, tipMaxWidthMobile, function (_ref4) {
  var mode = _ref4.mode;
  return mode === 'error' && {
    color: LIGHT_THEME.warningPrimary
  };
}, function (_ref5) {
  var show = _ref5.show;
  return show && css(_templateObject13());
});
var TooltipWrapperStyled = styled.div(_templateObject14());
var TooltipStyled = styled.div(_templateObject15(), function (_ref6) {
  var mode = _ref6.mode;
  return mode === fullWidth && css(_templateObject16());
}, TipStyled);

export { ActiveZoneStyled, ContentsStyled, TipStyled, TooltipStyled, TooltipWrapperStyled, tipMaxWidthDesktop, tipMaxWidthMobile };
//# sourceMappingURL=tooltip.style.js.map
