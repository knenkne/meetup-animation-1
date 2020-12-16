export const single = [
    {
        title: 'ФИО',
        description: 'ФИО',
        widgets: [
            {
                type: 'FullName',
                properties: {},
                fields: [
                    {
                        id: 'transfer:fullName:lastName',
                        value: 'Парамонов',
                        type: 'text',
                        referenceId: 'swiftPurposes',
                        title: 'Фамилия',
                        validators: []
                    },
                    {
                        id: 'transfer:fullName:firstName',
                        value: 'Василий',
                        type: 'text',
                        referenceId: 'text',
                        title: 'Имя',
                        validators: []
                    }
                ]
            }
        ],
        properties: {}
    }
]

export const singleWithReadonlyWidget = [
    {
        title: 'ФИО',
        description: 'ФИО',
        widgets: [
            {
                type: 'FullName',
                properties: {},
                readonly: true,
                fields: [
                    {
                        id: 'transfer:fullName:lastName',
                        value: 'Парамонов',
                        type: 'text',
                        referenceId: 'swiftPurposes',
                        title: 'Фамилия',
                        validators: []
                    },
                    {
                        id: 'transfer:fullName:firstName',
                        value: 'Василий',
                        type: 'text',
                        referenceId: 'text',
                        title: 'Имя',
                        validators: []
                    }
                ]
            }
        ],
        properties: {}
    }
]

export const invalidType = [
    {
        title: 'Screen',
        widgets: [
            {
                type: 'CoreFieldset',
                properties: {},
                fields: [
                    {
                        id: 'transfer:date:date',
                        value: 'Парамонов',
                        type: 'date',
                        referenceId: 'swiftPurposes',
                        title: 'Фамилия',
                        validators: []
                    }
                ]
            }
        ],
        properties: {}
    }
]


export const several = [
    {
        title: 'ФИО',
        description: 'ФИО',
        widgets: [
            {
                type: 'FullName',
                properties: {},
                fields: [
                    {
                        id: 'transfer:fullName:lastName',
                        value: 'Парамонов',
                        type: 'text',
                        referenceId: 'swiftPurposes',
                        title: 'Фамилия',
                        validators: []
                    },
                    {
                        id: 'transfer:fullName:firstName',
                        value: 'Василий',
                        type: 'text',
                        referenceId: 'text',
                        title: 'Имя',
                        validators: []
                    }
                ]
            }
        ],
        properties: {}
    },
    {
        title: 'Сумма',
        description: 'Сумма',
        widgets: [
            {
                type: 'Amount',
                properties: {},
                fields: [
                    {
                        id: 'amount:amount:total',
                        value: '200',
                        type: 'text',
                        referenceId: '',
                        title: 'Всего',
                        validators: []
                    },
                    {
                        id: 'amount:amount:currency',
                        value: 'rub',
                        type: 'text',
                        referenceId: 'text',
                        title: 'Валюта',
                        validators: []
                    }
                ]
            }
        ],
        properties: {}
    },
    {
        title: 'Согласие',
        description: 'Согласие',
        widgets: [
            {
                type: 'Confirmation',
                properties: {},
                fields: [
                    {
                        id: 'confirmation:accept',
                        value: 'false',
                        type: 'checkbox',
                        referenceId: '',
                        title: 'Согласен(-на)',
                        validators: []
                    }
                ]
            }
        ],
        properties: {}
    }
]




export const empty = []
export const undef = void 0

