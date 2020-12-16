export default [
    {
        path: '/custom-start-event',
        title: 'Старт процесса с кастомного ивента - неуспешное восстановление сессии, неудачный старт',
        props: {
            name: 'custom-start-event',
            url: '/custom-start-event',
            startEvent: 'restore',
            startWithParameters: ({ documentId, pid }) => ({ documentId, pid })
        }
    },
    {
        path: '/custom-start-event?documentId=documentId&pid=123',
        title: 'Старт процесса с кастомного ивента - неуспешное восстановление сессии и рестарт',
        props: {
            name: 'custom-start-event',
            url: '/custom-start-event',
            startEvent: 'restore',
            startWithParameters: ({ documentId, pid }) => ({ documentId, pid })
        }
    },
    {
        path: '/custom-start-event?documentId=documentId&pid=123&success=true',
        title: 'Старт процесса с кастомного ивента и успешное восстановление сессии',
        props: {
            name: 'custom-start-event',
            url: '/custom-start-event1',
            startEvent: 'restore',
            startWithParameters: ({ documentId }) => ({ documentId })
        }
    },
    {
        path: '/events',
        title: 'events - базовая state машина (с startWithParameters для documentId и customId)',
        props: {
            name: 'events',
            url: '/events',
            startWithParameters: ({ documentId, customId }) => ({ documentId, customId })
        }
    },
    {
        path: '/events?pid=1234&documentid=4321',
        title: 'events - базовая state машина (с startWithParameters для documentId и customId) c ?customId=customId',
        props: {
            name: 'events',
            url: '/events',
            startWithParameters: ({ documentId, customId, pid }) => ({ documentId, customId, pid })
        }
    },
    {
        path: '/params-event',
        title: 'params-event - параметризованное событие',
        props: {
            name: 'params-event',
            url: '/params-event'
        }
    },
    {
        path: '/core-buttons',
        title: 'Пример стилизации CoreButtons',
        props: {
            name: 'core-buttons',
            url: '/core-buttons',
        }
    },
    {
        path: '/types',
        title: 'types - базовые типы CoreFieldset',
        props: {
            name: 'types',
            url: '/types'
        }
    },
    {
        path: '/formats',
        title: 'formats - базовые форматы CoreFieldset',
        props: {
            name: 'formats',
            url: '/formats'
        }
    },
    {
        path: '/visible',
        title: 'visible - опциональная отображаемость виджетов',
        props: {
            name: 'visible',
            url: '/visible'
        }
    },
    {
        path: '/screen',
        title: 'screen - структура скрина',
        props: {
            name: 'screen',
            url: '/screen'
        }
    },
    {
        path: '/sub-flows',
        title: 'sub-flows - переход в sub-flow по событию',
        props: {
            name: 'sub-flows',
            url: '/sub-flows'
        }
    },
    {
        path: '/region-sub-flows',
        title: 'REGION_SUB_FLOWS - переход в sub-flow по событию, sub-flow отрисовывается в отдельном регионе',
        props: {
            name: 'region-sub-flows',
            url: '/region-sub-flows'
        }
    },
    {
        path: '/sync-validation',
        title: 'sync-validation - синхронная валидация',
        props: {
            name: 'sync-validation',
            url: '/sync-validation'
        }
    },
    {
        path: '/server-validation',
        title: 'server-validation - серверная валидация',
        props: {
            name: 'server-validation',
            url: '/server-validation'
        }
    },
    {
        path: '/messages',
        title: 'messages - виды обработок сообщений от сервера',
        props: {
            name: 'messages',
            url: '/messages'
        }
    },
    {
        path: '/only-fields',
        title: 'only-fields - обновление только полей',
        props: {
            name: 'only-fields',
            url: '/only-fields'
        }
    },
    {
        path: '/only-references',
        title: 'only-references - обновление только справочников',
        props: {
            name: 'only-references',
            url: '/only-references'
        }
    },
    {
        path: '/fatal-error',
        title: 'Фатальная ошибка Workflow',
        props: {
            name: 'fatal-error',
            url: '/fatal-error'
        }
    },
    {
        path: '/event-error',
        title: 'Событийная ошибка Workflow',
        props: {
            name: 'event-error',
            url: '/event-error'
        }
    },
    {
        path: '/event-error-with-screens',
        title: 'Событийная ошибка Workflow со скринами',
        props: {
            name: 'event-error-with-screens',
            url: '/event-error-with-screens'
        }
    },
    {
        path: '/examples-personal-data',
        title: 'EXAMPLES: personal-data - как комбинировать виджеты',
        props: {
            name: 'examples-personal-data',
            url: '/examples-personal-data'
        }
    },
    {
        path: '/examples-platform-widgets',
        title: 'EXAMPLES: platform-widgets - обычная свалка с эмуляцией процесса',
        props: {
            name: 'examples-platform-widgets',
            url: '/examples-platform-widgets'
        }
    },
    {
        path: '/examples-status-proposal',
        title: 'EXAMPLES: status-proposal - черновой вариант статус скрина',
        props: {
            fullWidth: true,
            name: 'examples-status-proposal',
            url: '/examples-status-proposal'
        }
    },
    {
        path: '/examples-multi-widget',
        title: 'EXAMPLES: multi-widget - мультивиджет',
        props: {
            name: 'examples-multi-widget',
            url: '/examples-multi-widget'
        }
    },
    {
        path: '/examples-accessibility',
        title: 'EXAMPLES: accessibility - доступность движка workflow',
        props: {
            name: 'examples-accessibility',
            url: '/examples-accessibility'
        }
    },
    {
        path: '/strategies',
        title: 'стратегии',
        props: {
            name: 'strategies',
            url: '/strategies'
        }
    },
    {
        path: '/hide-widget-strategy',
        title: 'Пример кастомной стратегии со скрытием виджетов',
        props: {
            name: 'hide-widget-strategy',
            url: '/hide-widget-strategy'
        }
    }
]
