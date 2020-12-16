const { middlewareUtils: { createValidationMessage } } = require('../../../../middleware')

const messageMap = {
    error: {
        type: 'error',
        title: 'Ошибка',
        text: 'Глобальная ошибка'
    },
    warning: {
        type: 'warning',
        title: 'Предупреждение',
        text: 'Можем обработать отдельно'
    },
    info: {
        type: 'info',
        title: 'Информация',
        text: 'Можем обработать отдельно'
    },
    validation: {
        type: 'validation',
        title: 'Ошибка',
        text: 'Глобальная ошибка',
        code: 'message1'
    },
    custom: {
        type: 'custom',
        title: 'Кастом',
        text: 'Можем обработать отдельно'
    },
    fraud1: {
        type: 'fraud',
        code: 'deny',
        title: 'В доступе отказано'
    },
    fraud2: {
        type: 'fraud',
        code: 'review',
        title: 'Рассмотрение подозрительной активности',
        text: 'Не двигайтесь. За вами выехали.'
    },
    fraud3: {
        type: 'fraud',
        code: 'logout',
        title: 'Попробуйте аутентифицироваться повторно'
    },
    'confirmation:retry': {
        type: 'error',
        code: 'confirmation:retry',
        title: 'Повторить ввести код подтверждения'
    }
}

module.exports = {
    states: {
        step1: {
            events: {
                next: {
                    validate: ({ message1, message2, message3 }) => {
                        const messages = []

                        if (message1 !== 'none') {
                            messages.push(createValidationMessage(messageMap[message1]))
                        }
                        if (message2 !== 'none') {
                            messages.push(createValidationMessage(messageMap[message2]))
                        }
                        if (message3 !== 'none') {
                            messages.push(createValidationMessage(messageMap[message3]))
                        }
                        return messages
                    },
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
                                        id: 'message1',
                                        title: 'Выбор типа мессаджа',
                                        type: 'select',
                                        referenceId: 'messages',
                                        value: 'none'
                                    },
                                    {
                                        id: 'message2',
                                        title: 'Выбор типа мессаджа',
                                        type: 'select',
                                        referenceId: 'messages',
                                        value: 'none'
                                    },
                                    {
                                        id: 'message3',
                                        title: 'Выбор типа мессаджа',
                                        type: 'select',
                                        referenceId: 'messages',
                                        value: 'none'
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
                    messages: {
                        items: [
                            {
                                value: 'none',
                                title: 'none'
                            },
                            {
                                value: 'error',
                                title: 'error'
                            },
                            {
                                value: 'warning',
                                title: 'warning'
                            },
                            {
                                value: 'info',
                                title: 'info'
                            },
                            {
                                value: 'validation',
                                title: 'validation'
                            },
                            {
                                value: 'confirmation:retry',
                                title: 'confirmation error'
                            },
                            {
                                value: 'custom',
                                title: 'custom'
                            },
                            {
                                value: 'fraud1',
                                title: 'fraud deny'
                            },
                            {
                                value: 'fraud2',
                                title: 'fraud review'
                            },
                            {
                                value: 'fraud3',
                                title: 'fraud logout'
                            }
                        ]
                    }
                }
            }
        },
        step2: {
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
    end: ['step2']
}
