module.exports = {
    states: {
        step1: {
            data: {
                screens: [
                    {
                        title: 'В этом примере кнопка и чекбокс скрываются если выбрано получение на e-mail и включен свитч Мой email изменился',
                        widgets: [
                            {
                                type: 'CoreFieldset',
                                fields: [
                                    {
                                        id: 'id:radio',
                                        type: 'select',
                                        value: 'print',
                                        format: 'radio',
                                        referenceId: 'radioRefs'
                                    },
                                ]
                            },
                            {
                                type: 'CoreFieldset',
                                visible: {
                                    id: 'id:radio',
                                    regexp: '^email$'
                                },
                                fields: [
                                    {
                                        id: 'id:switch',
                                        type: 'checkbox',
                                        format: 'switch',
                                        title: 'Мой email изменился'
                                    }
                                ]
                            },
                            {
                                type: 'WebProcessAlert',
                                visible: {
                                    id: 'id:switch',
                                    regexp: '^true$'
                                },
                                properties: {
                                    level: 'info',
                                    messageCode: '',
                                },
                                title: 'Сходите в отделение',
                                description: 'Где карту получали туда и идите'
                            },
                            {
                                type: 'CoreFieldset',
                                strategies: [
                                    {
                                        type: 'customVisibility',
                                        properties: {
                                            radioId: 'id:radio',
                                            switchId: 'id:switch'
                                        }
                                    }
                                ],
                                fields: [
                                    {
                                        id: 'id:checkbox',
                                        type: 'checkbox',
                                        format: 'checkbox',
                                        title: 'Я даю согласие'
                                    }
                                ]
                            },
                            {
                                type: 'CoreButtons',
                                strategies: [{
                                    type: 'customVisibility',
                                    properties: {
                                        radioId: 'id:radio',
                                        switchId: 'id:switch'
                                    }
                                }],
                                events: [
                                    {
                                        cmd: 'EVENT',
                                        name: 'next',
                                        title: 'Продолжить'
                                    },
                                ]
                            }
                        ]
                    }
                ],
                references: {
                    radioRefs: {
                        items: [
                            {
                                value: 'print',
                                title: 'В распечатанном виде'
                            },
                            {
                                value: 'email',
                                title: 'На электронную почту'
                            },
                        ]
                    },
                    emailRefs: {
                        items: [
                            {
                                value: '123@we.ru',
                                title: '123@we.ru'
                            },
                            {
                                value: '456@we.ru',
                                title: '456@we.ru'
                            }
                        ]
                    }
                }
            },
        }
    },
    start: 'step1',
    end: ['step2']
}
