/* eslint-disable no-console */

import _ from 'lodash'

import { getInitialFieldsValuesFromResponse } from '../get-initial-fields-values-from-response'

import * as screens20 from './fixtures/screens20'

describe('Adapter :: selectors', () => {
    describe('getInitialFieldsValuesFromResponse', () => {
        describe('парсит ответ workflow и возвращает объект из пар ключ:значение, где ключ - имя поля FieldType.id, значение - FieldType.value FieldType.values(для multiselect)', () => {

            const docURL = 'https://sbtatlas.sigma.sbrf.ru/wiki/pages/viewpage.action?pageId=124912257'

            it('на единственном экране и одном виджете текщего шага', () => {

                const fields = [
                    {
                        id: 'transfer:fullName:lastName',
                        value: 'Парамонов',
                        type: 'text',
                        referenceId: 'swiftPurposes',
                        title: 'Фамилия',
                        validators: []
                    },
                    {
                        id: 'transfer:fullName:firstName',
                        value: 'Василий',
                        type: 'text',
                        referenceId: 'text',
                        title: 'Имя',
                        validators: []
                    }
                ]

                const expected = {
                    'transfer:fullName:lastName': 'Парамонов',
                    'transfer:fullName:firstName': 'Василий'
                }

                const actual = getInitialFieldsValuesFromResponse.resultFunc(fields)

                expect(actual).toEqual(expected)
            })
            it('на нескольких экранах и всех виджетах текущего шага', () => {

                const fields = [
                    {
                        id: 'transfer:fullName:lastName',
                        value: 'Парамонов',
                        type: 'text',
                        referenceId: 'swiftPurposes',
                        title: 'Фамилия',
                        validators: []
                    },
                    {
                        id: 'transfer:fullName:firstName',
                        value: 'Василий',
                        type: 'text',
                        referenceId: 'text',
                        title: 'Имя',
                        validators: []
                    },
                    {
                        id: 'amount:amount:total',
                        value: '200',
                        type: 'text',
                        referenceId: '',
                        title: 'Всего',
                        validators: []
                    },
                    {
                        id: 'amount:amount:currency',
                        value: 'rub',
                        type: 'text',
                        referenceId: 'text',
                        title: 'Валюта',
                        validators: []
                    },
                    {
                        id: 'confirmation:accept',
                        value: 'false',
                        type: 'checkbox',
                        referenceId: '',
                        title: 'Согласен(-на)',
                        validators: []
                    }
                ]


                const expected = {
                    'transfer:fullName:lastName': 'Парамонов',
                    'transfer:fullName:firstName': 'Василий',
                    'amount:amount:total': '200',
                    'amount:amount:currency': 'rub',
                    'confirmation:accept': false
                }

                const actual = getInitialFieldsValuesFromResponse.resultFunc(fields)

                expect(actual).toEqual(expected)
            })

            it('обрабатывает значения чекбоксов', () => {

                const fields = [
                    {
                        id: 'first:checkbox:novalue',
                        type: 'checkbox',
                        title: 'Checkbox 1',
                        validators: []
                    },
                    {
                        id: 'first:checkbox:true',
                        type: 'checkbox',
                        value: 'true',
                        title: 'Checkbox 2',
                        validators: []
                    },
                    {
                        id: 'first:checkbox:false',
                        type: 'checkbox',
                        value: 'false',
                        title: 'Checkbox 3',
                        validators: []
                    }
                ]

                const expected = {
                    'first:checkbox:novalue': false,
                    'first:checkbox:true': true,
                    'first:checkbox:false': false,
                }

                const actual = getInitialFieldsValuesFromResponse.resultFunc(fields)

                expect(actual).toEqual(expected)
            })

            it('обрабатывает значения полей с типом text', () => {

                const fields = [
                    {
                        id: 'first:text:novalue',
                        type: 'text',
                        title: 'text 1',
                        validators: []
                    },
                    {
                        id: 'first:text:emptyvalue',
                        type: 'text',
                        value: '',
                        title: 'text 1',
                        validators: []
                    },
                    {
                        id: 'first:text:value',
                        type: 'text',
                        value: 'somestring',
                        title: 'text 1',
                        validators: []
                    }
                ]

                const expected = {
                    'first:text:novalue': '',
                    'first:text:emptyvalue': '',
                    'first:text:value': 'somestring'
                }

                const actual = getInitialFieldsValuesFromResponse.resultFunc(fields)

                expect(actual).toEqual(expected)
            })

            it('ошибку, если для поля с типом checkbox передано value со значением, отличным от \'true\' или \'false\'', () => {
                const fields = [
                    {
                        id: 'first:checkbox:emptystring',
                        type: 'checkbox',
                        title: 'Checkbox 1',
                        value: '',
                        validators: []
                    }
                ]

                expect(() => getInitialFieldsValuesFromResponse.resultFunc(fields))
                    .toThrow(new Error(`Значение, переданное шлюзом для поля с типом 'checkbox', может отсутвовать, быть 'true' или 'false'. ${docURL}`))
            })

            it('значение в виде массива строк для поля с типом multiselect', () => {
                const fields = [
                    {
                        id: 'first:second:countries',
                        values: ['Russia', 'Germany', 'Philippines'],
                        type: 'multiselect',
                        referenceId: 'countries',
                        title: '',
                        validators: []
                    },
                    {
                        id: 'confirmation:accept',
                        value: 'false',
                        type: 'checkbox',
                        referenceId: '',
                        title: 'Согласен(-на)',
                        validators: []
                    }
                ]

                const expected = {
                    'confirmation:accept': false,
                    'first:second:countries': ['Russia', 'Germany', 'Philippines']
                }

                const actual = getInitialFieldsValuesFromResponse.resultFunc(fields)

                expect(actual).toEqual(expected)
            })
            it('ошибку, если для поля с типом, отличным от multiselect - пришел массив', () => {
                const fields = [
                    {
                        id: 'first:second:countries',
                        value: ['Russia', 'Germany', 'Philippines'],
                        type: 'select',
                        referenceId: 'countries',
                        title: '',
                        validators: []
                    }
                ]

                expect(() => getInitialFieldsValuesFromResponse.resultFunc(fields))
                    .toThrow(new Error(`Только поле с типом multiselect может содержать values в виде массива. ${docURL}`))
            })
            it('ошибку, если для поля с типом multiselect пришел не массив', () => {
                const fields = [
                    {
                        id: 'first:second:countries',
                        values: 'Russia',
                        type: 'multiselect',
                        referenceId: 'countries',
                        title: '',
                        validators: []
                    }
                ]

                expect(() => getInitialFieldsValuesFromResponse.resultFunc(fields))
                    .toThrow(new Error(`Поле с типом multiselect должно содержать values в виде массива (или пустой массив). ${docURL}`))
            })
            
            it('выдает предупреждение, если передано поле, не соответвующее спецификации', () => {
                console.warn = jest.fn()
                const spy = jest.spyOn(global.console, 'warn')
                getInitialFieldsValuesFromResponse.resultFunc(_.get(screens20.invalidType, '[0].widgets.[0].fields'))
                expect(spy).toHaveBeenCalledWith("\"date\" type", "\"format\" property")
            })
        })
        describe('возвращает пустой объект', () => {
            it('если 0 скринов', () => {
                const expected = {}

                const actual = getInitialFieldsValuesFromResponse.resultFunc(screens20.empty)

                expect(actual).toEqual(expected)
            })
            it('если скрины не опеределены', () => {
                const expected = {}

                const actual = getInitialFieldsValuesFromResponse.resultFunc(screens20.undef)

                expect(actual).toEqual(expected)
            })
        })
    })
})
