import React from 'react'
import ReactModal from 'react-modal'
import { shallow } from 'enzyme'
import _ from 'lodash'

import { Popup } from '../popup'

describe('<Popup />', () => {
    const setup = (newProps) => {
        const passedProps = _.assign({}, {
            forceOpened: true,
            title: 'some title',
            children: <span>{'Some description'}</span>,
            a11y: {
                ariaHideApp: true,
                closeButtonTitle: 'Закрыть'
            }
        }, newProps)

        return (<Popup {...passedProps} />)
    }

    it('to be defined', () => {
        expect(Popup).toBeDefined()
    })

    it('to call function on closing', () => {
        const someFunction = jest.fn()
        const wrapper = shallow(setup({ onClose: someFunction }))

        wrapper.find('button').simulate('click')
        expect(someFunction.mock.calls.length).toEqual(1)
    })

    it('have no close button if not needed', () => {
        const wrapper = shallow(setup())

        expect(wrapper.find('button').length).toBe(0)
    })

    it('нет title - требуется a11y', () => {
        const wrapper = shallow(setup({
            title: void 0,
            a11y: {
                ariaHideApp: true,
                closeButtonTitle: 'Закрыть',
                title: 'hello'
            }
        }))

        expect(wrapper.find(`.${Popup.theme.titleEmpty}`).length).toBe(1)
        expect(wrapper.find(ReactModal).props().contentLabel).toBe('hello')
    })

    describe('sizable', () => {
        it('sm', () => {
            const wrapper = shallow(setup({ size: 'sm' }))
            expect(wrapper.find('aside').first().hasClass(Popup.theme.sm)).toBe(true)
        })
        it('md', () => {
            const wrapper = shallow(setup({ size: 'md' }))
            expect(wrapper.find('aside').first().hasClass(Popup.theme.md)).toBe(true)
        })
        it('lg', () => {
            const wrapper = shallow(setup({ size: 'lg' }))
            expect(wrapper.find('aside').first().hasClass(Popup.theme.lg)).toBe(true)
        })
        it('xl', () => {
            const wrapper = shallow(setup({ size: 'xl' }))
            expect(wrapper.find('aside').first().hasClass(Popup.theme.xl)).toBe(true)
        })
    })
})
