import libAppMock from '@sbol/jest-config/test/__mocks__/lib.app'
import { mockFieldAdapter } from './components/mock-field-adapter'

const config = require('../../fixture/stub/templates/config')

const log = { error: () => void 0 }

module.exports = { ...libAppMock.createLibAppMock({ config, log }), fieldAdapter: mockFieldAdapter }
