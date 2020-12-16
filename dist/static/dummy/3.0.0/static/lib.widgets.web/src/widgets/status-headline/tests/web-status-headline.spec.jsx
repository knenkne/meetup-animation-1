import React from 'react'
import { shallow } from 'enzyme'
import _ from 'lodash'
import { Icon, Typography } from '@sbol/lib.ui'

import WebStatusHeadline from '../status-headline'

describe('<WebStatusHeadline />', () => {

    it('is available', () => {
        expect(WebStatusHeadline).toBeDefined()
    })

    const doneProps = {
        type: 'WebStatusHeadline',
        title: 'Заявка одобрена',
        "properties": {
            "level": "done",
        },
        fields: []
    }
    const waitingProps = {
        "type": "WebStatusHeadline",
        "title": "Заявка на подтверждении",
        "properties": {
            "level": "waiting",
        },
        fields: []
    }
    const infoProps = {
        "type": "WebStatusHeadline",
        "title": "Заявка отклонена, но это не точно, поэтому напишем заголовок на 2 строки",
        "properties": {
            "level": "info",
        },
        fields: []
    }
    const errorProps = {
        "type": "WebStatusHeadline",
        "title": "Заявка отклонена, но это не точно, поэтому напишем заголовок на 2 строки",
        "properties": {
            "level": "error",
        },
        fields: []
    }



    it('renders component, icon, title', () => {
        const wrapper = shallow(<WebStatusHeadline {...doneProps} />)

        expect(wrapper.find('.status').length).toEqual(1)
        expect(wrapper.find(Icon).length).toEqual(1)
        expect(wrapper.find(Typography.Headline).length).toEqual(1)
    })

    it('renders \'done\' component', () => {
        const wrapper = shallow(<WebStatusHeadline {...doneProps} />)

        expect(wrapper.find('[data-status="done"]').length).toEqual(1)
    })

    it('renders \'waiting\' component', () => {
        const wrapper = shallow(<WebStatusHeadline {...waitingProps} />)

        expect(wrapper.find('[data-status="waiting"]').length).toEqual(1)
    })

    it('renders \'info\' component', () => {
        const wrapper = shallow(<WebStatusHeadline {...infoProps} />)
        
        expect(wrapper.find('[data-status="info"]').length).toEqual(1)
    })

    it('renders \'error\' component', () => {
        const wrapper = shallow(<WebStatusHeadline {...errorProps} />)

        expect(wrapper.find('[data-status="error"]').length).toEqual(1)
    })

})
