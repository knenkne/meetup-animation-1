module.exports = {
    type: 'WebSummary',
    title: 'Получатель платежа',
    description: 'Небольшое описание виджета',
    properties: {
        collapsed: true,
        event: 'event',
        stepId: 'formats',
    },
    fields: [
        {
            id: 'summary:first:default',
            type: 'text',
            value: 'Федор',
            title: 'Имя (текстовое поле)',
            readonly: true
        },
        {
            id: 'summary:first:primary',
            type: 'text',
            style: 'primary',
            value: 'Федор Ильич',
            title: 'Важное имя (жиирное текстовое поле)',
            readonly: true
        },
        {
            id: 'summary:first:datetime',
            type: 'text',
            style: 'datetime',
            value: '2017-11-27T20:51:21+03',
            title: 'Время',
            readonly: true
        },
        {
            id: 'summary:first:datetime:masked',
            type: 'text',
            style: 'datetime',
            masked: true,
            value: '••.••.•••• 22:50',
            title: 'Маскированое время',
            readonly: true
        },
        {
            id: 'summary:first:date:primary',
            type: 'text',
            style: 'date:primary',
            value: '2017-11-27',
            title: 'Важная дата',
            readonly: true
        },
        {
            id: 'summary:first:date:masked',
            type: 'text',
            masked: true,
            style: 'date',
            value: '••.••.••••',
            title: 'Маскированая дата',
            readonly: true
        }
    ]
}
