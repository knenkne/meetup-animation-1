import { factoryTemplatePage } from '../utils/factory-template-page'

const { default: asDefault, mount, unmount } = factoryTemplatePage('network')

export default asDefault
export { mount, unmount }
