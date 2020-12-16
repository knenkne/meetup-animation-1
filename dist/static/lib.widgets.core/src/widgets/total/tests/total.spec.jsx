import React from 'react'
import { shallow } from 'enzyme'

import { Total } from '../total'

describe('<CoreTotal />', () => {
    let wrapper

    const defaultProps = {
        title: "Будет списано",
        properties: {
            measureUnit: 'RUB',
            referenceId: 'totalReference',
            localLookupFieldId: 'testField',
            recalcErrorMsg: 'Не удалось рассчитать комиссию, комиссия будет рассчитана позже',
            recalcProgressMsg: 'Идет расчет комиссии...',
            asideTitle: 'Включая комиссию',
            noCommissionAsideTitle: 'Без комиссии'
        },
        fields: [],
        values: {
            testField: 'USD'
        },
        reference: {
            properties: {},
            items: [{
                value: 'RUB',
                title: '1000.00',
                properties: {
                    commissionAmount: '10.00'
                }
            },
                {
                    value: 'USD',
                    title: '200',
                    properties: {
                        commissionAmount: '2'
                    }
                },
                {
                    value: 'EUR',
                    title: '300',
                    properties: {
                        commissionAmount: '3'
                    }
                },
                {
                    value: 'BTC',
                    title: '400',
                    properties: {
                        commissionAmount: '0'
                    }
                }
            ]
        }
    }

    const newtworkProps = {
        title: "Будет списано",
        properties: {
            measureUnit: 'RUB',
            referenceId: 'totalReference',
            remoteLookupFieldIds: [
                'testField',
                'testField2'
            ],
            recalcErrorMsg: 'Не удалось рассчитать комиссию, комиссия будет рассчитана позже',
            recalcProgressMsg: 'Идет расчет комиссии...',
            asideTitle: 'Включая комиссию',
        },
        fields: [],
        values: {
            testField: 'value',
            testField2: 'value'
        },
        reference: {
            properties: {
                url: '/api/dictionaries/total',
                debounce: 200,
            },
            items: []
        }
    }

    it('Локальное использование', () => {
        wrapper = shallow(<Total {...defaultProps} />)

        expect(wrapper.find('[data-node="total:amount"]').text().indexOf('200')).toBeGreaterThan(-1)
        expect(wrapper.find('[data-node="total:commission"]').text().indexOf('2')).toBeGreaterThan(-1)

        //Проверка на вывод "Без комиссии"
        wrapper.setProps({
            values: {
                testField: 'BTC'
            }
        })
        expect(wrapper.find('[data-node="total:amount"]').text().indexOf('400')).toBeGreaterThan(-1)
        expect(wrapper.find('[data-node="total:commission"]').text()).toBe('Без комиссии')

        // Убиваем прослушиваемое поле, доолжны получить первое из списка
        wrapper.setProps({
            values: {}
        })
        expect(wrapper.find('[data-node="total:amount"]').text().indexOf('1 000,00')).toBeGreaterThan(-1)
        expect(wrapper.find('[data-node="total:commission"]').text().indexOf('10,00')).toBeGreaterThan(-1)

        // Убиваем пропсы, ожидаем показ ошибки
        wrapper.setProps({
            values: {
                testField: 'blaValue'
            }
        })
        expect(wrapper.find('[data-node="total:commission"]').text()).toBe('Не удалось рассчитать комиссию, комиссия будет рассчитана позже')
        wrapper.setProps({
            reference: {}
        })
        expect(wrapper.find('[data-node="total:commission"]').text()).toBe('Не удалось рассчитать комиссию, комиссия будет рассчитана позже')
        wrapper.setProps({
            values: {},
            reference: {
                properties: {},
                items: []
            }
        })
        expect(wrapper.find('[data-node="total:commission"]').text()).toBe('Не удалось рассчитать комиссию, комиссия будет рассчитана позже')

        wrapper = shallow(<Total />)
        expect(wrapper.find('[data-node="total:amount"]').text()).toBe('0 <Currency />')
        expect(wrapper.find('[data-node="total:commission"]').text()).toBe('')
    })

    it('Сетевое использование', () => {
        wrapper = shallow(<Total {...newtworkProps} />)

        expect(wrapper.find('[data-node="total:commission"]').text()).toBe('<Loader.Button />Идет расчет комиссии...')

        //Поменялись значение прослушиваемых полей
        wrapper.setProps({
            values: {
                testField: 'newValue',
            },
        })
        expect(wrapper.find('[data-node="total:commission"]').text()).toBe('<Loader.Button />Идет расчет комиссии...')
    })
})
