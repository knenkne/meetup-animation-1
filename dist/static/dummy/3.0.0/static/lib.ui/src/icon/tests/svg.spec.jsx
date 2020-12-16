import React from 'react'
import { mount } from 'enzyme'

import { Icon } from '../icon'
import * as products from '../products'
import * as productStatus from '../product-status'
import * as common from '../common'

const repaintIconList = [
    'icon:core/common/time',
    'icon:core/product-status/arrested',
    'icon:core/product-status/cardBlocked',
    'icon:core/product-status/reload',
    'icon:core/product-status/repeat',
    'icon:core/product-status/warning',
    'icon:core/products/broker-investment',
    'icon:core/products/depo',
    'icon:core/products/ghostCredit',
    'icon:core/products/ghostDepo',
    'icon:core/products/insuranceDefault',
    'icon:core/products/loanAuto',
    'icon:core/products/loanConsumer',
    'icon:core/products/loanRefinance',
    'icon:core/products/pensionDefault',
]

describe('Svg', () => {
    Icon.addIcons('icon:core/products', products.default)
    Icon.addIcons('icon:core/product-status', productStatus.default)
    Icon.addIcons('icon:core/common', common)

    repaintIconList.forEach((name) => {
        it(`is repainted ${name}`, () => {
            const wrapper = mount(<Icon name={name} />)
            expect(wrapper.html().indexOf('class="repaint"')).not.toBe(-1)
        })
    })
})
