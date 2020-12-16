import React from 'react'
import { shallow } from 'enzyme'

import { Renderer } from '../renderer'

describe('Builder', () => {
    // TODO восстановить
    xdescribe('Renderer', () => {

        it('Возвращает компоненту с тэгом form', () => {


            const wrapper = shallow(
                <Renderer stateName="test" />
            )

            expect(wrapper.find('form').exists()).toBe(true)
        })
    })
})
