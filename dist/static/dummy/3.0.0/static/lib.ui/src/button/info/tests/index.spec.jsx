import React from 'react'
import { shallow } from 'enzyme'

import { Info } from '..'
import { Tooltip } from '../../../tooltip'
import { Icon } from '../../../icon'

describe('<Button.Info />', () => {
    it('is available', () => {
        expect(Info).toBeDefined()
    })

    it('renders title', () => {
        const wrapper = shallow(<Info title="title">{'child'}</Info>)

        expect(wrapper.text('titlechild')).toBeTruthy()
    })

    it('renders with mode', () => {
        const wrapper = shallow(<Info title="title" mode="info">{'child'}</Info>)

        expect(wrapper.find(Tooltip.Tip).at(0).props().mode).toBe('info')
    })

    it('renders with icon', () => {
        const wrapper = shallow(<Info title="title">{'child'}</Info>)
        expect(wrapper.find(Icon).length).toBe(0)

        wrapper.setProps({ mode: 'info', icon: 'info' })
        expect(wrapper.find(Icon).at(0).props().name).toBe('icon:core/common/button-info-info')

        wrapper.setProps({ icon: 'warning' })
        expect(wrapper.find(Icon).at(0).props().name).toBe('icon:core/common/button-info-warning')
    })


    it('renders size sm', () => {
        const wrapper = shallow(<Info title="title" size="sm">{'child'}</Info>)
        expect(wrapper.find(`.${Info.theme.sm}`).length).toBe(1)
    })

    it('renders size md', () => {
        const wrapper = shallow(<Info title="title" size="lg">{'child'}</Info>)
        expect(wrapper.find(`.${Info.theme.lg}`).length).toBe(1)
    })

    it('renders children', () => {
        const wrapper = shallow(<Info title="title"><span>{'foo bar baz'}</span></Info>)
        expect(wrapper.contains(<span>{'foo bar baz'}</span>)).toBeTruthy()
    })

    it('u can ~run~ click, but u can\'t ~hide~ click, b.', () => {
        const onClick = jest.fn()
        const preventDefault = jest.fn()
        const wrapper = shallow(<Info title="title" size="lg" onClick={onClick}>{'child'}</Info>)
        wrapper.find('button').at(0).simulate('click', { preventDefault })

        expect(preventDefault).toHaveBeenCalled()
        expect(onClick).not.toHaveBeenCalled()
    })
})
