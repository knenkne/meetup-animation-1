module.exports = {
    states: {
        step1: {
            events: {
                next: {
                    to: 'step2'
                },
                custom: {
                    to: 'step2'
                }
            },
            data: {
                screens: [
                    {
                        widgets: [
                            {
                                type: 'CoreFieldset',
                                description: 'Поле, обязательное для заполнения',
                                fields: [
                                    {
                                        type: 'text',
                                        value: '',
                                        id: 'one',
                                        validators: [
                                            {
                                                type: 'required',
                                                value: '',
                                                message: 'Обязательное поле!!'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'CoreButtons',
                                description: 'Кнопка зеленая потому что есть style: accept',
                                properties: {
                                    style: 'accept',
                                    validation: true
                                },
                                events: [
                                    {
                                        cmd: 'EVENT',
                                        name: 'custom',
                                        title: 'Кастомный ивент с валидацией'
                                    }
                                ]
                            },
                            {
                                type: 'CoreButtons',
                                events: [
                                    {
                                        cmd: 'EVENT',
                                        name: 'custom',
                                        title: 'Отмена'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        step2: {
            data: {
                screens: [
                    {
                        title: 'Приехали',
                    },
                ]
            }
        },
    },
    start: 'step1',
    end: ['step3']
}
