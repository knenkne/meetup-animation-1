import { a as _taggedTemplateLiteral } from '../_rollupPluginBabelHelpers-3e859d87.js';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { baseX } from '../styles/semantic.config.style.js';
import { xsBorderRadius } from '../styles/radius.config.style.js';
import 'react';
import 'prop-types';
import '../styles/font-sizes.config.style.js';
import '../colors.config.style-69a09a5b.js';
import { TypographyStyled } from '../typography/typography.style.js';
import '../typography/typography.js';
import 'lodash';
import '../icon/icon.style.js';
import { Icon } from '../icon/icon.js';
import '../icon/icon-loader.js';
import '../icon/index.js';

function _templateObject10() {
  var data = _taggedTemplateLiteral(["width: 100%;"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n\n    position: relative;\n    padding: 0;\n    cursor: pointer;\n    border-radius: ", ";\n    text-decoration: none;\n    transition: \n          border-color 0.17s, \n          background-color 0.17s, \n          color 0.17s, \n          box-shadow 0.17s;\n    outline: none;\n    overflow: hidden;\n    user-select: none;\n    -kit-tap-highlight-color: transparent;   \n    \n\n    ", ";\n\n    ", " {\n        ", "\n    }\n    \n    ", " {\n        ", "\n    }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n        flex-direction: row-reverse;\n    "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    display: inline-flex;\n    align-items: center;\n    flex-direction: row;\n        \n    ", ";\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    margin-left: ", ";\n    margin-right: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    display: inline-block;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n        margin-left: ", ";\n        margin-right: ", "\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n            margin-left: ", "\n        "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n                margin-right: ", "\n            "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var typographyIndentStyled = {
  lg: {
    margin: "".concat(baseX * 6, "px")
  },
  md: {
    margin: "".concat(baseX * 5, "px")
  },
  sm: {
    margin: "".concat(baseX * 4, "px")
  }
};

var dynamicTypographyHorizontalIndent = function dynamicTypographyHorizontalIndent(_ref) {
  var size = _ref.size,
      icon = _ref.icon,
      iconReverse = _ref.iconReverse;

  if (icon) {
    if (iconReverse) {
      return css(_templateObject(), typographyIndentStyled[size].margin);
    }

    return css(_templateObject2(), typographyIndentStyled[size].margin);
  }

  return css(_templateObject3(), typographyIndentStyled[size].margin, typographyIndentStyled[size].margin);
};

var ButtonTypographyStyled = styled(TypographyStyled)(_templateObject4());
var iconIndentStyled = {
  lg: {
    margin: "".concat(baseX * 5, "px")
  },
  md: {
    margin: "".concat(baseX * 4, "px")
  },
  sm: {
    margin: "".concat(baseX * 3, "px")
  }
};

var dynamicIconHorizontalIndent = function dynamicIconHorizontalIndent(_ref2) {
  var size = _ref2.size;
  return css(_templateObject5(), iconIndentStyled[size].margin, iconIndentStyled[size].margin);
};

var IconStyled = styled(Icon)(_templateObject6());
var ButtonContainerStyled = styled.div(_templateObject7(), function (_ref3) {
  var iconReverse = _ref3.iconReverse;
  return iconReverse && css(_templateObject8());
});
var ButtonBaseStyled = styled.button(_templateObject9(), xsBorderRadius, function (_ref4) {
  var fullWidth = _ref4.fullWidth;
  return fullWidth && css(_templateObject10());
}, ButtonTypographyStyled, dynamicTypographyHorizontalIndent, IconStyled, dynamicIconHorizontalIndent);

export { ButtonBaseStyled, ButtonContainerStyled, ButtonTypographyStyled, IconStyled };
//# sourceMappingURL=button.style.js.map
