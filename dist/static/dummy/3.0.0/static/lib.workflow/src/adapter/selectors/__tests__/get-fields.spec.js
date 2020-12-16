import { getFields } from '../get-fields'

import * as screens20 from './fixtures/screens20'

describe('Adapter :: selectors', () => {
    describe('getFields', () => {
        it('возвращает массив из объектов fields', () => {
            const expected = [
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

            const actual = getFields.resultFunc(screens20.several)

            expect(actual).toEqual(expected)
        })
    })
})
