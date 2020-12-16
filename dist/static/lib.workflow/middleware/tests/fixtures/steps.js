const states = {
    step1: {
        events: {
            next: {
                to: 'step2'
            }
        },
        data: {
            screens: [
                {
                    title: 'ФИО',
                    description: 'ФИО',
                    widgets: [
                        {
                            type: 'FullName',

                            fields: [
                                {
                                    id: 'transfer:fullName:lastName',
                                    value: '',
                                    type: 'text',
                                    referenceId: 'text',
                                    title: 'Фамилия',

                                },
                                {
                                    id: 'transfer:fullName:firstName',
                                    value: '',
                                    type: 'text',
                                    referenceId: 'text',
                                    title: 'Имя',

                                },
                                {
                                    id: 'transfer:fullName:middleName',
                                    value: '',
                                    type: 'text',
                                    referenceId: 'text',
                                    title: 'Отчество',

                                },
                                {
                                    id: 'transfer:fullName:noMiddleName',
                                    value: '',
                                    type: 'checkbox',
                                    referenceId: 'text',
                                    title: 'Нет отчества',

                                }
                            ]
                        }
                    ],

                }
            ],
            events: [
                {
                    name: 'next'
                },
                {
                    name: 'skip',
                    type: 'skip'
                }
            ],

        }
    },
    step2: {
        events: {
            skip: {
                to: 'END'
            },
            next: {
                to: 'END'
            }
        },
        data: {
            screens: [
                {
                    title: 'Сумма перевода',
                    description: 'Сумма перевода',
                    widgets: [
                        {
                            type: 'Money',

                            fields: [
                                {
                                    id: 'transfer:fullName:lastName',
                                    value: '',
                                    type: 'text',
                                    readonly: true,
                                    referenceId: 'text',
                                    title: 'Фамилия',

                                },
                                {
                                    id: 'transfer:amount:value',
                                    value: '',
                                    type: 'text',
                                    referenceId: 'currenciesAvailable',
                                    title: 'Сумма перевода',

                                }
                            ]
                        }
                    ],

                }
            ],
            events: [
                {
                    name: 'next'
                },
                {
                    name: 'skip',
                    type: 'skip'
                },
                {
                    name: 'rollback',
                    type: 'rollback'
                }
            ],

        }
    }
}

const params = {
    states,
    start: 'step1',
    endpoint: '/test'
}

module.exports = params
