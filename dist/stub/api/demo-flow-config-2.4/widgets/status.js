module.exports = {
    type: 'CoreStatus',
    title: 'Платёж выполнен',
    description: 'На ваш номер +7 924 ••• 89-21 будет отправлено СМС с секретным кодом\n\nСообщите код получателю, чтобы он смог получить деньги',
    properties: {
        level: 'success',
        stage: 'Обмен данными с оператором сотовой связи...',
        timestamp: '2017-11-27T20:51:21+03',
        category: 'Оплата связи',
        name: 'МегаФон',
        id: '1234567',
        icon: 'icon:core/resource/box',
        picture: 'https://stat.online.sberbank.ru/CSAFront-res/27.0/skins/sbrf/images/csa/loginPage/slide1.jpg',
        actionsReferenceId: 'actions',
        documentOverviewScreen: 1,
        visibleFieldsLimit: 1
    },
    fields: [
        {
            id: 'sum',
            type: 'text',
            readonly: true,
            title: 'Сумма',
            value: '450 ₽'
        },
        {
            id: 'phoneNumber',
            type: 'text',
            readonly: true,
            title: 'Номер телефона',
            value: '+7 925 ••• 45-89'
        },
        {
            id: 'status:datetime',
            type: 'text',
            style: 'datetime',
            value: '2017-11-27T20:51:21+03',
            referenceId: '',
            title: 'Datetime',
            readonly: true
        },
        {
            id: 'status:date',
            type: 'text',
            style: 'date',
            value: '2017-11-27',
            referenceId: '',
            title: 'Date',
            readonly: true
        },
        {
            id: 'status:card',
            value: '01503',
            type: 'text',
            style: 'resource',
            referenceId: 'cards',
            title: 'Источник',
            readonly: true
        },
        // TODO: total ошибка currency
        // {
        //     id: 'status:total',
        //     type: 'text',
        //     style: 'total',
        //     value: '04246',
        //     description: '',
        //     referenceId: 'debit',
        //     title: 'Будет списано'
        // }
    ]
}
