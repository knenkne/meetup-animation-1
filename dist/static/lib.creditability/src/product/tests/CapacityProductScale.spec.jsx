import React from 'react'
import { shallow } from 'enzyme'

import { CapacityProductScale } from '../CapacityProductScale'

describe('<CapacityProduct />', () => {
    describe('<CapacityProductScale />', () => {
        it('should renders correctly with some error', () => {
            const wrapper = shallow(<CapacityProductScale available={100} reserved={20} used={35} />)

            expect(wrapper).toMatchSnapshot()
        })
    })
})
