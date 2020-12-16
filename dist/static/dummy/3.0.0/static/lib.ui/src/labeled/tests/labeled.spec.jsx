import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import { Labeled } from '..'

describe('Labeled', () => {
    it('is available', () => {
        expect(Labeled).toBeDefined()
    })

    it('renders children', () => {
        const wrapper = shallow(
            <Labeled>
                <span>{'foo bar baz'}</span>
            </Labeled>
        )

        expect(wrapper.contains(<span>{'foo bar baz'}</span>)).toBeTruthy()
    })

    it('renders title with headline class', () => {
        const tree = renderer
            .create(
                <Labeled title="Hello">
                    <span>{'foo bar baz'}</span>
                </Labeled>
            )
            .toJSON()

        expect(tree).toMatchSnapshot()
    })

    it('renders tooltip with headline class', () => {
        const tree = renderer
            .create(
                <Labeled tooltip={{ contents: 'Подсказка' }}>
                    <span>{'foo bar baz'}</span>
                </Labeled>
            )
            .toJSON()

        expect(tree).toMatchSnapshot()
    })

    it('renders description without headline class', () => {
        const tree = renderer
            .create(
                <Labeled description="Hello">
                    <span>{'foo bar baz'}</span>
                </Labeled>
            )
            .toJSON()

        expect(tree).toMatchSnapshot()
    })


})
