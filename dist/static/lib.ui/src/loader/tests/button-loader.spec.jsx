import React from 'react'
import { shallow } from 'enzyme'

import { ButtonLoader } from '../button-loader'

describe('<ButtonLoader />', () => {
    it('is available', () => {
        expect(ButtonLoader).toBeDefined()
    })

    it('renders loading', () => {
        const wrapper = shallow(<ButtonLoader />)
        expect(wrapper.hasClass(ButtonLoader.theme.loaderContainer)).toBeTruthy()
    })
})
