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
                                        id: 'select',
                                        type: 'select',
                                        referenceId: 'select',
                                        value: '1'
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
                ],
                references: {
                    select: {
                        items: [
                            {
                                value: '1',
                                title: '1'
                            },
                            {
                                value: '2',
                                title: '2'
                            },
                            {
                                value: '3',
                                title: '3'
                            }
                        ]
                    }
                }
            }
        },
        step2: {
            data: {
                references: {
                    select: {
                        items: [
                            {
                                value: '1',
                                title: '1'
                            },
                            {
                                value: '2',
                                title: '2'
                            },
                            {
                                value: '3',
                                title: '3'
                            },
                            {
                                value: '4',
                                title: '4'
                            },
                            {
                                value: '5',
                                title: '5'
                            },
                            {
                                value: '6',
                                title: '6'
                            }
                        ]
                    }
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
                ],
                fields: {
                    text: '456'
                }
            }
        }
    },
    start: 'step1'
}
