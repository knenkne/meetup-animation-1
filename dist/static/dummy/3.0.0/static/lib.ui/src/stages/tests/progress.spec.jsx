import React from 'react'
import { shallow } from 'enzyme'

import { Progress } from '../progress'

describe('<Stages.Progress />', () => {
    it('Не рендерит ничего', () => {
        const wrapper = shallow(<Progress value={78} />)
        expect(wrapper.html()).toBe('')
    })
})
