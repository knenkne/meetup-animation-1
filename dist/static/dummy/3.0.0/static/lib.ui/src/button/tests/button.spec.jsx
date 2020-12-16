import React from 'react'
import { shallow, mount } from 'enzyme'

import { Button } from '..'
import { Loader } from '../../loader'

describe('<Button />', () => {
    it('is available', () => {
        expect(Button).toBeDefined()
    })

    it('renders title', () => {
        const wrapper = shallow(<Button title="title" />)

        expect(wrapper.text('title')).toBeTruthy()
    })

    it('fire onClick handler', () => {
        const clickHandler = jest.fn()
        const defaultProps = {
            onClick: clickHandler,
            title: 'title'
        }
        const wrapper = mount(<Button {...defaultProps} />)
        expect(clickHandler).not.toHaveBeenCalled()
        wrapper.find('button').simulate('click')
        expect(clickHandler).toHaveBeenCalled()
    })

    it('does not fire onClick handler if disabled', () => {
        const clickHandler = jest.fn()
        const defaultProps = {
            onClick: clickHandler,
            title: 'title',
            disabled: true
        }
        const wrapper = mount(<Button {...defaultProps} />)
        expect(clickHandler).not.toHaveBeenCalled()
        wrapper.find('button').simulate('click')
        expect(clickHandler).not.toHaveBeenCalled()
    })

    it('renders loading', () => {
        const wrapper = shallow(<Button title="title" />)
        expect(wrapper.find(Loader.Button).length).toBe(0)
        const wrapper2 = shallow(<Button title="title" mode="loading" />)
        expect(wrapper2.find(Loader.Button).length).toBe(1)
    })

    it('does not fire onClick handler if loading', () => {
        const clickHandler = jest.fn()
        const defaultProps = {
            onClick: clickHandler,
            title: 'title',
            mode: 'loading'
        }
        const wrapper = mount(<Button {...defaultProps} />)
        expect(clickHandler).not.toHaveBeenCalled()
        wrapper.find('button').simulate('click')
        expect(clickHandler).not.toHaveBeenCalled()
    })

    it('does not disabled if loading', () => {
        const wrapper = shallow(<Button title="title" mode="loading" disabled />)
        expect(wrapper.find('button').props().disabled).toBe(false)
    })

    it('applies color theme', () => {
        const wrapper = shallow(<Button colorScheme="aqua" />)
        expect(wrapper.hasClass(Button.theme.aqua)).toBeTruthy()

    })

    it('checks aria-* attributes state', () => {
        const wrapper = shallow(<Button title="title" />)
        expect(wrapper.find('button').props()['aria-busy']).toBe(false)
        const wrapper2 = shallow(<Button title="title" mode="loading" />)
        expect(wrapper2.find('button').props()['aria-busy']).toBe(true)
    })
})
