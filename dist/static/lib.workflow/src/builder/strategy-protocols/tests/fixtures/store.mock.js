export const storeMock = {
    form: {
        strategies: {
            values: {
                cardsOnly: '3',
                amount: void 0
            },
            initial: {
                cardsOnly: '3',
                amount: void 0
            },
            registeredFields: {
                cardsOnly: {
                    name: 'cardsOnly',
                    type: 'Field',
                    count: 1
                },
                amount: {
                    name: 'amount',
                    type: 'Field',
                    count: 1
                }
            }
        }
    },
    workflow: {
        process: {
            pid: '123456789-pid',
            url: '/strategies',
            flow: '/UFS/strategies',
            state: 'step1',
            name: 'strategies',
            mainProcessId: 'lib.workflow'
        },
        status: {
            isInSubflow: false,
            isLoading: false,
            isFailed: false,
            isFinished: false
        },
        document: {
            documentId: '123456789-documentId'
        },
        screens: [
            {
                widgets: [
                    {
                        type: 'CoreResource',
                        title: 'Ваши карты',
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
        ],
        progress: {},
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
        },
        history: [
            {
                id: 'step1',
                flow: '/UFS/strategies',
                state: 'step1',
                title: '',
                value: 'value',
                status: 'ACTIVE'
            }
        ],
        error: {},
        messages: [],
        subFlow: {
            status: '',
            startData: {
                regionName: '',
                url: '',
                pid: ''
            },
            onReturnUrl: ''
        }
    }
}

