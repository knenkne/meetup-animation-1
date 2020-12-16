import React from 'react'
import { shallow } from 'enzyme'

import { AddressComboboxWithRequest, ErrorHandledAddressCombobox } from '../address-combobox-with-request'

describe('Widget <WebFiasAddress /> -> ... -> <AddressComboboxWithRequest />', () => {
    it('Определен', () => {
        expect(AddressComboboxWithRequest).toBeDefined()
    })

    it('Рендерит обернутый комбобокс', () => {
        const wrapper = shallow(<AddressComboboxWithRequest />)

        expect(wrapper.find(ErrorHandledAddressCombobox).length).toBe(1)
    })

    it('Если есть параметры запроса, то onDataRequest определен', () => {
        const props = {
            requestParams: {
                url: '/api/dictionaries/address',
                kind: 'STREET',
                source: 'ФИАС',
                count: 10,
                parentId: 'some-id'
            }
        }

        const wrapper = shallow(<AddressComboboxWithRequest {...props} />)

        expect(wrapper.find(ErrorHandledAddressCombobox).props().onDataRequest).toBeDefined()
    })

    it('Если нет параметров запроса, то onDataRequest не определен', () => {
        const props = {
            requestParams: {
                kind: 'APARTMENT'
            }
        }

        const wrapper = shallow(<AddressComboboxWithRequest {...props} />)

        expect(wrapper.find(ErrorHandledAddressCombobox).props().onDataRequest).not.toBeDefined()
    })
})
