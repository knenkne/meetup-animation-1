import React from 'react'
import { shallow } from 'enzyme'

import { AddressRow } from '../address-row'

describe('Widget <WebAddress /> -> <AddressRow />', () => {
    it('существует', () => {
        expect(AddressRow).toBeDefined()
    })

    it('рендерит children (и всегда без Tooltip)', () => {
        const wrapper = shallow(<AddressRow title="title" id="id"><span>foo</span></AddressRow>)
        expect(wrapper.contains(<span>foo</span>)).toBe(true)
    })
})
