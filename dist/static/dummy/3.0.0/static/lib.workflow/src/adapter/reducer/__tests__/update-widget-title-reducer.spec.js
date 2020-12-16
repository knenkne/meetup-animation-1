import { storeMock } from '../../../builder/strategy-protocols/tests/fixtures/store.mock'
import { updateWidgetTitleReducer } from '../slice-reducers/screens-reducer'

describe('Reducers: updateWidgetTitleReducer', () => {
    test('should correct update title in widget', () => {
        const { screens } = storeMock.workflow
        const updatedScreen = updateWidgetTitleReducer(screens, 'cardsOnly', 'newTitle')
        const expected = [
            {
                widgets: [
                    {
                        type: 'CoreResource',
                        title: 'newTitle',
                        description: 'Выберите карту',
                        fields: [
                            {
                                id: 'cardsOnly',
                                value: '3',
                                type: 'select',
                                referenceId: 'cardsOnly',
                                title: 'Карта списания'
                            }
                        ]
                    },
                    {
                        type: 'CoreFieldset',
                        strategies: [
                            {
                                fieldLookupId: 'cardsOnly',
                                type: 'resourceMoney',
                                properties: {
                                    errorProperty: 'Маловато денежек на карте'
                                }
                            }
                        ],
                        fields: [
                            {
                                id: 'amount',
                                title: 'Сколько не жалко?',
                                type: 'text',
                                format: 'money'
                            }
                        ]
                    },
                    {
                        type: 'CoreButtons',
                        events: [
                            {
                                cmd: 'EVENT',
                                name: 'next',
                                title: 'Продолжить'
                            }
                        ]
                    }
                ]
            }
        ]
        expect(updatedScreen).toEqual(expected)
    })
})
