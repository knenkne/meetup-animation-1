const step1 = {
    success: true,
    body: {
        result: 'SUCCESS',
        pid: '123456789-pid',
        flow: '/UFS/event-error-with-screens',
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
                flow: '/UFS/event-error-with-screens',
                state: 'step1',
                title: '',
                value: 'value',
                status: 'ACTIVE'
            }
        ]
    }
}

const eventError = {
    success: true,
    body: {
        result: 'SUCCESS',
        pid: '123456789-pid',
        flow: '/UFS/event-error-with-screens',
        state: 'step1',
        output: {
            document: {
                documentId: '123456789-documentId'
            },
            screens: [
                {
                    widgets: [
                        {
                            type: 'CoreFieldset',
                            title: 'Это обычный виджет, а сверху ошибка'
                        }
                    ]
                }
            ]
        },
        history: [
            {
                id: 'step2',
                flow: '/UFS/event-error-with-screens',
                state: 'step2',
                title: '',
                value: 'value',
                status: 'ACTIVE'
            },
            {
                id: 'step1',
                flow: '/UFS/event-error-with-screens',
                state: 'step1',
                title: '',
                value: 'value',
                status: 'ACTIVE'
            }
        ]
    },
    messages: [{
        uuid: '123456789-messageUUID',
        type: 'error',
        title: 'По техническим причинам Вы не можете выполнить данную операцию до 14:32:38 24.12.2019 (МСК) . Пожалуйста, повторите попытку позже.',
        text: 'Не смогли что-то там'
    }]
}

const responses = [step1, eventError]
let eventErrorState = 0

module.exports = (req, res) => {
    res.send(responses[eventErrorState])

    eventErrorState = (eventErrorState + 1) % responses.length
}
