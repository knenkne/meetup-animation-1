### Виджет WebBanner с заголовком, описанием и изборажением справа
Макеты: https://app.zeplin.io/project/5d385a888b7034775ab1a026/screen/5ecbc419487aa129233e2d6e0

Может использоваться как информационный элемент, а так же с кнопкой или ссылкой после описания.

Если не передавать level, то фон виджета будет белым.

Если не нужно изображение на мобильном разрешении, можно не передавать параметр "mobileImageName"

Если не передавать imagePath, то путь к изображеню будет указывать на существующий пресет с изображениями в
@sbol/common в папке img/banners:
http://10.36.9.21/builds/sbol/common/master/img/banners/

Примеры использования добавлены в lib.workflow и dummy.

#### __WebBanner с внешней сылкой__
```js
    {
        const { createStorybookStore, RendererWithReduxForm } = require('provider')

        var output = {
            screens: [
                {
                    title: 'WebBanner',
                    widgets: [
                        {
                            type: 'WebBanner',
                            properties: {
                                level: 'warning',
                                actionsReferenceId: "bannerLink",
                                imageName: 'Cards',
                                mobileImageName: 'Cards'
                            },
                            title: 'Новые кредитные карты',
                            description: 'Ориентир на потенциальную доходность на __10%__ годовых выше ставки.'
                        },
                    ],
                }
            ],
            references: {
                bannerLink: {
                    items: [
                        {
                            title: 'Дайте два!',
                            value: 'link',
                            properties: {
                                uri: 'https://sberbank.ru',
                                icon: 'icon:core/resource/vacation',
                                event: 'my-custom-event'
                            }
                        }
                    ]
                }
            }
        }

        var store = createStorybookStore()
    }

    <RendererWithReduxForm name={'WebBanner'} store={store} output={output} />
```

#### __WebBanner с информационным текстом и иконкой__
Цвет текста и икону можно передавать любые. Если не передана иконка, она не отображается.
Если не передан цвет информационного текста, берется статусный цвет в заваисмости от переданного level
```js
    {
        const { createStorybookStore, RendererWithReduxForm } = require('provider')

        var output = {
            screens: [
                {
                    title: 'WebBanner',
                    widgets: [
                        {
                            type: 'WebBanner',
                            properties: {
                                level: 'success',
                                actionsReferenceId: "bannerText",
                                imagePath: 'http://10.36.9.21/builds/sbol/common/master/img/statuses/',
                                imageName: 'male-done',
                                mobileImageName: 'female-done'
                            },
                            title: '30% потенциала использовано',
                            description: 'Кредитная нагрузка не будет превышена.',
                            fields: []
                        }
                    ]
                }
            ],
            references: {
                bannerText: {
                    items: [
                        {
                            title: 'Высокая вероятность одобрения',
                            value: 'text',
                            properties: {
                                icon: 'icon:core/common/alert-success'
                            }
                        }
                    ]
                }
            }
        }

        var store = createStorybookStore()
    }

    <RendererWithReduxForm name={'WebBanner'} store={store} output={output} />
```

#### __WebBanner с кнопкой__
```js
    {
        const { createStorybookStore, RendererWithReduxForm } = require('provider')

        var output = {
            screens: [
                {
                    title: 'WebBanner',
                    widgets: [
                        {
                            type: 'WebBanner',
                            properties: {
                                level: 'error',
                                actionsReferenceId: "bannerAction",
                                imageName: 'Female-Checklist-01',
                                mobileImageName: 'Female-Checklist-02'
                            },
                            title: 'Не хватает документов. Необходимо посетить офис банка',
                            description: 'Для завершения оформления кредита необходимо посетить офис банка и предоставить паспорт',
                            fields: []
                        }
                    ]
                }
            ],
            references: {
                bannerAction: {
                    items: [
                        {
                            title: 'Найти отделение',
                            value: 'action',
                            properties: {
                                event: 'my-custom-event',
                                icon: 'icon:core/operations/payandtrasf-sberbank'
                            }
                        }
                    ]
                }
            }
        }

        var store = createStorybookStore()
    }

    <RendererWithReduxForm name={'WebBanner'} store={store} output={output} />
```

#### __WebBanner просто с текстом и описанием__
```js
    {
        const { createStorybookStore, RendererWithReduxForm } = require('provider')

        var output = {
            screens: [
                {
                    title: 'WebBanner',
                    widgets: [
                        {
                            type: 'WebBanner',
                            properties: {
                                level: 'warning',
                                imageName: 'Male-Notepad-01',
                                mobileImageName: 'Male-Notepad-02'
                            },
                            title: 'Внимательно проверьте паспортные данные',
                            description: 'От этого много зависит. Например, дадут ли вам кредит или карту. Пока вы заполняете анкету, мы вырастим за вас дерево и построим дом. Но с сыном придётся разбираться самим',
                            fields: []
                        }
                    ]
                }
            ]
        }

        var store = createStorybookStore()
    }

    <RendererWithReduxForm name={'WebBanner'} store={store} output={output} />
```

#### __WebBanner с внутренней ссылкой__
```js
    {
        const { createStorybookStore, RendererWithReduxForm } = require('provider')

        var output = {
            screens: [
                {
                    title: 'WebBanner',
                    widgets: [
                        {
                            type: 'WebBanner',
                            properties: {
                                level: 'info',
                                actionsReferenceId: "bannerLink2",
                                imageName: 'Male-Watering-Can-01',
                                mobileImageName: 'Male-Watering-Can-03'
                            },
                            title: 'Ни о чём не беспокойтесь',
                            description: 'Пока вы заполняете анкету, мы вырастим за вас дерево и построим дом. Но с сыном придётся разбираться самим.'
                        }
                    ]
                }
            ],
            references: {
                bannerLink2: {
                    items: [
                        {
                            title: 'Ознакомиться',
                            value: 'link',
                            properties: {
                                uri: '/user/personal',
                                icon: 'icon:core/resource/vacation',
                                event: 'my-custom-event'
                            }
                        }
                    ]
                }
            }
        }

        var store = createStorybookStore()
    }

    <RendererWithReduxForm name={'WebBanner'} store={store} output={output} />
```
