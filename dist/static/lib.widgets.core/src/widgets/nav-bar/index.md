```js
    {
        const { createStorybookStore, RendererWithReduxForm } = require('provider')
        var output = {
            screens: [
                {
                    widgets: [
                        {
                            type: 'CoreFieldset',
                            title: 'CoreNavBar',
                            description: 'Виджет CoreNavBar предназначен для отображения навигационных кнопок в заглавии страницы и динамического заголовка процесса',
                            fields: []
                        },
                        {
                            type: 'CoreNavBar',
                            title: 'Title',
                            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip  x ea commodo consequat. [Подробнее](https://www.sberbank.ru)',
                            events: [{
                                title: 'Назад',
                                cmd: 'EXIT',
                                name: 'exit'
                            }],
                            fields: []
                        }
                    ]
                }
            ]
        }

        var store = createStorybookStore()
    }

    <RendererWithReduxForm name="CoreNavBar" store={store} output={output} />
```
