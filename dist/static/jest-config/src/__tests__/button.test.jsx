import { shallow } from 'enzyme'
import React from 'react'

describe('Тест кнопки', () => {

    test('Кнопка кликается', () => {
        const mockCallBack = jest.fn()

        /*
           shallow используется тогда, когда необходимо протестировать поведение самой кнопки,
           её содержимое здесь не особо важно, тестируется именно поведение обёртки
        */

        const button = shallow(
            <button onClick={mockCallBack}>
                Click me
            </button>
        )
        const buttonElement = button.find('button')

        buttonElement.simulate('click')

        expect(mockCallBack.mock.calls.length).toEqual(1)
    });

    test('Кнопка содержит текст Click me', () => {
        const button = shallow(<button>Click me</button>)
        const buttonElementText = button.find('button').text()

        expect(buttonElementText).toEqual('Click me')
    })

})
