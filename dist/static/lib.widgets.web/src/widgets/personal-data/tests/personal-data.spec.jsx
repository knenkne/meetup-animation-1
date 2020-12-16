import React from 'react'
import { shallow } from 'enzyme'
import { Selection } from '@sbol/lib.ui'
import { DefaultWidgetWrapper } from '@sbol/lib.workflow'

import { WebPersonalDataSummary } from '../personal-data'
import { WebProcessAlert } from '../../process-alert'

describe('<WebPersonalDataSummary />', () => {

    it('is available', () => {
        expect(WebPersonalDataSummary).toBeDefined()
    })
    
    const props ={
        type: 'WebPersonalDataSummary',
        title: 'Проверьте данные о себе',
        properties: {
            collapsed: false,
            tooltipTitle: 'Мои данные изменились',
            tooltipContents: "+ [внутренняя ссылка на ошибку](#f--error)\n\n+ [внутренняя ссылка на несуществующую страницу](/foo/bar) \n\n+ [внешняя ссылка](http://google.ru) \n\n+ [другая внешняя ссылка](sberbank.ru)"
        },
        description: 'My Personal Data Summary',
        fields: [
            {
                id: 'personal:data:name',
                type: 'text',
                title: 'Вас зовут',
                value: 'Имя Отчество Ф.',
                description: '123-456',
                readonly: true,
                validators: []
            },
            {
                id: 'personal:data:passport',
                type: 'text',
                title: 'Паспортные данные',
                value: '1234 ••••90, отдел УФМС России, 19.04.1986, 123-456 ',
                description: '',
                readonly: true,
                validators: []
            },
            {
                id: 'personal:data:phone',
                type: 'text',
                title: 'Мобильный телефон',
                value: '+7 901 ••• 11-22',
                description: '',
                readonly: true,
                validators: []
            }
        ],
        events: [
            {
                name: 'next',
                type: 'next',
                hidden: false,
                title: 'Продолжить',
                description: ''
            }
        ]
    }

    it('renders no change header', () => {
        const wrapper = shallow(<WebPersonalDataSummary {...props} />)

        expect(wrapper.find(DefaultWidgetWrapper).length).toEqual(1)
        expect(wrapper.find(DefaultWidgetWrapper).props().title).toBe(props.title)
        expect(wrapper.find(DefaultWidgetWrapper).props().description).toBe(props.description)
    })

    it('renders summary', () => {
        const wrapper = shallow(<WebPersonalDataSummary {...props} />)

        expect(wrapper.state('alert')).toEqual(false)

        expect(wrapper.find('.fields').length).toEqual(1)
        expect(wrapper.find(WebProcessAlert).length).toEqual(0)
    })

    it('renders alert', () => {
        const wrapper = shallow(<WebPersonalDataSummary {...props} />)

        wrapper.find(Selection.Checkbox).simulate('change')
        
        expect(wrapper.state('alert')).toEqual(true)

        expect(wrapper.find('.fields').length).toEqual(0)
        expect(wrapper.find(WebProcessAlert).length).toEqual(1)
    })

})
