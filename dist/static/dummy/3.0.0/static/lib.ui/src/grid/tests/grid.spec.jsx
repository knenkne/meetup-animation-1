import React from 'react'
import { shallow } from 'enzyme'

import { Grid } from '..'

describe('<Grid />', () => {
    it('is available', () => {
        expect(Grid).toBeDefined()
    })

    it('renders children', () => {
        const wrapper = shallow(
            <Grid>
                <span>{'foo bar baz'}</span>
            </Grid>
        )

        expect(wrapper.contains(<span>{'foo bar baz'}</span>)).toBeTruthy()
    })
})
