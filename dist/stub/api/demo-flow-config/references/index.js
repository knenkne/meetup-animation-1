module.exports = {
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
    actions: {
        items: [
            {
                title: 'Подробнее',
                value: 'description'
            },
            {
                title: 'Подробнее об операции',
                value: 'details',
                properties: {
                    icon: 'image:core/status/details',
                    description: 'Сохранить и отправить чек'
                }
            },
            {
                title: 'Сохранить и отправить чек',
                value: 'print',
                properties: {
                    icon: 'image:core/status/print',
                    uri: 'https://web.payments.greenfield2.online.sberbank.ru/payments/v1/banking/services/payments/print'
                }
            },
            {
                title: 'Сохранить в шаблоны',
                value: 'switch',
                properties: {
                    false: 'image:core/status/unfavourited',
                    true: 'image:core/status/favourited',
                    state: false,
                    uri: 'https://web.payments.greenfield2.online.sberbank.ru/payments/v1/banking/services/payments/favourite'
                }
            },
            {
                title: 'Подключить автоплатёж',
                value: 'link',
                properties: {
                    icon: 'image:core/status/recurrent',
                    uri: 'https://app.online.sberbank.ru/payments/recurrent?scrDocumentId=1234567'
                }
            },
            {
                title: 'Аналитика платежа',
                value: 'link',
                properties: {
                    icon: 'image:core/pfm/status',
                    uri: 'https://app.online.sberbank.ru/pfm?show=1234567'
                }
            }
        ]
    },
    cardsOnly: {
        items: [
            {
                title: 'МИР',
                value: '1',
                properties: {
                    number: '**** 7483',
                    category: 'card',
                    style: 'card:mir',
                    amount: '120.85',
                    measureUnit: 'RUB'
                }
            },
            {
                title: 'МИР',
                value: '2',
                properties: {
                    number: '**** 7484',
                    category: 'card',
                    style: 'card:mir',
                    amount: '120.85',
                    measureUnit: 'RUB'
                }
            },
            {
                title: 'МИР',
                value: '3',
                properties: {
                    number: '**** 7485',
                    category: 'card',
                    style: 'card:mir',
                    amount: '120.85',
                    measureUnit: 'RUB'
                }
            },
            {
                title: 'Кобрендинговая карта Master Card и МИР',
                value: '4',
                properties: {
                    number: '**** 7476',
                    category: 'card',
                    style: 'card:mastercard-mir',
                    amount: '120.85',
                    measureUnit: 'RUB'
                }
            },
            {
                title: 'Кобрендинговая карта Visa и МИР',
                value: '5',
                properties: {
                    number: '**** 7487',
                    category: 'card',
                    style: 'card:visa-mir',
                    amount: '10.55',
                    measureUnit: 'RUB'
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
                title: 'Сделать алерт',
                properties: {
                    icon: 'icon:core/products/loan-auto'
                }
            },
            {
                value: 'alert',
                title: 'Сделать алерт2',
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
    },
    fastActions2: {
        items: [
            {
                value: 'dispatch',
                title: 'Dispatch action',
                properties: {
                    icon: 'icon:core/cards/visa-signature-32'
                }
            },
            {
                value: 'link',
                title: 'Перейти на Госуслуги',
                properties: {
                    icon: 'icon:core/cars/lamborghini',
                    href: 'http://gosuslugi.ru/',
                    external: true
                }
            },
        ]
    },
    fastActions3: {
        items: [
            {
                title: 'Омскгоргаз',
                value: '',
                properties: {
                    description: 'Оплатить',
                    icon: 'icon:core/products/target-other',
                    href: '/catalog',
                }
            },
        ]
    },
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
    },
    stages: {
        items: [
            {
                title: 'Выбор условий кредита',
                value: 'progress'
            },
            {
                title: 'Ознакомление и подтверждение',
                value: ''
            },
            {
                title: 'Подтверждение условий',
                value: ''
            },
        ]
    }
}
