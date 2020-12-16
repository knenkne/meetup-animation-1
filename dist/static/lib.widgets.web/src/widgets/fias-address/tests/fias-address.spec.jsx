import React from 'react'
import { shallow } from 'enzyme'
import { Field } from '@sbol/lib.app'

import { WebFiasAddress } from '../fias-address'
import { AddressField } from '../address-field'
import { AddressCheckbox } from '../address-checkbox'

describe('Widget <WebFiasAddress />', () => {
    it('Определен', () => {
        expect(WebFiasAddress).toBeDefined()
    })

    const props = {
        properties: {
            suggest: ['only', 'only', 'only', 'only', 'off'],
            suggestMessage: 'Из списка, по-братски',
            url: '/api/dictionaries/address',
            source: 'ФИАС',
            debounce: 200,
            timeout: 2000,
            count: 10
        },
        fields: [
            {
                id: 'widget:region',
                value: '29251dcf-00a1-4e34-98d4-5c47484a36d4',
                type: 'text',
                referenceId: 'region',
                title: 'Регион',
                description: 'Укажите регион',
                tooltip: { title: 'Подсказка', contents: 'Текст подсказки' },
                validators: [
                    {
                        type: 'required',
                        value: '',
                        message: 'Обязательное поле, заполни плез'
                    }
                ]
            },
            {
                id: 'widget:city',
                value: '0c5b2444-70a0-4932-980c-b4dc0d3f02b5',
                type: 'text',
                referenceId: 'city',
                title: 'Населённый пункт',
                description: 'Укажите населенный пункт',
                tooltip: { title: 'Подсказка', contents: 'Текст подсказки' },
                masked: true,
                validators: [
                    {
                        type: 'required',
                        value: '',
                        message: 'Обязательное поле, заполни плез'
                    }
                ]
            },
            {
                id: 'widget:street',
                value: 'f16404bb-14a0-43e5-8df6-abef067c564f',
                type: 'text',
                referenceId: 'street',
                title: 'Улица',
                masked: true,
                description: 'Укажите улицу',
                tooltip: { title: 'Подсказка', contents: 'Текст подсказки' },
                validators: [
                    {
                        type: 'required',
                        value: '',
                        message: 'Обязательное поле, заполни плез'
                    }
                ]
            },
            {
                id: 'widget:checkbox:street',
                value: 'false',
                type: 'checkbox',
                title: 'Нет улицы'
            },
            {
                id: 'widget:house',
                value: '9ecec74c-b9ad-4d0a-aff4-75e80ac5c5ca',
                type: 'text',
                referenceId: 'house',
                title: 'Дом',
                description: 'Укажите дом',
                tooltip: { title: 'Подсказка', contents: 'Текст подсказки' },
                masked: true,
                validators: [
                    {
                        type: 'required',
                        value: '',
                        message: 'Обязательное поле, заполни плез'
                    }
                ]
            },
            {
                id: 'widget:checkbox:house',
                value: 'false',
                type: 'checkbox',
                title: 'Нет дома'
            },
            {
                id: 'widget:apartment',
                value: '000000000001',
                type: 'text',
                title: 'Номер квартиры',
                masked: true,
                description: 'Укажите номер квартиры',
                tooltip: { title: 'Подсказка', contents: 'Текст подсказки' },
                validators: [
                    {
                        type: 'required',
                        value: '',
                        message: 'Обязательное поле, заполни плез'
                    }
                ]
            },
            {
                id: 'widget:checkbox:apartment',
                value: 'false',
                type: 'checkbox',
                title: 'Нет квартиры'
            }
        ],
        formName: 'fiasAddress'
    }

    it('Содержит корректное количество адресных полей и чекбоксов', () => {
        const wrapper = shallow(<WebFiasAddress {...props} />)

        expect(wrapper.find(AddressField).length).toBe(5)
        expect(wrapper.find(Field).length).toBe(3)
        expect(wrapper.find(Field).at(0).props().component).toBe(AddressCheckbox)
        expect(wrapper.find(Field).at(1).props().component).toBe(AddressCheckbox)
        expect(wrapper.find(Field).at(2).props().component).toBe(AddressCheckbox)
    })

    it('Все адресные поля имеют корректный тип', () => {
        const wrapper = shallow(<WebFiasAddress {...props} />)

        expect(wrapper.find(AddressField).at(0).props().requestParams.kind).toBe('REGION')
        expect(wrapper.find(AddressField).at(1).props().requestParams.kind).toBe('CITY')
        expect(wrapper.find(AddressField).at(2).props().requestParams.kind).toBe('STREET')
        expect(wrapper.find(AddressField).at(3).props().requestParams.kind).toBe('HOUSE')
        expect(wrapper.find(AddressField).at(4).props().requestParams.kind).toBe('APARTMENT')
    })

    it('При редактировании региона сбрасываются город, улица, дом и квартира', () => {
        const patchedProps = {
            ...props,
            changeField: jest.fn()
        }

        const wrapper = shallow(<WebFiasAddress {...patchedProps} />)

        wrapper.find(AddressField).at(0).props().onChange(undefined, undefined, undefined, 'widget:region')

        expect(patchedProps.changeField.mock.calls.length).toBe(4)
        expect(patchedProps.changeField.mock.calls[0]).toEqual([props.formName, 'widget:city', ''])
        expect(patchedProps.changeField.mock.calls[1]).toEqual([props.formName, 'widget:street', ''])
        expect(patchedProps.changeField.mock.calls[2]).toEqual([props.formName, 'widget:house', ''])
        expect(patchedProps.changeField.mock.calls[3]).toEqual([props.formName, 'widget:apartment', ''])
    })

    it('При редактировании улицы сбрасываются дом и квартира', () => {
        const patchedProps = {
            ...props,
            changeField: jest.fn()
        }

        const wrapper = shallow(<WebFiasAddress {...patchedProps} />)

        wrapper.find(AddressField).at(2).props().onChange(undefined, undefined, undefined, 'widget:street')

        expect(patchedProps.changeField.mock.calls.length).toBe(2)
        expect(patchedProps.changeField.mock.calls[0]).toEqual([props.formName, 'widget:house', ''])
        expect(patchedProps.changeField.mock.calls[1]).toEqual([props.formName, 'widget:apartment', ''])
    })

    it('При редактировании квартиры ничего не сбрасывается', () => {
        const patchedProps = {
            ...props,
            changeField: jest.fn()
        }

        const wrapper = shallow(<WebFiasAddress {...patchedProps} />)

        wrapper.find(AddressField).at(4).props().onChange(undefined, undefined, undefined, 'widget:apartment')

        expect(patchedProps.changeField.mock.calls.length).toBe(0)
    })

    it('При переключении чекбокса улицы сбрасываются улица, дом и квартира, а другие чекбоксы остаются без изменений', () => {
        const patchedProps = {
            ...props,
            changeField: jest.fn()
        }

        const wrapper = shallow(<WebFiasAddress {...patchedProps} />)

        wrapper.find(Field).at(0).props().onChange(undefined, true, undefined, 'widget:checkbox:street')

        expect(patchedProps.changeField.mock.calls.length).toBe(3)
        expect(patchedProps.changeField.mock.calls[0]).toEqual([props.formName, 'widget:street', ''])
        expect(patchedProps.changeField.mock.calls[1]).toEqual([props.formName, 'widget:house', ''])
        expect(patchedProps.changeField.mock.calls[2]).toEqual([props.formName, 'widget:apartment', ''])
    })

    it('При переключении чекбокса дома сбрасываются дом и квартира, а также активируется чекбокс квартиры', () => {
        const patchedProps = {
            ...props,
            changeField: jest.fn()
        }

        const wrapper = shallow(<WebFiasAddress {...patchedProps} />)

        wrapper.find(Field).at(1).props().onChange(undefined, true, undefined, 'widget:checkbox:house')

        expect(patchedProps.changeField.mock.calls.length).toBe(3)
        expect(patchedProps.changeField.mock.calls[0]).toEqual([props.formName, 'widget:house', ''])
        expect(patchedProps.changeField.mock.calls[1]).toEqual([props.formName, 'widget:apartment', ''])
        expect(patchedProps.changeField.mock.calls[2]).toEqual([props.formName, 'widget:checkbox:apartment', true])
    })

    it('При переключении чекбокса квартиры сбрасывается только квартира', () => {
        const patchedProps = {
            ...props,
            changeField: jest.fn()
        }

        const wrapper = shallow(<WebFiasAddress {...patchedProps} />)

        wrapper.find(Field).at(2).props().onChange(undefined, true, undefined, 'widget:checkbox:apartment')

        expect(patchedProps.changeField.mock.calls.length).toBe(1)
        expect(patchedProps.changeField.mock.calls[0]).toEqual([props.formName, 'widget:apartment', ''])
    })
})
