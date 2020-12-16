import { Icon } from './icon'
import { IconLoader } from './icon-loader'


Icon.setProject(process.env.PKG_ID)

IconLoader.addIcons('icon:core/countries', () => import('./countries'))
IconLoader.addIcons('icon:core/cards', () => import('./cards'))

export { Icon, IconLoader }
