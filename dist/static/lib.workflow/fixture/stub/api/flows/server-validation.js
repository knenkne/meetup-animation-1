const { middlewareUtils: { createValidationMessage } } = require('../../../../middleware')
const validators = require('../validators')

module.exports = {
    states: {
        step1: {
            events: {
                next: {
                    validate: (fields) => {
                        const messages = []

                        if (validators.minLength(5)(fields['required'])) {
                            messages.push(
                                createValidationMessage({
                                    type: 'error',
                                    title: 'Ошибка',
                                    text: 'Не менее 5 символов',
                                    code: 'required'
                                })
                            )
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
