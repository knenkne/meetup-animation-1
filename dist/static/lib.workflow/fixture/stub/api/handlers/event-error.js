const step1 = {
    success: true,
    body: {
        result: 'SUCCESS',
        pid: '123456789-pid',
        flow: '/UFS/event-error',
        state: 'step1',
        output: {
            document: {
                documentId: '123456789-documentId'
            },
            screens: [
                {
                    widgets: [
                        {
                            type: 'CoreButtons',
                            events: [
                                {
                                    cmd: 'EVENT',
                                    name: 'next',
                                    title: 'Продолжить'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        history: [
            {
                id: 'step1',
                flow: '/UFS/event-error',
                state: 'step1',
                title: '',
                value: 'value',
                status: 'ACTIVE'
            }
        ]
    }
}

const eventError = {
    success: false,
    messages: [{
        customField: 'customValue',
        uuid: '123456789-messageUUID',
        type: 'error',
        title: 'Событийная ошибка',
        text: 'Не смогли что-то там'
    }]
}

const responses = [step1, eventError]
let eventErrorState = 0

module.exports = (req, res) => {
    res.send(responses[eventErrorState])

    eventErrorState = (eventErrorState + 1) % responses.length
}
