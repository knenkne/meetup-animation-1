import React from 'react'
import { Button } from '@sbol/lib.ui'

import { EventButton } from '../event-button'

describe('<EventButton />', () => {

    const props = {
        event: {
            cmd: 'EVENT',
            name: 'next',
            title: 'Продолжить'
        },
        eventsActions: {
            event: () => {},
            rollback: () => {},
            exit: () => {},
            abort: () => {}
        },
        isLoading: false,
    }

    it('should render button with base theme for event===next', () => {
        const wrapper = mount(<EventButton {...props} />)
        const buttonWrapper = wrapper.find(Button)
        expect(buttonWrapper.prop('colorScheme')).toBe('base')

    })

    it('should render button with base theme for custom event and style==="accept"', () => {
        const properties = {
            style: 'accept'
        }
        const event = {
            cmd: 'EVENT',
            name: 'custom',
            title: 'Продолжить'
        }

        const acceptProps = {
            ...props,
            properties,
            event
        }
        const wrapper = mount(<EventButton {...acceptProps} />)
        const buttonWrapper = wrapper.find(Button)
        expect(buttonWrapper.prop('colorScheme')).toBe('base')
    })

    it('should render button with link theme for event!==next', () => {
        const event = {
            cmd: 'EVENT',
            name: 'custom',
            title: 'Продолжить'
        }
        const innerProps = {
            ...props,
            event
        }

        const wrapper = mount(<EventButton {...innerProps} />)
        const buttonWrapper = wrapper.find(Button)
        expect(buttonWrapper.prop('colorScheme')).toBe('link')
    })

    it('should render button with link theme for event===next and style===accepttransparent', () => {
        const properties = {
            style: 'accepttransparent'
        }
        const innerProps = {
            ...props,
            properties
        }
        const wrapper = mount(<EventButton {...innerProps} />)
        const buttonWrapper = wrapper.find(Button)
        expect(buttonWrapper.prop('colorScheme')).toBe('link')
    })
})
