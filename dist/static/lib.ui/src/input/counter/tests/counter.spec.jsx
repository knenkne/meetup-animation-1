import React from 'react'
import { shallow, mount } from 'enzyme'

import { Counter } from '../counter'
import { Tooltip } from '../../../tooltip'
import { CounterControl } from '../counter-control'

describe('<Counter />', () => {
    it('renders 2 counter buttons and an input', () => {
        const defaultProps = {
            step: 1,
            min: 2,
            max: 5,
            value: '3',
            onChange: () => {},
            title: 'foo'
        }

        const wrapper = mount(
            <Counter {...defaultProps} />
        )
        expect(wrapper.find(CounterControl).length).toBe(2)
        expect(wrapper.find('input').length).toBe(1)
    })

    it('has class if mode "wide"', () => {

        const wrapper = shallow(<Counter
            title="foo"
            min={0}
            max={100}
            value="25"
            step={2}
            mode="wide"
        />)
        expect(wrapper.hasClass(Counter.theme.wide)).toBeTruthy()
    })
    xdescribe('содержит тултип', () => {
        it('выводит тултип, если значение меньше минимума', () => {
            const wrapper = shallow(
                <Counter
                    step={1}
                    min={2}
                    max={5}
                    value="1"
                    title="foo"
                    translations={{ minWarning: 'malo', maxWarning: 'mnogo' }}
                />
            )
            expect(wrapper.find(Tooltip.Tip).contains('malo')).toBe(true)
        })
        it('выводит тултип, если значение больше максимума', () => {
            const wrapper = shallow(
                <Counter
                    step={1}
                    min={2}
                    max={5}
                    value="6"
                    title="foo"
                    translations={{ minWarning: 'malo', maxWarning: 'mnogo' }}
                />
            )
            expect(wrapper.find(Tooltip.Tip).contains('mnogo')).toBe(true)
        })
        it('не выводит тултип, если значение в пределах интервала', () => {
            const wrapper = shallow(
                <Counter
                    step={1}
                    min={2}
                    max={5}
                    value="3"
                    title="foo"
                    translations={{ minWarning: 'malo', maxWarning: 'mnogo' }}
                />
            )
            expect(wrapper.find(Tooltip.Tip).children().exists()).toBe(false)
        })
    })
    it('renders data-unit attributes for Counter and CounterBox', () => {
        const defaultProps = {
            step: 1,
            min: 2,
            max: 5,
            value: '3',
            onChange: () => {},
            title: 'foo'
        }

        const wrapper = mount(
            <Counter {...defaultProps} />
        )
        expect(wrapper.find('[data-unit="input:counter:control:increase"]').length).toBe(1)
        expect(wrapper.find('[data-unit="input:counter:control:decrease"]').length).toBe(1)
        expect(wrapper.find('[data-unit="input:counter"]').length).toBe(1)
    })
    it('renders default value to DOM', () => {
        const defaultProps = {
            step: 1,
            min: 2,
            max: 5,
            value: '3',
            onChange: () => {},
            title: 'foo'
        }

        const wrapper = mount(
            <Counter {...defaultProps} />
        )
        expect(wrapper.find('input[value="3"]').length).toEqual(1)
    })
    it('fires onChange handler', () => {
        const changeHandler = jest.fn()

        const defaultProps = {
            step: 1,
            min: 2,
            max: 5,
            value: '3',
            onChange: changeHandler,
            title: 'foo'
        }

        const wrapper = mount(<Counter {...defaultProps} />)
        expect(changeHandler).not.toHaveBeenCalled()
        wrapper.find('button').first().simulate('click')
        expect(changeHandler).toHaveBeenCalled()
    })
    it('fires onChange handler with decreased value on decrease button click', () => {
        const changeHandler = jest.fn()
        const defaultProps = {
            step: 1,
            min: 2,
            max: 5,
            value: '3',
            onChange: changeHandler,
            title: 'foo'
        }
        const wrapper = mount(<Counter {...defaultProps} />)
        wrapper.find('button').first().simulate('click')
        expect(changeHandler.mock.calls[changeHandler.mock.calls.length - 1][0]).toEqual('2')
    })
    it('fires onChange handler with increased value on increase button click', () => {
        const changeHandler = jest.fn()
        const defaultProps = {
            step: 1,
            min: 2,
            max: 5,
            value: '3',
            onChange: changeHandler,
            title: 'foo'
        }
        const wrapper = mount(<Counter {...defaultProps} />)
        wrapper.find('button').last().simulate('click')
        expect(changeHandler.mock.calls[changeHandler.mock.calls.length - 1][0]).toEqual('4')
    })
    it('increase value on any step', () => {
        const changeHandler = jest.fn()
        const defaultProps = {
            step: 3,
            min: 2,
            max: 15,
            value: '3',
            onChange: changeHandler,
            title: 'foo'
        }
        const wrapper = mount(<Counter {...defaultProps} />)
        wrapper.find('button').last().simulate('click')
        expect(changeHandler.mock.calls[changeHandler.mock.calls.length - 1][0]).toEqual('6')
    })
    it('decrease value on any step', () => {
        const changeHandler = jest.fn()
        const defaultProps = {
            step: 7,
            min: 1,
            max: 15,
            value: '11',
            onChange: changeHandler,
            title: 'foo'
        }
        const wrapper = mount(<Counter {...defaultProps} />)
        wrapper.find('button').first().simulate('click')
        expect(changeHandler.mock.calls[changeHandler.mock.calls.length - 1][0]).toEqual('4')
    })

    it('обновление props', (done) => {
        const changeHandler = jest.fn()
        const defaultProps = {
            step: 2,
            min: 1,
            max: 15,
            value: '10',
            onChange: changeHandler,
            title: 'foo'
        }
        const wrapper = mount(<Counter {...defaultProps} />)
        wrapper.find('button').last().simulate('click')
        expect(changeHandler.mock.calls[changeHandler.mock.calls.length - 1][0]).toEqual('12')
        wrapper.setProps({
            step: 2,
            min: 1,
            max: 15,
            value: '7',
            onChange: changeHandler,
            title: 'foo'
        }, () => {
            wrapper.find('button').first().simulate('click')
            expect(changeHandler.mock.calls[changeHandler.mock.calls.length - 1][0]).toEqual('5')
            done()
        })
    })

    it('граничные значения', (done) => {
        const changeHandler = jest.fn()
        const defaultProps = {
            step: 7,
            min: 1,
            max: 15,
            value: '15',
            onChange: changeHandler,
            title: 'foo'
        }
        const wrapper = mount(<Counter {...defaultProps} />)
        wrapper.find('button').last().simulate('click')
        expect(changeHandler).not.toHaveBeenCalled()

        wrapper.setProps({
            step: 7,
            min: 1,
            max: 15,
            value: '7',
            onChange: changeHandler,
            title: 'foo'
        }, () => {
            wrapper.find('button').first().simulate('click')
            expect(changeHandler).not.toHaveBeenCalled()
            done()
        })
    })

    describe('Keyboard', () => {
        it('Arrow up', () => {
            const preventDefault = jest.fn()
            const onChange = jest.fn()

            const wrapper = mount(<Counter title="foo" min={0} max={100} value="25" step={2} onChange={onChange} />)
            wrapper.find('input').simulate('keydown', { preventDefault, keyCode: 38 })

            expect(onChange).toHaveBeenCalledWith('27')
            expect(preventDefault).toHaveBeenCalled()
        })
        it('Arrow up while max', () => {
            const preventDefault = jest.fn()
            const onChange = jest.fn()

            const wrapper = mount(<Counter title="foo" min={0} max={100} value="100" step={2} onChange={onChange} />)
            wrapper.find('input').simulate('keydown', { preventDefault, keyCode: 38 })

            expect(onChange).not.toHaveBeenCalled()
            expect(preventDefault).toHaveBeenCalled()
        })
        it('Arrow down', () => {
            const preventDefault = jest.fn()
            const onChange = jest.fn()

            const wrapper = mount(<Counter title="foo" min={0} max={100} value="25" step={2} onChange={onChange} />)
            wrapper.find('input').simulate('keydown', { preventDefault, keyCode: 40 })

            expect(onChange).toHaveBeenCalledWith('23')
            expect(preventDefault).toHaveBeenCalled()
        })
        it('Arrow down while min', () => {
            const preventDefault = jest.fn()
            const onChange = jest.fn()

            const wrapper = mount(<Counter title="foo" min={0} max={100} value="0" step={2} onChange={onChange} />)
            wrapper.find('input').simulate('keydown', { preventDefault, keyCode: 40 })

            expect(onChange).not.toHaveBeenCalled()
            expect(preventDefault).toHaveBeenCalled()
        })
        it('Home', () => {
            const preventDefault = jest.fn()
            const onChange = jest.fn()

            const wrapper = mount(<Counter title="foo" min={0} max={100} value="25" step={2} onChange={onChange} />)
            wrapper.find('input').simulate('keydown', { preventDefault, keyCode: 36 })

            expect(onChange).toHaveBeenCalledWith('0')
            expect(preventDefault).toHaveBeenCalled()
        })
        it('End', () => {
            const preventDefault = jest.fn()
            const onChange = jest.fn()

            const wrapper = mount(<Counter title="foo" min={0} max={100} value="25" step={2} onChange={onChange} />)
            wrapper.find('input').simulate('keydown', { preventDefault, keyCode: 35 })

            expect(onChange).toHaveBeenCalledWith('100')
            expect(preventDefault).toHaveBeenCalled()
        })
        it('Page up', () => {
            const preventDefault = jest.fn()
            const onChange = jest.fn()

            const wrapper = mount(<Counter title="foo" min={0} max={100} value="25" step={2} onChange={onChange} />)
            wrapper.find('input').simulate('keydown', { preventDefault, keyCode: 33 })

            expect(onChange).toHaveBeenCalledWith('45')
            expect(preventDefault).toHaveBeenCalled()
        })
        it('Page down', () => {
            const preventDefault = jest.fn()
            const onChange = jest.fn()

            const wrapper = mount(<Counter title="foo" min={0} max={100} value="25" step={2} onChange={onChange} />)
            wrapper.find('input').simulate('keydown', { preventDefault, keyCode: 34 })

            expect(onChange).toHaveBeenCalledWith('5')
            expect(preventDefault).toHaveBeenCalled()
        })
        it('Default', () => {
            const preventDefault = jest.fn()
            const onChange = jest.fn()

            const wrapper = mount(<Counter title="foo" min={0} max={100} value="25" step={2} onChange={onChange} />)
            wrapper.find('input').simulate('keydown', { preventDefault, keyCode: 1 })

            expect(onChange).not.toHaveBeenCalled()
            expect(preventDefault).not.toHaveBeenCalled()
        })
        it('Disabled', () => {
            const preventDefault = jest.fn()
            const onChange = jest.fn()

            const wrapper = mount(<Counter title="foo" min={0} max={100} value="25" step={2} onChange={onChange} disabled />)
            wrapper.find('input').simulate('keydown', { preventDefault, keyCode: 38 })

            expect(onChange).not.toHaveBeenCalled()
            expect(preventDefault).not.toHaveBeenCalled()
        })
    })
})
