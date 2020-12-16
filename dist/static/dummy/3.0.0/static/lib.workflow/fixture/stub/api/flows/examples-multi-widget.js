const _ = require('lodash')

const nextEvent = {
    name: 'next',
    cmd: 'EVENT',
    title: 'Продолжить',
}

const rollbackEvent = {
    name: 'rollback',
    cmd: 'ROLLBACK',
    title: 'Назад',
}

const skipEvent = {
    name: 'skip',
    cmd: 'EVENT',
    title: 'Пропустить',
}

const validators = [{
    type: 'required',
    value: '',
    message: 'Обязательное поле, заполни плез'
}, {
    type: 'minLength',
    value: '2',
    message: 'Не менее двух букв'
}]

const multiWidgetCreator = (count, fields) =>
    _.flatMap(new Array(count), ($, index) =>
        fields.map((field) => ({
            ...field,
            id: `${field.id}:${index}`
        }))
    )

const fields = multiWidgetCreator(3, [
    {
        id: 'last:name',
        value: '',
        type: 'text',
        title: 'Фамилия',
        readonly: false,
        tooltip: {
            title: 'Подсказка',
            contents: 'Подсказка'
        },
        validators
    },
    {
        id: 'first:name',
        value: '',
        type: 'text',
        title: 'Имя',
        validators
    },
    {
        id: 'middle:name',
        value: '',
        type: 'text',
        title: 'Отчество',
        validators
    },
    {
        id: 'no:middle:name:checkbox',
        value: 'false',
        type: 'checkbox',
        title: 'Нет отчества'
    }
])

module.exports = {
    states: {
        step1: {
            events: {
                next: { to: 'step2' },
                skip: { to: 'step2' }
            },
            data: {
                screens: [
                    {
                        title: 'Multi widget',
                        description: 'Демонстрация конструктора',
                        widgets: [
                            {
                                type: 'WebMultiFullName',
                                title: 'Участники вклада',
                                description: 'Введите имена участников',
                                properties: {
                                    removable: false,
                                    cleanable: false
                                },
                                fields
                            },
                            {
                                type: 'CoreButtons',
                                events: [nextEvent, skipEvent]
                            }
                        ],
                    },
                ]
            }
        },
        step2: {
            events: {
                rollback: {
                    to: 'step1'
                }
            },
            data: {
                screens: [
                    {
                        widgets: [
                            {
                                type: 'CoreFieldset',
                                title: 'Участники вклада (было сохранено на сервере)',
                                readonly: true,
                                fields
                            },
                            {
                                type: 'CoreButtons',
                                events: [rollbackEvent]
                            }
                        ],
                    },
                ]
            }
        }
    },
    start: 'step1'
}
