import React from 'react'
import { shallow } from 'enzyme'
import { FastActions as UiFastActions } from '@sbol/lib.ui'

import { WebFastAction } from '../fast-action'

describe('Widget <WebFastActions /> -> <WebFastAction />', () => {
    it('Export WebFastAction is correct', () => {
        expect(WebFastAction).toBeDefined()
    })

    const props = {
        item: {
            value: 'reload',
            title: 'Перезагрузить страницу',
            properties: {
                icon: 'icon:core/product-status/reload',
                colorScheme: 'green'
           }
        },
        actions: {},
        widgetProperties: {
            reference: 'fastActions'
        },
        eventsActions: {}
    }

    it('Renders FastAction', () => {
        const wrapper = shallow(<WebFastAction {...props} />)

        expect(wrapper.find(UiFastActions.FastAction).length).toBe(1)
        expect(wrapper.find(UiFastActions.TimerAction).length).toBe(0)
    })

    it('Renders TimerAction', () => {
        const patchedProps = {
            ...props,
            item: {
                ...props.item,
                properties: {
                    ...props.item.properties,
                    type: 'timer'
                }
            }
        }

        const wrapper = shallow(<WebFastAction {...patchedProps} />)

        expect(wrapper.find(UiFastActions.TimerAction).length).toBe(1)
        expect(wrapper.find(UiFastActions.FastAction).length).toBe(0)
    })
})
