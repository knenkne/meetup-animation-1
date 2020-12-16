import React from 'react'
import { shallow } from 'enzyme'

import { Accordion } from '../accordion'

describe('<Accordion />', () => {
    it('Распределяет свое состояние на дочерние элементы', () => {
        const wrapper = shallow(<Accordion a11y={{ id: 'foo' }} initialValue="Заголовок 1">
            <Accordion.Item title="Заголовок 1">
                {'foo bar baz'}
            </Accordion.Item>
            <Accordion.Item title="Заголовок 2">
                {'foo bar baz'}
            </Accordion.Item>
        </Accordion>)

        expect(wrapper.find(Accordion.Item).at(0).props().id).toBe('foo-0')
        expect(wrapper.find(Accordion.Item).at(0).props().forceOpened).toBe(true)

        expect(wrapper.find(Accordion.Item).at(1).props().id).toBe('foo-1')
        expect(wrapper.find(Accordion.Item).at(1).props().forceOpened).toBe(false)
    })

    it('Renders with mode "widget"', () => {
        const wrapper = shallow(<Accordion mode="widget" a11y={{ id: 'foo' }} initialValue="Заголовок 1">
            <Accordion.Item title="Заголовок 1">
                {'foo bar baz'}
            </Accordion.Item>
            <Accordion.Item title="Заголовок 2">
                {'foo bar baz'}
            </Accordion.Item>
        </Accordion>)

        expect(wrapper.find(Accordion.Item).at(0).props().mode).toBe('widget')
    })

    it('Позволяет изменить свое состояние из элементов', () => {
        const wrapper = shallow(<Accordion a11y={{ id: 'foo' }} initialValue="Заголовок 1">
            <Accordion.Item title="Заголовок 1">
                {'foo bar baz'}
            </Accordion.Item>
            <Accordion.Item title="Заголовок 2">
                {'foo bar baz'}
            </Accordion.Item>
        </Accordion>)

        expect(wrapper.state().active).toBe('Заголовок 1')
        expect(wrapper.find(Accordion.Item).at(0).props().forceOpened).toBe(true)
        expect(wrapper.find(Accordion.Item).at(1).props().forceOpened).toBe(false)

        wrapper.find(Accordion.Item).at(0).props().onChange('Заголовок 2')

        expect(wrapper.state().active).toBe('Заголовок 2')
        expect(wrapper.find(Accordion.Item).at(0).props().forceOpened).toBe(false)
        expect(wrapper.find(Accordion.Item).at(1).props().forceOpened).toBe(true)

        wrapper.find(Accordion.Item).at(0).props().onChange('Заголовок 2')

        expect(wrapper.state().active).toBeUndefined()
        expect(wrapper.find(Accordion.Item).at(0).props().forceOpened).toBe(false)
        expect(wrapper.find(Accordion.Item).at(1).props().forceOpened).toBe(false)
    })

    describe('Клавиатурное управление', () => {
        it('Рандомная кнопка', () => {
            const wrapper = shallow(<Accordion a11y={{ id: 'foo' }} initialValue="Заголовок 1">
                <Accordion.Item title="Заголовок 1">
                    {'foo bar baz'}
                </Accordion.Item>
                <Accordion.Item title="Заголовок 2">
                    {'foo bar baz'}
                </Accordion.Item>
                <Accordion.Item title="Заголовок 3">
                    {'foo bar baz'}
                </Accordion.Item>
                <Accordion.Item title="Заголовок 4">
                    {'foo bar baz'}
                </Accordion.Item>
            </Accordion>)

            const preventDefault = jest.fn()
            wrapper.instance().focus = jest.fn()

            wrapper.find(Accordion.Item).at(0).props().onKeyDown('Заголовок 1', {
                keyCode: 1,
                preventDefault
            })

            expect(preventDefault).not.toHaveBeenCalled()
            expect(wrapper.instance().focus).not.toHaveBeenCalled()
        })
        it('End', () => {
            const wrapper = shallow(<Accordion a11y={{ id: 'foo' }} initialValue="Заголовок 1">
                <Accordion.Item title="Заголовок 1">
                    {'foo bar baz'}
                </Accordion.Item>
                <Accordion.Item title="Заголовок 2">
                    {'foo bar baz'}
                </Accordion.Item>
                <Accordion.Item title="Заголовок 3">
                    {'foo bar baz'}
                </Accordion.Item>
                <Accordion.Item title="Заголовок 4">
                    {'foo bar baz'}
                </Accordion.Item>
            </Accordion>)

            const preventDefault = jest.fn()
            wrapper.instance().focus = jest.fn()

            wrapper.find(Accordion.Item).at(0).props().onKeyDown('Заголовок 1', {
                keyCode: 35,
                preventDefault
            })

            expect(preventDefault).toHaveBeenCalled()
            expect(wrapper.instance().focus).toHaveBeenCalledWith(3)
        })
        it('Home', () => {
            const wrapper = shallow(<Accordion a11y={{ id: 'foo' }} initialValue="Заголовок 1">
                <Accordion.Item title="Заголовок 1">
                    {'foo bar baz'}
                </Accordion.Item>
                <Accordion.Item title="Заголовок 2">
                    {'foo bar baz'}
                </Accordion.Item>
                <Accordion.Item title="Заголовок 3">
                    {'foo bar baz'}
                </Accordion.Item>
                <Accordion.Item title="Заголовок 4">
                    {'foo bar baz'}
                </Accordion.Item>
            </Accordion>)

            const preventDefault = jest.fn()
            wrapper.instance().focus = jest.fn()

            wrapper.find(Accordion.Item).at(0).props().onKeyDown('Заголовок 1', {
                keyCode: 36,
                preventDefault
            })

            expect(preventDefault).toHaveBeenCalled()
            expect(wrapper.instance().focus).toHaveBeenCalledWith(0)
        })
        it('Next', () => {
            const wrapper = shallow(<Accordion a11y={{ id: 'foo' }} initialValue="Заголовок 1">
                <Accordion.Item title="Заголовок 1">
                    {'foo bar baz'}
                </Accordion.Item>
                <Accordion.Item title="Заголовок 2">
                    {'foo bar baz'}
                </Accordion.Item>
                <Accordion.Item title="Заголовок 3">
                    {'foo bar baz'}
                </Accordion.Item>
                <Accordion.Item title="Заголовок 4">
                    {'foo bar baz'}
                </Accordion.Item>
            </Accordion>)

            const preventDefault = jest.fn()
            wrapper.instance().focus = jest.fn()

            wrapper.find(Accordion.Item).at(0).props().onKeyDown('Заголовок 1', {
                keyCode: 40,
                preventDefault
            })

            expect(preventDefault).toHaveBeenCalled()
            expect(wrapper.instance().focus).toHaveBeenCalledWith(1)
        })
        it('Prev', () => {
            const wrapper = shallow(<Accordion a11y={{ id: 'foo' }} initialValue="Заголовок 1">
                <Accordion.Item title="Заголовок 1">
                    {'foo bar baz'}
                </Accordion.Item>
                <Accordion.Item title="Заголовок 2">
                    {'foo bar baz'}
                </Accordion.Item>
                <Accordion.Item title="Заголовок 3">
                    {'foo bar baz'}
                </Accordion.Item>
                <Accordion.Item title="Заголовок 4">
                    {'foo bar baz'}
                </Accordion.Item>
            </Accordion>)

            const preventDefault = jest.fn()
            wrapper.instance().focus = jest.fn()

            wrapper.find(Accordion.Item).at(0).props().onKeyDown('Заголовок 1', {
                keyCode: 38,
                preventDefault
            })

            expect(preventDefault).toHaveBeenCalled()
            expect(wrapper.instance().focus).toHaveBeenCalledWith(3)
        })
    })

    it('Определяет наличие описания', () => {
        expect(Accordion.hasNoDescription([])).toEqual(true)
        expect(Accordion.hasNoDescription([{ props: { description: void 0 } }])).toEqual(true)
        expect(Accordion.hasNoDescription([{ props: { description: 'someText' } }, { props: {} }])).toEqual(false)
    })
})
