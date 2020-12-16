import React from 'react'
import { shallow } from 'enzyme'
import { FastActions as UiFastActions } from '@sbol/lib.ui'
import { DefaultWidgetWrapper } from '@sbol/lib.workflow'

import { WebFastActions } from '../fast-actions'
import { WebFastAction } from '../fast-action'

describe('Widget <WebFastActions />', () => {
    it('Export WebFastActions is correct', () => {
        expect(WebFastActions).toBeDefined()
    })

    const props = {
        properties: {
            reference: 'fastActions'
        },
        fields: [],
        references: {
            fastActions: {
                items: [
                 {
                    value: 'reload',
                    title: 'Перезагрузить страницу',
                    properties: {
                        icon: 'icon:core/product-status/reload'
                    }
                 },
                 {
                    value: 'alert',
                    title: 'Сделать алерт',
                    properties: {
                        icon: 'icon:core/products/loan-auto'
                    }
                 },
                 {
                    value: 'link',
                    title: 'Перейти на Госуслуги',
                    properties: {
                        icon: 'icon:core/cars/lamborghini',
                        href: 'http://gosuslugi.ru/',
                        external: true
                    }
                 },
                 {
                    value: 'timer',
                    title: 'ПУСК!',
                    properties: {
                        description: 'Кнопка будет доступна после окончания таймера',
                        icon: 'icon:core/products/target-holidays',
                        type: 'timer',
                        initialTimer: '60',
                        timer: '120'
                    }
                 }
              ]
           }
        },
        events: [],
        eventsActions: {},
        title: '',
        description: '',
        readonly: false,
        history: [],
        screenIndex: 0,
        widgetIndex: 1,
        structurePosition: 'body',
        statusLevel: 'waiting'
     }
     it('Renders DWW', () => {
        const wrapper = shallow(<WebFastActions {...props} />)

        expect(wrapper.find(DefaultWidgetWrapper).length).toBe(1)
    })

    it('Renders UiFastActions', () => {
        const wrapper = shallow(<WebFastActions {...props} />)

        expect(wrapper.find(UiFastActions).length).toBe(1)
    })

    it('Renders multiple FastAction items', () => {
        const wrapper = shallow(<WebFastActions {...props} />)

        expect(wrapper.find(WebFastAction).length).toBe(props.references.fastActions.items.length)
    })
})
