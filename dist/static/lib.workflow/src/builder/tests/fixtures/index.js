export const screens = [
    {
        title: 'Screen title',
        description: 'Screen description',
        header: [
            {
                type: 'CoreFieldset'
            }
        ],
        widgets: [
            {
                type: 'CoreFieldset',
                properties: {},
                fields: [
                    {
                        id: 'field:field:one',
                        value: '',
                        type: 'text',
                        title: 'one',
                        validators: []
                    },
                    {
                        id: 'field:field:two',
                        value: '',
                        type: 'text',
                        title: 'two',
                        validators: []
                    }
                ]
            }
        ],
        properties: {}
    }
]

export const screensWithInitialValues = [
    {
        title: 'Screen title',
        description: 'Screen description',
        widgets: [
            {
                type: 'CoreFieldset',
                properties: {},
                fields: [
                    {
                        id: 'field:field:one',
                        value: 'initialValue 1',
                        type: 'text',
                        title: 'one',
                        validators: []
                    },
                    {
                        id: 'field:field:two',
                        value: 'initialValue 2',
                        type: 'text',
                        title: 'two',
                        validators: []
                    }
                ]
            }
        ],
        properties: {}
    }
]

export const productWidgets = [
    {
        type: 'WebProductDescription',
        properties: {},
        fields: []
    }
]

export const footerWidgets = [
    {
        type: 'WebUpcomingStep',
        properties: {
            abc: 4
        },
        fields: []
    },
    {
        type: 'WebUpcomingStep',
        properties: {
            abc: 2
        },
        fields: []
    }
]

export const response = {
    success: true,
    body: {
        result: 'SUCCESS',
        pid: 'de9d9380-8f1a-11e7-861c-97ee935a8de4',
        flow: 'superFlow',
        state: 'step2',
        output: {
            document: {
                documentId: '1504273122489'
            },
            screens,
            events: [],
            references: {},

        },
        history: []
    },
    messages: []
}

export const responseWithInitialValues = {
    success: true,
    body: {
        result: 'SUCCESS',
        pid: 'de9d9380-8f1a-11e7-861c-97ee935a8de4',
        flow: 'superFlow',
        state: 'step2',
        output: {
            document: {
                documentId: '1504273122489'
            },
            screens: screensWithInitialValues,
            events: [],
            references: {},

        },
        history: []
    },
    messages: []
}
