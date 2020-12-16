import React from 'react'
import { shallow } from 'enzyme'
import _ from 'lodash'

import { WebSummary } from '../summary'
import { SummaryDescription } from '../components/summary-description'
import { SummaryTitle, EditButton } from '../../../components'

import styles from '../summary.css'

describe('<WebSummary />', () => {

    it('is available', () => {
        expect(WebSummary).toBeDefined()
    })

    function getWrapper (collapsed, eventsActions) {
        const props = {
            type: 'WebSummary',
            title: 'Test WebSummary',
            properties: {
                collapsed: collapsed,
                stepId: 'step1',
                tooltipTitle: 'Подсказонька',
                tooltipContents: "+ [внутренняя ссылка на несуществующую страницу](/foo/bar) \n\n+ [внешняя ссылка](sberbank.ru)",
                event: 'customEvent'
            },
            description: 'My Test WebSummary',
            fields: [
                {
                    id: 'summary:first:default',
                    type: 'text',
                    value: 'Lorem ipsum dolor sit amet',
                    description: 'Lorem ipsum dolor sit amet',
                    referenceId: '',
                    title: 'Input Label 2 Lines Input Label 2 Lines Input Label 2 Lines',
                    readonly: true,
                    validators: []
                },
                {
                    id: 'summary:first:primary',
                    type: 'text',
                    value: 'Lorem ipsum dolor sit amet',
                    description: 'Lorem ipsum dolor sit amet',
                    referenceId: '',
                    title: 'Input Label 2 Lines Input Label 2 Lines Input Label 2 Lines',
                    readonly: true,
                    style: 'primary',
                    validators: []
                },
                {
                    id: 'summary:first:date',
                    type: 'text',
                    style: 'date',
                    value: '2017-11-27T20:51:21+03',
                    referenceId: '',
                    title: 'Summary date',
                    readonly: true,
                    validators: []
                },
                {
                    id: 'summary:first:date:primary',
                    type: 'text',
                    style: 'date:primary',
                    value: '2017-11-27T20:51:21+03',
                    referenceId: '',
                    title: 'Summary date',
                    readonly: true,
                    validators: []
                },
                {
                    id: 'summary:third:card',
                    value: '01503',
                    type: 'text',
                    style: 'resource',
                    referenceId: 'cards',
                    title: 'Источник',
                    readonly: true,
                    validators: []
                },
                {
                    id: 'summary:third:whatever',
                    type: 'text',
                    style: 'total',
                    value: '04242',
                    description: '',
                    referenceId: 'debit',
                    title: 'Будет списано',
                    validators: []
                },
                {
                    id: 'summary:third:who:is:there',
                    type: 'text',
                    style: 'total',
                    value: '04243',
                    referenceId: 'debit',
                    title: 'Будет списано ',
                    validators: []
                },
                {
                    id: 'summary:third:something',
                    type: 'text',
                    style: 'total',
                    value: '04244',
                    description: '',
                    referenceId: 'debit',
                    title: 'Будет списано',
                    validators: []
                },
                {
                    id: 'summary:third:nothing',
                    type: 'text',
                    style: 'total:sm',
                    value: '04245',
                    description: '',
                    referenceId: 'debit',
                    title: 'Будет списано',
                    validators: []
                },
                {
                    id: 'summary:third:something:else',
                    type: 'text',
                    style: 'total',
                    value: '04246',
                    description: '',
                    referenceId: 'debit',
                    title: 'Будет списано',
                    validators: []
                },
                {
                    id: 'summary:third:links:1',
                    type: 'text',
                    style: 'link',
                    value: 'https://google.com',
                    description: 'Внешняя ссылка',
                    title: 'Ссылки',
                    readonly: true,
                    validators: []
                },
                {
                    id: 'summary:third:links:2',
                    type: 'text',
                    style: 'link:pdf',
                    value: '/api/dictionaries/agreement-pdf',
                    description: 'Условия обслуживания.pdf',
                    title: '',
                    readonly: true,
                    validators: []
                },
                {
                    id: 'summary:third:icons:2',
                    type: 'text',
                    style: 'icon:sberbank',
                    value: 'Иван Иванович И.',
                    title: 'ФИО',
                    validators: []
                },
                {
                    id: 'summary:third:icons:1',
                    type: 'text',
                    style: 'icon',
                    value: 'Иван Иванович И.',
                    title: 'ФИО',
                    validators: []
                },
                {
                    id: 'summary:third:chkbox:10',
                    type: 'checkbox',
                    value: 'false',
                    description: '',
                    title: 'Какой-то чекбокс',
                    readonly: true,
                    validators: []
                },
                {
                    id: 'summary:third:chkbox:00',
                    type: 'checkbox',
                    value: 'true',
                    description: '',
                    title: 'Какой-то чекбокс',
                    readonly: true,
                    validators: []
                },
                {
                    id: 'summary:first:datetime',
                    type: 'text',
                    style: 'datetime',
                    value: '2017-11-27T20:51:21+03',
                    referenceId: '',
                    title: 'Summary datetime',
                    readonly: true,
                    validators: []
                }
            ],
            history: [],
            events: [
                {
                    name: 'ABORT',
                    type: 'abort',
                    hidden: false,
                    title: 'Cancel',
                    description: ''
                },
                {
                    name: 'NEXT',
                    type: 'next',
                    hidden: false,
                    title: 'OK',
                    description: ''
                },
                {
                    name: 'BACK',
                    type: 'rollback',
                    hidden: true,
                    title: 'OK',
                    description: ''
                },
            ],
            references: {
                gender: {
                   properties: {},
                   items: [
                       {
                           value: '0',
                           title: 'Мужской'
                       },
                       {
                           value: '1',
                           title: 'Женский'
                       }
                   ]
               },
                cards: {
                    properties: {},
                    items: [
                        {
                            title: 'Master Card',
                            value: '01503',
                            properties: {
                                alias: 'Моя обеденная карта',
                                number: '**** 7482',
                                category: 'card',
                                style: 'card:mastercard',
                            }
                        }
                    ]
                },
                debit: {
                    properties: {},
                    items: [
                        {
                            title: '00,00',
                            value: '04242',
                            properties: { }
                        },
                        {
                            title: '100,01',
                            value: '04243',
                            properties: {
                                comission: 'none',
                            }
                        },
                        {
                            title: '100,00',
                            value: '04244',
                            properties: {
                                currency: 'RUB',
                                comission: 'pending',
                            }
                        },
                        {
                            title: '100,00',
                            value: '04245',
                            properties: {
                                currency: 'USD',
                                comission: 'error',
                            }
                        },
                        {
                            title: '100,00',
                            value: '04246',
                            properties: {
                                currency: 'EUR',
                                comission: 'success',
                                value: '42'
                            }
                        }
                    ]
                }
            }
        }

        return shallow(
            <WebSummary {...props} eventsActions={eventsActions} />
        )
    }

    it('renders expanded title and fields', () => {
        const wrapper = getWrapper(false)

        expect(wrapper.find(SummaryTitle).length).toEqual(1)
        expect(wrapper.find(SummaryTitle).render().hasClass(styles.collapsedHeader)).toEqual(false)

        expect(wrapper.find(SummaryDescription).length).toEqual(1)
        expect(wrapper.find(SummaryDescription).render().hasClass(styles.hidden)).toEqual(false)

        expect(wrapper.find('.fields').length).toEqual(1)
        expect(wrapper.find('.fields').hasClass(styles.collapsedFieldsWrapper)).toEqual(false)

        expect(wrapper.find(EditButton).length).toEqual(1)
    })

    it('collapse title and fields', () => {
        const wrapper = getWrapper(true)

        expect(wrapper.find(SummaryTitle).render().hasClass(styles.collapsed)).toEqual(true)
        expect(wrapper.find(SummaryDescription).length).toEqual(0)
    })

    it('expand title and fields', () => {
        const wrapper = getWrapper(false)

        expect(wrapper.state('collapsed')).toEqual(false)
        expect(wrapper.find(SummaryTitle).render().hasClass(styles.collapsedHeader)).toEqual(false)
        expect(wrapper.find(SummaryDescription).length).toEqual(1)
    })

    it('handle collapse event', () => {
        const wrapper = getWrapper(false)

        wrapper.find(SummaryTitle).simulate('toggleCollapse')

        expect(wrapper.state('collapsed')).toEqual(true)
    })

    it('handle "change" click', () => {
        const eventsActions = {
            rollback: jest.fn()
        }
        const wrapper = getWrapper(false, eventsActions)

        wrapper.find(EditButton).simulate('click')

        expect(eventsActions.rollback).toHaveBeenCalled()
    })

    it('handle "change" click with customEvent', () => {
        const eventsActions = {
            customEvent: jest.fn()
        }
        const wrapper = getWrapper(false, eventsActions)

        wrapper.find(EditButton).simulate('click')

        expect(eventsActions.customEvent).toHaveBeenCalled();
    })

})
