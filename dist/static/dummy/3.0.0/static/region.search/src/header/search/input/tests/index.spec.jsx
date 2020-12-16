import React from 'react'
import { shallow } from 'enzyme'

import { SearchInput } from '../'

describe('Тесты для HOOKS в SearchInput', () => {
    const fakeFn = (f) => f
    const defaultState = { value: '', onChangeCount: 0 }
    let state = Object.assign({}, defaultState)
    const inputSelector = '#global-search'
    const onChange = (value) => {
        state.value = value
        state.onChangeCount += 1
    }
    const props = {
        value: '',
        autocompleteValue: '',
        onChange,
        onSearchClear: fakeFn,
        onFocus: fakeFn,
        isProductFromPages: false,
        inputRef: fakeFn,
        setInputFocus: fakeFn
    }

    afterEach(() => {
        state = { ...defaultState }
    })

    it('HOOK изменить поле', () => {
        const wrapper = shallow(<SearchInput {...props} />)
        const globalSearch = wrapper.find(inputSelector)

        globalSearch.simulate('change', { target: { value: 'м' } })
        expect(state.value).toEqual('м')
        expect(state.onChangeCount).toBe(1)
    })

    it('HOOK подставить suggest если autocompleteValue = "" и нажата клавиша (НЕ стрелка вправо)', () => {
        const wrapper = shallow(<SearchInput {...props} />)
        const globalSearch = wrapper.find('#global-search')

        globalSearch.simulate('change', { target: { value: 'м' } })
        globalSearch.simulate('keyUp', { key: 'phantomKey' })
        expect(state.value).toEqual('м')
        expect(state.onChangeCount).toBe(1)
    })

    it('HOOK подставить suggest если autocompleteValue = "" и нажата клавиша (стрелка вправо)', () => {
        const wrapper = shallow(<SearchInput {...props} />)
        const globalSearch = wrapper.find('#global-search')

        globalSearch.simulate('change', { target: { value: 'м' } })
        globalSearch.simulate('keyUp', { key: 'ArrowRight' })
        expect(state.value).toEqual('м')
        expect(state.onChangeCount).toBe(1)
    })

    it('HOOK подставить suggest если autocompleteValue = "мтс" и нажата клавиша (стрелка вправо)', () => {
        const particularProps = { ...props }

        particularProps.autocompleteValue = 'мтс'

        const wrapper = shallow(<SearchInput {...particularProps} />)
        const globalSearch = wrapper.find('#global-search')

        globalSearch.simulate('change', { target: { value: 'м' } })
        globalSearch.simulate('keyUp', { key: 'ArrowRight' })
        expect(state.value).toEqual('мтс')
        expect(state.onChangeCount).toBe(2)
    })

    it('HOOK подставить suggest если autocompleteValue = "мтс" и нажата клавиша (стрелка вправо) И value = "мтс"', () => {
        const particularProps = { ...props }

        particularProps.value = 'мтс'
        particularProps.autocompleteValue = 'мтс'

        const wrapper = shallow(<SearchInput {...particularProps} />)
        const globalSearch = wrapper.find('#global-search')

        globalSearch.simulate('keyUp', { key: 'ArrowRight' })
        expect(state.onChangeCount).toBe(0)
    })
})
