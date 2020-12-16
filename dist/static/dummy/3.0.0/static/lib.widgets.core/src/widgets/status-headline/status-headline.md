```js
    {
        const { createStorybookStore, RendererWithReduxForm } = require('provider')
        var output = {
            screens: [{
                title: 'Widgets:CoreStatusHeadline',
                widgets: [
                    {
                        "type": "CoreStatusHeadline",
                        "title": "Заявка одобрена",
                        "description": "Pro tip: можно иметь до 15 кредитов одновременно и следить за их состоянием на специальном [дашборде](/loans)!",
                        "properties": {
                            "level": "done",
                            "dedicatedStatusMessage": "Заявка на кредит готова к выдаче"
                        },
                        fields: []
                    },
                    {
                        "type": "CoreStatusHeadline",
                        "title": "Заявка на подтверждении",
                        "description": "Pro tip: можно иметь до 15 кредитов одновременно и следить за их состоянием на специальном [дашборде](/loans)!",
                        "properties": {
                            "level": "waiting",
                            "dedicatedStatusMessage": "Заявка на кредит пока что не готова к выдаче, поэтому во время ожидания Вы вполне можете успеть прочитать этот текст"
                        },
                        fields: []
                    },
                    {
                        "type": "CoreStatusHeadline",
                        "title": "Заявка отклонена, но это не точно, поэтому напишем заголовок на 3 строки",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
                        "properties": {
                            "level": "error",
                        },
                        fields: []
                    },
                    {
                        "type": "CoreStatusHeadline",
                        "title": "Заявка на подтверждении!",
                        "description": "Pro tip: можно иметь до 15 кредитов одновременно, и следить за их состоянием на специальном [дашборде](/loans)!",
                        "properties": {
                            "level": "info",
                            "dedicatedStatusMessage": "Заявка на кредит пока что не готова к выдаче, поэтому во время ожидания Вы вполне можете успеть прочитать этот текст"
                        },
                        fields: []
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


    <RendererWithReduxForm name={'CoreStatusHeadline'} store={store} output={output} />
```
