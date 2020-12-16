const required = require('../validators/required')

module.exports = {
    type: 'CoreFieldset',
    title: 'У Fieldset есть форматы',
    description: 'Надстройки над типами для кастомизации средств ввода',
    fields: [
        {
            id: 'primitive:text',
            type: 'text',
            title: 'Текстовое поле',
            description: 'Самый простой тип поля в Fieldset',
            tooltip: {
                title: 'Текст подсказки (тултипа)',
                contents: 'Содержимое тултипа',
            }
        },
        {
            id: 'primitive:checkbox',
            type: 'checkbox',
            title: 'Среди типов бывают чекбоксы',
            value: 'true'
        },
        {
            id: 'primitive:select',
            type: 'select',
            title: 'И выбор из списка',
            referenceId: 'selectOptions',
            description: 'Выбор из списка ссылается на справочник (статический)'
        },
        {
            id: 'primitive:multiselect',
            values: [],
            type: 'multiselect',
            referenceId: 'selectOptions',
            title: 'Во второй версии протокола мы добавили мультивыбор из списка',
            description: 'Можно выбрать несколько значений'
        },
        {
            id: 'numeric:fieldset:integer',
            value: '',
            type: 'text',
            format: 'integer',
            title: 'Целочисленный ввод',
            validators: [required]
        },
        {
            id: 'numeric:fieldset:decimal',
            value: '',
            type: 'text',
            format: 'decimal',
            title: 'Дробный ввод',
            validators: [required]
        },
        {
            id: 'numeric:fieldset:money',
            value: '',
            type: 'text',
            format: 'money',
            formatConfig: 'RUB',
            title: 'Выбор суммы',
            description: '**Внимание!** Валидация (да, markdown тоже есть)',
            validators: [
                {
                    type: 'minValue',
                    value: '5000',
                    message: 'Минимальное значение 5000 руб.'
                },
                {
                    type: 'maxValue',
                    value: '4000000',
                    message: 'Максимальное значение 4 000 000 руб.'
                }
            ]
        },
        {
            id: 'numeric:fieldset:quantity:2',
            value: '20',
            type: 'text',
            format: 'quantity',
            formatConfig: '10',
            title: 'Spinbutton, он же quantity, он же counter',
            validators: [
                {
                    type: 'minValue',
                    value: '10',
                    message: 'Минимум 10'
                },
                {
                    type: 'maxValue',
                    value: '1000',
                    message: 'Максимум 1000'
                }
            ]
        },
        {
            id: 'primitive:formats:resource',
            value: '',
            type: 'select',
            format: 'resource',
            referenceId: 'cards',
            title: 'Выбор ресурса списания/начисления/итд',
            validators: [required]
        },
        {
            id: 'formats:snils',
            value: '12345678964',
            type: 'text',
            title: 'Ввод СНИЛС',
            format: 'snils',
            validators: [required]
        },
        {
            id: 'formats:inn:fiz',
            value: '503405168522',
            type: 'text',
            title: 'ИНН физлица',
            format: 'vat',
            formatConfig: 'person',
            validators: [required]
        },
        {
            id: 'formats:inn:org',
            value: '5034051605',
            type: 'text',
            title: 'ИНН юрлица',
            format: 'vat',
            formatConfig: 'organization',
            validators: [required]
        },
        {
            id: 'formats:date',
            value: '2017-10-10T00:00:00.000+03:00',
            type: 'text',
            title: 'Ввод даты',
            format: 'date',
            validators: [required]
        },
        {
            id: 'formats:year',
            value: '2017-10-10T00:00:00.000+03:00',
            type: 'text',
            title: 'Ввод года',
            format: 'year',
            validators: [required]
        },
        {
            id: 'formats:month',
            value: '2017-10-10T00:00:00.000+03:00',
            type: 'text',
            format: 'month',
            title: 'Ввод месяца',
            validators: [required]
        },
        {
            id: 'formats:quarter',
            value: '2017-10-10T00:00:00.000+03:00',
            type: 'text',
            format: 'quarter',
            title: 'И даже квартала',
            validators: [required]
        },
        {
            id: 'formats:time',
            value: '2017-10-10T10:30:00.000+03:00',
            type: 'text',
            format: 'time',
            title: 'Времени',
            validators: [required]
        },
        {
            id: 'formats:email',
            value: 'awesome@great.mail.ops',
            type: 'text',
            format: 'email',
            title: 'Электронной почты',
            validators: [required]
        },
        {
            id: 'formats:card',
            value: '1234567890123456',
            type: 'text',
            title: 'Карты',
            format: 'card',
            validators: [required]
        },
        {
            id: 'formats:suggest',
            value: '',
            type: 'select',
            referenceId: 'lazySuggestService',
            title: 'Выбор из справочника (справочники могут обращаться к удаленному сервису)',
            format: 'suggest',
            validators: [required]
        },
        {
            id: 'formats:suggest:dictionary',
            value: 'ITALY:value',
            type: 'select',
            referenceId: 'suggestDictionary',
            title: 'Или работать автономно',
            format: 'suggest',
            validators: [required]
        },
        {
            id: 'numeric:fieldset:localPhone',
            value: '962•••••66',
            type: 'text',
            format: 'localPhone',
            masked: true,
            title: 'И ввод российского номера телефона',
            description: 'На этом перечень форматой не планирует останавливаться',
            validators: [required]
        }
    ]
}
