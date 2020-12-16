```js
    {
        const { createStorybookStore, RendererWithReduxForm } = require('provider')
        var output = {
            screens: [
                {
                    title: 'Шаг флоу',
                    description: 'Описание шага флоу',
                    widgets: [
                        {
                            type: "CoreAccount",
                            title: "Счет и БИК",
                            description: "Все правильные поля",
                            properties: {},
                            fields: [
                                {
                                    id: "right:bik",
                                    type: "text",
                                    readonly: false,
                                    title: "Бик",
                                    tooltip: {
                                        title: "Что это?",
                                        contents: "Банковский идентификационный код (БИК)"
                                    },
                                    value: "044525974",
                                    validators: []
                                },
                                {
                                    id: "right:account:number",
                                    type: "text",
                                    readonly: false,
                                    title: "Номер счета",
                                    tooltip: {
                                        title: "Что имеется в виду",
                                        contents: "Расчётный счёт (теку́щий счёт, счёт до востребования, чековый счет) — учётная запись, используемая банком или иным расчётным учреждением для учёта денежных операций клиентов."
                                    },
                                    value: "40817810000003419217",
                                    validators: []
                                }
                            ]
                        },
                        {
                            type: "CoreAccount",
                            title: 'Счет и БИК c описаниями',
                            description: 'Счет некорректный',
                            properties: {},
                            fields: [
                                {
                                    id: "cozy:bik",
                                    type: "text",
                                    readonly: false,
                                    title: "Бик",
                                    value: "044525974",
                                    validators: []
                                },
                                {
                                    id: "cozy:account:number",
                                    type: "text",
                                    readonly: false,
                                    title: "Номер счета",
                                    value: "40817811110003419217",
                                    validators: []
                                }
                            ]
                        },
                        {
                            type: "CoreAccount",
                            title: 'Счет и БИК',
                            description: 'Поля только для чтения',
                            properties: {},
                            fields: [
                                {
                                    id: "readonly:bik",
                                    type: "text",
                                    readonly: true,
                                    title: "Бик",
                                    tooltip: {
                                        title: "Что это?",
                                        contents: "Банковский идентификационный код (БИК)"
                                    },
                                    value: "044525974",
                                    validators: []
                                },
                                {
                                    id: "readonly:account:number",
                                    type: "text",
                                    readonly: true,
                                    title: "Номер счета",
                                    tooltip: {
                                        title: "Что имеется в виду",
                                        contents: "Расчётный счёт (теку́щий счёт, счёт до востребования, чековый счет) — учётная запись, используемая банком или иным расчётным учреждением для учёта денежных операций клиентов."
                                    },
                                    value: "40817810000003419217",
                                    validators: []
                                }
                            ]
                        }
                    ]
                }
            ]
        }

        var store = createStorybookStore()
    }

    <RendererWithReduxForm name={'CoreAccount'} store={store} output={output} />
```
