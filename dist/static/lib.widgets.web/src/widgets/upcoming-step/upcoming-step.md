```js
    {
        const { createStorybookStore, RendererWithReduxForm } = require('provider')
        var output = {
            screens: [
                {
                    title: 'Виджет Money',
                    description: 'Содержит два поля: для ввода суммы и выбора валюты',
                    widgets: [
                        {
                            type: 'WebUpcomingStep',
                            title: 'SearchSelect: Сервис недоступен',
                            properties: {},
                            fields: []
                        },
                        {
                            type: 'WebUpcomingStep',
                            title: 'Agreement: Несколько документов',
                            description: 'pdf, md и требуется просмотр всех документов',
                            properties: {},
                            fields: []
                        },
                        {
                            type: 'WebUpcomingStep',
                            title: 'FormatField Resource: Пять вариантов представления',
                            description: '1. Общий\n2. Только карты\n3. Элемент для чтения\n4. Ресурсы заблокированы\n5. Справочник пуст',
                            properties: {},
                            fields: []
                        }
                    ],
                    properties: {}
                }
            ],
            events: [],
            references: {}
        }

        var store = createStorybookStore()
    }


    <RendererWithReduxForm name={'WebUpcomingStep'} store={store} output={output} />
```
