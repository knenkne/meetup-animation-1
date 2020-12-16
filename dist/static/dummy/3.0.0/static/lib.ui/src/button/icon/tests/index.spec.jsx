import React from 'react'
import { mount, shallow } from 'enzyme'

import { IconButton } from '..'

describe('<Button.Icon />', () => {
    it('is available', () => {
        const wrapper = shallow(<IconButton title="title" icon="icon:core/operations/betweenAccounts" />)

        expect(wrapper).toMatchSnapshot()
    })

    it('title has classNames "sm", "green"', () => {
        const wrapper = shallow(<IconButton
            title="title"
            icon="icon:core/operations/betweenAccounts"
            size="sm"
            colorScheme="green"
        />)

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('span').at(0).hasClass(IconButton.theme.sm)).toBeTruthy()
        expect(wrapper.find('span').at(0).hasClass(IconButton.theme.green)).toBeTruthy()
    })

    it('is disabled when mode=loading', () => {
        const wrapper = shallow(<IconButton
            title="title"
            icon="icon:core/operations/betweenAccounts"
            mode="loading"
        />)

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('button').at(0).props().disabled).toBeTruthy()
    })

    it('fire onClick handler', () => {
        const clickHandler = jest.fn()
        const defaultProps = {
            onClick: clickHandler,
            title: 'title',
            icon: 'icon:core/operations/betweenAccounts'
        }
        const wrapper = mount(<IconButton {...defaultProps} />)
        expect(clickHandler).not.toHaveBeenCalled()
        wrapper.find('button').simulate('click')
        expect(clickHandler).toHaveBeenCalled()
    })

    it('does not fire onClick handler if disabled', () => {
        const clickHandler = jest.fn()
        const defaultProps = {
            onClick: clickHandler,
            title: 'title',
            icon: 'icon:core/operations/betweenAccounts',
            disabled: true
        }
        const wrapper = mount(<IconButton {...defaultProps} />)
        expect(clickHandler).not.toHaveBeenCalled()
        wrapper.find('button').simulate('click')
        expect(clickHandler).not.toHaveBeenCalled()
    })

    it('does not fire onClick handler if loading', () => {
        const clickHandler = jest.fn()
        const defaultProps = {
            onClick: clickHandler,
            title: 'title',
            icon: 'icon:core/operations/betweenAccounts',
            mode: 'loading'
        }
        const wrapper = mount(<IconButton {...defaultProps} />)
        expect(clickHandler).not.toHaveBeenCalled()
        wrapper.find('button').simulate('click')
        expect(clickHandler).not.toHaveBeenCalled()
    })
})
