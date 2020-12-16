import React from 'react'
import { shallow } from 'enzyme'

import { SummaryTitle } from '../summary-title'

describe('Component <SummaryTitle />', () => {
    it('Export SummaryTitle is correct', () => {
        expect(SummaryTitle).toBeDefined()
    })

    let onToggleCollapse
    let wrapper

    beforeEach(() => {
        onToggleCollapse = jest.fn()
        wrapper = shallow(
            <SummaryTitle collapsable={true} onToggleCollapse={onToggleCollapse} />
        )
    })

    it('Handle click', () => {
        wrapper.simulate('click')

        expect(onToggleCollapse.mock.calls.length).toBe(1)
    })

    it('Handle spaceBar key press', () => {
        wrapper.simulate('keyDown', { keyCode: 32 })

        expect(onToggleCollapse.mock.calls.length).toBe(1)
    })

    it('Handle enter key press', () => {
        wrapper.simulate('keyDown', { keyCode: 13 })

        expect(onToggleCollapse.mock.calls.length).toBe(1)
    })
    
    it('Handle wrong button press', () => {
        wrapper.simulate('keyDown', { keyCode: 42 })

        expect(onToggleCollapse.mock.calls.length).toBe(0)
    })
})