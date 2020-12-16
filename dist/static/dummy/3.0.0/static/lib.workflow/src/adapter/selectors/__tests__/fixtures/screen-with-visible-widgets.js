export const screenWithDependantWidgets = [
    {
        widgets: [
            {
                type: 'WebHeadline',
                title: 'Виджет без полей'
            },
            {
                type: 'CoreFieldset',
                title: 'Виджет с управляющим чекбоксом',
                fields: [
                    {
                        id: 'has:comission:checkbox',
                        type: 'checkbox',
                        title: 'Комиссия включена?'
                    }
                ]
            },
            {
                type: 'CoreFieldset',
                title: 'Виджет, который отображается, если значение кода has:comission:checkbox истинно(возвращает истину припроверке регулярного выражения)',
                fields: [
                    {
                        id: 'comission:amount',
                        type: 'text',
                        title: 'сумма комиссии'
                    }
                ],
                visible: {
                    id: 'has:comission:checkbox',
                    regexp: '^true$'
                }
            },
            {
                type: 'CoreFieldset',
                title: 'Виджет, который отображается, если значение comission:amount равно 0 и поле comission:amount видимо',
                fields: [
                    {
                        id: 'comission:currency',
                        type: 'text',
                        title: 'валюта комиссии'
                    }
                ],
                visible: {
                    id: 'comission:amount',
                    regexp: '^0$'
                }
            }
        ]
    }
]
