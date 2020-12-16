/* Конфиг процесса, у кторого между 2 и 3 шагом есть переход в подпроцесс (в данном случае подтверждение) */

const states = {
    step1: {
        events: {
            next: {
                to: 'step2'
            },
            skip: {
                to: 'step2'
            }
        },
        data: {
            screens: [
                {
                    title: 'Первый шаг процесса',
                    widgets: [
                        {
                            type: 'CoreFieldset',
                            fields: [
                                {
                                    id: 'step1:field1:id',
                                    value: '',
                                    type: 'text'
                                }
                            ]
                        }
                    ]
                }
            ],
            events: [
                {
                    name: 'next',
                },
                {
                    name: 'skip',
                    type: 'skip'
                }
            ]
        }
    },
    step2: {
        events: {
            next: {
                to: 'step3',
                subFlow: true,
                url: '/confirmation',
                result: 'EXTERNAL_ENTER'
            },
            'on-return': {
                to: 'step3'
            }
        },
        data: {
            screens: [
                {
                    title: 'Второй шаг процесса',
                    widgets: [
                        {
                            type: 'CoreFieldset',
                            title: 'Headline',
                            fields: [
                                {
                                    id: 'step2:field1:id',
                                    value: '',
                                    type: 'text'
                                }
                            ]
                        }
                    ]
                }
            ],
            events: [
                {
                    name: 'rollback',
                    type: 'rollback'
                },
                {
                    name: 'next'
                }
            ]
        }
    },
    step3: {
        events: {
            next: {
                to: 'END'
            }
        },
        data: {
            screens: [
                {
                    title: 'Третий шаг процесса',
                    widgets: [
                        {
                            type: 'CoreFieldset',
                            fields: [
                                {
                                    id: 'flow:id:three',
                                    value: '',
                                    type: 'text',
                                    title: 'Филд3'
                                }
                            ]
                        }
                    ]
                }
            ],
            events: [
                {
                    name: 'step2',
                    type: 'rollback'
                }
            ]
        }
    }
}

const params = {
    states,
    start: 'step1',
    endPoint: '/main'
}

module.exports = params
