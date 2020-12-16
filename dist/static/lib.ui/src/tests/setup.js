import enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import '../../styleguide/window'

enzyme.configure({ adapter: new Adapter() })
