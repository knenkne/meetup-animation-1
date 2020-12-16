const CORRECT_CONFIRMATION_CODE = '12345'

const states = {
    confirmation: {
        events: {
            'confirmation-next': {
                validate: (fields) => {
                    const messages = []
                    if (fields['confirmation:password'] !== CORRECT_CONFIRMATION_CODE) {
                        messages.push({
                            type: 'error',
                            title: `Введен неверный код подтверждения (подсказка: введи ${CORRECT_CONFIRMATION_CODE})`,
                            code: 'confirmation:password'
                        })
                    }
                    return messages
                },
                to: 'step3',
                result: 'EXTERNAL_EXIT'
            },
            next: {
                to: 'EXTERNAL_RETURN',
                subFlow: true,
                result: 'EXTERNAL_RETURN',
                url: '/api/main'
            }
        },
        data: {
            screens: [
                {
                    /* Заголовок может быть, например, "Подтверждение платежа" */
                    title: 'Тестирование виджета Confirmation',
                    /* Массив виджетов родительского процесса конкатенированный с виджетом подтверждения */
                    widgets: [
                        {
                            title: 'Подтверждение',
                            type: 'Confirmation',
                            properties: {
                                /* Способ подтверждения - смс-пароль */
                                method: 'sms',
                                /* Пароль действителен 5 минут */
                                passwordTimeout: 300,
                                /* Пароль можно перезапросить раньше срока, через 2 минуты */
                                retryTimeout: 5,
                                /* Заголовок описания второго фактора */
                                factorsTitle: 'Пароль отправлен на номера',
                                /* Описание второго фактора */
                                factorsDescription: '+7 (916) ••• 77 74, +7 (926) ••• 12 35, +7 (903) ••• 86 92, +7 (909) ••• 12 37, +7 (926) ••• 52 58, +7 (903) ••• 91 96, +7 (909) ••• 48 38'
                                // factorsDescription: '+7 (916) ••• 77-74, +7 (926) ••• 12-35'
                            },
                            fields: [
                                {
                                    id: 'confirmation:method',
                                    title: 'Способ подтверждения',
                                    type: 'select',
                                    value: 'sms',
                                    referenceId: 'confirmationMethods'
                                },
                                {
                                    id: 'confirmation:password',
                                    title: 'Введите SMS-пароль',
                                    type: 'text',
                                    value: '',
                                    validators: [
                                        {
                                            type: 'minLength',
                                            value: '5',
                                            message: 'Пароль состоит из 5 символов'
                                        },
                                        {
                                            type: 'maxLength',
                                            value: '5',
                                            message: 'Пароль состоит из 5 символов'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ],
            events: [
                /* Отправить пароль на проверку */
                {
                    name: 'next',
                    type: 'confirmation-next',
                    title: 'Подтвердить',
                    hidden: true
                },
                /* Вернуться в родительский процесс */
                {
                    name: 'rollback',
                    type: 'rollback',
                    title: 'Отмена',
                    hidden: true
                },
                /* Изменить тип второго фактора (например, с смс на пуш) */
                {
                    name: 'confirmation-switch',
                    title: 'Получить пароль',
                    hidden: true
                },
                /* Запросить новый пароль после истечения времени */
                {
                    name: 'confirmation-retry',
                    title: 'Получить новый пароль',
                    hidden: true
                }
            ],
            references: {
                /* Справочник доступных способов подтверждения */
                confirmationMethods: {
                    items: [
                        {
                            title: 'SMS-пароль',
                            value: 'sms'
                        },
                        {
                            title: 'PUSH-пароль',
                            value: 'push'
                        }
                    ]
                }
            },
            /* Прогресс передаётся родительским процессом */
            progress: {
                range: 6,
                position: 1
            }
        }
    }
}

const params = {
    states,
    start: 'confirmation',
    endPoint: '/confirmation'
}

module.exports = params
