import React from 'react'
import PropTypes from 'prop-types'
import { mount } from 'enzyme'

import { omittere, inputMetaOmitter, metaOmitter, themeKiller } from '../omittere'

describe('themeKiller HOC', () => {
    it('is available', () => {
        expect(omittere).toBeDefined()
        expect(inputMetaOmitter).toBeDefined()
        expect(metaOmitter).toBeDefined()
        expect(themeKiller).toBeDefined()
    })

    it('disable theme prop and throw current name', () => {
        const CustomComponent = ({ theme }) => <div data-theme={theme} />
        CustomComponent.propTypes = { theme: PropTypes.string }
        CustomComponent.defaultProps = { theme: 'props stub' }

        const wrapper = mount(<CustomComponent />)
        expect(wrapper.find('div').props()['data-theme']).toBe('props stub')
        expect(CustomComponent.name).toBe('CustomComponent')

        const ThemeKiller = themeKiller(CustomComponent)
        expect(ThemeKiller.omitArray).toEqual(['theme'])

        const wrapper2 = mount(<ThemeKiller theme="my theme" />)
        expect(wrapper2.find('div').props()['data-theme']).toBe('props stub')
        expect(ThemeKiller.displayName).toBe('CustomComponent')
    })
})
