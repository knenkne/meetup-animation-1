import React from 'react'
import { mount } from 'enzyme'

import { Anchor } from '..'

describe('<Anchor />', () => {
    it('is available', () => {
        expect(Anchor).toBeDefined()
    })

    // it('changes tab', () => {
    //     const onChange = jest.fn()
    //
    //     const wrapper = mount(<Anchor initialValue="1" onChange={onChange}>
    //         <Anchor.Link title="1">{'foo'}</Anchor.Link>
    //         <Anchor.Link title="2" disabled>{'bar'}</Anchor.Link>
    //         <Anchor.Link title="3">{'baz'}</Anchor.Link>
    //     </Anchor>)
    //
    //     wrapper.find(Anchor.Link).at(2).find('button').first()
    //         .simulate('click')
    //
    //     expect(wrapper.find(Anchor.Link).at(2).props().forceOpened).toBeTruthy()
    //     expect(wrapper.find('[role="tabpanel"]').at(0).text()).toBe('baz')
    //     expect(onChange).toHaveBeenCalledWith('3')
    //     expect(onChange.calls.count()).toBe(1)
    // })

    it('doesn\'t change on click on current tab', () => {
        const onChange = jest.fn()

        const wrapper = mount(<Anchor initialValue="1" onChange={onChange}>
            <Anchor.Link title="1">{'foo'}</Anchor.Link>
            <Anchor.Link title="2" disabled>{'bar'}</Anchor.Link>
            <Anchor.Link title="3">{'baz'}</Anchor.Link>
        </Anchor>)

        wrapper.find(Anchor.Link).at(0).find('button').first()
            .simulate('click')
        expect(wrapper.find(Anchor.Link).at(0).props().forceOpened).toBeTruthy()
        // expect(wrapper.find('section').at(0).text()).toBe('foo')
        expect(onChange.mock.calls.length).toBe(0)
    })

    it('throws color to tab', () => {
        const wrapper = mount(<Anchor defaultValue="1" colorScheme="black">
            <Anchor.Link title="1">{'foo'}</Anchor.Link>
            <Anchor.Link title="2" mode="success">{'bar'}</Anchor.Link>
        </Anchor>)

        expect(wrapper.find(Anchor.Link).at(0).prop('colorScheme')).toBe('black')
        expect(wrapper.find(Anchor.Link).at(1).prop('colorScheme')).toBe('black')


        const wrapper2 = mount(<Anchor defaultValue="1" colorScheme="gold">
            <Anchor.Link title="1">{'foo'}</Anchor.Link>
            <Anchor.Link title="2" mode="success">{'bar'}</Anchor.Link>
        </Anchor>)

        expect(wrapper2.find(Anchor.Link).at(0).prop('colorScheme')).toBe('gold')
        expect(wrapper2.find(Anchor.Link).at(1).prop('colorScheme')).toBe('gold')
    })
})
