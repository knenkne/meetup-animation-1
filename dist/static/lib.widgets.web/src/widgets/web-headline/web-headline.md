```js
    {
        const { createStorybookStore, RendererWithReduxForm } = require('provider')
        var output = {
            screens: [{
                title: 'WebHeadline',
                widgets: [
                    {
                        type: "WebHeadline",
                        title: "Получение пенсии через Сбербанк"
                    }
                ]
            }]
        }

        var store = createStorybookStore()
    }

    <RendererWithReduxForm name={'WebHeadline'} store={store} output={output} />
```

```js
    {
        const { createStorybookStore, RendererWithReduxForm } = require('provider')
        var output = {
            screens: [{
                title: 'WebHeadline',
                widgets: [
                    {
                        type: "WebHeadline",
                        title: "Страховые выплаты по вкладам, счетам, ипотеке. Получение налогового вычета для всех категорий граждан"
                    }
                ]
            }]
        }

        var store = createStorybookStore()
    }

    <RendererWithReduxForm name={'WebHeadline'} store={store} output={output} />
```
