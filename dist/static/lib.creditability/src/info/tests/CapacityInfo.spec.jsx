import React from 'react'
import { shallow } from 'enzyme'

import { CapacityInfo } from '../CapacityInfo'

describe('<CapacityInfo />', () => {
    const props = {
        total: 10000,
        used: 5000,
        reserved: 0,
        limits: {
            medium: 6000,
            low: 9000
        },
        decisionMediumKey: 'some.decision.key',
        adviceMediumKey: 'some.advice.key'
    }

    it('renders correctly with high chances', () => {
        const wrapper = shallow(<CapacityInfo {...props} />)

        expect(wrapper).toMatchSnapshot()
    })

    it('renders correctly with medium chances', () => {
        const wrapper = shallow(<CapacityInfo {...props} reserved={2000} />)

        expect(wrapper).toMatchSnapshot()
    })

    it('renders correctly with low chances', () => {
        const wrapper = shallow(<CapacityInfo {...props} reserved={5000} />)

        expect(wrapper).toMatchSnapshot()
    })
})
