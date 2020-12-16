
### Виджет WebStages

Служит для проброса текста шагов Степпера через workflow. Визуально не отображается. Сам виджет __WebStages__ необходимо размещать в секции _footer_.

Значения Шагов можно получить с помощью workflow селектора - __getStages__.
Селектор отдает массив объектов с полями title и value (см. в коде примера _references.stages.items_).

__title__ - заголовок шага;

__value__ - обозначение текущего шага (если __value = "progress"__, то шаг обозначается как текущий);

Далее эти значения нужно использовать в компоненте __<Stages\>__ из _lib.ui_.

Если не передавать WebStages на каком-то шаге workflow, то можно фолбечиться на progress (workflow селектор getProgress).

Пример использования __<Stages\>__ есть в dummy.

```js
    {
        const { createStorybookStore, RendererWithReduxForm } = require('provider')
        var output = {
            screens: [
                {
                    title: 'Шаги для степпера',
                    footer: [
                        {
                            "type": "WebStages",
                            "properties": {
                                "productFeaturesReferenceId": "stages"
                            }
                        },
                    ],
                    properties: {}
                }
            ],
            events: [],
            references: {
                "stages": {
                    "items": [
                        {
                            "title": "Выбор условий кредита",
                            "value": ""
                        },
                        {
                            "title": "Ознакомление и подтверждение",
                            "value": ""
                        },
                        {
                            "title": "Подтверждение условий",
                            "value": "progress"
                        }
                    ]
                }
            }
        }

        var store = createStorybookStore()
    }

    <RendererWithReduxForm name={'WebStages'} store={store} output={output} />
```
