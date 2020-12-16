const subFlow = {

}

const mainFlow = {
    states: {
        step1: {
            events: {
                next: {
                    to: 'step2',
                    subFlow: true,
                    result: 'EXTERNAL_ENTER',
                    url: '/region-sub-flows-sub'
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
                                        cmd: 'event',
                                        name: 'next',
                                        title: 'Перейти в регион'
                                    },
                                ]
                            }
                        ]
                    }
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

module.exports = {
    ...mainFlow
}
