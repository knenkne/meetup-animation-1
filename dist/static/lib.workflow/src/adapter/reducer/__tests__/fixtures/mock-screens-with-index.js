export const mockScreensWithIndex = [
    {
        title: 'Способ получения полиса',
        header: [
            {
                type: 'WebSummary',
                fields: [
                    {
                        id: 'radio',
                        type: 'text',
                        value: 'print',
                    },
                ]
            }
        ],
        widgets: [
            {
                type: 'CoreFieldset',
                fields: [
                    {
                        id: 'radio',
                        type: 'select',
                        value: 'print',
                        format: 'radio',
                        referenceId: 'radioRefs'
                    },
                ]
            },
            {
                type: 'CoreFieldset',
                fields: [
                    {
                        id: 'switch',
                        type: 'checkbox',
                        format: 'switch',
                        title: 'Мой email изменился'
                    }
                ]
            },
            {
                type: 'CoreFieldset',
                fields: [
                    {
                        id: 'checkbox',
                        type: 'checkbox',
                        format: 'checkbox',
                        title: 'Я даю согласие'
                    }
                ]
            },
            {
                type: 'CoreButtons',
                events: [
                    {
                        cmd: 'EVENT',
                        name: 'next',
                        title: 'Продолжить'
                    },
                ]
            }
        ],
        footer: [
            {
                type: 'CoreFieldset',
                fields: [
                    {
                        id: 'radio',
                        type: 'select',
                        value: 'print',
                        format: 'radio',
                        referenceId: 'radioRefs'
                    },
                ]
            }
        ]
    },
    {
        widgets: [
            {
                type: 'CoreFieldset',
                fields: [
                    {
                        id: 'radio: 2',
                        type: 'select',
                        value: 'print',
                        format: 'radio',
                        referenceId: 'radioRefs'
                    },
                ]
            },
        ]
    }
]
