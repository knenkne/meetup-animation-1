```js
    {
        const { createStorybookStore, RendererWithReduxForm } = require('provider')
        var output = {
            screens: [
                {
                    title: 'Оформление услуги',
                    description: '',
                    properties: {},
                    widgets: [
                        {
                            "type": "WebStatusHeadline",
                            "title": "Заявка одобрена",
                            "properties": {
                                "level": "done"
                            }
                        },
                        {
                            type: 'WebComingNext',
                            fields: [
                                {
                                    id: 'comingnext:0',
                                    title: 'Мы пришлём вам уведомление о результатах обработки',
                                    value: 'Также, вы можете отслеживать статус заявки в разделе «История»'
                                },
                                {
                                    id: 'comingnext:1',
                                    value: 'Документы по операции отправлены на __kolosov.p.o@mail.ru__',
                                }
                            ]
                        },
                        {
                            "type": "WebStatusHeadline",
                            "title": "Не удалось оформить заявку",
                            "properties": {
                                "level": "error"
                            }
                        },
                        {
                            type: 'WebComingNext',
                            fields: [
                                {
                                    id: 'comingnext:0',
                                    title: 'Первое, что-то очень важное',
                                    value: 'Просто что-то очень важное',
                                }, {
                                    id: 'comingnext:1',
                                    title: 'Второе, что-то не менее важное',
                                    value: 'Что-то не менее важное',
                                }, {
                                    id: 'comingnext:2',
                                    title: 'И еще один пункт',
                                    value: 'Просто еще один пункт',
                                }, {
                                    id: 'comingnext:3',
                                    title: 'Последний пункт',
                                    value: 'Последний пункт и очень длинный текст, в котором тоже можно рассказать что-то еще очень важное'
                                }
                            ]
                        },
                        {
                            "type": "WebStatusHeadline",
                            "title": "Заявка находится на рассмотрении",
                            "properties": {
                                "level": "waiting"
                            }
                        },
                        {
                            type: 'WebComingNext',
                            fields: [
                                {
                                    id: 'comingnext:0',
                                    title: 'Стандартная реализация',
                                    value: 'С помощью **Markdown** можно стилизовать текст',
                                }, {

                                    id: 'comingnext:1',
                                    title: 'Ссылки',
                                    value: 'Передавать __Ссылки__ (внутренние, внешние): [Link External](http://ya.ru),  [Link Internal: like a Link by history](/payments)'
                                }, {
                                    id: 'comingnext:2',
                                    title: 'Изображения',
                                    value: 'Передавать **ссылку** на изображение\n\n![Image](http://www.sberbank.ru/portalserver/content/atom/contentRepository/content?id=35f8876c-36fe-48b6-83d0-1ec3388a22f3)'
                                }, {
                                    id: 'comingnext:3',
                                    title: 'Заголовки',
                                    value: 'Передавать заголовки\n\n### Например, H3'
                                }
                            ]
                        },
                        {
                            "type": "WebStatusHeadline",
                            "title": "Заявка одобрена",
                            "properties": {
                                "level": "info"
                            }
                        },
                        {
                            type: 'WebComingNext',
                            fields: [
                                {
                                    id: 'comingnext:0',
                                    title: 'Мы пришлём вам уведомление о результатах обработки',
                                    value: 'Также, вы можете отслеживать статус заявки в разделе «История»',
                                },
                                {
                                    id: 'comingnext:1',
                                    value: 'Документы по операции отправлены на __kolosov.p.o@mail.ru__',
                                }
                            ]
                        },
                        {
                            "type": "WebStatusHeadline",
                            "title": "Алексей Иванович И.",
                            "properties": {
                                "level": "done",
                                "imageSrc": "https://randomuser.me/api/portraits/men/97.jpg"
                            }
                        },
                        {
                            type: 'WebComingNext',
                            fields: [
                                {
                                    id: 'comingnext:0',
                                    value: 'Перевод клиенту сбербанка',
                                },
                                {
                                    id: 'comingnext:1',
                                    title: '2 250,00 ₽',
                                }
                            ]
                        },
                        {
                            "type": "WebStatusHeadline",
                            "title": "ЖКУ Москва ЕИРЦ",
                            "properties": {
                                "level": "done",
                                "icon": "icon:core/products/target-estate",
                                "pinBackgroundColor": "gold"
                            }
                        },
                        {
                            type: 'WebComingNext',
                            fields: [
                                {
                                    id: 'comingnext:0',
                                    value: 'Коммунальные услуги 30 мая 2019',
                                },
                                {
                                    id: 'comingnext:1',
                                    title: '6 350,40 ₽',
                                    value: 'Деньги поступят в течении 15 минут'
                                }
                            ]
                        }
                    ]
                }],
            events: []
        }

        var store = createStorybookStore()
    }

    <RendererWithReduxForm name={'WebComingNext'} store={store} output={output} />
```
