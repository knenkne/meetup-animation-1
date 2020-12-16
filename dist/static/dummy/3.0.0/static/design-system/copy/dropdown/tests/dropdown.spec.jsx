import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { shallow, mount } from 'enzyme'

import { Perimeter } from '../../perimeter'
import { Dropdown } from '../dropdown'


describe('<Dropdown />', () => {
    it('is available', () => {
        expect(Dropdown).toBeDefined()
    })

    it('mode click', () => {
        const onOpen = jest.fn()
        const onClose = jest.fn()
        const DemoTarget = ({ forceOpened, ...props }) => <button data-unit="dropdown:target" {...props} type="button">{forceOpened ? 'Close' : 'Open'}</button>
        DemoTarget.propTypes = { forceOpened: PropTypes.bool }
        DemoTarget.defaultProps = { forceOpened: false }

        const wrapper = mount(
            <Dropdown onOpen={onOpen} onClose={onClose} mode="click">
                <DemoTarget />
                <Dropdown.Contents>
                    {'bar'}
                </Dropdown.Contents>
            </Dropdown>
        )

        expect(wrapper.state('isOpened')).toBeFalsy()
        expect(wrapper.find(DemoTarget).at(0).props().forceOpened).toBeFalsy()
        expect(wrapper.find(Dropdown.Contents).at(0).props().forceOpened).toBeFalsy()

        wrapper.find('[data-unit="dropdown:target"]').at(0).simulate('click')
        expect(wrapper.state('isOpened')).toBeTruthy()
        expect(wrapper.find(DemoTarget).at(0).props().forceOpened).toBeTruthy()
        expect(wrapper.find(Dropdown.Contents).at(0).props().forceOpened).toBeTruthy()
        expect(onOpen.mock.calls.length).toBe(1)
        expect(onClose.mock.calls.length).toBe(0)

        wrapper.find('[data-unit="dropdown:target"]').at(0).simulate('click')
        expect(wrapper.state('isOpened')).toBeFalsy()
        expect(wrapper.find(DemoTarget).at(0).props().forceOpened).toBeFalsy()
        expect(wrapper.find(Dropdown.Contents).at(0).props().forceOpened).toBeFalsy()
        expect(onOpen.mock.calls.length).toBe(1)
        expect(onClose.mock.calls.length).toBe(1)

        wrapper.find('[data-unit="dropdown:target"]').at(0).simulate('click')
        expect(wrapper.state('isOpened')).toBeTruthy()
        expect(wrapper.find(DemoTarget).at(0).props().forceOpened).toBeTruthy()
        expect(wrapper.find(Dropdown.Contents).at(0).props().forceOpened).toBeTruthy()
        expect(onOpen.mock.calls.length).toBe(2)
        expect(onClose.mock.calls.length).toBe(1)

        wrapper.find('[data-unit="dropdown:bubble"]').at(0).simulate('click')
        expect(wrapper.state('isOpened')).toBeTruthy()
        expect(wrapper.find(DemoTarget).at(0).props().forceOpened).toBeTruthy()
        expect(wrapper.find(Dropdown.Contents).at(0).props().forceOpened).toBeTruthy()
        expect(onOpen.mock.calls.length).toBe(2)
        expect(onClose.mock.calls.length).toBe(1)

        wrapper.find(Perimeter).props().onClickOutside()
        expect(wrapper.state('isOpened')).toBeFalsy()

        wrapper.setState({ isOpened: wrapper.state('isOpened') })

        expect(wrapper.find(DemoTarget).at(0).props().forceOpened).toBeFalsy()
        expect(wrapper.find(Dropdown.Contents).at(0).props().forceOpened).toBeFalsy()
        expect(onOpen.mock.calls.length).toBe(2)
        expect(onClose.mock.calls.length).toBe(2)

        wrapper.find(Perimeter).props().onClickOutside()
        expect(wrapper.state('isOpened')).toBeFalsy()

        wrapper.setState({ isOpened: wrapper.state('isOpened') })

        expect(wrapper.find(DemoTarget).at(0).props().forceOpened).toBeFalsy()
        expect(wrapper.find(Dropdown.Contents).at(0).props().forceOpened).toBeFalsy()
        expect(onOpen.mock.calls.length).toBe(2)
        expect(onClose.mock.calls.length).toBe(2)
    })

    it('has correct data-nodes', () => {
        const wrapper = shallow(<Dropdown>{'bar'}</Dropdown>)
        expect(wrapper.find('[data-unit="dropdown"]').length).toBe(1)
    })

    it('mode focus', () => {
        const onOpen = jest.fn()
        const onClose = jest.fn()
        const DemoTarget = (props) => <input data-unit="dropdown:target" {..._.omit(props, 'forceOpened')} />

        const wrapper = mount(
            <Dropdown onOpen={onOpen} onClose={onClose} mode="focus">
                <DemoTarget />
                <Dropdown.Contents>
                    {'bar'}
                </Dropdown.Contents>
            </Dropdown>
        )

        expect(wrapper.state('isOpened')).toBeFalsy()
        expect(wrapper.find(DemoTarget).at(0).props().forceOpened).toBeFalsy()
        expect(wrapper.find(Dropdown.Contents).at(0).props().forceOpened).toBeFalsy()

        wrapper.find('[data-unit="dropdown:target"]').at(0).simulate('focus')

        expect(wrapper.state('isOpened')).toBeTruthy()
        expect(wrapper.find(DemoTarget).at(0).props().forceOpened).toBeTruthy()
        expect(wrapper.find(Dropdown.Contents).at(0).props().forceOpened).toBeTruthy()
        expect(onOpen.mock.calls.length).toBe(1)
        expect(onClose.mock.calls.length).toBe(0)

        wrapper.find('[data-unit="dropdown:target"]').at(0).simulate('focus')

        expect(wrapper.state('isOpened')).toBeTruthy()
        expect(wrapper.find(DemoTarget).at(0).props().forceOpened).toBeTruthy()
        expect(wrapper.find(Dropdown.Contents).at(0).props().forceOpened).toBeTruthy()
        expect(onOpen.mock.calls.length).toBe(1)
        expect(onClose.mock.calls.length).toBe(0)

        wrapper.find('[data-unit="dropdown:target"]').at(0).simulate('blur')

        expect(wrapper.state('isOpened')).toBeFalsy()
        expect(wrapper.find(DemoTarget).at(0).props().forceOpened).toBeFalsy()
        expect(wrapper.find(Dropdown.Contents).at(0).props().forceOpened).toBeFalsy()
        expect(onOpen.mock.calls.length).toBe(1)
        expect(onClose.mock.calls.length).toBe(1)

        wrapper.find('[data-unit="dropdown:target"]').at(0).simulate('focus')

        expect(wrapper.state('isOpened')).toBeTruthy()
        expect(wrapper.find(DemoTarget).at(0).props().forceOpened).toBeTruthy()
        expect(wrapper.find(Dropdown.Contents).at(0).props().forceOpened).toBeTruthy()
        expect(onOpen.mock.calls.length).toBe(2)
        expect(onClose.mock.calls.length).toBe(1)

        wrapper.find('[data-unit="dropdown:bubble"]').at(0).simulate('click')

        expect(wrapper.state('isOpened')).toBeTruthy()
        expect(wrapper.find(DemoTarget).at(0).props().forceOpened).toBeTruthy()
        expect(wrapper.find(Dropdown.Contents).at(0).props().forceOpened).toBeTruthy()
        expect(onOpen.mock.calls.length).toBe(2)
        expect(onClose.mock.calls.length).toBe(1)

        wrapper.find('[data-unit="dropdown:target"]').at(0).simulate('focus')

        expect(wrapper.state('isOpened')).toBeTruthy()
        expect(wrapper.find(DemoTarget).at(0).props().forceOpened).toBeTruthy()
        expect(wrapper.find(Dropdown.Contents).at(0).props().forceOpened).toBeTruthy()
        expect(onOpen.mock.calls.length).toBe(2)
        expect(onClose.mock.calls.length).toBe(1)
    })

    it('can be controlled', () => {
        const onOpen = jest.fn()
        const onClose = jest.fn()
        const DemoTarget = ({ forceOpened }) => <button data-unit="dropdown:target" type="button">{forceOpened ? 'Close' : 'Open'}</button>
        DemoTarget.propTypes = { forceOpened: PropTypes.bool }
        DemoTarget.defaultProps = { forceOpened: false }
        const wrapper = mount(<Dropdown onOpen={onOpen} onClose={onClose} mode="none" forceOpened><DemoTarget /></Dropdown>)

        wrapper.find('[data-unit="dropdown:target"]').at(0).simulate('click')
        expect(onOpen.mock.calls.length).toBe(0)
        wrapper.find('[data-unit="dropdown:target"]').at(0).simulate('click')
        expect(onOpen.mock.calls.length).toBe(0)
        wrapper.setProps({ forceOpened: false })
        wrapper.find('[data-unit="dropdown:target"]').at(0).simulate('click')
        expect(onOpen.mock.calls.length).toBe(0)
        wrapper.find('[data-unit="dropdown:target"]').at(0).simulate('click')
        expect(onOpen.mock.calls.length).toBe(0)
    })

    it('can be disabled', () => {
        const onOpen = jest.fn()
        const DemoTarget = () => <button data-unit="dropdown:target" type="button">{'Button'}</button>
        const wrapper = mount(
            <Dropdown disabled onOpen={onOpen}>
                <DemoTarget />
                <Dropdown.Contents>{'bar'}</Dropdown.Contents>
            </Dropdown>
        )

        wrapper.find('[data-unit="dropdown:target"]').at(0).simulate('click')
        expect(onOpen).not.toHaveBeenCalled()
        expect(wrapper.state('isOpened')).toBeFalsy()
    })
})
