import '../_rollupPluginBabelHelpers-3e859d87.js';
import styled from '@emotion/styled';
import { bJ as colors } from '../colors.config.style-69a09a5b.js';

var fullWidthCss = "\n  height: 100%;\n  width: 100%;\n";
var IconWrapperStyled = styled.span(function (_ref) {
  var theme = _ref.theme,
      colorScheme = _ref.colorScheme,
      fullWidth = _ref.fullWidth;
  return "\n    display: inline-block;\n    text-decoration: none;\n    vertical-align: middle;\n\n    svg {\n        display: block;\n        fill: ".concat(colors[colorScheme] || colorScheme, ";\n        ").concat(fullWidth && fullWidthCss, ";\n\n    }\n\n");
});

export { IconWrapperStyled };
//# sourceMappingURL=icon.style.js.map
