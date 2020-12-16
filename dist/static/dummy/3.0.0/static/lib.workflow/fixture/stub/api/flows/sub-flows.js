const sub = {
    states: {
        sub1: {
            events: {
                next: {
                    to: 'sub2'
                },
            },
            data: {
                screens: [
                    {
                        widgets: [
                            {
                                type: 'CoreButtons',
                                events: [
                                    {
                                        cmd: 'EVENT',
                                        name: 'next',
                                        title: 'Мы в sub-flow. Перейти дальше по нему'
                                    }
                                ]
                            },
                        ]
                    },
                ]
            }
        },
        sub2: {
            events: {
                next: {
                    to: 'step2',
                    subFlow: true,
                    result: 'EXTERNAL_RETURN',
                    url: '/sub-flows'
                }
            },
            data: {
                screens: [
                    {
                        widgets: [
                            {
                                type: 'CoreButtons',
                                events: [
                                    {
                                        cmd: 'EVENT',
                                        name: 'next',
                                        title: 'Выйти из sub-flow'
                                    }
                                ]
                            },
                        ]
                    },
                ]
            }
        }
    },
    start: 'sub1'
}

module.exports = {
    sub,
    states: {
        step1: {
            events: {
                next: {
                    to: 'step2',
                    subFlow: true,
                    result: 'EXTERNAL_ENTER',
                    url: '/sub-flows-sub'
                },
                'on-return': {
                    to: 'step2'
                }
            },
            data: {
                screens: [
                    {
                        widgets: [
                            {
                                type: 'CoreButtons',
                                events: [
                                    {
                                        cmd: 'EVENT',
                                        name: 'next',
                                        title: 'Перейти в sub-flow (пока умеем только вперед)'
                                    }
                                ]
                            },
                        ]
                    },
                ]
            }
        },
        step2: {
            events: {
                next: {
                    to: 'step3'
                }
            },
            data: {
                screens: [
                    {
                        widgets: [
                            {
                                type: 'CoreButtons',
                                events: [
                                    {
                                        cmd: 'EVENT',
                                        name: 'next',
                                        title: 'Завершить'
                                    }
                                ]
                            },
                        ]
                    },
                ]
            }
        },
        step3: {
            data: {
                screens: [
                    {
                        widgets: [
                            {
                                type: 'CoreFieldset',
                                title: 'Конец пути, вызван END.'
                            }
                        ]
                    },
                ]
            }
        }
    },
    start: 'step1',
    end: ['step3']
}
