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
const references = require('./references')

module.exports = {
    states: {
        intro: {
            events: {
                next: {
                    to: 'types'
                }
            },
            data: {
                screens: [
                    {
                        title: 'Стандартный шаг Workflow',
                        description: 'Шаг состоит из экранов, которые в свою очередь состоят из виджетов, разделенных на области header, widgets, footer',
                        widgets: [
                            {
                                type: 'WebProductDescription',
                                title: 'Default WebProductDescription',
                                description: 'Заказывайте скорее!',
                                properties: {
                                    productFeaturesReferenceId: 'aeroflotBonusFeatures'
                                }
                            },
                            summaryWidget,
                            {
                                type: 'CoreFieldset',
                                title: 'CoreFieldset',
                                description: 'Базовый виджет, готовый нас выручить в любую минуту. Он состоит из полей, и призван закрывать собой максимум функционала',
                                fields: [
                                    {
                                        id: 'foo',
                                        type: 'text',
                                        title: 'Текстовое поле'
                                    }
                                ]
                            },
                            {
                                type: 'CoreButtons',
                                events: [nextEvent]
                            },
                            summaryWidget,
                            {
                                type: 'WebUpcomingStep',
                                title: 'Типы полей'
                            }
                        ]
                    },
                ],
                references,
                progress: {
                    range: 3,
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
                        widgets: [
                            fieldsetTypesWidget,
                            {
                                type: 'CoreButtons',
                                events: [nextEvent, rollbackEvent]
                            },
                            {
                                type: 'WebUpcomingStep',
                                title: 'Форматы полей'
                            }
                        ]
                    },
                ],
                references,
                progress: {
                    range: 3,
                    position: 1
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
                        widgets: [
                            fieldsetFormatsWidget,
                            {
                                type: 'CoreButtons',
                                events: [nextEvent, rollbackEvent]
                            },
                            {
                                type: 'WebUpcomingStep',
                                title: 'Валидация'
                            }
                        ]
                    },
                ],
                references,
                progress: {
                    range: 3,
                    position: 2
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
                        widgets: [
                            fieldsetValidatioWidget,
                            {
                                type: 'CoreButtons',
                                events: [nextEvent, rollbackEvent, skipEvent]
                            },
                            {
                                type: 'WebUpcomingStep',
                                title: 'Свои виджеты'
                            }
                        ]
                    },
                ],
                references,
                progress: {
                    range: 3,
                    position: 2
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
                        title: 'Своии виджеты',
                        description: 'Создавайте виджеты, отвечающих API движка WF, и рисуйте формы',
                        widgets: [
                            dummyInputWidget,
                            dummyDashboardWidget,
                            {
                                type: 'CoreButtons',
                                events: [nextEvent, rollbackEvent]
                            },
                            {
                                type: 'WebUpcomingStep',
                                title: 'Поля только для чтения'
                            }
                        ]
                    },
                ],
                references,
                progress: {
                    range: 3,
                    position: 2
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
                        widgets: [
                            fieldsetTypesReadonlyWidget,
                            fieldsetFormatsReadonlyWidget,
                            {
                                type: 'CoreButtons',
                                events: [nextEvent, rollbackEvent]
                            },
                            {
                                type: 'WebUpcomingStep',
                                title: 'Управление видимостью полей'
                            }
                        ]
                    },
                ],
                references,
                progress: {
                    range: 3,
                    position: 2
                }
            }
        },
        visible: {
            events: {
                next: {
                    to: 'status'
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
                            },
                            {
                                type: 'WebUpcomingStep',
                                title: 'Экран статуса'
                            }
                        ]
                    },
                ],
                references,
                progress: {
                    range: 3,
                    position: 2
                }
            }
        },
        status: {
            data: {
                screens: [
                    {
                        widgets: [
                            {
                                type: 'WebStatusHeadline',
                                title: 'Заявка одобрена',
                                properties: {
                                    level: 'waiting'
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
                                type: 'WebProductDescription',
                                title: 'Default WebProductDescription',
                                description: 'Заказывайте скорее!',
                                properties: {
                                    productFeaturesReferenceId: 'aeroflotBonusFeatures'
                                }
                            },
                        ],
                    },
                ],
                references,
                progress: {
                    range: 3,
                    position: 2
                }
            }
        }
    },
    start: 'intro',
    end: ['status']
}
