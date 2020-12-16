module.exports = {
    states: {
        step1: {
            data: {
                screens: [
                    {
                        widgets: [
                            {
                                type: 'CoreFieldset',
                                title: 'Types',
                                description: 'text, select, checkbox, multiselect',
                                fields: [
                                    {
                                        id: 'text',
                                        type: 'text',
                                        title: 'text',
                                        description: 'text',
                                        tooltip: {
                                            title: 'text',
                                            contents: 'text'
                                        }
                                    },
                                    {
                                        id: 'select',
                                        type: 'select',
                                        title: 'select',
                                        description: 'select',
                                        referenceId: 'exampleReference',
                                        tooltip: {
                                            title: 'select',
                                            contents: 'select'
                                        }
                                    },
                                    {
                                        id: 'checkbox',
                                        type: 'checkbox',
                                        title: 'checkbox',
                                        description: 'checkbox',
                                        tooltip: {
                                            title: 'checkbox',
                                            contents: 'checkbox'
                                        }
                                    },
                                    {
                                        id: 'multiselect',
                                        type: 'multiselect',
                                        title: 'multiselect',
                                        description: 'multiselect',
                                        referenceId: 'exampleReference',
                                        values: [],
                                        tooltip: {
                                            title: 'multiselect',
                                            contents: 'multiselect'
                                        }
                                    }
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
