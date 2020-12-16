const successRestore = {
    success: true,
    body: {
        result: 'SUCCESS',
        pid: '123456789-pid',
        flow: '/UFS/custom-start-event',
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
                            title: 'Сессия успешно восстановлена',
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
        }
    }
}

const failRestoreSuccessStart = {
    success: true,
    body: {
        result: 'SUCCESS',
        pid: '123456789-pid',
        flow: '/UFS/custom-start-event',
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
                            title: 'Сессия успешно восстановлена',
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
        }
    }
}

const failRestore = {
    success: false,
    error: {
        uuid: '123456789-messageUUID',
        type: 'error',
        title: 'Фатальная ошибка',
        text: 'Не смогли стартовать процесс'
    }
}

module.exports = (req, res) => {
    const { documentId, success, cmd } = req.query
    if (cmd === 'EVENT' && documentId) {
        return res.send(failRestore)
    }
    if (cmd === 'START' && documentId) {
        return res.send(successRestore)
    }
    if (success) {
        return res.send(successRestore)
    }
    return res.send(failRestore)
}
