import { getStages } from '..'


describe('Adapter :: selectors', () => {
    describe('getStages', () => {
        it('возвращает массив шагов степпера', () => {
            const expected = [
                {
                    title: 'Выбор условий кредита',
                    value: 'progress'
                },
                {
                    title: 'Ознакомление и подтверждение',
                    value: ''
                },
                {
                    title: 'Подтверждение условий',
                    value: ''
                }
            ]

            const state = {
                workflow: {
                    screens: [
                        {
                            footer: [
                                {
                                    type: 'WebStages',
                                    properties: {
                                        productFeaturesReferenceId: 'stages'
                                    },
                                }
                            ]
                        }
                    ],
                    references: {
                        stages: {
                            items: [
                                {
                                    title: 'Выбор условий кредита',
                                    value: 'progress'
                                },
                                {
                                    title: 'Ознакомление и подтверждение',
                                    value: ''
                                },
                                {
                                    title: 'Подтверждение условий',
                                    value: ''
                                }
                            ]
                        }
                    }
                }
            }

            const actual = getStages(state)
            expect(actual).toEqual(expected)
        })
    })
})
