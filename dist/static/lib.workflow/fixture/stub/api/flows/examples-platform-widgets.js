const validators = require('../validators')
const { middlewareUtils: { createValidationMessage } } = require('../../../../middleware')


const nextEvent = {
    name: 'next',
    title: 'Продолжить',
}

const rollbackEvent = {
    name: 'rollback',
    cmd: 'ROLLBACK',
    title: 'Назад',
}

const skipEvent = {
    name: 'skip',
    title: 'Пропустить',
}

const WebEvents = {
    type: 'CoreButtons'
}

const requiredValidator = {
    type: 'required',
    value: '',
    message: 'Обязательное поле, заполни плез'
}

const maxLengthValidator = {
    type: 'maxLength',
    value: '2',
    message: 'Максимум 2 символа'
}

const states = {
    step1: {
        events: {
            next: { to: 'step2' },
            skip: { to: 'step2' }
        },
        data: {
            screens: [
                {
                    title: 'Пример отступов виджетов',
                    widgets: [
                        {
                            type: 'CoreFieldset',
                            title: 'Загловок виджета',
                            fields: [
                                {
                                    id: 'format:integer',
                                    type: 'text',
                                    title: 'Филд1',
                                    format: 'integer',
                                },
                                {
                                    id: 'format:integer2',
                                    type: 'text',
                                    title: 'Филд2',
                                    format: 'integer',
                                }
                            ]
                        },
                        {
                            type: 'CoreFieldset',
                            fields: [
                                {
                                    id: 'format:integer:1',
                                    type: 'text',
                                    title: 'Первый филд отдельным виджетом',
                                    format: 'integer',
                                },
                                {
                                    id: 'format:integer:2',
                                    type: 'text',
                                    title: 'Первый филд отдельным виджетом',
                                    format: 'integer',
                                },
                            ]
                        },
                        {
                            type: 'CoreFieldset',
                            fields: [
                                {
                                    id: 'format:integer:1:1',
                                    type: 'text',
                                    title: 'Второй филд отдельным виджетом',
                                    format: 'integer',
                                },
                            ]
                        },
                        {
                            type: 'CoreFieldset',
                            title: 'Виджет с заголовком',
                            fields: [
                                {
                                    id: 'format:switch',
                                    type: 'checkbox',
                                    title: 'Ясно понятно',
                                    format: 'switch',
                                }
                            ]
                        },
                        {
                            type: 'CoreFieldset',
                            fields: [
                                {
                                    id: 'format:checkbox',
                                    type: 'checkbox',
                                    title: 'Одинокий контрол',
                                    format: 'checkbox',
                                }
                            ]
                        },
                    ]
                },
                {
                    title: 'Виджет CoreFieldset',
                    description: 'Описание (скрин 1)',
                    header: [
                        {
                            type: 'WebSummary',
                            title: 'Получатель платежа',
                            description: 'Небольшое описание виджета',
                            properties: {
                                collapsed: true,
                                tooltipTitle: 'Подсказонька',
                                tooltipContents: '+ [внутренняя ссылка на несуществующую страницу](/foo/bar) \n\n+ [внешняя ссылка](sberbank.ru)'
                            },
                            fields: [
                                {
                                    id: 'summary:first:default',
                                    type: 'text',
                                    value: 'xxxxxxxxxxxxxxxxxx',
                                    description: 'xxxxxxxxxxxxxxxxxxxxxxxx',
                                    title: 'xxxxxxxxxxxxxxxxxx',
                                    readonly: true
                                },
                                {
                                    id: 'summary:first:primary',
                                    type: 'text',
                                    style: 'primary',
                                    value: 'Lorem ipsum dolor sit amet',
                                    title: 'Input Label 2 Lines Input Label 2 Lines Input Label 2 Lines',
                                    readonly: true
                                },
                                {
                                    id: 'summary:first:datetime',
                                    type: 'text',
                                    style: 'datetime',
                                    value: '2017-11-27T20:51:21+03',
                                    title: 'Summary datetime',
                                    readonly: true
                                },
                                {
                                    id: 'summary:first:datetime:masked',
                                    type: 'text',
                                    style: 'datetime',
                                    masked: true,
                                    value: '••.••.•••• 22:50',
                                    title: 'Masked datetime',
                                    readonly: true
                                },
                                {
                                    id: 'summary:first:date:primary',
                                    type: 'text',
                                    style: 'date:primary',
                                    value: '2017-11-27',
                                    title: 'Primary date',
                                    readonly: true
                                },
                                {
                                    id: 'summary:first:date:masked',
                                    type: 'text',
                                    masked: true,
                                    style: 'date',
                                    value: '••.••.••••',
                                    title: 'Masked date',
                                    readonly: true
                                }
                            ]
                        },
                        {
                            type: 'WebSummary',
                            title: 'Получатель платежа',
                            description: 'Небольшое описание виджета',
                            properties: {
                                collapsed: true,
                                tooltipTitle: 'Подсказонька',
                                tooltipContents: '+ [внутренняя ссылка на несуществующую страницу](/foo/bar) \n\n+ [внешняя ссылка](sberbank.ru)'
                            },
                            fields: [
                                {
                                    id: 'summary:first:default2',
                                    type: 'text',
                                    value: 'xxxxxxxxxxxxxxxxxx',
                                    description: 'xxxxxxxxxxxxxxxxxxxxxxxx',
                                    title: 'xxxxxxxxxxxxxxxxxx',
                                    readonly: true
                                },
                                {
                                    id: 'summary:first:primary2',
                                    type: 'text',
                                    style: 'primary',
                                    value: 'Lorem ipsum dolor sit amet',
                                    title: 'Input Label 2 Lines Input Label 2 Lines Input Label 2 Lines',
                                    readonly: true
                                },
                                {
                                    id: 'summary:first:datetime2',
                                    type: 'text',
                                    style: 'datetime',
                                    value: '2017-11-27T20:51:21+03',
                                    title: 'Summary datetime',
                                    readonly: true
                                },
                                {
                                    id: 'summary:first:datetime:masked2',
                                    type: 'text',
                                    style: 'datetime',
                                    masked: true,
                                    value: '••.••.•••• 22:50',
                                    title: 'Masked datetime',
                                    readonly: true
                                },
                                {
                                    id: 'summary:first:date:primary2',
                                    type: 'text',
                                    style: 'date:primary',
                                    value: '2017-11-27',
                                    title: 'Primary date',
                                    readonly: true
                                },
                                {
                                    id: 'summary:first:date:masked2',
                                    type: 'text',
                                    masked: true,
                                    style: 'date',
                                    value: '••.••.••••',
                                    title: 'Masked date',
                                    readonly: true
                                }
                            ]
                        },
                        {
                            type: 'WebProductDescription',
                            title: 'Default WebProductDescription',
                            description: 'Заказывайте скорее!',
                            properties: {
                                productFeaturesReferenceId: 'aeroflotBonusFeatures'
                            }
                        }
                    ],
                    footer: [
                        {
                            type: 'WebUpcomingStep',
                            title: 'Предстоящий шаг',
                            description: 'Описание предстоящего шага'
                        },
                        {
                            type: 'WebUpcomingStep',
                            title: 'Предстоящий шаг'
                        }
                    ],
                    widgets: [
                        {
                            type: 'CoreFieldset',
                            title: 'Примитивные поля',
                            description: 'Базовые типы, реализованные в библиотеке',
                            fields: [
                                {
                                    id: 'primitive:text',
                                    type: 'text',
                                    referenceId: '',
                                    title: 'Text',
                                    description: 'Описание',
                                    tooltip: {
                                        title: 'kokoko',
                                        contents: '## Headline\n---\nLorem ipsum dolor sit amet',
                                    },
                                    validators: [requiredValidator]
                                },
                                {
                                    id: 'text:masked:validator',
                                    title: 'Invalid field',
                                    type: 'text',
                                    value: '•••',
                                    masked: true,
                                    validators: [maxLengthValidator]
                                },
                                {
                                    id: 'primitive:checkbox',
                                    type: 'checkbox',
                                    title: 'Checkbox',
                                    value: 'true',
                                    description: 'description для поля с типом checkbox на несколько неравномерных строк description для поля с типом checkbox на несколько строк description для поля с типом checkbox на несколько строк ',
                                },
                                {
                                    id: 'primitive:select',
                                    type: 'select',
                                    title: 'Select',
                                    referenceId: 'selectOptions',
                                    description: 'Выберите различные опции и проверьте работу visible - виджетов',
                                },
                                {
                                    id: 'primitive:multiselect',
                                    values: [],
                                    type: 'multiselect',
                                    referenceId: 'selectOptions',
                                    title: 'Multiselect',
                                    description: 'Можно выбрать несколько значений',
                                    validators: [
                                        { type: 'required', value: '', message: 'Пожалуйста, выберите вариант' }
                                    ]
                                }
                            ]
                        },
                        {
                            type: 'CoreFieldset',
                            title: 'Виджет для опции 1 селекта',
                            fields: [
                                {
                                    id: 'visible:widget:value1',
                                    type: 'text',
                                    title: 'Текстовое поле'
                                }
                            ],
                            visible: {
                                id: 'primitive:select',
                                regexp: 'value1'
                            }
                        },
                        {
                            type: 'CoreFieldset',
                            title: 'Виджет для опции 2 селекта',
                            fields: [
                                {
                                    id: 'visible:widget:value2',
                                    type: 'text',
                                    title: 'Текстовое поле'
                                }
                            ],
                            visible: {
                                id: 'primitive:select',
                                regexp: 'value2'
                            }
                        },
                        {
                            type: 'CoreFieldset',
                            title: 'Форматированные поля',
                            description: 'Базовые форматы, реализованные в библиотеке',
                            fields: [
                                {
                                    id: 'numeric:fieldset:format',
                                    type: 'text',
                                    format: 'formattedText',
                                    title: 'Formatted text',
                                    formatConfig: '+7 ([000]) [SSs]-[099]-<ВEH> \[ [ЫЫ] \] \<<А-Я>\<'
                                },
                                {
                                    id: 'numeric:fieldset:switch',
                                    type: 'checkbox',
                                    format: 'switch',
                                    title: 'Switch',
                                },
                                {
                                    id: 'numeric:fieldset:integer',
                                    value: '',
                                    type: 'text',
                                    format: 'integer',
                                    title: 'Integer',
                                },
                                {
                                    id: 'numeric:fieldset:decimal',
                                    value: '',
                                    type: 'text',
                                    format: 'decimal',
                                    title: 'Decimal',
                                },
                                {
                                    id: 'numeric:fieldset:money',
                                    value: '',
                                    type: 'text',
                                    format: 'money',
                                    formatConfig: 'RUB',
                                    title: 'money',
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
                                    id: 'numeric:fieldset:rationalMoney',
                                    type: 'text',
                                    format: 'rationalMoney',
                                    formatConfig: 'RUB',
                                    value: '-100.00',
                                    title: 'rationalMoney',
                                    validators: [
                                        {
                                            type: 'minValue',
                                            value: '0',
                                            message: 'Отрицательный платеж мы вам не позволим'
                                        },
                                        {
                                            type: 'maxValue',
                                            value: '40',
                                            message: 'Максимальное значение 40 руб.'
                                        }
                                    ]
                                },
                                {
                                    id: 'numeric:fieldset:quantity:2',
                                    value: '20',
                                    type: 'text',
                                    format: 'quantity',
                                    formatConfig: '10',
                                    title: 'quantity',
                                    validators: [
                                        {
                                            type: 'minValue',
                                            value: '10',
                                            message: 'Минимум 10'
                                        },
                                        {
                                            type: 'maxValue',
                                            value: '100',
                                            message: 'Максимум 100'
                                        }
                                    ]
                                },
                                {
                                    id: 'primitive:formats:resource',
                                    value: '',
                                    type: 'select',
                                    format: 'resource',
                                    referenceId: 'cards',
                                    title: 'Resource',
                                    validators: [requiredValidator]
                                },
                                {
                                    id: 'formats:snils',
                                    value: '12345678964',
                                    type: 'text',
                                    title: 'Snils',
                                    format: 'snils',
                                },
                                {
                                    id: 'formats:inn:fiz',
                                    value: '503405168522',
                                    type: 'text',
                                    title: 'ИНН физлица',
                                    format: 'vat',
                                    formatConfig: 'person',
                                },
                                {
                                    id: 'formats:inn:org',
                                    value: '5034051605',
                                    type: 'text',
                                    title: 'ИНН юрлица',
                                    format: 'vat',
                                    formatConfig: 'organization',
                                },
                                {
                                    id: 'formats:date',
                                    value: '2017-10-10T00:00:00.000+03:00',
                                    type: 'text',
                                    title: 'Date',
                                    format: 'date',
                                    validators: [
                                        {
                                            type: 'minValue',
                                            value: '2018-08-08T00:00:00.000+03:00',
                                            message: 'Дата позже 08.08.2018'
                                        }
                                    ]
                                },
                                {
                                    id: 'formats:year',
                                    value: '2017-10-10T00:00:00.000+03:00',
                                    type: 'text',
                                    title: 'Year',
                                    format: 'year',
                                },
                                {
                                    id: 'formats:month',
                                    value: '2017-10-10T00:00:00.000+03:00',
                                    type: 'text',
                                    format: 'month',
                                    title: 'Month',
                                },
                                {
                                    id: 'formats:quarter',
                                    value: '2017-10-10T00:00:00.000+03:00',
                                    type: 'text',
                                    format: 'quarter',
                                    title: 'Quarter',
                                },
                                {
                                    id: 'formats:time',
                                    value: '2017-10-10T10:30:00.000+03:00',
                                    type: 'text',
                                    format: 'time',
                                    title: 'Time',
                                },
                                {
                                    id: 'formats:email',
                                    value: 'awesome@great.mail.ops',
                                    type: 'text',
                                    format: 'email',
                                    title: 'E-mail',
                                },
                                {
                                    id: 'formats:card',
                                    value: '1234567890123456',
                                    type: 'text',
                                    title: 'Card',
                                    format: 'card',
                                },
                                {
                                    id: 'formats:suggest',
                                    value: '',
                                    type: 'select',
                                    referenceId: 'lazySuggestService',
                                    title: 'suggest',
                                    format: 'suggest',
                                },
                                {
                                    id: 'formats:suggest:dictionary',
                                    value: 'ITALY:value',
                                    type: 'select',
                                    referenceId: 'suggestDictionary',
                                    title: 'suggest со словарём',
                                    format: 'suggest',
                                },
                                {
                                    id: 'numeric:fieldset:phone',
                                    value: '962•••••66',
                                    type: 'text',
                                    format: 'phone',
                                    title: 'phone',
                                    validators: [{
                                        type: 'regexp',
                                        value: '^((8|\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\- ]?)?[\\d\\- ]{10}$',
                                        message: 'Номер телефона должен содержать 10 цифр'
                                    }]
                                }
                            ]
                        },
                        { ...WebEvents, events: [nextEvent, skipEvent] }
                    ],
                },
            ],
            references: {
                aeroflotBonusFeatures: {
                    items: [
                        {
                            title: 'Приветственные мили',
                            value: 'miles',
                            properties: {
                                type: 'single',
                                single: '500',
                                unit: 'миль'
                            }
                        },
                        {
                            title: 'Дополнительные мили',
                            value: 'miles.additional',
                            properties: {
                                type: 'range',
                                min: '0.5',
                                max: '5',
                                unit: '%',
                                description: 'в зависимости от суммы покупки'
                            }
                        }
                    ]
                },
                selectOptions: {
                    items: [
                        {
                            value: 'value1',
                            title: 'Опция с длинным текстом 1'
                        },
                        {
                            value: 'value2',
                            title: 'Опция 2'
                        },
                        {
                            value: 'value3',
                            title: 'Опция 3'
                        }
                    ]
                },
                cards: {
                    items: [
                        {
                            title: 'Цель образование',
                            value: '14592',
                            properties: {
                                number: '**** 14592',
                                category: 'goal',
                                style: 'goal:education',
                                unavailable: false,
                                amount: '1252.47',
                                measureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'Цель финансовый резерв',
                            value: '14594',
                            properties: {
                                number: '**** 14594',
                                category: 'goal',
                                style: 'goal:reserve',
                                unavailable: false,
                                amount: '1252.47',
                                measureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'Цель ремонт',
                            value: '14595',
                            properties: {
                                number: '**** 14595',
                                category: 'goal',
                                style: 'goal:renovation',
                                unavailable: false,
                                amount: '1252.47',
                                measureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'Цель отдых',
                            value: '14596',
                            properties: {
                                number: '**** 14596',
                                category: 'goal',
                                style: 'goal:vacation',
                                unavailable: false,
                                amount: '1252.47',
                                measureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'Цель бытовая техника',
                            value: '14597',
                            properties: {
                                number: '**** 14597',
                                category: 'goal',
                                style: 'goal:appliance',
                                unavailable: false,
                                amount: '1252.47',
                                measureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'Цель мебель',
                            value: '14598',
                            properties: {
                                number: '**** 14598',
                                category: 'goal',
                                style: 'goal:furniture',
                                unavailable: false,
                                amount: '1252.47',
                                measureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'Цель свое дело',
                            value: '14599',
                            properties: {
                                number: '**** 14599',
                                category: 'goal',
                                style: 'goal:business',
                                unavailable: false,
                                amount: '1252.47',
                                measureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'Цель недвижимость',
                            value: '14590',
                            properties: {
                                number: '**** 14590',
                                category: 'goal',
                                style: 'goal:estate',
                                unavailable: false,
                                amount: '1252.47',
                                measureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'Цель праздники',
                            value: '14511',
                            properties: {
                                number: '**** 14511',
                                category: 'goal',
                                style: 'goal:holidays',
                                unavailable: false,
                                amount: '1252.47',
                                measureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'Цель авто',
                            value: '14593',
                            properties: {
                                number: '**** 14593',
                                category: 'goal',
                                style: 'goal:auto',
                                unavailable: false,
                                amount: '1252.47',
                                measureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'Цель другая',
                            value: '14512',
                            properties: {
                                number: '**** 14512',
                                category: 'goal',
                                style: 'goal:other',
                                unavailable: false,
                                amount: '1252.47',
                                measureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'Visa',
                            value: '01501',
                            properties: {
                                alias: 'Моя обеденная карта',
                                number: '**** 7486',
                                category: 'card',
                                style: 'card:visa',
                                unavailable: false,
                                amount: '12000.85',
                                measureUnit: 'EUR',
                                asideTitle: '=',
                                asideAmount: '25871.45',
                                asideMeasureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'American Express',
                            value: '01500',
                            properties: {
                                alias: 'Моя зарплатная карта',
                                number: '**** 7485',
                                category: 'card',
                                style: 'card:amex',
                                unavailable: false,
                                amount: '1200.85',
                                measureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'Maestro',
                            value: '01507',
                            properties: {
                                number: '**** 7487',
                                category: 'card',
                                style: 'card:maestro',
                                unavailable: false,
                                amount: '587.85',
                                measureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'Master Card',
                            value: '01502',
                            properties: {
                                number: '**** 7482',
                                category: 'card',
                                style: 'card:mastercard',
                                unavailable: false,
                                amount: '484.85',
                                measureUnit: 'USD',
                                asideTitle: '=',
                                asideAmount: '5871.45',
                                asideMeasureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'Универсальная Электронная Карта',
                            value: '01508',
                            properties: {
                                alias: 'Моя обеденная карта',
                                number: '**** 7488',
                                category: 'card',
                                style: 'card:uec',
                                unavailable: false,
                                amount: '1200.00',
                                measureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'ПРО100',
                            value: '01100',
                            properties: {
                                alias: 'Моя обеденная карта',
                                number: '**** 7100',
                                category: 'card',
                                style: 'card:pro100',
                                unavailable: false,
                                amount: '100.00',
                                measureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'Виртуальная карта',
                            value: '01522',
                            properties: {
                                alias: 'Покупки в интернете',
                                number: '**** 7422',
                                category: 'card',
                                style: 'card:virtual',
                                unavailable: false,
                                amount: '12000.85',
                                measureUnit: 'USD',
                                asideTitle: '=',
                                asideAmount: '25871.45',
                                asideMeasureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'Металл золото',
                            value: '147851',
                            properties: {
                                number: '147851',
                                category: 'metal',
                                style: 'metal:au',
                                unavailable: false,
                                amount: '785.45',
                                measureUnit: 'XAU',
                                asideTitle: '=',
                                asideAmount: '25871.45',
                                asideMeasureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'Металл серебро',
                            value: '147852',
                            properties: {
                                number: '147852',
                                category: 'metal',
                                style: 'metal:ag',
                                unavailable: false,
                                amount: '748.45',
                                measureUnit: 'XAG',
                                asideTitle: '=',
                                asideAmount: '14521.45',
                                asideMeasureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'Металл палладий',
                            value: '147854',
                            properties: {
                                number: '147854',
                                category: 'metal',
                                style: 'metal:pd',
                                unavailable: false,
                                amount: '59841.45',
                                measureUnit: 'XPD',
                                asideTitle: '=',
                                asideAmount: '141415.25',
                                asideMeasureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'Кредит на автомобиль',
                            value: '147414',
                            properties: {
                                number: '147414',
                                category: 'loan',
                                style: 'loan:auto',
                                unavailable: false,
                                amount: '800000.00',
                                measureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'МИР',
                            value: '01503',
                            properties: {
                                number: '**** 7483',
                                category: 'card',
                                style: 'card:mir',
                                unavailable: false,
                                amount: '120.85',
                                measureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'Кобрендинговая карта Visa и МИР',
                            value: '1',
                            properties: {
                                number: '**** 7485',
                                category: 'card',
                                style: 'card:visa-mir',
                                unavailable: true,
                                amount: '10.55',
                                measureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'Кобрендинговая карта Mastercard и МИР',
                            value: '01505',
                            properties: {
                                number: '**** 7485',
                                category: 'card',
                                style: 'card:mastercard-mir',
                                unavailable: false,
                                amount: '8595.14',
                                measureUnit: 'RUB',
                                asideTitle: 'Комиссия',
                                asideAmount: '25871.45',
                                asideMeasureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'Металл платина',
                            value: '147853',
                            properties: {
                                number: '147853',
                                category: 'metal',
                                style: 'metal:pt',
                                unavailable: false,
                                amount: '154.00',
                                measureUnit: 'XPT',
                                asideTitle: '=',
                                asideAmount: '1256.45',
                                asideMeasureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'Кредит потребительский',
                            value: '147415',
                            properties: {
                                number: '147415',
                                category: 'loan',
                                style: 'loan:consumer',
                                unavailable: false,
                                amount: '59841.45',
                                measureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'Ипотека',
                            value: '147418',
                            properties: {
                                number: '147418',
                                category: 'loan',
                                style: 'loan:mortgage',
                                unavailable: false,
                                amount: '1200000.00',
                                measureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'Счет №1254',
                            value: '47238',
                            properties: {
                                alias: 'Коплю на яхту',
                                number: '342 92 783 8 273482347238',
                                category: 'deposit',
                                unavailable: false,
                                amount: '500000.00',
                                measureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'Счет №1254',
                            value: '41478',
                            properties: {
                                alias: 'Коплю на заграницу',
                                number: '342 92 783 8 273482341478',
                                category: 'deposit',
                                unavailable: false,
                                amount: '5000.00',
                                measureUnit: 'EUR',
                                asideTitle: '=',
                                asideAmount: '14115.25',
                                asideMeasureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'Оформи новую карту МИР!',
                            value: '14157',
                            properties: {
                                number: '**** 1415',
                                category: 'offer',
                                style: 'card:mir',
                                unavailable: false
                            }
                        },
                        {
                            title: '•••• 5721 Visa Classic 15 000 руб. (омниканальный формат)',
                            value: 'asdf-asdf-asdfvbhhr-572',
                            properties: {
                                title: 'Зарплатная',
                                type: 'card',
                                isCredit: false,
                                paymentSystem: 'VISA',
                                name: 'Visa CLassic',
                                maskedNumber: '**** 5721',
                                currency: 'RUB',
                                balance: '15000'
                            }
                        },
                        {
                            title: '408 17 810 9 33333333333 Сберегательный счет 10000.0 RUB (омниканальный формат)',
                            value: 'value = account:777222',
                            properties: {
                                type: 'account',
                                name: 'Visa Classic',
                                paymentSystem: 'visa',
                                number: '40817810933333333333',
                                currency: 'RUB',
                                balance: '10000'
                            }
                        },
                        {
                            title: '408 17 810 9 22222222222 Сберегательный счет 1000000.0 RUB (омниканальный формат)',
                            value: 'value = account:777444',
                            properties: {
                                type: 'account',
                                name: 'Сберегательный счёт',
                                number: '40817810922222222222',
                                currency: 'RUB',
                                balance: '1000000'
                            }
                        }
                    ]
                },
                lazySuggestService: {
                    properties: {
                        filterKeys: 'titleRus;alias',
                        itemImgType: 'base64',
                        itemImgSrc: 'flag',
                        itemDescriptionKey: 'titleRus',

                        url: '/api/dictionaries/countries',
                        debounce: 500,
                        requestRepeatTimeout: 3000
                    }
                },
                suggestDictionary: {
                    properties: {
                        filterKeys: 'titleRus;alias',
                        itemDescriptionKey: 'titleRus'
                    },
                    items: [
                        {
                            title: 'ИТАЛИЯ',
                            value: 'ITALY:value',
                            properties: {
                                titleRus: 'Итальянская Республика',
                                alias: 'ИТАЛИЯ'
                            }
                        },
                        {
                            title: 'Россия',
                            value: 'Russia:value',
                            properties: {
                                titleRus: 'Россия',
                                alias: 'Россия'
                            }
                        },
                        {
                            title: 'Франция',
                            value: 'France:value',
                            properties: {
                                titleRus: 'Франция',
                                alias: 'Франция'
                            }
                        },

                    ]
                },
            },
            progress: {
                range: 8,
                position: 1
            }
        }
    },
    step2: {
        events: {
            next: {
                to: 'step3'
            },
            rollback: {
                to: 'step1'
            }
        },
        data: {
            screens: [
                {
                    title: 'Виджет CoreFieldset readonly',
                    description: 'Описание (скрин 2)',
                    widgets: [
                        {
                            type: 'CoreFieldset',
                            title: 'Примитивные поля',
                            description: 'Базовые типы, реализованные в библиотеке',
                            fields: [
                                {
                                    id: 'primitive:text',
                                    readonly: true,
                                    type: 'text',
                                    referenceId: '',
                                    title: 'Text',
                                },
                                {
                                    id: 'primitive:checkbox',
                                    readonly: true,
                                    description: 'description для поля с типом checkbox на несколько неравномерных строк description для поля с типом checkbox на несколько неравномерных строк description для поля с типом checkbox на несколько неравномерных строк ',
                                    type: 'checkbox',
                                    title: 'Checkbox'
                                },
                                {
                                    id: 'primitive:select',
                                    readonly: true,
                                    type: 'select',
                                    title: 'Select',
                                    referenceId: 'selectOptions',
                                    description: 'Выберите различные опции и проверьте работу visible - виджетов',
                                },
                                {
                                    id: 'primitive:multiselect',
                                    readonly: true,
                                    type: 'multiselect',
                                    referenceId: 'selectOptions',
                                    title: 'Multiselect'
                                },
                                {
                                    id: 'numeric:fieldset:switch',
                                    readonly: true,
                                    type: 'checkbox',
                                    format: 'switch',
                                    title: 'Switch',
                                },
                                {
                                    id: 'numeric:fieldset:integer',
                                    readonly: true,
                                    type: 'text',
                                    format: 'integer',
                                    title: 'Integer',
                                },
                                {
                                    id: 'numeric:fieldset:decimal',
                                    readonly: true,
                                    type: 'text',
                                    format: 'decimal',
                                    title: 'Decimal',
                                },
                                {
                                    id: 'numeric:fieldset:money',
                                    readonly: true,
                                    type: 'text',
                                    format: 'money',
                                    formatConfig: 'RUB',
                                    title: 'money',
                                },
                                {
                                    id: 'numeric:fieldset:quantity:2',
                                    readonly: true,
                                    type: 'text',
                                    format: 'quantity',
                                    formatConfig: '10',
                                    title: 'quantity',
                                },
                                {
                                    id: 'primitive:formats:resource',
                                    readonly: true,
                                    type: 'select',
                                    format: 'resource',
                                    referenceId: 'cards',
                                    title: 'Resource',
                                },
                                {
                                    id: 'formats:snils',
                                    readonly: true,
                                    type: 'text',
                                    title: 'Snils',
                                    format: 'snils',
                                },
                                {
                                    id: 'formats:inn:fiz',
                                    readonly: true,
                                    type: 'text',
                                    title: 'ИНН физлица',
                                    format: 'vat',
                                    formatConfig: 'person',
                                },
                                {
                                    id: 'formats:inn:org',
                                    readonly: true,
                                    type: 'text',
                                    title: 'ИНН юрлица',
                                    format: 'vat',
                                    formatConfig: 'organization',
                                },
                                {
                                    id: 'formats:date',
                                    readonly: true,
                                    type: 'text',
                                    title: 'Date',
                                    format: 'date',
                                },
                                {
                                    id: 'formats:year',
                                    readonly: true,
                                    type: 'text',
                                    title: 'Year',
                                    format: 'year',
                                },
                                {
                                    id: 'formats:month',
                                    readonly: true,
                                    type: 'text',
                                    format: 'month',
                                    title: 'Month',
                                },
                                {
                                    id: 'formats:quarter',
                                    readonly: true,
                                    type: 'text',
                                    format: 'quarter',
                                    title: 'Quarter',
                                },
                                {
                                    id: 'formats:time',
                                    readonly: true,
                                    type: 'text',
                                    format: 'time',
                                    title: 'Time',
                                },
                                {
                                    id: 'formats:email',
                                    readonly: true,
                                    type: 'text',
                                    format: 'email',
                                    title: 'E-mail',
                                },
                                {
                                    id: 'formats:card',
                                    readonly: true,
                                    type: 'text',
                                    title: 'Card',
                                    format: 'card',
                                }
                            ]
                        },
                        { ...WebEvents, events: [nextEvent, rollbackEvent] }
                    ],
                },
            ],
            references: {
                selectOptions: {
                    items: [
                        {
                            value: 'value1',
                            title: 'Опция 1'
                        },
                        {
                            value: 'value2',
                            title: 'Опция 2'
                        },
                        {
                            value: 'value3',
                            title: 'Опция 3'
                        }
                    ]
                },
                cards: {
                    items: [
                        {
                            title: 'Цель образование',
                            value: '14592',
                            properties: {
                                number: '**** 14592',
                                category: 'goal',
                                style: 'goal:education',
                                unavailable: false,
                                amount: '1252.47',
                                measureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'Цель финансовый резерв',
                            value: '14594',
                            properties: {
                                number: '**** 14594',
                                category: 'goal',
                                style: 'goal:reserve',
                                unavailable: false,
                                amount: '1252.47',
                                measureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'Цель ремонт',
                            value: '14595',
                            properties: {
                                number: '**** 14595',
                                category: 'goal',
                                style: 'goal:renovation',
                                unavailable: false,
                                amount: '1252.47',
                                measureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'Цель отдых',
                            value: '14596',
                            properties: {
                                number: '**** 14596',
                                category: 'goal',
                                style: 'goal:vacation',
                                unavailable: false,
                                amount: '1252.47',
                                measureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'Цель бытовая техника',
                            value: '14597',
                            properties: {
                                number: '**** 14597',
                                category: 'goal',
                                style: 'goal:appliance',
                                unavailable: false,
                                amount: '1252.47',
                                measureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'Цель мебель',
                            value: '14598',
                            properties: {
                                number: '**** 14598',
                                category: 'goal',
                                style: 'goal:furniture',
                                unavailable: false,
                                amount: '1252.47',
                                measureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'Цель свое дело',
                            value: '14599',
                            properties: {
                                number: '**** 14599',
                                category: 'goal',
                                style: 'goal:business',
                                unavailable: false,
                                amount: '1252.47',
                                measureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'Цель недвижимость',
                            value: '14590',
                            properties: {
                                number: '**** 14590',
                                category: 'goal',
                                style: 'goal:estate',
                                unavailable: false,
                                amount: '1252.47',
                                measureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'Цель праздники',
                            value: '14511',
                            properties: {
                                number: '**** 14511',
                                category: 'goal',
                                style: 'goal:holidays',
                                unavailable: false,
                                amount: '1252.47',
                                measureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'Цель авто',
                            value: '14593',
                            properties: {
                                number: '**** 14593',
                                category: 'goal',
                                style: 'goal:auto',
                                unavailable: false,
                                amount: '1252.47',
                                measureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'Цель другая',
                            value: '14512',
                            properties: {
                                number: '**** 14512',
                                category: 'goal',
                                style: 'goal:other',
                                unavailable: false,
                                amount: '1252.47',
                                measureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'Visa',
                            value: '01501',
                            properties: {
                                alias: 'Моя обеденная карта',
                                number: '**** 7486',
                                category: 'card',
                                style: 'card:visa',
                                unavailable: false,
                                amount: '12000.85',
                                measureUnit: 'EUR',
                                asideTitle: '=',
                                asideAmount: '25871.45',
                                asideMeasureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'American Express',
                            value: '01500',
                            properties: {
                                alias: 'Моя зарплатная карта',
                                number: '**** 7485',
                                category: 'card',
                                style: 'card:amex',
                                unavailable: false,
                                amount: '1200.85',
                                measureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'Maestro',
                            value: '01507',
                            properties: {
                                number: '**** 7487',
                                category: 'card',
                                style: 'card:maestro',
                                unavailable: false,
                                amount: '587.85',
                                measureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'Master Card',
                            value: '01502',
                            properties: {
                                number: '**** 7482',
                                category: 'card',
                                style: 'card:mastercard',
                                unavailable: false,
                                amount: '484.85',
                                measureUnit: 'USD',
                                asideTitle: '=',
                                asideAmount: '5871.45',
                                asideMeasureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'Универсальная Электронная Карта',
                            value: '01508',
                            properties: {
                                alias: 'Моя обеденная карта',
                                number: '**** 7488',
                                category: 'card',
                                style: 'card:uec',
                                unavailable: false,
                                amount: '1200.00',
                                measureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'ПРО100',
                            value: '01100',
                            properties: {
                                alias: 'Моя обеденная карта',
                                number: '**** 7100',
                                category: 'card',
                                style: 'card:pro100',
                                unavailable: false,
                                amount: '100.00',
                                measureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'Виртуальная карта',
                            value: '01522',
                            properties: {
                                alias: 'Покупки в интернете',
                                number: '**** 7422',
                                category: 'card',
                                style: 'card:virtual',
                                unavailable: false,
                                amount: '12000.85',
                                measureUnit: 'USD',
                                asideTitle: '=',
                                asideAmount: '25871.45',
                                asideMeasureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'Металл золото',
                            value: '147851',
                            properties: {
                                number: '147851',
                                category: 'metal',
                                style: 'metal:au',
                                unavailable: false,
                                amount: '785.45',
                                measureUnit: 'XAU',
                                asideTitle: '=',
                                asideAmount: '25871.45',
                                asideMeasureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'Металл серебро',
                            value: '147852',
                            properties: {
                                number: '147852',
                                category: 'metal',
                                style: 'metal:ag',
                                unavailable: false,
                                amount: '748.45',
                                measureUnit: 'XAG',
                                asideTitle: '=',
                                asideAmount: '14521.45',
                                asideMeasureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'Металл палладий',
                            value: '147854',
                            properties: {
                                number: '147854',
                                category: 'metal',
                                style: 'metal:pd',
                                unavailable: false,
                                amount: '59841.45',
                                measureUnit: 'XPD',
                                asideTitle: '=',
                                asideAmount: '141415.25',
                                asideMeasureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'Кредит на автомобиль',
                            value: '147414',
                            properties: {
                                number: '147414',
                                category: 'loan',
                                style: 'loan:auto',
                                unavailable: false,
                                amount: '800000.00',
                                measureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'МИР',
                            value: '01503',
                            properties: {
                                number: '**** 7483',
                                category: 'card',
                                style: 'card:mir',
                                unavailable: false,
                                amount: '120.85',
                                measureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'Кобрендинговая карта Visa и МИР',
                            value: '1',
                            properties: {
                                number: '**** 7485',
                                category: 'card',
                                style: 'card:visa-mir',
                                unavailable: true,
                                amount: '10.55',
                                measureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'Кобрендинговая карта Mastercard и МИР',
                            value: '01505',
                            properties: {
                                number: '**** 7485',
                                category: 'card',
                                style: 'card:mastercard-mir',
                                unavailable: false,
                                amount: '8595.14',
                                measureUnit: 'RUB',
                                asideTitle: 'Комиссия',
                                asideAmount: '25871.45',
                                asideMeasureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'Металл платина',
                            value: '147853',
                            properties: {
                                number: '147853',
                                category: 'metal',
                                style: 'metal:pt',
                                unavailable: false,
                                amount: '154.00',
                                measureUnit: 'XPT',
                                asideTitle: '=',
                                asideAmount: '1256.45',
                                asideMeasureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'Кредит потребительский',
                            value: '147415',
                            properties: {
                                number: '147415',
                                category: 'loan',
                                style: 'loan:consumer',
                                unavailable: false,
                                amount: '59841.45',
                                measureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'Ипотека',
                            value: '147418',
                            properties: {
                                number: '147418',
                                category: 'loan',
                                style: 'loan:mortgage',
                                unavailable: false,
                                amount: '1200000.00',
                                measureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'Счет №1254',
                            value: '47238',
                            properties: {
                                alias: 'Коплю на яхту',
                                number: '342 92 783 8 273482347238',
                                category: 'deposit',
                                unavailable: false,
                                amount: '500000.00',
                                measureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'Счет №1254',
                            value: '41478',
                            properties: {
                                alias: 'Коплю на заграницу',
                                number: '342 92 783 8 273482341478',
                                category: 'deposit',
                                unavailable: false,
                                amount: '5000.00',
                                measureUnit: 'EUR',
                                asideTitle: '=',
                                asideAmount: '14115.25',
                                asideMeasureUnit: 'RUB'
                            }
                        },
                        {
                            title: 'Оформи новую карту МИР!',
                            value: '14157',
                            properties: {
                                number: '**** 1415',
                                category: 'offer',
                                style: 'card:mir',
                                unavailable: false
                            }
                        }
                    ]
                },
            },
            progress: {
                range: 8,
                position: 2
            }
        }
    },
    step3: {
        events: {
            next: {
                to: 'step4'
            },
            rollback: {
                to: 'step2'
            },
        },
        data: {
            screens: [
                {
                    header: [
                        {
                            type: 'WebBanner',
                            properties: {
                                level: 'success',
                                actionsReferenceId: 'bannerText',
                                imageName: 'Cards',
                                mobileImageName: 'Cards'
                            },
                            title: 'Баннер в секции header',
                            description: 'Ориентир на потенциальную доходность на 10% годовых выше ставки.'
                        }
                    ],
                    widgets: [
                        {
                            type: 'WebBanner',
                            properties: {
                                level: 'info',
                                actionsReferenceId: 'bannerLink',
                                imageName: 'Female-Macaroons-01',
                                mobileImageName: 'Female-Macaroons-02'
                            },
                            title: 'Баннер в начале widgets',
                            description: 'Кредитная нагрузка не будет превышена. Высокая вероятность одобрения'
                        },
                        {
                            type: 'CoreFieldset',
                            fields: [
                                {
                                    id: 'format:integer',
                                    type: 'text',
                                    title: 'Филд1',
                                    format: 'integer',
                                },
                                {
                                    id: 'format:integer2',
                                    type: 'text',
                                    title: 'Филд2',
                                    format: 'integer',
                                }
                            ]
                        },
                        {
                            type: 'WebBanner',
                            properties: {
                                level: 'warning',
                                actionsReferenceId: 'bannerAction',
                                imageName: 'Female-Checklist-01',
                                mobileImageName: 'Female-Checklist-02'
                            },
                            title: 'Баннер в центре widgets',
                            description: 'Для завершения оформления кредита необходимо посетить офис банка и предоставить паспорт'
                        },
                        {
                            type: 'CoreFieldset',
                            fields: [
                                {
                                    id: 'format:integer:3',
                                    type: 'text',
                                    title: 'Филд3',
                                    format: 'integer',
                                },
                                {
                                    id: 'format:integer:4',
                                    type: 'text',
                                    title: 'Филд4',
                                    format: 'integer',
                                }
                            ]
                        },
                        { ...WebEvents, events: [nextEvent, rollbackEvent] },
                        {
                            type: 'WebBanner',
                            properties: {
                                level: 'error',
                                actionsReferenceId: 'bannerLink2',
                                imageName: 'Male-Watering-Can-01',
                                mobileImageName: 'Male-Watering-Can-03'
                            },
                            title: 'Баннер в конце widgets',
                            description: 'Пока вы заполняете анкету, мы вырастим за вас дерево и построим дом. Но с сыном придётся разбираться самим.'
                        }
                    ]
                }
            ],
            references: {
                bannerLink: {
                    items: [
                        {
                            title: 'Дайте два!',
                            value: 'link',
                            properties: {
                                uri: 'https://sberbank.ru',
                                icon: 'icon:core/resource/vacation',
                                event: 'my-custom-event'
                            }
                        }
                    ]
                },
                bannerText: {
                    items: [
                        {
                            title: 'Вероятность одобрения',
                            value: 'text',
                            properties: {
                                icon: 'icon:core/common/alert-success'
                            }
                        }
                    ]
                },
                bannerAction: {
                    items: [
                        {
                            title: 'Найти отделение',
                            value: 'action',
                            properties: {
                                event: 'my-custom-event',
                                icon: 'icon:core/operations/payandtrasf-sberbank'
                            }
                        }
                    ]
                },
                bannerLink2: {
                    items: [
                        {
                            title: 'Ознакомиться',
                            value: 'link',
                            properties: {
                                uri: '/user/personal',
                                icon: 'icon:core/resource/vacation',
                                event: 'my-custom-event'
                            }
                        }
                    ]
                }
            },
            progress: {
                range: 8,
                position: 3
            }
        }
    },
    step4: {
        events: {
            next: {
                to: 'step5'
            },
            rollback: {
                to: 'step3'
            },
            skip: {
                to: 'step5'
            }
        },
        data: {
            screens: [
                {
                    title: 'Количество путешественников',
                    description: 'Введите количество путешественников',
                    widgets: [
                        {
                            type: 'TravellersAmount',

                            fields: [
                                {
                                    id: 'insurance:tripDetails:adultsNumber',
                                    value: '1',
                                    type: 'text',
                                    format: 'quantity',
                                    formatConfig: '1',
                                    referenceId: '',
                                    title: 'Взрослые и дети',
                                    validators: [
                                        {
                                            type: 'minValue',
                                            value: '1',
                                            message: 'Минимум 1 взрослый'
                                        },
                                        {
                                            type: 'maxValue',
                                            value: '6',
                                            message: 'Максимум 6 взрослых'
                                        }
                                    ]
                                },
                                {
                                    id: 'insurance:tripDetails:babies',
                                    value: '3',
                                    type: 'text',
                                    format: 'quantity',
                                    formatConfig: '1',
                                    referenceId: '',
                                    title: 'Младенцы',
                                    validators: [
                                        {
                                            type: 'minValue',
                                            value: '2',
                                            message: 'Минимум 2'
                                        },
                                        {
                                            type: 'maxValue',
                                            value: '4',
                                            message: 'Максимум 4'
                                        }
                                    ]
                                },
                                {
                                    id: 'insurance:tripDetails:seniors',
                                    value: '0',
                                    type: 'text',
                                    format: 'quantity',
                                    formatConfig: '1',
                                    referenceId: '',
                                    title: 'Старший возраст',
                                    validators: [
                                        {
                                            type: 'minValue',
                                            value: '0',
                                            message: 'Минимум 0'
                                        },
                                        {
                                            type: 'maxValue',
                                            value: '2',
                                            message: 'Максимум 2'
                                        }
                                    ]
                                }
                            ]
                        },
                        { ...WebEvents, events: [rollbackEvent, nextEvent, skipEvent] }
                    ]
                }
            ],
            references: {
                regions: {
                    items: [
                        {
                            value: 'Шенген',
                            title: 'Шенген'
                        },
                        {
                            value: 'Турция',
                            title: 'Турция'
                        },
                        {
                            value: 'Египет',
                            title: 'Египет'
                        }
                    ]
                }
            },
            progress: {
                range: 8,
                position: 4
            }
        }
    },
    step5: {
        events: {
            next: {
                to: 'step6'
            },
            rollback: {
                to: 'step4'
            }
        },
        data: {
            screens: [
                {
                    title: 'Сумма страховой защиты',
                    description: 'Сумма страховой защиты',
                    widgets: [
                        {
                            type: 'Select',

                            fields: [
                                {
                                    id: 'insurance:amount:amount',
                                    value: '',
                                    type: 'select',
                                    referenceId: 'amountOptions',
                                    title: 'Сумма страховой защиты',

                                }
                            ]
                        },
                        { ...WebEvents, events: [nextEvent, rollbackEvent] }
                    ]
                }
            ],
            references: {
                amountOptions: {

                    items: [
                        {
                            value: 'Минимальная',
                            title: 'Минимальная'
                        },
                        {
                            value: 'Достаточная',
                            title: 'Достаточная'
                        },
                        {
                            value: 'Максимальная',
                            title: 'Максимальная'
                        }
                    ]
                }
            },
            progress: {
                range: 8,
                position: 5
            }
        }
    },
    step6: {
        events: {
            next: {
                to: 'step7'
            },
            skip: {
                to: 'step7'
            },
            rollback: {
                to: 'step5'
            }
        },
        data: {
            screens: [
                {
                    title: 'Дополнительные опции',
                    description: 'Дополнительные опции',
                    widgets: [
                        {
                            type: 'Fieldset',

                            fields: [
                                {
                                    id: 'insurance:options:sport',
                                    value: 'Защита багажа',
                                    type: 'select',
                                    referenceId: 'insuranceOptions',
                                    title: 'Опции',

                                }
                            ]
                        },
                        { ...WebEvents, events: [rollbackEvent, nextEvent, skipEvent] }
                    ]
                }
            ],
            references: {
                insuranceOptions: {

                    items: [
                        {
                            value: 'Спорт',
                            title: 'Спорт'
                        },
                        {
                            value: 'Защита багажа',
                            title: 'Защита багажа'
                        },
                        {
                            value: 'Особый случай',
                            title: 'Особый случай'
                        },
                        {
                            value: 'Личный адвокат',
                            title: 'Личный адвокат'
                        }
                    ]
                }
            },
            progress: {
                range: 8,
                position: 6
            }
        }
    },
    step7: {
        events: {
            next: {
                to: 'step8'
            },
            rollback: {
                to: 'step6'
            }
        },
        data: {
            screens: [
                {
                    title: 'Страхователь',
                    description: '',
                    widgets: [
                        {
                            type: 'Email',

                            fields: [
                                {
                                    id: 'insurance:insurant:email',
                                    value: '',
                                    type: 'text',
                                    referenceId: '',
                                    title: 'E-mail для получения полиса',

                                }
                            ]
                        },
                        { ...WebEvents, events: [nextEvent, rollbackEvent] }
                    ]
                }
            ],
            progress: {
                range: 8,
                position: 7
            }
        }
    },
    step8: {
        events: {
            next: {
                to: 'completion',
            },
            rollback: {
                to: 'step6'
            }
        },
        data: {
            screens: [{
                title: 'Widgets | Summary',
                description: '',
                widgets: [
                    {
                        type: 'Summary',
                        title: 'Основная информация',
                        properties: {
                            collapsed: true,
                        },
                        fields: [
                            {
                                id: 'draft:main:gender',
                                value: '0',
                                type: 'text',
                                referenceId: 'gender',
                                title: 'Пол',

                            }
                        ]
                    },
                    {
                        type: 'Summary',
                        title: 'Summary step 1',
                        properties: {
                            collapsed: true,
                            stepId: 'step1'
                        },
                        description: 'Summary',
                        fields: [
                            {
                                id: 'insurance:tripDetails:region',
                                value: '',
                                type: 'text',
                                referenceId: 'regions',
                                title: 'Регион',

                            },
                            {
                                id: 'insurance:tripDetails:date:from',
                                value: '',
                                type: 'text',
                                style: 'plain',
                                referenceId: '',
                                title: 'Даты поездки',

                            },
                            {
                                id: 'insurance:tripDetails:date:till',
                                value: '',
                                type: 'text',
                                style: 'plain',
                                referenceId: '',
                                title: 'Даты поездки',

                            },
                            {
                                id: 'insurance:tripDetails:country',
                                value: '',
                                type: 'text',
                                referenceId: 'countries',
                                title: 'Страна',

                            }
                        ]
                    },
                    {
                        type: 'Summary',
                        title: 'Summary step 3',
                        properties: {
                            collapsed: true,
                            stepId: 'step3'
                        },
                        description: 'Summary',
                        fields: [
                            {
                                id: 'insurance:tripDetails:adultsNumber',
                                value: '',
                                type: 'text',
                                referenceId: '',
                                title: 'Взрослые и дети',

                            },
                            {
                                id: 'insurance:tripDetails:babies',
                                value: '',
                                type: 'text',
                                referenceId: '',
                                title: 'Младенцы',

                            },
                            {
                                id: 'insurance:tripDetails:seniors',
                                value: '',
                                type: 'text',
                                referenceId: '',
                                title: 'Старший возраст',

                            }

                        ]
                    },
                    {
                        type: 'Summary',
                        title: 'Currency Summary',
                        properties: {
                            collapsed: false,
                            stepId: 'step1',
                        },
                        description: 'My Currency Summary',
                        fields: [
                            {
                                id: 'summary:first:something',
                                type: 'text',
                                value: 'Lorem ipsum dolor sit amet',
                                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                                referenceId: '',
                                title: 'Input Label 2 Lines Input Label 2 Lines Input Label 2 Lines',
                                readonly: true,

                            },
                            {
                                id: 'summary:third:card',
                                value: '01503',
                                type: 'text',
                                style: 'resource',
                                referenceId: 'cards',
                                title: 'Источник',
                                readonly: true,

                            },
                            {
                                id: 'summary:third:whatever',
                                type: 'text',
                                style: 'currency',
                                value: '04242',
                                description: '',
                                referenceId: 'debit',
                                title: 'Будет списано',

                            },
                            {
                                id: 'summary:third:who:is:there',
                                type: 'text',
                                style: 'currency',
                                value: '04243',
                                referenceId: 'debit',
                                title: 'Будет списано ',

                            },
                            {
                                id: 'summary:third:something',
                                type: 'text',
                                style: 'currency',
                                value: '04244',
                                description: '',
                                referenceId: 'debit',
                                title: 'Будет списано',

                            },
                            {
                                id: 'summary:third:nothing',
                                type: 'text',
                                style: 'currency',
                                value: '04245',
                                description: '',
                                referenceId: 'debit',
                                title: 'Будет списано',

                            },
                            {
                                id: 'summary:third:something:else',
                                type: 'text',
                                style: 'currency',
                                value: '04246',
                                description: '',
                                referenceId: 'debit',
                                title: 'Будет списано',

                            },
                            {
                                id: 'summary:third:links:0',
                                type: 'text',
                                style: 'link',
                                value: '/api/dictionaries/agreement-pdf',
                                description: 'Просто ссылка',
                                title: 'Ссылки',
                                readonly: true,

                            },
                            {
                                id: 'summary:third:links:1',
                                type: 'text',
                                style: 'link',
                                value: 'https://google.com',
                                description: 'Внешняя ссылка',
                                title: '',
                                readonly: true,

                            },
                            {
                                id: 'summary:third:links:2',
                                type: 'text',
                                style: 'link pdf',
                                value: '/api/dictionaries/agreement-pdf',
                                description: 'Условия обслуживания.pdf',
                                title: '',
                                readonly: true,

                            },
                            {
                                id: 'summary:third:links:3',
                                type: 'text',
                                style: 'link pdf',
                                value: '/api/dictionaries/agreement-pdf',
                                description: 'Договор банковского обслуживания.pdf',
                                title: '',
                                readonly: true,

                            },
                            {
                                id: 'summary:third:links:4',
                                type: 'text',
                                style: 'link word',
                                value: '/api/dictionaries/agreement-pdf',
                                description: 'Шаблон заявления, допустим.docx',
                                title: '',
                                readonly: true,

                            },
                            {
                                id: 'summary:third:hint',
                                type: 'text',
                                style: 'hint',
                                value: 'Мои данные изменились',
                                description: '',
                                referenceId: 'tooltipChange',
                                title: '',
                                readonly: true,

                            },
                        ]
                    },
                    { ...WebEvents, events: [nextEvent, rollbackEvent] }
                ]
            }],
            references: {
                gender: {
                    items: [
                        {
                            value: '0',
                            title: 'Мужской'
                        },
                        {
                            value: '1',
                            title: 'Женский'
                        }
                    ]
                },
                cards: {
                    items: [
                        {
                            title: 'Master Card',
                            value: '01503',
                            properties: {
                                alias: 'Моя обеденная карта',
                                number: '**** 7482',
                                category: 'card',
                                style: 'card:mastercard',
                            }
                        }
                    ]
                },
                debit: {
                    items: [
                        {
                            title: '00,00',
                            value: '04242'
                        },
                        {
                            title: '100,01',
                            value: '04243',
                            properties: {
                                comission: 'none',
                            }
                        },
                        {
                            title: '100,00',
                            value: '04244',
                            properties: {
                                currency: 'RUB',
                                comission: 'pending',
                            }
                        },
                        {
                            title: '100,00',
                            value: '04245',
                            properties: {
                                currency: 'USD',
                                comission: 'error',
                            }
                        },
                        {
                            title: '100,00',
                            value: '04246',
                            properties: {
                                currency: 'EUR',
                                comission: 'success',
                                value: '42'
                            }
                        },

                    ]
                },
                tooltipChange: {
                    items: [
                        {
                            title: 'Подсказонька 1',
                            value: 'Логично было бы предположить, что кнопочка "Изменить" вверху как бы неявно намекает на возможность вернуться к данным и изменить их при необходимости',
                        },
                        {
                            title: 'Подсказонька 2',
                            value: 'Можно попробовать отправить данные "как есть". При этом существует вероятность наступления нежелательных событий, но кто же об этом задумывается. Как говорится -  ["Это проблемы будущего Гомера"](https://www.youtube.com/watch?v=mS9LCR5P5wI) ',
                        },
                        {
                            title: 'Подсказонька 3',
                            value: 'А давайте перейдем на какую-нибудь [внутреннюю ссылку](/foo/bar) ',
                        }
                    ]
                }
            },
            progress: {
                range: 8,
                position: 8
            }
        }
    },
    completion: {
        data: {
            screens: [
                {
                    header: [
                        {
                            type: 'WebStatusHeadline',
                            title: 'Спасибо, услуга оформлена',
                            properties: {
                                level: 'done'
                            }
                        },
                        {
                            type: 'WebComingNext',
                            title: 'Coming Next',
                            description: 'Description',
                            fields: [
                                {
                                    id: 'comingnext:0',
                                    type: 'text',
                                    title: 'Мы пришлём вам уведомление о результатах обработки',
                                    value: 'Также, вы можете отслеживать статус заявки в разделе «История»',
                                    readonly: true
                                },
                                {
                                    id: 'comingnext:1',
                                    type: 'text',
                                    value: 'Документы по операции отправлены на __kolosov.p.o@mail.ru__',
                                    readonly: true
                                }
                            ]
                        },
                        {
                            type: 'WebProductDescription',
                            title: 'Default WebProductDescription',
                            description: 'Заказывайте скорее!',
                            properties: {
                                productFeaturesReferenceId: 'aeroflotBonusFeatures'
                            }
                        },
                        {
                            type: 'WebFastActions',
                            properties: {
                                reference: 'fastActions'
                            }
                        },
                    ]
                }],
            references: {
                aeroflotBonusFeatures: {
                    items: [
                        {
                            title: 'Приветственные мили',
                            value: 'miles',
                            properties: {
                                type: 'single',
                                single: '500',
                                unit: 'миль'
                            }
                        },
                        {
                            title: 'PayWave',
                            value: 'contactless',
                            properties: {
                                type: 'single',
                                single: '1 500 000',
                                unit: 'руб.'
                            }
                        }
                    ]
                },
                fastActions: {
                    items: [
                        {
                            value: 'reload',
                            title: 'Перезагрузить страницу',
                            properties: {
                                icon: 'icon:core/product-status/reload'
                            }
                        },
                        {
                            value: 'alert',
                            title: 'Оформить',
                            properties: {
                                icon: 'icon:core/products/loan-auto'
                            }
                        },
                        {
                            value: 'timer',
                            title: 'ПУСК!',
                            properties: {
                                description: 'Кнопка будет доступна после окончания таймера',
                                icon: 'icon:core/products/target-holidays',
                                type: 'timer',
                                initialTimer: '60',
                                timer: '120',
                            }
                        },
                    ]
                }
            }
        }
    }
}

const params = {
    states,
    start: 'step1',
    end: ['completion']
}

module.exports = params
