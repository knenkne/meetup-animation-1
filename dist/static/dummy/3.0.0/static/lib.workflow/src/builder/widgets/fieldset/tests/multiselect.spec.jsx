import { shallow } from 'enzyme'
import React from 'react'

import { Multiselect } from '../types/multiselect'
import { Multiselect as MultiselectEditable } from '../components/multiselect'

describe('<Multiselect />', () => {
    it('Export Multiselect is correct', () => {
        expect(Multiselect).toBeDefined()
    })

    let props = {
        id: 'primitive:multiselect',
        values: [],
        title: 'Multiselect',
        description: 'Можно выбрать несколько значений',
        readonly: false,
        options: [
            { title: 'Опция с длинным текстом 1', value: 'value1' },
            { title: 'Опция 2', value: 'value2' },
            { title: 'Опция 3', value: 'value3' }
        ],
        name: 'primitive:multiselect',
        value: ['true'],
        active: false,
        asyncValidating: false,
        autofilled: false,
        dirty: false,
        error: 'Пожалуйста, выберите вариант',
        form: 'examples-platform-widgets',
        initial: [],
        invalid: true,
        pristine: true,
        submitting: false,
        submitFailed: false,
        touched: false,
        valid: false,
        visited: false,
        formName: 'examples-platform-widgets',
        initialValue: []
    }


    it("shouldn't get error state on initialization", () => {
        const wrapper = shallow(<Multiselect {...props} />)
        const multiSelectEditable = wrapper.find(MultiselectEditable)
        expect(multiSelectEditable.prop('error')).toBeEmpty()
    })

    it('should should get error state after submit', () => {
        props = {
            ...props,
            touched: true
        }
        const wrapper = shallow(<Multiselect {...props} />)
        const multiSelectEditable = wrapper.find(MultiselectEditable)

        expect(multiSelectEditable.prop('error')).toBe(props.error)
    })
})
