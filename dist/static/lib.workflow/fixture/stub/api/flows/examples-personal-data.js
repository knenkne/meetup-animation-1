const states = {
    step1: {
        events: {
            next: {
                to: 'step2'
            }
        },
        data: {
            screens: [
                {
                    title: 'Пример переключения виджетов',
                    widgets: [
                        {
                            type: 'WebPersonalDataSummary',
                            title: 'Данные пользователя',
                            description: 'Заполняйте скорее!',
                            visible: {
                                id: 'format:switch',
                                regexp: 'false'
                            },
                            fields: [
                                {
                                    id: 'personal:data:name',
                                    type: 'text',
                                    title: 'Вас зовут',
                                    value: 'Имя Отчество Ф.',
                                    readonly: true
                                },
                                {
                                    id: 'personal:data:passport',
                                    type: 'text',
                                    title: 'Паспортные данные',
                                    value: '1234 ••••90, отдел УФМС России, 19.04.1986, 123-456 ',
                                    readonly: false
                                },
                                {
                                    id: 'personal:data:phone',
                                    type: 'text',
                                    title: 'Мобильный телефон',
                                    value: '+7 901 ••• 11-22'
                                }
                            ]
                        },
                        {
                            type: 'WebProcessAlert',
                            properties: {
                                level: 'warning',
                                messageCode: '',
                                actionsReferenceId: 'actions'

                            },
                            visible: {
                                id: 'format:switch',
                                regexp: 'true'
                            },
                            title: 'Сходите в отделение',
                            description: 'Чтобы обновить данные сходите в отделение'
                        },
                        {
                            type: 'CoreFieldset',
                            fields: [
                                {
                                    id: 'format:switch',
                                    type: 'checkbox',
                                    title: 'Мои данные изменились',
                                    format: 'switch',
                                }
                            ]
                        },
                        {
                            type: 'CoreButtons',
                            visible: {
                                id: 'format:switch',
                                regexp: 'false'
                            },
                            events: [{
                                name: 'next',
                                title: 'Продолжить'
                            }]
                        },
                    ]
                },
            ]
        }
    }
}

module.exports = {
    states,
    start: 'step1',
    end: ['step2']
}
