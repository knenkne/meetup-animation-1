import React from 'react'
import { shallow, mount } from 'enzyme'
import _ from 'lodash'

import { Tooltip } from '..'


describe('<Tooltip />', () => {
    it('is available', () => {
        expect(Tooltip).toBeDefined()
    })

    it('renders text with hidden tooltip', () => {
        const wrapper = mount(
            <div>
                <span>{'В начале было '}</span>
                <Tooltip>
                    <span>{'Cлово'}</span>
                    <Tooltip.Tip mode="error">
                        {'Тестовый текст'}
                    </Tooltip.Tip>
                </Tooltip>
                <span>{' тест'}</span>
            </div>
        )
        expect(wrapper.find(`.${Tooltip.theme.contents}`).hasClass(Tooltip.theme.show)).toBeFalsy()
    })

    it('renders children and target', () => {
        jest.spyOn(_, 'uniqueId').mockImplementation(() => 1)
        const target = <button type="button">{'target'}</button>
        const children = <span>{'children'}</span>
        const wrapper = shallow(<Tooltip>{target}<Tooltip.Tip>{children}</Tooltip.Tip></Tooltip>)
        expect(wrapper.find('[data-unit="tooltip:title"]').children().html()).toBe('<button type="button" aria-controls="1" aria-describedby="1">target</button>')
        expect(wrapper.find(Tooltip.Tip).children().html()).toBe('<span>children</span>')
    })
})
