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
                    header: [
                        {
                            type: 'CoreNavBar',
                            title: 'Заполнение персональных данных (примечание: первый шаг)'
                        }
                    ],
                    widgets: [
                        {
                            type: 'CoreFieldset',
                            fields: [
                                {
                                    id: 'field1',
                                    title: 'Фамилия, имя, отчество',
                                    value: '',
                                    type: 'text'
                                },
                                {
                                    id: 'field2',
                                    title: 'Возраст',
                                    value: '',
                                    type: 'text'
                                }
                            ]
                        },
                        {
                            type: 'CoreButtons',
                            events: [{
                                cmd: 'event',
                                name: 'next',
                                title: 'Продолжить'
                            }]
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
                    title: 'Заполнение параметров заказа (примечание: второй шаг)',
                    header: [
                        {
                            type: 'CoreNavBar',
                            events: [{
                                cmd: 'ROLLBACK',
                                title: 'Назад'
                            }]
                        }
                    ],
                    widgets: [
                        {
                            type: 'CoreFieldset',
                            fields: [
                                {
                                    id: 'field3',
                                    title: 'Стоимость',
                                    value: '',
                                    type: 'text',
                                    format: 'money',
                                    formatConfig: 'RUB'
                                },
                                {
                                    id: 'field4',
                                    title: 'Размер',
                                    value: '',
                                    type: 'select',
                                    referenceId: 'sizes'
                                }
                            ]
                        }
                    ]
                },
                {
                    title: 'Заполнение адреса доставки (примечание: все еще второй шаг)',
                    widgets: [
                        {
                            type: 'CoreFieldset',
                            fields: [
                                {
                                    id: 'field5',
                                    title: 'Адрес доставки футболки',
                                    value: '',
                                    type: 'text'
                                }
                            ]
                        },
                        {
                            type: 'CoreButtons',
                            events: [{
                                cmd: 'event',
                                name: 'next',
                                title: 'Продолжить'
                            }, {
                                cmd: 'rollback',
                                title: 'Вернуться'
                            }]
                        },
                    ]
                },
            ],
            references: {
                sizes: {
                    items: [
                        {
                            title: 'XS',
                            value: 'XS'
                        },
                        {
                            title: 'S',
                            value: 'S'
                        },
                        {
                            title: 'M',
                            value: 'M'
                        },
                        {
                            title: 'L',
                            value: 'L'
                        },
                        {
                            title: 'XL',
                            value: 'XL'
                        }
                    ]
                }
            }
        }
    },

    step3: {
        events: {
            rollback: {
                to: 'step2'
            },
            step1: {
                to: 'step1'
            }
        },
        data: {
            screens: [
                {
                    title: 'Параметры продукта (примечание: третий и последний шаг)',
                    widgets: [
                        {
                            type: 'CoreFieldset',
                            readonly: true,
                            fields: [
                                {
                                    id: 'field1',
                                    title: 'Ваше имя',
                                    value: '',
                                    type: 'text'
                                },
                                {
                                    id: 'field2',
                                    title: 'Ваш возраст',
                                    value: '',
                                    type: 'text'
                                },
                                {
                                    id: 'field3',
                                    title: 'Стоимость',
                                    value: '',
                                    type: 'text',
                                    format: 'money',
                                    formatConfig: 'RUB'
                                },
                                {
                                    id: 'field4',
                                    title: 'Размер',
                                    value: '',
                                    type: 'select',
                                    referenceId: 'sizes'
                                },
                                {
                                    id: 'field5',
                                    title: 'Адрес доставки',
                                    value: '',
                                    type: 'text'
                                }
                            ]
                        },
                        {
                            type: 'CoreButtons',
                            events: [{
                                cmd: 'EVENT',
                                name: 'step1',
                                title: 'Вернуться на первый шаг'
                            }, {
                                cmd: 'ROLLBACK',
                                name: 'step2',
                                title: 'Вернуться на второй шаг'
                            }]
                        },
                    ]
                },
            ],
            references: {
                sizes: {
                    items: [
                        {
                            title: 'XS',
                            value: 'XS'
                        },
                        {
                            title: 'S',
                            value: 'S'
                        },
                        {
                            title: 'M',
                            value: 'M'
                        },
                        {
                            title: 'L',
                            value: 'L'
                        },
                        {
                            title: 'XL',
                            value: 'XL'
                        }
                    ]
                }
            }
        }
    }
}

module.exports = {
    states,
    start: 'step1'
}
