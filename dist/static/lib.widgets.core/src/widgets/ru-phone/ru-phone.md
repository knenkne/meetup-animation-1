```js
    {
        const { createStorybookStore, RendererWithReduxForm } = require('provider')
        var output = {
            screens: [
                {
                    title: 'CoreRuPhoneScreen',
                    description: 'Ввод номера телефона',
                    widgets: [
                        {
                            type: 'CoreRuPhone',
                            title: 'Номер телефона',
                            description: 'Номер телефона',
                            properties: {},
                            fields: [
                                {
                                    id: 'core:phone',
                                    type: 'text',
                                    value: '',
                                    readonly: false,
                                    title: 'Номер телефона',
                                    description: 'Номер телефона',
                                    validators: [{
                                        type: 'required',
                                        message: 'Заполните, пожалуйста'
                                    }, {
                                       type: 'regexp',
                                       value: '^((8|\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\- ]?)?[\\d\\- ]{7,10}$',
                                       message: 'Номер телефона должен содержать 10 цифр'
                                    }]
                                }
                            ]
                        },
                        {
                            type: 'CoreRuPhone',
                            title: 'Номер телефона readonly',
                            description: 'Номер телефона',
                            properties: {},
                            fields: [
                                {
                                    id: 'core:phone:2',
                                    type: 'text',
                                    value: '+79214567845',
                                    readonly: true,
                                    title: 'Номер мобильного телефона',
                                    description: 'Введите номер мобильного телефона',
                                    validators: []
                                }
                            ]
                        }
                    ]
                }
            ],
            events: []
        }

         var store = createStorybookStore()
    }

    <RendererWithReduxForm name={'CoreRuPhone'} store={store} output={output} />

```
