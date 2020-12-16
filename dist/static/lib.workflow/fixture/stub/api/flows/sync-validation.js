const validatorsWidget = {
    type: 'CoreFieldset',
    fields: [
        {
            id: 'required',
            title: 'required',
            type: 'text',
            validators: [
                {
                    type: 'required',
                    value: '',
                    message: 'required'
                }
            ]
        },
        {
            id: 'regexp',
            title: 'regexp',
            type: 'text',
            validators: [
                {
                    type: 'regexp',
                    value: '333',
                    message: '333'
                }
            ]
        },
        {
            id: 'minLength',
            title: 'minLength',
            type: 'text',
            validators: [
                {
                    type: 'minLength',
                    value: '2',
                    message: 'minLength'
                }
            ]
        },
        {
            id: 'maxLength',
            title: 'maxLength',
            type: 'text',
            validators: [
                {
                    type: 'maxLength',
                    value: '3',
                    message: 'maxLength'
                }
            ]
        },
        {
            id: 'minValue',
            title: 'minValue',
            type: 'text',
            validators: [
                {
                    type: 'minValue',
                    value: '99',
                    message: 'minValue'
                }
            ]
        },
        {
            id: 'maxValue',
            title: 'maxValue',
            type: 'text',
            validators: [
                {
                    type: 'maxValue',
                    value: '9999',
                    message: 'maxValue'
                }
            ]
        },
        {
            id: 'combo',
            title: 'combo',
            type: 'text',
            validators: [
                {
                    type: 'required',
                    value: '',
                    message: 'required'
                },
                {
                    type: 'minLength',
                    value: '2',
                    message: 'minLength'
                },
                {
                    type: 'maxLength',
                    value: '3',
                    message: 'maxLength'
                },
                {
                    type: 'minValue',
                    value: '99',
                    message: 'minValue'
                },
                {
                    type: 'maxValue',
                    value: '9999',
                    message: 'maxValue'
                },
                {
                    type: 'regexp',
                    value: '333',
                    message: '333'
                }
            ]
        }
    ]
}

module.exports = {
    states: {
        step1: {
            events: {
                next: {
                    to: 'step2'
                },
                update: {
                    to: 'step2'
                },
                skip: {
                    to: 'step2'
                }
            },
            data: {
                screens: [
                    {
                        widgets: [
                            validatorsWidget,
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
                                    },
                                    {
                                        cmd: 'EVENT',
                                        name: 'update',
                                        title: 'cmd EVENT + name update'
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
                }
            },
            data: {
                screens: [
                    {
                        widgets: [
                            validatorsWidget,
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
