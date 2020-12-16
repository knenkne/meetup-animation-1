import React from 'react'
import { shallow } from 'enzyme'
import _ from 'lodash'

import { Alert } from '../alert'

describe('<Alert /> - является копией <Alert.Process />', () => {
    it('рендерит Alert.Process', () => {
        const wrapper = shallow(<Alert mode="info" a11y={{}} />)
        expect(wrapper.find(Alert.Process).length).toEqual(1)
    })
    it('пропускает все свойства', () => {
        const wrapper = shallow(<Alert foo="bar" mode="info" a11y={{}} />)
        expect(wrapper.find(Alert.Process).props()).toEqual(_.merge({}, Alert.defaultProps, { foo: 'bar', mode: 'info', a11y: {} }))
    })
    it('содержит те же propTypes', () => {
        expect(Alert.propTypes).toBe(Alert.Process.propTypes)
        expect(Alert.defaultProps).toBe(Alert.Process.defaultProps)
    })
})
