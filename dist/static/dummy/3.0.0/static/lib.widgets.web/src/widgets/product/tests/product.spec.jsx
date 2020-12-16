import React from 'react'
import { shallow } from 'enzyme'
import _ from 'lodash'
import { DefaultWidgetWrapper } from '@sbol/lib.workflow'
import { Icon } from '@sbol/lib.ui'

import { ProductDescription } from '../product-description'
import { SummaryItem } from '../summary-item'
import { SummaryTitle } from '../../../components/summary-title'

import defaultTheme from '../style.css'

describe('<Product />', () => {

    it('ProductDescription is available', () => {
        expect(ProductDescription).toBeDefined()
    })

    it('SummaryItem are available', () => {
        expect(SummaryItem).toBeDefined()
    })

    const defaultProps = {
        "type": "ProductDescription",
        "title": "Карта «Аэрофлот-бонус»",
        "description": "За посещение [любимых мест](https://www.sberbank.ru/ru/person/bank_cards/debet/partners/aeroflot) начисляем двойные бонусы!\n\nЗаказывайте скорее!",
        "properties": {
            "productCode": "AEROFLOT_BONUS",
            "productFeaturesReferenceId": "aeroflotBonusFeatures"
        },
        "fields": [],
        history: [],
        events: [
            {
                name: 'next',
                type: 'next',
                hidden: false,
                title: 'Продолжить',
                description: ''
            },

        ],
        productReferences: {
            "properties": {},
            "items": [
                {
                    "title": "Приветственные мили",
                    "value": "miles",
                    "properties": {
                        "type": "single",
                        "single": "500",
                        "unit": "миль"
                    }
                },
                {
                    "title": "Дополнительные мили",
                    "value": "miles.additional",
                    "properties": {
                        "type": "range",
                        "min": "0.5",
                        "max": "5",
                        "unit": "%",
                        "description": "в зависимости от суммы покупки"
                    }
                },
                {
                    "title": "PayWave",
                    "value": "contactless",
                    "properties": {
                        "type": "presence"
                    }
                },
                {
                    "title": "",
                    "value": "privileges:premium",
                    "properties": {
                        "type": "plain",
                        "title": "5 премиальных дебетовых карт",
                        "description": "Visa Platinum и World MasterCard Black Edition",
                        "icon": "premium"
                    }
                }
            ]
        }
    }
    const { items } = defaultProps.productReferences

    it('Renders wrapper', () => {
        const wrapper = shallow(<ProductDescription {...defaultProps} theme={defaultTheme} />)
        expect(wrapper.find(DefaultWidgetWrapper).length).toBe(1)
    })

    it('Renders title', () => {
        const wrapper = shallow(<ProductDescription {...defaultProps} theme={defaultTheme} />)
        expect(wrapper.find(SummaryTitle).length).toBe(1)
    })

    it('Renders image', () => {
        const patchedProps = {
            ...defaultProps,
            properties: {
                ...defaultProps.properties,
                productImgType: 'src',
                productImgSrc: '/stub/img/aeroflot-classic.png',
            }
        }

        const wrapper = shallow(<ProductDescription  {...patchedProps} theme={defaultTheme} />)

        expect(wrapper.find('.image').length).toBe(1)
        expect(wrapper.find(Icon).length).toBe(0)
    })

    it('Renders icon', () => {
        const patchedProps = {
            ...defaultProps,
            properties: {
                ...defaultProps.properties,
                productImgType: 'code',
                productImgSrc: 'icon:core/resource/card'
            }
        }

        const wrapper = shallow(<ProductDescription {...patchedProps} theme={defaultTheme} />)

        expect(wrapper.find('.image').length).toBe(0)
        expect(wrapper.find(Icon).length).toBe(1)
    })

    it('Renders without divider', () => {
        const wrapper = shallow(<ProductDescription {...defaultProps} theme={defaultTheme} />)
        expect(wrapper.find('.divider').length).toBe(0)
    })

    it('Renders divider', () => {
        const patchedProps = {
            ...defaultProps,
            properties: {
                ...defaultProps.properties,
                divider: true
            }
        }

        const wrapper = shallow(<ProductDescription {...patchedProps} theme={defaultTheme} />)
        expect(wrapper.find('.divider').length).toBe(1)
    })

    it('Renders single reference Item', () => {
        const wrapper = shallow(<SummaryItem item={items[0]} theme={defaultTheme} />)
        expect(wrapper.find('.title').length).toBe(1)
    })

})
