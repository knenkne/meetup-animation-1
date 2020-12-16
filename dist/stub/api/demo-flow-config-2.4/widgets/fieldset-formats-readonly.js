module.exports = {
    type: 'CoreFieldset',
    title: 'Форматы',
    readonly: true,
    fields: [
        {
            id: 'numeric:fieldset:integer',
            type: 'text',
            format: 'integer',
            title: 'Integer',
        },
        {
            id: 'numeric:fieldset:decimal',
            type: 'text',
            format: 'decimal',
            title: 'Decimal',
        },
        {
            id: 'numeric:fieldset:money',
            type: 'text',
            format: 'money',
            formatConfig: 'RUB',
            title: 'Money',
        },
        {
            id: 'text:formatted:text',
            type: 'text',
            format: 'formattedText',
            formatConfig: '+7 ([000]) [SSs]-[099]-<ВEH> [ [ЫЫ] ] <<А-Я><',
            value: '123abc945ВEHЫЫЭ',
            title: 'Форматированный текст'
        },
        {
            id: 'text:formatted:number',
            type: 'text',
            format: 'formattedNumber',
            formatConfig: '+7 ([000]) [000]-[00]-[00]',
            value: '9169492677',
            title: 'Форматированное число'
        },
        {
            id: 'numeric:fieldset:quantity:2',
            type: 'text',
            format: 'quantity',
            formatConfig: '10',
            title: 'Quantity',
        },
        {
            id: 'primitive:formats:resource',
            type: 'select',
            format: 'resource',
            referenceId: 'cards',
            title: 'Resource',
        },
        {
            id: 'formats:snils',
            type: 'text',
            title: 'СНИЛС',
            format: 'snils',
        },
        {
            id: 'formats:inn:fiz',
            type: 'text',
            title: 'ИНН физлица',
            format: 'vat',
            formatConfig: 'person',
        },
        {
            id: 'formats:inn:org',
            type: 'text',
            title: 'ИНН юрлица',
            format: 'vat',
            formatConfig: 'organization',
        },
        {
            id: 'formats:date',
            type: 'text',
            title: 'Date',
            format: 'date',
        },
        {
            id: 'formats:year',
            type: 'text',
            title: 'Year',
            format: 'year',
        },
        {
            id: 'formats:month',
            type: 'text',
            format: 'month',
            title: 'Month',
        },
        {
            id: 'formats:quarter',
            type: 'text',
            format: 'quarter',
            title: 'Quarter',
        },
        {
            id: 'formats:time',
            type: 'text',
            format: 'time',
            title: 'Time',
        },
        {
            id: 'formats:email',
            type: 'text',
            format: 'email',
            title: 'E-mail',
        },
        {
            id: 'formats:card',
            type: 'text',
            title: 'Card',
            format: 'card',
        }
    ]
}
