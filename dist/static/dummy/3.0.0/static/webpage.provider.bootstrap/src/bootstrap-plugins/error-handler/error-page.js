import { factoryTemplatePage } from '../utils/factory-template-page'

const { default: asDefault, mount, unmount } = factoryTemplatePage(
    'error-found'
)

export default asDefault
export { mount, unmount }
