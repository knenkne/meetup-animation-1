import React from 'react'
import { shallow } from 'enzyme'

import { CapacityHellScale } from '../CapacityHellScale'

describe('<CapacityHellScale />', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<CapacityHellScale />)

        expect(wrapper).toMatchSnapshot()
    })

    it('renders correctly with used', () => {
        const wrapper = shallow(<CapacityHellScale used={50} />)

        expect(wrapper).toMatchSnapshot()
    })

    it('renders correctly with used and reserved', () => {
        const wrapper = shallow(<CapacityHellScale used={50} reserved={50} />)

        expect(wrapper).toMatchSnapshot()
    })
})
