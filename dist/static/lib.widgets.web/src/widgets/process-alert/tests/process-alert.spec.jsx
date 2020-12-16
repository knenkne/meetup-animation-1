import React from 'react'
import { shallow, mount } from 'enzyme'
import { Alert, Link } from '@sbol/lib.ui'

import { ProcessAlert } from '../process-alert'
import { AlertAction } from '../components'

describe('<WebProcessAlert />: ', () => {

    it('import ProcessAlert', () => {
        expect(ProcessAlert).toBeDefined()
    })
    it('import AlertAction', () => {
        expect(AlertAction).toBeDefined()
    })

    const defaultProps = {
        title: 'Упс, у вас что-то произошло',
        description: 'Мы зафиксировали подозрительную активность по вашей карте и заблокировали ее для сохранности ваших средств.',
        properties: {
            level: 'warning',
            messageCode: '',
            actionsReferenceId: "actions"

        },
        fields: [],
        actionsReference: {
            "properties": {},
            "items": [
                {
                    "title": "Действие 1",
                    "value": "details",
                    "properties": {
                        "uri": "http://some/link"
                    }
                },
                {
                    "title": "Действие 2",
                    "value": "link",
                    "properties": {
                        "uri": "/user/personal"
                    }
                }
            ]
        }
    }

    it('Renders WebProcessAlert', () => {
        const wrapper = shallow(<ProcessAlert {...defaultProps} />)

        expect(wrapper.find('.wrapper').length).toBe(1)
        expect(wrapper.find(Alert.Process).length).toBe(1)
        expect(wrapper.find(AlertAction).length).toBe(2)
    })

    it('Href for Link should be specified', () => {
        const actionProps = defaultProps.actionsReference.items[0]
        const wrapper = mount(<AlertAction {...actionProps} />)

        expect(wrapper.find(Link).props().href).toBe(actionProps.properties.uri);
    })
})
