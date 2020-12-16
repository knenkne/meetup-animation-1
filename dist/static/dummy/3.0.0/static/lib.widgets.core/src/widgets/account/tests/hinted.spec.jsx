import React from 'react'
import { shallow, mount } from 'enzyme'
import { hinted } from '../utils/hinted'
import { Input, Button } from '@sbol/lib.ui'

describe('<CoreAccount /> hinted', () => {
    it('export', () => {
        expect(hinted).toBeDefined()
    })

    it('returns component with hint', () => {
        const props = {
            tooltip: {
                title: 'asd',
                contents: 'zxc'
            }
        }
        const wrapper = shallow(hinted(Input)(props))
        expect(wrapper.find(Button.InfoLink).length).toBe(1)
    })

    it('returns component without hint', () => {
        const props = {}
        const wrapper = mount(hinted(Input)(props))
        expect(wrapper.find(Button.InfoLink).length).toBe(0)
    })
})
