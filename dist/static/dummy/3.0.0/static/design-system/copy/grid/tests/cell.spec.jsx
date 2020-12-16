import React from 'react'
import { shallow } from 'enzyme'

import { Grid } from '..'
import style from '../style.css'

describe('<Grid.Cell />', () => {
    it('is available', () => {
        expect(Grid.Cell).toBeDefined()
    })

    it('renders children', () => {
        const wrapper = shallow(
            <Grid.Cell>
                <span>{'foo bar baz'}</span>
            </Grid.Cell>
        )

        expect(wrapper.contains(<span>{'foo bar baz'}</span>)).toBeTruthy()
    })

    it('applies width of 5', () => {
        const wrapper = shallow(
            <Grid.Cell md={5} />
        )

        expect(wrapper.hasClass(style.colMd5)).toBeTruthy()
    })

    it('applies height of 7', () => {
        const wrapper = shallow(
            <Grid.Cell offsetLg={7} />
        )

        expect(wrapper.hasClass(style.colLgOffset7)).toBeTruthy()
    })

    it('applies width of 0', () => {
        const wrapper = shallow(
            <Grid.Cell lg={25} md={0} sm={0} />
        )

        expect(wrapper.hasClass(style.colLg25)).toBeTruthy()
        expect(wrapper.hasClass(style.colMd0)).toBeTruthy()
        expect(wrapper.hasClass(style.colSm0)).toBeTruthy()
    })
})
