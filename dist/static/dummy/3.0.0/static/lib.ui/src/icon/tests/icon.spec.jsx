import React from 'react'
import { shallow } from 'enzyme'

import * as common from '../common'
import { Icon } from '../icon'

describe('Icon', () => {
    Icon.addIcons('icon:core/common', common)
    Icon.addIcons('icon:core/resource', () => import('../resource'))

    it('exports', () => {
        expect(Icon).toBeDefined()
        expect(Icon.addIcons).toBeDefined()
        expect(Icon.namespaces).toBeDefined()
        expect(Icon.namespaces['icon:core/common']).toBeDefined()
        expect(Icon.namespaces['icon:core/resource']).toBeDefined()
    })

    it('mode=fallback', () => {
        const wrapper = shallow(<Icon name="icon:core/common/watEver" />)
        expect(wrapper.find('span').length).toBe(0)
    })
})
