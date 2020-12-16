import React from 'react'
import { shallow } from 'enzyme'

import { CapacityScale } from '../CapacityScale'

describe('<CapacityScale />', () => {

    const props = {
        used: 0,
        color: '#FF0000',
        background: '#000000',
        theme: 'someClass',
    }

    it('renders correctly with used', () => {
        const wrapper = shallow(<CapacityScale {...props} used={70} />)

        expect(wrapper).toMatchSnapshot()
    })

    it('renders correctly with used', () => {
        const wrapper = shallow(<CapacityScale {...props} />)

        expect(wrapper).toMatchSnapshot()
    })
})
