import React from 'react'
import { shallow } from 'enzyme'

import { TechnicalError } from '../technical-error'
import style from '../style.css'

describe('<TechnicalError />', () => {
    it('is available', () => {
        expect(TechnicalError).toBeDefined()
    })

    it('has default theme as property', () => {
        expect(TechnicalError.theme).toBeDefined()
        expect(TechnicalError.theme).toBe(style)
    })

    it('renders title', () => {
        const wrapper = shallow(<TechnicalError title="Заголовок">
            <span>{'foo bar baz'}</span>
        </TechnicalError>)
        expect(wrapper.find('h3').length).toBe(1)
        expect(wrapper.contains('Заголовок')).toBeTruthy()
    })

    it('renders children', () => {
        const wrapper = shallow(
            <TechnicalError title="Заголовок">
                <span>{'foo bar baz'}</span>
            </TechnicalError>
        )

        expect(wrapper.contains(<span>{'foo bar baz'}</span>)).toBeTruthy()
    })
})
