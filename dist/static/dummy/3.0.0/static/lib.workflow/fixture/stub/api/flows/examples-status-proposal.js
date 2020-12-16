const states = {
    step1: {
        events: {
            next: {
                to: 'END'
            }
        },
        state: 'status',
        data: {
            screens: [
                {
                    header: [
                        {
                            type: 'WebProcessAlert',
                            properties: {
                                level: 'error',
                                messageCode: '',
                                actionsReferenceId: 'actions'

                            },
                            title: 'Сходите в отделение',
                            description: 'Где карту получали туда и идите'
                        },
                        {
                            type: 'WebStatusHeadline',
                            title: 'Уже работаем с вашей заявкой',
                            properties: {
                                level: 'done'
                            }
                        },
                        {
                            type: 'WebComingNext',
                            title: '',
                            fields: [
                                {
                                    id: 'comingnext:0',
                                    type: 'text',
                                    title: 'Карта будет готова через 2 дня',
                                    value: 'Мы пришлем вам СМС с напоминанием на номер: +7 917 ••• 54-74',
                                    // title: 'Мы не можем доставить карту в выбранный офис',
                                    // value: 'Попробуйте оформить карту еще раз, выбрав другой офис банка',
                                    readonly: true
                                }
                            ]
                        },
                    ],
                    widgets: [
                        {
                            type: 'WebSummary',
                            title: 'Получатель платежа',
                            fields: [
                                {
                                    id: 'summary:first:date:primary',
                                    type: 'text',
                                    style: 'date:primary',
                                    value: '2017-11-27',
                                    referenceId: '',
                                    title: 'Primary date',
                                    readonly: true
                                },
                                {
                                    id: 'summary:first:date:masked',
                                    type: 'text',
                                    masked: true,
                                    style: 'date',
                                    value: '••.••.••••',
                                    referenceId: '',
                                    title: 'Masked date',
                                    readonly: true
                                }
                            ]
                        }
                    ],
                },
                {
                    type: 'WebFullscreenBottom',
                    widgets: [
                        {
                            type: 'CoreFieldset',
                            title: 'Пример виджета на весь экран под Background',
                            description: 'Виджеты в скринах с type === WebFullscreenBottom отображаются на весь экран ниже основного содержимого.  У виджета есть отступы слева и справа потому что он не предназначен для отображения на статусном экране',
                            fields: [
                                {
                                    id: 'primitive:text',
                                    type: 'text',
                                    readonly: true,
                                    title: 'Text',
                                    value: 'Стандартный CoreFieldset type - text',
                                    description: 'Описание',
                                },
                            ]
                        }
                    ]
                }
            ],
        }
    },
    step2: {
        events: {
            next: {
                to: 'END'
            }
        },
        state: 'status',
        data: {
            screens: [
                {
                    properties: {
                        coreStatus: true
                    },
                    title: 'Widgets:CoreStatus',
                    widgets: [
                        {
                            type: 'CoreStatus',
                            title: 'Платёж выполнен',
                            description:
                                'На ваш номер +7 924 ••• 89-21 будет отправлено СМС с секретным кодом\n\nСообщите код получателю, чтобы он смог получить деньги',
                            properties: {
                                level: 'success',
                                name: 'МегаФон',
                                category: 'Оплата связи',
                                timestamp: '2017-11-27T20:51:21+03',
                                operationId: '1234567',
                                picture:
                                    'https://stat.online.sberbank.ru/CSAFront-res/27.0/skins/sbrf/images/csa/loginPage/slide1.jpg',
                                actionsReferenceId: 'actions',
                                detailsExpanded: false,
                                mobileFieldsLimit: 1
                            },
                            fields: [
                                {
                                    id: 'sum',
                                    type: 'text',
                                    readonly: true,
                                    title: 'Сумма',
                                    value: '450 ₽'
                                },
                                {
                                    id: 'phoneNumber',
                                    type: 'text',
                                    readonly: true,
                                    title: 'Номер телефона',
                                    value: '+7 925 •••-45-89'
                                }
                            ]
                        },
                        {
                            type: 'WebSummary',
                            title: 'Получатель платежа',
                            properties: {
                                coreStatusGroup: 'description'
                            },
                            fields: [
                                {
                                    id: 'summary:first:date:primary',
                                    type: 'text',
                                    style: 'date:primary',
                                    value: '2017-11-27',
                                    referenceId: '',
                                    title: 'Primary date',
                                    readonly: true
                                },
                                {
                                    id: 'summary:first:date:masked',
                                    type: 'text',
                                    masked: true,
                                    style: 'date',
                                    value: '••.••.••••',
                                    referenceId: '',
                                    title: 'Masked date',
                                    readonly: true
                                }
                            ]
                        },
                        {
                            type: 'WebSummary',
                            title: 'Детали платежа',
                            properties: {
                                coreStatusGroup: 'description'
                            },
                            fields: [
                                {
                                    id: 'summary:first:default',
                                    type: 'text',
                                    value: 'xxxxxxxxxxxxxxxxxx',
                                    description: 'xxxxxxxxxxxxxxxxxxxxxxxx',
                                    referenceId: '',
                                    title: 'xxxxxxxxxxxxxxxxxx',
                                    readonly: true
                                },
                                {
                                    id: 'summary:first:primary',
                                    type: 'text',
                                    style: 'primary',
                                    value: 'Lorem ipsum dolor sit amet',
                                    referenceId: '',
                                    title:
                                        'Input Label 2 Lines Input Label 2 Lines Input Label 2 Lines',
                                    readonly: true
                                }
                            ]
                        },
                        {
                            type: 'NextBestAction',
                            title: 'Коммуналка'
                        }
                    ]
                }
            ],
            events: [
                {
                    name: 'next',
                    type: 'next',
                    hidden: false,
                    title: 'Продолжить',
                    description: ''
                }
            ],
            references: {
                actions: {
                    items: [
                        {
                            title: 'Подробнее',
                            value: 'description'
                        },
                        {
                            title: 'Подробнее об операции',
                            value: 'details',
                            properties: {
                                icon: 'image:core/status/details',
                                description: 'Сохранить и отправить чек'
                            }
                        },
                        {
                            title: 'Сохранить и отправить чек',
                            value: 'print',
                            properties: {
                                icon: 'image:core/status/print',
                                uri:
                                    'https://web.payments.greenfield2.online.sberbank.ru/payments/v1/banking/services/payments/print'
                            }
                        },
                        {
                            title: 'Сохранить в шаблоны',
                            value: 'trigger',
                            properties: {
                                false: 'image:core/status/unfavourited',
                                true: 'image:core/status/favourited',
                                state: 'false',
                                uri:
                                    'https://web.payments.greenfield2.online.sberbank.ru/payments/v1/banking/services/payments/favourite'
                            }
                        },
                        {
                            title: 'Подключить автоплатёж',
                            value: 'link',
                            properties: {
                                icon: 'image:core/status/recurrent',
                                uri:
                                    'https://app.online.sberbank.ru/payments/recurrent?scrDocumentId=1234567'
                            }
                        },
                        {
                            title: 'Аналитика платежа',
                            value: 'link',
                            properties: {
                                icon: 'image:core/pfm/status',
                                uri:
                                    'https://app.online.sberbank.ru/pfm?show=1234567'
                            }
                        }
                    ]
                }
            }
        }
    }
}

const params = {
    states,
    start: 'step1',
    end: 'step2'
}

module.exports = params
