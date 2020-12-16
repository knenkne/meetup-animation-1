import React from 'react'
import { shallow } from 'enzyme'

import { deprecate } from '../deprecate'

describe('deprecate HOC', () => {
    it('is available', () => {
        expect(deprecate).toBeDefined()
    })

    it('deprecate', () => {
        const deprecateIn230 = deprecate('2.3.0')

        const Component = () => <div />
        Component.displayName = 'ComponentWithDeprecate'

        const Deprecate = deprecateIn230(Component)
        expect(Deprecate.WrappedComponent).toBe(Component)

        const warning = console.warn
        console.warn = jest.fn()

        shallow(<Deprecate />)
        expect(console.warn).toHaveBeenCalledWith('Component Usage Warning: ComponentWithDeprecate is deprecated and will be deleted since v2.3.0. Please use no component instead')

        console.warn = warning
    })
})
