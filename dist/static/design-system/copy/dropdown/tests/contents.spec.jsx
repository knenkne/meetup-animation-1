import React from 'react'
import { shallow, mount } from 'enzyme'

import { Dropdown } from '..'

describe('<Dropdown.Contents />', () => {
    it('is available', () => {
        expect(Dropdown.Contents).toBeDefined()
    })

    it('onClick', () => {
        const onClick = jest.fn()
        const stopPropagation = jest.fn()
        const wrapper = shallow(<Dropdown.Contents onClick={onClick} />)


        wrapper.find('[data-unit="dropdown:bubble"]').at(0).simulate('click', { stopPropagation })

        expect(onClick).toHaveBeenCalled()
        expect(stopPropagation).toHaveBeenCalled()
    })

    it('has correct data-node', () => {
        const wrapper = shallow(<Dropdown.Contents />)
        expect(wrapper.find('[data-unit="dropdown:bubble"]').length).toBe(1)
        expect(wrapper.find('[data-unit="dropdown:contents"]').length).toBe(1)
    })

    it('renders all content', () => {
        const wrapper = shallow(<Dropdown.Contents><span>{'foo bar baz'}</span></Dropdown.Contents>)
        expect(wrapper.contains(<span>{'foo bar baz'}</span>)).toBeTruthy()
    })

    describe('top and right classes', () => {
        it('top and right', () => {
            const wrapper = shallow(
                <Dropdown.Contents align="right" verticalAlign="top">
                    {'bar'}
                </Dropdown.Contents>
            )

            wrapper.setProps({ forceOpened: true })
            expect(wrapper.find('[data-unit="dropdown:bubble"]').at(0).hasClass(Dropdown.theme.top)).toBeTruthy()
            expect(wrapper.find('[data-unit="dropdown:bubble"]').at(0).hasClass(Dropdown.theme.right)).toBeTruthy()
        })
        it('left and bottom', () => {
            const wrapper = shallow(
                <Dropdown.Contents align="left" verticalAlign="bottom">
                    {'bar'}
                </Dropdown.Contents>
            )

            wrapper.setProps({ forceOpened: true })
            expect(wrapper.find('[data-unit="dropdown:bubble"]').at(0).hasClass(Dropdown.theme.top)).toBeFalsy()
            expect(wrapper.find('[data-unit="dropdown:bubble"]').at(0).hasClass(Dropdown.theme.right)).toBeFalsy()
        })
        it('functions', () => {
            const align = jest.fn()
            const verticalAlign = jest.fn()
            const myTarget = {}
            const wrapper = mount(
                <Dropdown.Contents nodeTarget={myTarget} align={align} verticalAlign={verticalAlign}>
                    {'bar'}
                </Dropdown.Contents>
            )

            wrapper.setProps({ forceOpened: true })

            expect(align.mock.calls[0][0] instanceof HTMLDivElement).toBeTruthy()
            expect(align.mock.calls[0][1]).toBe(myTarget)
            expect(verticalAlign.mock.calls[0][0] instanceof HTMLDivElement).toBeTruthy()
            expect(verticalAlign.mock.calls[0][1]).toBe(myTarget)
        })
        it('default functions', () => {
            const wrapper = mount(
                <Dropdown.Contents>
                    {'bar'}
                </Dropdown.Contents>
            )

            wrapper.setProps({ forceOpened: true })

            expect(wrapper.find('[data-unit="dropdown:bubble"]').at(0).hasClass(Dropdown.theme.top)).toBeFalsy()
            expect(wrapper.find('[data-unit="dropdown:bubble"]').at(0).hasClass(Dropdown.theme.right)).toBeFalsy()
        })
    })
})
