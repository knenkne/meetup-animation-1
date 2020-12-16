```js
    {
        const { createStorybookStore, RendererWithReduxForm } = require('provider')
        var output = {
            screens: [{
                title: 'Widgets:WebStatusHeadline',
                widgets: [
                    {
                        "type": "WebStatusHeadline",
                        "title": "Заявка одобрена",
                        "properties": {
                            "level": "done"
                        }
                    },
                    {
                        "type": "WebStatusHeadline",
                        "title": "Заявка на подтверждении",
                        "properties": {
                            "level": "waiting"
                        }
                    },
                    {
                        "type": "WebStatusHeadline",
                        "title": "Заявка отклонена, но это не точно, поэтому напишем заголовок на 3 строки",
                        "properties": {
                            "level": "error"
                        }
                    },
                                        {
                        "type": "WebStatusHeadline",
                        "title": "Заявка отклонена, но это не точно, поэтому напишем еще заголовок на 3 строки",
                        "properties": {
                            "level": "info"
                        }
                    },
                ],
                properties: {}
            }],
            events: [{
                name: 'next',
                type: 'next',
                hidden: false,
                title: 'Продолжить',
                description: ''
            }],
            references: {
            }
        }

        var store = createStorybookStore()
        var references = output.references
        var widgets = output.screens[0].widgets
    }

    <RendererWithReduxForm name={'WebStatusHeadline'} store={store} output={output} />
```

```js
    {
        const { createStorybookStore, RendererWithReduxForm } = require('provider')
        var output = {
            screens: [{
                title: 'Widgets:WebStatusHeadline',
                widgets: [
                                        {
                        "type": "WebStatusHeadline",
                        "title": "Можем передать свою иконку",
                        "properties": {
                            "level": "done",
                            icon: 'icon:core/common/time',
                        }
                    },
                    {
                        "type": "WebStatusHeadline",
                        "title": "Можем вдобавок к иконке перекрасить фон",
                        "properties": {
                            "level": "done",
                            icon: 'icon:core/common/time',
                            pinBackgroundColor: "skyblue"
                        }
                    },
                    {
                        "type": "WebStatusHeadline",
                        "title": "И еще разок",
                        "properties": {
                            "level": "error",
                            icon: 'icon:core/products/target-other',
                            pinBackgroundColor: '#cc0044'
                        }
                    },
                    {
                        "type": "WebStatusHeadline",
                        "title": "Или вообще поставить свою картинку",
                        "properties": {
                            "level": "info",
                            "imageSrc": "https://randomuser.me/api/portraits/men/97.jpg"
                        }
                    },
                    {
                        "type": "WebStatusHeadline",
                        "title": "Или свою картинку и фон",
                        "properties": {
                            level: 'info',
                            pinBackgroundColor: 'gold',
                            imageSrc: "https://miro.medium.com/max/2400/1*1_2eC5UtX5ua3_bsKaiyDQ.png"
                        }
                    },
                ],
                properties: {}
            }],
            events: [{
                name: 'next',
                type: 'next',
                hidden: false,
                title: 'Продолжить',
                description: ''
            }],
            references: {
            }
        }

        var store = createStorybookStore()
        var references = output.references
        var widgets = output.screens[0].widgets
    }


    <RendererWithReduxForm name={'WebStatusHeadline'} store={store} output={output} />
```
