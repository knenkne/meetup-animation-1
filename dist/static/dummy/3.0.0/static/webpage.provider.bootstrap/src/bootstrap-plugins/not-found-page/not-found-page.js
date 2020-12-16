import { factoryTemplatePage } from '../utils/factory-template-page'

const { default: asDefault, mount, unmount } = factoryTemplatePage('not-found')

export default asDefault
export { mount, unmount }
