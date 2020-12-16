import React from 'react'
import { shallow } from 'enzyme'
import _ from 'lodash'

import { Selection } from '../selection'

describe('<Selection /> - является копией <Selection.Checkbox />', () => {
    it('рендерит Selection.Checkbox', () => {
        const wrapper = shallow(<Selection />)
        expect(wrapper.find(Selection.Checkbox).length).toBe(1)
    })
    it('пропускает все свойства', () => {
        const wrapper = shallow(<Selection />)
        expect(wrapper.find(Selection.Checkbox).props()).toEqual(_.merge({}, Selection.defaultProps))
    })
    it('содержит те же propTypes', () => {
        expect(Selection.propTypes).toBe(Selection.Checkbox.propTypes)
        expect(Selection.defaultProps).toBe(Selection.Checkbox.defaultProps)
    })
})