export const mixedWithReadonly = [
    {
        title: 'ФИО',
        description: 'ФИО',
        widgets: [
            {
                type: 'FullName',
                properties: {},
                fields: [
                    {
                        id: 'transfer:fullName:lastName',
                        value: 'Парамонов',
                        type: 'text',
                        readonly: true,
                        referenceId: 'swiftPurposes',
                        title: 'Фамилия',
                        validators: []
                    },
                    {
                        id: 'transfer:fullName:firstName',
                        value: 'Василий',
                        type: 'text',
                        referenceId: 'text',
                        title: 'Имя',
                        validators: []
                    }
                ]
            }
        ],
        properties: {}
    },
    {
        title: 'Сумма',
        description: 'Сумма',
        widgets: [
            {
                type: 'Amount',
                properties: {},
                fields: [
                    {
                        id: 'amount:amount:total',
                        value: '200',
                        type: 'text',
                        referenceId: '',
                        title: 'Всего',
                        validators: []
                    },
                    {
                        id: 'amount:amount:currency',
                        value: 'rub',
                        type: 'text',
                        readonly: true,
                        referenceId: 'text',
                        title: 'Валюта',
                        validators: []
                    }
                ]
            }
        ],
        properties: {}
    },
    {
        title: 'Согласие',
        description: 'Согласие',
        widgets: [
            {
                type: 'Confirmation',
                properties: {},
                fields: [
                    {
                        id: 'confirmation:accept',
                        value: 'false',
                        type: 'bool',
                        readonly: false,
                        referenceId: '',
                        title: 'Согласен(-на)',
                        validators: []
                    }
                ]
            }
        ],
        properties: {}
    }
]

export const singlePlain = [
    {
        title: 'Скрин',
        description: 'Описание скрина',
        widgets: [
            {
                type: 'FullName',
                properties: {},
                fields: [
                    {
                        id: 'transfer:fullName:lastName',
                        value: 'Парамонов',
                        type: 'text',
                        referenceId: 'swiftPurposes',
                        title: 'Фамилия',
                        validators: []
                    },
                    {
                        id: 'transfer:fullName:firstName',
                        value: 'Василий',
                        type: 'text',
                        referenceId: 'text',
                        title: 'Имя',
                        validators: []
                    }
                ]
            }
        ],
        properties: {}
    }
]

export const singlePlainWithProduct = [
    {
        title: 'Скрин',
        description: 'Описание скрина',
        widgets: [
            {
                type: 'FullName',
                properties: {},
                fields: [
                    {
                        id: 'transfer:fullName:lastName',
                        value: 'Парамонов',
                        type: 'text',
                        referenceId: 'swiftPurposes',
                        title: 'Фамилия',
                        validators: []
                    },
                    {
                        id: 'transfer:fullName:firstName',
                        value: 'Василий',
                        type: 'text',
                        referenceId: 'text',
                        title: 'Имя',
                        validators: []
                    }
                ]
            },
            {
                type: 'WebProductDescription',
                properties: {},
                fields: []
            }
        ],
        properties: {}
    }
]

export const multiScreensPlainWithProduct = [
    {
        title: 'Скрин 1',
        description: 'Описание скрина 1',
        widgets: [
            {
                type: 'FullName',
                properties: {},
                fields: [
                    {
                        id: 'transfer:fullName:lastName',
                        value: 'Парамонов',
                        type: 'text',
                        referenceId: 'swiftPurposes',
                        title: 'Фамилия',
                        validators: []
                    },
                    {
                        id: 'transfer:fullName:firstName',
                        value: 'Василий',
                        type: 'text',
                        referenceId: 'text',
                        title: 'Имя',
                        validators: []
                    }
                ]
            },
            {
                type: 'WebProductDescription',
                properties: {
                    productCode: 'abc'
                },
                fields: []
            },
            {
                type: 'CustomProduct',
                properties: {},
                fields: []
            },
            {
                type: 'WebUpcomingStep',
                properties: {
                    abc: 2
                },
                fields: []
            }
        ],
        properties: {}
    },
    {
        title: 'Скрин 2',
        description: 'Описание скрина 2',
        widgets: [
            {
                type: 'text',
                properties: {},
                fields: []
            }
        ],
        properties: {}
    }
]

