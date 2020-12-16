module.exports = {
    states: {
        step1: {
            data: {
                screens: [
                    {
                        title: 'Заголовок скрин 1',
                        header: [
                            {
                                type: 'CoreFieldset',
                                title: 'Заголовок виджета'
                            },
                        ],
                        footer: [
                            {
                                type: 'CoreFieldset',
                                title: 'Заголовок виджета'
                            },
                        ],
                        widgets: [
                            {
                                type: 'CoreFieldset',
                                title: 'Заголовок виджета',
                                fields: [
                                    {
                                        id: 'field1',
                                        title: 'Заголовок поля 1',
                                        type: 'text'
                                    }
                                ]
                            },
                        ],
                    },
                    {
                        title: 'Заголовок скрин 2',
                        description: 'Описание скрин 2',
                        header: [
                            {
                                type: 'CoreFieldset',
                                title: 'Заголовок виджета'
                            },
                        ],
                        footer: [
                            {
                                type: 'CoreFieldset',
                                title: 'Заголовок виджета'
                            },
                        ],
                        widgets: [
                            {
                                type: 'CoreFieldset',
                                title: 'Заголовок виджета',
                                description: 'Описание виджета',
                                fields: [
                                    {
                                        id: 'field2',
                                        title: 'Заголовок поля 2',
                                        type: 'text'
                                    }
                                ]
                            },
                        ],
                    },
                    {
                        widgets: [
                            {
                                type: 'CoreButtons',
                                events: [
                                    {
                                        cmd: 'EVENT',
                                        name: 'next'
                                    }
                                ]
                            },
                        ],
                    },
                ]
            }
        }
    },
    start: 'step1',
    end: ['step2']
}
