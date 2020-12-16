import { createLibAppMock } from '@sbol/jest-config/test/__mocks__/lib.app'

import { mockFieldAdapter } from './components/mock-field-adapter'
import { MockField } from './components/mock-field'

module.exports = { ...createLibAppMock({}), Field: MockField, fieldAdapter: mockFieldAdapter }