export const multiScreensPlainWithoutProduct = [
    {
        title: 'Скрин 1',
        description: 'Описание скрина 1',
        widgets: [
            {
                type: 'FullName',
                properties: {},
                fields: [
                    {
                        id: 'transfer:fullName:lastName',
                        value: 'Парамонов',
                        type: 'text',
                        referenceId: 'swiftPurposes',
                        title: 'Фамилия',
                        validators: []
                    },
                    {
                        id: 'transfer:fullName:firstName',
                        value: 'Василий',
                        type: 'text',
                        referenceId: 'text',
                        title: 'Имя',
                        validators: []
                    }
                ]
            }
        ],
        properties: {}
    },
    {
        title: 'Скрин 2',
        description: 'Описание скрина 2',
        widgets: [
            {
                type: 'text',
                properties: {},
                fields: []
            }
        ],
        properties: {}
    }
]

export const multiScreensWithWebUpcomingStep = [
    {
        title: 'Скрин 1',
        description: 'Описание скрина 1',
        widgets: [
            {
                type: 'FullName',
                properties: {},
                fields: [
                    {
                        id: 'transfer:fullName:lastName',
                        value: 'Парамонов',
                        type: 'text',
                        referenceId: 'swiftPurposes',
                        title: 'Фамилия',
                        validators: []
                    },
                    {
                        id: 'transfer:fullName:firstName',
                        value: 'Василий',
                        type: 'text',
                        referenceId: 'text',
                        title: 'Имя',
                        validators: []
                    }
                ]
            }
        ],
        footer: [
            {
                type: 'WebUpcomingStep',
                properties: {
                    abc: 4
                },
                fields: []
            }
        ],
        properties: {}
    },
    {
        title: 'Скрин 2',
        description: 'Описание скрина 2',
        footer: [
            {
                type: 'WebUpcomingStep',
                properties: {
                    abc: 2
                },
                fields: []
            }
        ],
        properties: {}
    }
]

export const multiScreensWithDocumentOverview = [
    {
        title: 'Скрин 1',
        description: 'Описание скрина 1',
        widgets: [
            {
                type: 'FullName',
                properties: {},
                fields: [
                    {
                        id: 'transfer:fullName:lastName',
                        value: 'Парамонов',
                        type: 'text',
                        referenceId: 'swiftPurposes',
                        title: 'Фамилия',
                        validators: []
                    },
                    {
                        id: 'transfer:fullName:firstName',
                        value: 'Василий',
                        type: 'text',
                        referenceId: 'text',
                        title: 'Имя',
                        validators: []
                    }
                ]
            }
        ],
        properties: {}
    },
    {
        title: 'Скрин 2',
        description: 'Описание скрина 2',
        widgets: [
            {
                type: 'text',
                properties: {},
                fields: []
            }
        ],
        properties: {
            documentOverview: true,
            collapsed: true
        }
    }
]

export const screenWithCoreStatusGroupWidgets = [
    {
        properties: {
            coreStatus: true
        },
        header: [{
            type: 'WebUpcomingStep',
            properties: {
                header: true
            },
            fields: []
        }, {
            type: 'WebUpcomingStep',
            properties: {
                coreStatusGroup: 'description'
            },
            fields: []
        }],
        widgets: [{
            type: 'CoreStatus',
            title: 'Text',
            properties: {
                level: 'waiting',
                timestamp: '2018-01-01T20:51:21+03',
            },
            fields: []
        }, {
            type: 'WebSummary',
            title: 'Получатель',
            properties: {
                coreStatusGroup: 'description'
            },
            fields: []
        }, {
            type: 'WebSummary',
            title: 'Детали перевода',
            properties: {
                coreStatusGroup: 'description'
            },
            fields: []
        }, {
            type: 'WebEvents',
            title: 'Детали перевода',
            fields: []
        }],
        footer: [{
            type: 'WebUpcomingStep',
            properties: {
                footer: true
            },
            fields: []
        }, {
            type: 'WebUpcomingStep',
            properties: {
                coreStatusGroup: 'description'
            },
            fields: []
        }]
    }
]
