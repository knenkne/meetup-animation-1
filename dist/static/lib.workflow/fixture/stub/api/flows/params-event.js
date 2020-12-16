module.exports = {
    states: {
        step1: {
            events: {
                next: {
                    to: 'step2'
                }
            },
            data: {
                screens: [
                    {
                        widgets: [
                            {
                                type: 'WebParamsEvent',
                                properties: {
                                    product: '1',
                                },
                                events: [
                                    {
                                        cmd: 'EVENT',
                                        name: 'next',
                                        title: 'Продолжить 1'
                                    }
                                ]
                            },
                            {
                                type: 'WebParamsEvent',
                                properties: {
                                    product: '2',
                                    additional: 'foo'
                                },
                                events: [
                                    {
                                        cmd: 'EVENT',
                                        name: 'next',
                                        title: 'Продолжить 2'
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
                rollback: {
                    to: 'step1'
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
                                        cmd: 'ROLLBACK',
                                        title: 'Назад'
                                    }
                                ]
                            },
                        ]
                    },
                ]
            }
        }
    },
    start: 'step1'
}
