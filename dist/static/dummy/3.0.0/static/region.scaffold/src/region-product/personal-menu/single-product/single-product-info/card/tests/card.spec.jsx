import React from 'react'
import { shallow } from 'enzyme'

import { Card } from '../card'
import { ContentRow } from '../../../../partials/content-row'
import { cardsList } from '../../../../../__data__/selectors/products/cards'

import {
    debitCard,
    arrestedCard,
} from './fixture'

describe('Карты без дополнительных параметров', () => {
    it('Плашка с картой рендерит две строчки', () => {
        const info = cardsList(debitCard)
        const wrapper = shallow(
            <Card {...info.content[0]} />
        )
        expect(wrapper.find(ContentRow).length).toBe(2)
    })

    it('При непустом message.text отображается третья строчка', () => {
        const info = cardsList(arrestedCard)
        const wrapper = shallow(
            <Card {...info.content[0]} />
        )
        expect(wrapper.find(ContentRow).length).toBe(3)
    })
})
