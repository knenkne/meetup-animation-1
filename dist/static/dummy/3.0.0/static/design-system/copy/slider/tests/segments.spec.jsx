import React from 'react'
import { shallow } from 'enzyme'

import { Segments } from '../segments'
import style from '../style.css'

xdescribe('<Slider /> -> <Segments />', () => {
    it('is available', () => {
        expect(Segments).toBeDefined()
    })

    it('no delimiters - no segments', () => {
        const wrapper = shallow(<Segments
            step={0}
            min={0}
            max={0}
        />)

        expect(wrapper.html()).toBe(null)
    })

    it('renders delimiters', () => {
        const wrapper = shallow(<Segments min={0} max={10} step={2} />)

        expect(wrapper.find(`.${style.sliderSegments}`).length).toBe(4)
    })
})
