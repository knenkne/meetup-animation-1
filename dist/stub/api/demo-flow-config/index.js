const nextEvent = require('./events/next')
const rollbackEvent = require('./events/rollback')
const skipEvent = require('./events/skip')
const dummyInputWidget = require('./widgets/dummy-input')
const dummyDashboardWidget = require('./widgets/dummy-dashboard')
const summaryWidget = require('./widgets/summary')
const fieldsetTypesWidget = require('./widgets/fieldset-types')
const fieldsetOptional1Widget = require('./widgets/fieldset-optional-1')
const fieldsetOptional2Widget = require('./widgets/fieldset-optional-2')
const fieldsetFormatsWidget = require('./widgets/fieldset-formats')
const fieldsetTypesReadonlyWidget = require('./widgets/fieldset-types-readonly')
const fieldsetFormatsReadonlyWidget = require('./widgets/fieldset-formats-readonly')
const fieldsetValidatioWidget = require('./widgets/fieldset-validation')
const statusWidget = require('./widgets/status')
const coreNavBar = require('./widgets/core-nav-bar')
const references = require('./references')

module.exports = {
    states: {
        intro: {
            events: {
                next: {
                    to: 'types'
                },
                status: {
                    to: 'status'
                }
            },
            data: {
                screens: [
                    {
                        title: 'Стандартный шаг Workflow',
                        description: 'Шаг состоит из экранов, которые в свою очередь состоят из виджетов, разделенных на области header, widgets, footer',
                        header: [
                            coreNavBar,
                            {
                                type: 'WebProductDescription',
                                title: 'Default WebProductDescription',
                                description: 'Заказывайте скорее!',
                                properties: {
                                    productFeaturesReferenceId: 'aeroflotBonusFeatures'
                                }
                            },
                            summaryWidget
                        ],
                        widgets: [
                            {
                                type: 'CoreFieldset',
                                title: 'CoreFieldset',
                                description: 'Базовый виджет, готовый нас выручить в любую минуту. Он состоит из полей, и призван закрывать собой максимум функционала',
                                fields: [
                                    {
                                        id: 'foo',
                                        type: 'text',
                                        title: 'Текстовое поле'
                                    },
                                ]
                            },
                            {
                                type: 'CoreButtons',
                                events: [nextEvent, {
                                    cmd: 'EVENT',
                                    name: 'status',
                                    title: 'Сразу к экрану статуса'
                                }]
                            }
                        ],
                        footer: [
                            summaryWidget,
                            {
                                type: 'WebUpcomingStep',
                                title: 'Типы полей'
                            },
                            {
                                type: 'WebStages',
                                properties: {
                                    productFeaturesReferenceId: 'stages'
                                }
                            }
                        ]
                    },
                ],
                references,
                progress: {
                    range: 7,
                    position: 1
                }
            }
        },
        types: {
            events: {
                next: {
                    to: 'formats'
                },
                rollback: {
                    to: 'intro'
                }
            },
            data: {
                screens: [
                    {
                        title: 'Типы полей',
                        description: 'Форма начинается с простых полей - Fieldset. Он состоит из нескольких типов полей',
                        header: [
                            coreNavBar
                        ],
                        widgets: [
                            fieldsetTypesWidget,
                            {
                                type: 'CoreButtons',
                                events: [nextEvent, rollbackEvent]
                            }
                        ],
                        footer: [{
                            type: 'WebUpcomingStep',
                            title: 'Форматы полей'
                        }]
                    },
                ],
                references,
                progress: {
                    range: 7,
                    position: 2
                }
            }
        },
        formats: {
            events: {
                next: {
                    to: 'validation'
                },
                rollback: {
                    to: 'types'
                }
            },
            data: {
                screens: [
                    {
                        title: 'Форматы полей',
                        description: 'Fieldset может быть расширен форматами существующих типов полей',
                        header: [
                            coreNavBar
                        ],
                        widgets: [
                            fieldsetFormatsWidget,
                            {
                                type: 'CoreButtons',
                                events: [nextEvent, rollbackEvent]
                            }
                        ],
                        footer: [{
                            type: 'WebUpcomingStep',
                            title: 'Валидация'
                        }]
                    },
                ],
                references,
                progress: {
                    range: 7,
                    position: 3
                }
            }
        },
        validation: {
            events: {
                next: {
                    to: 'own'
                },
                rollback: {
                    to: 'formats'
                },
                skip: {
                    to: 'own'
                }
            },
            data: {
                screens: [
                    {
                        title: 'Валидация',
                        description: 'Какая форма может обойтись без валидации?',
                        header: [
                            coreNavBar
                        ],
                        widgets: [
                            fieldsetValidatioWidget,
                            {
                                type: 'CoreButtons',
                                events: [nextEvent, rollbackEvent, skipEvent]
                            }
                        ],
                        footer: [{
                            type: 'WebUpcomingStep',
                            title: 'Свои виджеты'
                        }]
                    },
                ],
                references,
                progress: {
                    range: 7,
                    position: 4
                }
            }
        },
        own: {
            events: {
                next: {
                    to: 'readonly'
                },
                rollback: {
                    to: 'validation'
                }
            },
            data: {
                screens: [
                    {
                        title: 'Свои виджеты',
                        description: 'Создавайте виджеты, отвечающих API движка WF, и рисуйте формы',
                        header: [
                            coreNavBar
                        ],
                        widgets: [
                            dummyInputWidget,
                            dummyDashboardWidget,
                            {
                                type: 'CoreButtons',
                                events: [nextEvent, rollbackEvent]
                            }
                        ],
                        footer: [{
                            type: 'WebUpcomingStep',
                            title: 'Поля только для чтения'
                        }]
                    },
                ],
                references,
                progress: {
                    range: 7,
                    position: 5
                }
            }
        },
        readonly: {
            events: {
                next: {
                    to: 'visible'
                },
                rollback: {
                    to: 'own'
                }
            },
            data: {
                screens: [
                    {
                        title: 'Поля только для чтения',
                        description: 'Fieldset может использоваться и только для вывода данных. Однако лучше для этого использовать, например, WebSummary',
                        header: [
                            coreNavBar
                        ],
                        widgets: [
                            fieldsetTypesReadonlyWidget,
                            fieldsetFormatsReadonlyWidget,
                            {
                                type: 'CoreButtons',
                                events: [nextEvent, rollbackEvent]
                            }
                        ],
                        footer: [{
                            type: 'WebUpcomingStep',
                            title: 'Управление видимостью полей'
                        }]
                    },
                ],
                references,
                progress: {
                    range: 7,
                    position: 6
                }
            }
        },
        visible: {
            events: {
                next: {
                    to: 'banners'
                },
                rollback: {
                    to: 'readonly'
                }
            },
            data: {
                screens: [
                    {
                        title: 'Управление видимостью полей',
                        description: 'Fieldset может использоваться и только для вывода данных',
                        header: [
                            coreNavBar
                        ],
                        widgets: [
                            {
                                type: 'CoreFieldset',
                                title: 'Выбор',
                                description: 'Значение в этом виджете определяет отображение двух последующих виджетов',
                                fields: [
                                    {
                                        id: 'primitive:select',
                                        type: 'select',
                                        title: 'И выбор из списка',
                                        referenceId: 'selectOptions'
                                    }
                                ]
                            },
                            fieldsetOptional1Widget,
                            fieldsetOptional2Widget,
                            {
                                type: 'CoreButtons',
                                events: [nextEvent, rollbackEvent]
                            }
                        ],
                        footer: [{
                            type: 'WebUpcomingStep',
                            title: 'Экран статуса'
                        }]
                    },
                ],
                references,
                progress: {
                    range: 7,
                    position: 7
                }
            }
        },
        banners: {
            events: {
                next: {
                    to: 'status'
                },
                rollback: {
                    to: 'visible'
                },
            },
            data: {
                screens: [
                    {
                        header: [
                            {
                                type: 'WebBanner',
                                properties: {
                                    level: 'success',
                                    actionsReferenceId: 'bannerText',
                                    imageName: 'Cards',
                                    mobileImageName: 'Cards'
                                },
                                title: 'Баннер в секции header',
                                description: 'Ориентир на потенциальную доходность на 10% годовых выше ставки.'
                            }
                        ],
                        widgets: [
                            {
                                type: 'WebBanner',
                                properties: {
                                    level: 'info',
                                    actionsReferenceId: 'bannerLink',
                                    imageName: 'Female-Macaroons-01',
                                    mobileImageName: 'Female-Macaroons-02'
                                },
                                title: 'Баннер в начале widgets',
                                description: 'Кредитная нагрузка не будет превышена. Высокая вероятность одобрения'
                            },
                            {
                                type: 'CoreFieldset',
                                fields: [
                                    {
                                        id: 'format:integer',
                                        type: 'text',
                                        title: 'Филд1',
                                        format: 'integer',
                                    },
                                    {
                                        id: 'format:integer2',
                                        type: 'text',
                                        title: 'Филд2',
                                        format: 'integer',
                                    }
                                ]
                            },
                            {
                                type: 'WebBanner',
                                properties: {
                                    level: 'warning',
                                    actionsReferenceId: 'bannerAction',
                                    imageName: 'Female-Checklist-01',
                                    mobileImageName: 'Female-Checklist-02'
                                },
                                title: 'Баннер в центре widgets',
                                description: 'Для завершения оформления кредита необходимо посетить офис банка и предоставить паспорт'
                            },
                            {
                                type: 'CoreFieldset',
                                fields: [
                                    {
                                        id: 'format:integer:3',
                                        type: 'text',
                                        title: 'Филд3',
                                        format: 'integer',
                                    },
                                    {
                                        id: 'format:integer:4',
                                        type: 'text',
                                        title: 'Филд4',
                                        format: 'integer',
                                    }
                                ]
                            },
                            {
                                type: 'CoreButtons',
                                events: [nextEvent, rollbackEvent]
                            },
                            {
                                type: 'WebBanner',
                                properties: {
                                    level: 'error',
                                    actionsReferenceId: 'bannerLink2',
                                    imageName: 'Male-Watering-Can-01',
                                    mobileImageName: 'Male-Watering-Can-03'
                                },
                                title: 'Баннер в конце widgets',
                                description: 'Пока вы заполняете анкету, мы вырастим за вас дерево и построим дом. Но с сыном придётся разбираться самим.'
                            }
                        ]
                    }
                ],
                references
            }
        },




        status: {
            data: {
                screens: [
                    {
                        header: [
                            {
                                type: 'CoreNavBar',
                                events: [
                                    {
                                        cmd: 'EXIT',
                                        name: 'back',
                                        uri: '/dummy',
                                        title: 'Назад на главную'
                                    }
                                ]
                            },
                            {
                                type: 'WebStatusHeadline',
                                title: 'Заявка одобрена',
                                properties: {
                                    level: 'done'
                                }
                            },
                            {
                                type: 'WebComingNext',
                                title: 'Что делать дальше?',
                                fields: [
                                    {
                                        id: 'comingnext:0',
                                        type: 'text',
                                        title: 'Мы пришлём вам уведомление о результатах обработки',
                                        value: 'Также, вы можете отслеживать статус заявки в разделе «История»',
                                        readonly: true
                                    },
                                    {
                                        id: 'comingnext:1',
                                        type: 'text',
                                        value: 'Документы по операции отправлены на __kolosov.p.o@mail.ru__',
                                        readonly: true
                                    }
                                ]
                            },
                            {
                                type: 'WebFastActions',
                                properties: {
                                    reference: 'fastActions'
                                }
                            },
                            {
                                type: 'WebProductDescription',
                                title: 'Default WebProductDescription',
                                description: 'Заказывайте скорее!',
                                properties: {
                                    productFeaturesReferenceId: 'aeroflotBonusFeatures'
                                }
                            },
                            {
                                type: 'WebFastActions',
                                properties: {
                                    reference: 'fastActions2'
                                }
                            },
                        ],
                        footer: [
                            {
                                type: 'WebFastActions',
                                properties: {
                                    reference: 'fastActions3'
                                }
                            },
                        ]
                    },
                ],
                references
            }
        }
    },
    start: 'intro',
    end: ['status']
}
