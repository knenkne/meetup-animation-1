import React from 'react'
import axios from 'axios'
import { shallow } from 'enzyme'

import { CapacityProduct } from '../CapacityProduct'

describe('<CapacityProduct />', () => {
    it('should renders correctly', () => {
        const wrapper = shallow(<CapacityProduct axios={axios} />)

        expect(wrapper).toMatchSnapshot()
    })
})
