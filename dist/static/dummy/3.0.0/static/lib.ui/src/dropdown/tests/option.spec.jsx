import React from 'react'
import { shallow } from 'enzyme'
import _ from 'lodash'

import { Dropdown } from '..'

describe('<Dropdown.Option />', () => {
    it('is available', () => {
        expect(Dropdown.Option).toBeDefined()
    })


    it('register and unregister option', () => {
        const registerOption = jest.fn()
        const unregisterOption = jest.fn()
        const getValue = jest.fn()
        const getSelectedValue = jest.fn()
        const getOpened = jest.fn()

        const context = { dropdown: {
            registerOption,
            unregisterOption,
            getValue,
            getSelectedValue,
            getOpened
        } }
        const wrapper = shallow(<Dropdown.Option value="1" title="1" />, { context })

        expect(registerOption).toHaveBeenCalledWith(wrapper.instance())
        expect(getValue).toHaveBeenCalled()
        expect(getSelectedValue).toHaveBeenCalled()
        expect(getOpened).toHaveBeenCalled()

        wrapper.unmount()

        expect(unregisterOption).toHaveBeenCalledWith('1')
    })

    it('renders children', () => {
        const context = { dropdown: {
            registerOption: _.noop,
            unregisterOption: _.noop,
            getValue: _.noop,
            getSelectedValue: _.noop,
            getOpened: _.noop
        } }
        const wrapper = shallow(<Dropdown.Option value="1" title="1"><span>{'foo bar baz'}</span></Dropdown.Option>, { context })

        expect(wrapper.contains(<span>{'foo bar baz'}</span>)).toBeTruthy()
        expect(wrapper.find(`.${Dropdown.theme.itemIcon}`).length).toBe(1)

        const wrapper2 = shallow(<Dropdown.Option value="1" title="1" />, { context })
        expect(wrapper2.find(`.${Dropdown.theme.itemIcon}`).length).toBe(0)
    })

    it('renders description', () => {
        const context = { dropdown: {
            registerOption: _.noop,
            unregisterOption: _.noop,
            getValue: _.noop,
            getSelectedValue: _.noop,
            getOpened: _.noop
        } }
        const wrapper = shallow(<Dropdown.Option value="1" title="1" description="123" />, { context })

        expect(wrapper.find(`.${Dropdown.theme.itemDescription}`).length).toBe(1)

        const wrapper2 = shallow(<Dropdown.Option value="1" title="1" />, { context })
        expect(wrapper2.find(`.${Dropdown.theme.itemDescription}`).length).toBe(0)
    })

    it('click', () => {
        const onChange = jest.fn()
        const handleClose = jest.fn()
        const onClick = jest.fn()
        const context = { dropdown: {
            registerOption: _.noop,
            unregisterOption: _.noop,
            getValue: _.noop,
            getSelectedValue: _.noop,
            getOpened: _.noop,
            onChange,
            handleClose
        } }
        const wrapper = shallow(<Dropdown.Option value="1" title="1" onClick={onClick} />, { context })

        wrapper.find('[data-unit="dropdown:option"]').at(0).simulate('mousedown')
        expect(onChange).toHaveBeenCalledWith('1')
        expect(onClick).toHaveBeenCalledWith('1')
        expect(handleClose).toHaveBeenCalled()
    })
})
