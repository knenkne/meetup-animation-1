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
                                        id: 'text1',
                                        type: 'text',
                                        title: 'text1: Введите более 3 цифр',
                                        validators: [
                                            {
                                                type: 'required',
                                                value: '',
                                                message: 'Нужно заполнить'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'CoreFieldset',
                                fields: [
                                    {
                                        id: 'text2',
                                        type: 'text',
                                        title: 'text2: Введите более 3 цифр',
                                        validators: [
                                            {
                                                type: 'required',
                                                value: '',
                                                message: 'Нужно заполнить'
                                            }
                                        ]
                                    }
                                ],
                                visible: {
                                    id: 'text1',
                                    regexp: '\\d{3}'
                                }
                            },
                            {
                                type: 'CoreFieldset',
                                fields: [
                                    {
                                        id: 'text3',
                                        type: 'text',
                                        title: 'text3: Давайте посмотрим',
                                        validators: [
                                            {
                                                type: 'required',
                                                value: '',
                                                message: 'Нужно заполнить'
                                            }
                                        ]
                                    }
                                ],
                                visible: {
                                    id: 'text2',
                                    regexp: '\\d{3}'
                                }
                            },
                            {
                                type: 'CoreButtons',
                                events: [
                                    {
                                        cmd: 'EVENT',
                                        name: 'next',
                                        title: 'Посмотреть, что отправится'
                                    }
                                ]
                            },
                        ],
                    },
                ]
            }
        },
        step2: {
            data: {
                screens: [
                    {
                        widgets: [
                            {
                                type: 'CoreFieldset',
                                fields: [
                                    {
                                        id: 'text1',
                                        type: 'text',
                                        title: 'text1',
                                        readonly: true
                                    },
                                    {
                                        id: 'text2',
                                        type: 'text',
                                        title: 'text2',
                                        readonly: true
                                    },
                                    {
                                        id: 'text3',
                                        type: 'text',
                                        title: 'text3',
                                        readonly: true
                                    }
                                ]
                            }
                        ],
                    },
                ]
            }
        }
    },
    start: 'step1',
    end: ['step2']
}
