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
                                type: 'CoreFieldset',
                                fields: [
                                    {
                                        id: 'text',
                                        type: 'text',
                                        value: '123'
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
                fields: {
                    text: '456'
                }
            }
        },
        step3: {
            events: {
                step1: {
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
                                        name: 'step1',
                                        title: 'Назад на один шаг'
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
