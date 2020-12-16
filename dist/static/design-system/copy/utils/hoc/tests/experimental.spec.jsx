import React from 'react'
import { shallow } from 'enzyme'

import { experimental } from '../experimental'

describe('experimental HOC', () => {
    it('is available', () => {
        expect(experimental).toBeDefined()
    })

    it('experimental', () => {
        const experimentalComponent = experimental()

        const Component = () => <div />
        Component.displayName = 'ExperimentalComponent'

        const Experimental = experimentalComponent(Component)
        expect(Experimental.WrappedComponent).toBe(Component)

        const warning = console.warn
        console.warn = jest.fn()

        shallow(<Experimental />)
        expect(console.warn).toHaveBeenCalledWith('Component Usage Warning: ExperimentalComponent is experimental component. ExperimentalComponent\'s API could be changed. Please be careful in usage of ExperimentalComponent')
        console.warn = warning
    })
    it('experimental no name', () => {
        const experimentalComponent = experimental()

        const Experimental = experimentalComponent(() => <div />)

        const warning = console.warn
        console.warn = jest.fn()

        shallow(<Experimental />)
        expect(console.warn).toHaveBeenCalledWith('Component Usage Warning: You are using an experimental component. Component\'s API could be changed. Please be careful in usage of it')
        console.warn = warning
    })
})
