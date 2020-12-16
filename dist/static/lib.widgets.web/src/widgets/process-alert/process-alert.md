```js
    {
        const { createStorybookStore, RendererWithReduxForm } = require('provider')
        var output = {
            screens: [
                {
                    title: 'Widgets | WebProcessAlert',
                    widgets: [
                        {
                            type: 'WebProcessAlert',
                            properties: {
                                level: 'warning',
                                messageCode: ''
                            },
                            title: 'Упс, у вас что-то произошло',
                            description: 'Мы зафиксировали подозрительную активность по вашей карте и заблокировали ее для сохранности ваших средств.',
                            fields: []
                        },
                        {
                            type: 'WebProcessAlert',
                            properties: {
                                level: 'error',
                                messageCode: ''
                            },
                            title: 'ОШИБКА!',
                            description: 'Мы зафиксировали подозрительную активность по вашей карте и заблокировали ее для сохранности ваших средств.',
                            fields: []
                        },
                        {
                            type: 'WebProcessAlert',
                            properties: {
                                level: 'error',
                                messageCode: ''
                            },
                            description: 'Мы зафиксировали подозрительную активность по вашей карте и заблокировали ее для сохранности ваших средств.',
                            fields: []
                        },
                        {
                            type: 'WebProcessAlert',
                            properties: {
                                level: 'info',
                                messageCode: ''
                            },
                            title: 'Не переживайте, все не так плохо',
                            description: 'Просто не забудьте проверить данные',
                            fields: []
                        },
                        {
                            type: 'WebProcessAlert',
                            properties: {
                                level: 'info',
                                messageCode: ''
                            },
                            title: 'Не переживайте, все не так плохо',
                            fields: []
                        },
                        {
                            type: 'WebProcessAlert',
                            properties: {
                                level: 'error',
                                messageCode: '',
                                actionsReferenceId: "actions"
                            },
                            title: 'Упс, у вас что-то произошло',
                            description: 'Мы зафиксировали подозрительную активность по вашей карте и заблокировали ее для сохранности ваших средств.',
                            fields: []
                        }
                    ],
                    properties: {}
                }
            ],
            references: {
                actions: {
                    properties: {},
                    items: [
                        {
                            title: 'Подробнее',
                            value: 'link',
                            properties: {
                                uri: '/user/personal'
                            },
                        },
                        {
                            title: 'Найти отделение',
                            value: 'link',
                            properties: {
                                uri: 'https://sberbank.ru'
                            },
                        },
                    ],
                },
            },
        }

        var store = createStorybookStore()

    }


    <RendererWithReduxForm name={'WebProcessAlert'} store={store} output={output} />
```
### WebProcessAlert может быть прижат к нижнему блоку, если они находятся в одном структурном блоке и у следующего видимого виджета имеются не пустые events
```js
    {
        const { createStorybookStore, RendererWithReduxForm } = require('provider')
        var output = {
            screens: [
                {
                    title: 'Widgets | WebProcessAlert',
                    widgets: [
                        {
                            type: 'WebProcessAlert',
                            properties: {
                                level: 'error'
                            },
                            title: 'ОШИБКА!',
                            description: "Мы зафиксировали подозрительную активность по вашей карте./n/nКарта будет заблокирована для сохранности ваших средств.",
                            fields: []
                        },
                        {
                            "type": "WebStatusHeadline",
                            "title": "Заявка отклонена",
                            "properties": {
                                "level": "error"
                            },
                            "events": [
                                {
                                    "name": "next",
                                    "type": "next",
                                    "title": "Продолжить"
                                }
                            ]
                        },
                    ],
                    properties: {}
                }
            ],
        }

        var store = createStorybookStore()

    }


    <RendererWithReduxForm name={'WebProcessAlert2'} store={store} output={output} />
```
### WebProcessAlert не прижимается, если разные структурные блоки
```js
    {
        const { createStorybookStore, RendererWithReduxForm } = require('provider')
        var output = {
            screens: [
                {
                    title: 'Widgets | WebProcessAlert',
                    header: [
                        {
                            type: 'WebProcessAlert',
                            properties: {
                                level: 'error'
                            },
                            title: 'ОШИБКА!',
                            description: "Мы зафиксировали подозрительную активность по вашей карте./n/nКарта будет заблокирована для сохранности ваших средств.",
                            fields: []
                        }
                    ],
                    widgets: [
                        {
                            "type": "WebStatusHeadline",
                            "title": "Заявка отклонена",
                            "properties": {
                                "level": "error"
                            },
                            "events": [
                                {
                                    "name": "next",
                                    "type": "next",
                                    "title": "Продолжить"
                                }
                            ]
                        },
                    ],
                    properties: {}
                }
            ],
        }

        var store = createStorybookStore()

    }


    <RendererWithReduxForm name={'WebProcessAlert2'} store={store} output={output} />
```
### WebProcessAlert не прижимается, если следующий виджет невидим
```js
    {
        const { createStorybookStore, RendererWithReduxForm } = require('provider')
        var output = {
            screens: [
                {
                    title: 'Widgets | WebProcessAlert',
                    widgets: [
                        {
                            type: 'WebProcessAlert',
                            properties: {
                                level: 'error'
                            },
                            title: 'ОШИБКА!',
                            description: "Мы зафиксировали подозрительную активность по вашей карте./n/nКарта будет заблокирована для сохранности ваших средств.",
                            fields: []
                        },
                        {
                            "type": "WebStatusHeadline",
                            "title": "Заявка отклонена",
                            "visible": {
                                "id": "changeData",
                                "regexp": "false"
                            },
                            "properties": {
                                "level": "error"
                            },
                            "events": [
                                {
                                    "name": "next",
                                    "type": "next",
                                    "title": "Продолжить"
                                }
                            ]
                        },
                    ],
                    properties: {}
                }
            ],
        }

        var store = createStorybookStore()

    }


    <RendererWithReduxForm name={'WebProcessAlert2'} store={store} output={output} />
```
