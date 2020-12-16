import { Icon } from './icon'
import * as common from './common'

Icon.setProject(process.env.PKG_ID)

Icon.addIcons('icon:core/common', common)
Icon.addIcons('icon:core/resource', () => import('./resource'))
Icon.addIcons('icon:core/countries', () => import('./countries'))
Icon.addIcons('icon:core/cards', () => import('./cards'))
Icon.addIcons('icon:core/cars', () => import('./cars'))
Icon.addIcons('icon:core/social', () => import('./social'))
Icon.addIcons('icon:core/pics-display', () => import('./pics-display'))
Icon.addIcons('icon:core/pics-simple', () => import('./pics-simple'))
Icon.addIcons('icon:core/products', () => import('./products'))
Icon.addIcons('icon:core/product-status', () => import('./product-status'))
Icon.addIcons('icon:core/operations', () => import('./operations'))

export { Icon }
export default Icon
