import React from 'react'
import { mount } from 'enzyme'

import { Listbox } from '..'
import { NoOptionSelected } from '../no-option-selected'


describe('<Listbox />', () => {
    it('is available', () => {
        expect(Listbox).toBeDefined()
    })

    it('disabled when no options', () => {
        const wrapper = mount(
            <Listbox
                options={[]}
                translations={{ itemNotChosenText: 'Нет доступных карт' }}
            />
        )

        expect(wrapper.find('button').at(0).props().disabled).toBeTruthy()
        expect(wrapper.find(NoOptionSelected).at(0).props().itemNotChosenText).toBe('Нет доступных карт')
    })
})
