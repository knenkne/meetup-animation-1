module.exports = {
    states: {
        step1: {
            data: {
                screens: [
                    {
                        widgets: [
                            {
                                type: 'CoreFieldset',
                                title: 'Formats',
                                fields: [
                                    {
                                        id: 'date',
                                        type: 'text',
                                        title: 'date',
                                        value: '2020-04-24T11:50:00.000+03:00',
                                        format: 'date',
                                        validators: [
                                            {
                                                type: 'minValue',
                                                value: '2020-04-24T11:50:00.000+03:00',
                                                message: 'Может быть в период с 24.04.2020 по 23.04.2021'
                                            },
                                            {
                                                type: 'maxValue',
                                                value: '2021-04-23T11:50:00.000+03:00',
                                                message: 'Может быть в период с 24.04.2020 по 23.04.2021'
                                            }
                                        ],
                                    },
                                    {
                                        id: 'decimal',
                                        type: 'text',
                                        title: 'decimal',
                                        format: 'decimal'
                                    },
                                    {
                                        id: 'email',
                                        type: 'text',
                                        title: 'email',
                                        format: 'email'
                                    },
                                    {
                                        id: 'formattedNumber',
                                        type: 'text',
                                        title: 'formattedNumber (+7 [000] [000]-[00]-[00])',
                                        format: 'formattedNumber',
                                        formatConfig: '+7 [000] [000]-[00]-[00]'
                                    },
                                    {
                                        id: 'formattedText',
                                        type: 'text',
                                        title: 'formattedText (Z[0S0]-[S0S])',
                                        format: 'formattedText',
                                        formatConfig: 'Z[0S0]-[S0S]'
                                    },
                                    {
                                        id: 'integer',
                                        type: 'text',
                                        title: 'integer',
                                        format: 'integer'
                                    },
                                    {
                                        id: 'phone',
                                        type: 'text',
                                        title: 'phone',
                                        format: 'phone'
                                    },
                                    {
                                        id: 'money',
                                        type: 'text',
                                        title: 'money',
                                        format: 'money',
                                        value: '1223.00'
                                    },
                                    {
                                        id: 'rationalMoney',
                                        type: 'text',
                                        title: 'rationalMoney',
                                        format: 'rationalMoney',
                                        value: '-1223.00'
                                    },
                                    {
                                        id: 'numeric:fieldset:money',
                                        value: '1223.00',
                                        type: 'text',
                                        format: 'money',
                                        style: 'integer',
                                        formatConfig: 'RUB',
                                        title: 'money: style: \'integer\'',
                                    },
                                    {
                                        id: 'money:int',
                                        type: 'text',
                                        title: 'money (integer)',
                                        format: 'money',
                                        style: 'integer'
                                    },
                                    {
                                        id: 'protected',
                                        type: 'text',
                                        title: 'protected',
                                        format: 'protected'
                                    },
                                    {
                                        id: 'quantity',
                                        type: 'text',
                                        title: 'quantity',
                                        format: 'quantity'
                                    },
                                    {
                                        id: 'quarter',
                                        type: 'text',
                                        title: 'quarter',
                                        format: 'quarter'
                                    },
                                    {
                                        id: 'radio',
                                        type: 'select',
                                        title: 'radio',
                                        format: 'radio',
                                        referenceId: 'exampleReference'
                                    },
                                    {
                                        id: 'resource',
                                        type: 'select',
                                        title: 'TODO: resource',
                                        referenceId: 'exampleReference'
                                    },
                                    {
                                        id: 'snils',
                                        type: 'text',
                                        title: 'snils',
                                        format: 'snils'
                                    },
                                    {
                                        id: 'suggest',
                                        type: 'text',
                                        title: 'TODO: suggest'
                                    },
                                    {
                                        id: 'switch',
                                        type: 'checkbox',
                                        title: 'switch',
                                        format: 'switch'
                                    },
                                    {
                                        id: 'time',
                                        type: 'text',
                                        title: 'time',
                                        format: 'time'
                                    },
                                    {
                                        id: 'vat',
                                        type: 'text',
                                        title: 'vat',
                                        format: 'vat'
                                    },
                                    {
                                        id: 'year',
                                        type: 'text',
                                        title: 'year',
                                        format: 'year'
                                    },
                                ]
                            },
                        ],
                    },
                ],
                references: {
                    exampleReference: {
                        items: [
                            {
                                value: '1',
                                title: 'Один'
                            },
                            {
                                value: '2',
                                title: 'Два'
                            },
                            {
                                value: '3',
                                title: 'Три'
                            }
                        ]
                    }
                }
            }
        }
    },
    start: 'step1',
    end: ['step2']
}
