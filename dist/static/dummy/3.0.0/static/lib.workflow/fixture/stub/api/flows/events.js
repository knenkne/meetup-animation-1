module.exports = {
    states: {
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
                        header: [
                            {
                                type: 'CoreNavBar',
                                title: 'Events',
                                events: [
                                    {
                                        cmd: 'EXIT',
                                        name: 'exit',
                                        title: 'На разводную',
                                        uri: '/lib.workflow'
                                    }
                                ]
                            }
                        ],
                        widgets: [
                            {
                                type: 'CoreButtons',
                                events: [
                                    {
                                        cmd: 'EVENT',
                                        name: 'next',
                                        title: 'Продолжить'
                                    },
                                    {
                                        cmd: 'EVENT',
                                        name: 'skip',
                                        title: 'Пропустить'
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
                },
                rollback: {
                    to: 'step1'
                },
                step1: {
                    to: 'step1'
                }
            },
            data: {
                screens: [
                    {
                        title: 'События второго и далее шага',
                        widgets: [
                            {
                                type: 'CoreButtons',
                                events: [
                                    {
                                        cmd: 'EVENT',
                                        name: 'next',
                                        title: 'Завершить'
                                    },
                                    {
                                        cmd: 'ROLLBACK',
                                        title: 'Назад на один шаг'
                                    },
                                    {
                                        cmd: 'ROLLBACK',
                                        name: 'step1',
                                        title: 'К шагу 1'
                                    },
                                    {
                                        cmd: 'EXIT',
                                        title: 'Выйти из процесса',
                                        uri: '/lib.workflow'
                                    },
                                    {
                                        cmd: 'ABORT',
                                        title: 'Прервать процесс',
                                        uri: '/lib.workflow'
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
