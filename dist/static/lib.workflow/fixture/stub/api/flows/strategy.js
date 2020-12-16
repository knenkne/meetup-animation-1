module.exports = {
    states: {
        step1: {
            data: {
                screens: [
                    {
                        widgets: [
                            {
                                type: 'CoreResource',
                                title: 'Ваши карты',
                                description: 'Выберите карту',
                                fields: [
                                    {
                                        id: 'insurance:tripDetails:cardsOnly',
                                        value: '3',
                                        type: 'select',
                                        referenceId: 'cardsOnly',
                                        title: 'Карта списания',
                                    }
                                ]
                            },
                            {
                                type: 'CoreFieldset',
                                strategies: [
                                    {
                                        fieldLookupId: 'insurance:tripDetails:cardsOnly',
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
                                        format: 'money',
                                        validators: [
                                            {
                                                type: 'required',
                                                value: '',
                                                message: 'Обязательное поле!!'
                                            }
                                        ]
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
                            },
                        ]
                    }
                ],
                references: {
                    cardsOnly: {
                        items: [
                            {
                                title: 'МИР',
                                value: '1',
                                properties: {
                                    number: '**** 7483',
                                    category: 'card',
                                    style: 'card:mir',
                                    amount: '1.85',
                                    measureUnit: 'RUB'
                                }
                            },
                            {
                                title: 'МИР',
                                value: '2',
                                properties: {
                                    number: '**** 7484',
                                    category: 'card',
                                    style: 'card:mir',
                                    amount: '120.85',
                                    measureUnit: 'RUB'
                                }
                            },
                            {
                                title: 'МИР',
                                value: '3',
                                properties: {
                                    number: '**** 7485',
                                    category: 'card',
                                    style: 'card:mir',
                                    amount: '100 500',
                                    measureUnit: 'RUB'
                                }
                            }

                        ]
                    }
                }
            }
        }
    },
    start: 'step1',
    end: ['step2']
}
