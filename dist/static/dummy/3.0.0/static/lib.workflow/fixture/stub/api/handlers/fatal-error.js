module.exports = (req, res) => {
    res.send({
        success: false,
        error: {
            uuid: '123456789-messageUUID',
            type: 'error',
            title: 'Фатальная ошибка',
            text: 'Не смогли стартовать процесс'
        }
    })
}
