import '../_rollupPluginBabelHelpers-687385f0.js';
import 'react';
import 'prop-types';
import 'lodash';
import 'classnames';
import './style.css';
import { Icon } from './icon.js';
export { Icon } from './icon.js';
import { Z as common } from '../index-85b17782.js';
import '../external-969f6c5f.js';

Icon.setProject(process.env.PKG_ID);
Icon.addIcons('icon:core/common', common);
Icon.addIcons('icon:core/resource', function () {
  return import('./resource/index.js');
});
Icon.addIcons('icon:core/countries', function () {
  return import('./countries/index.js');
});
Icon.addIcons('icon:core/cards', function () {
  return import('./cards/index.js');
});
Icon.addIcons('icon:core/cars', function () {
  return import('./cars/index.js');
});
Icon.addIcons('icon:core/social', function () {
  return import('./social/index.js');
});
Icon.addIcons('icon:core/pics-display', function () {
  return import('./pics-display/index.js');
});
Icon.addIcons('icon:core/pics-simple', function () {
  return import('./pics-simple/index.js');
});
Icon.addIcons('icon:core/products', function () {
  return import('./products/index.js');
});
Icon.addIcons('icon:core/product-status', function () {
  return import('./product-status/index.js');
});
Icon.addIcons('icon:core/operations', function () {
  return import('./operations/index.js');
});

export default Icon;
//# sourceMappingURL=index.js.map
