import '../_rollupPluginBabelHelpers-3e859d87.js';
import '@emotion/styled';
import 'react';
import 'prop-types';
import '../colors.config.style-69a09a5b.js';
import 'lodash';
import './icon.style.js';
import { Icon } from './icon.js';
export { Icon } from './icon.js';
import { IconLoader } from './icon-loader.js';
export { IconLoader } from './icon-loader.js';

Icon.setProject(process.env.PKG_ID);
IconLoader.addIcons('icon:core/countries', function () {
  return import('./countries/index.js');
});
IconLoader.addIcons('icon:core/cards', function () {
  return import('./cards/index.js');
});
//# sourceMappingURL=index.js.map
