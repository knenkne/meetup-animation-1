const _ = require('lodash')
const { Icon } = require('@sbol/lib.ui')
const flag = 'icon:core/countries/phl'

export const countries = [{
    title: 'IRAN (ISLAMIC REPUBLIC OF)',
    value: 'IRAN (ISLAMIC REPUBLIC OF)',
    properties: {
        titleRus: '+Исламская Республика Иран',
        alias: 'ИРАН, ИСЛАМСКАЯ РЕСПУБЛИКА',
        // ISO2: 'IR',
        flag
    }
}, {
    title: 'ICELAND',
    value: 'ICELAND:value',
    properties: {
        titleRus: '\Республика Исландия',
        alias: 'ИСЛАНДИЯ',
        // ISO2: 'IS',
        flag
    }
}, {
    title: 'ITALY',
    value: 'ITALY:value',
    properties: {
        titleRus: '/Итальянская Республика',
        alias: 'ИТАЛИЯ',
        // ISO2: 'IT',
    flag,
    }
}, {
    title: 'JERSEY',
    value: 'JERSEY:value',
    properties: {
        titleRus: null,
        alias: 'ДЖЕРСИ',
        // ISO2: 'JE',
        flag
    }
}, {
    title: 'JAMAICA',
    value: 'JAMAICA:value',
    properties: {
        titleRus: null,
        alias: 'ЯМАЙКА',
        // ISO2: 'JM',
        flag
    }
}, {
    title: 'JORDAN',
    value: 'JORDAN:value',
    properties: {
        titleRus: 'Иорданское Хашимитское Королевство',
        alias: 'ИОРДАНИЯ',
        // ISO2: 'JO',
        flag
    }
}, {
    title: 'JAPAN',
    value: 'JAPAN:value',
    properties: {
        titleRus: null,
        alias: 'ЯПОНИЯ',
        // ISO2: 'JP',
        flag
    }
}, {
    title: 'KENYA',
    value: 'KENYA:value',
    properties: {
        titleRus: 'Республика Кения',
        alias: 'КЕНИЯ',
        // ISO2: 'KE',
        flag
    }
}, {
    title: 'KYRGYZSTAN',
    value: 'KYRGYZSTAN:value',
    properties: {
        titleRus: 'Киргизская Республика',
        alias: 'КИРГИЗИЯ',
        // ISO2: 'KG',
        flag
    }
}, {
    title: 'CAMBODIA',
    value: 'CAMBODIA:value',
    properties: {
        titleRus: 'Королевство Камбоджа',
        alias: 'КАМБОДЖА',
        // ISO2: 'KH',
        flag
    }
}, {
    title: 'KIRIBATI',
    value: 'KIRIBATI:value',
    properties: {
        titleRus: 'Республика Кирибати',
        alias: 'КИРИБАТИ',
        // ISO2: 'KI',
        flag
    }
}, {
    title: 'COMOROS',
    value: 'COMOROS:value',
    properties: {
        titleRus: 'Союз Коморы',
        alias: 'КОМОРЫ',
        // ISO2: 'KM',
        flag
    }
}, {
    title: 'SAINT KITTS AND NEVIS',
    value: 'SAINT KITTS AND NEVIS:value',
    properties: {
        titleRus: null,
        alias: 'СЕНТ-КИТС И НЕВИС',
        // ISO2: 'KN',
        flag
    }
}, {
    title: 'KOREA (DEMOCRATIC PEOPLE\'S REPUBLIC OF)',
    value: 'KOREA (DEMOCRATIC PEOPLE\'S REPUBLIC OF)',
    properties: {
        titleRus: 'Корейская Народно-Демократическая Республика',
        alias: 'КОРЕЯ, НАРОДНО-ДЕМОКРАТИЧЕСКАЯ РЕСПУБЛИКА',
        // ISO2: 'KP',
        flag
    }
}, {
    title: 'KOREA, REPUBLIC OF',
    value: 'KOREA, REPUBLIC OF',
    properties: {
        titleRus: 'Республика Корея',
        alias: 'КОРЕЯ, РЕСПУБЛИКА',
        // ISO2: 'KR',
        flag
    }
}, {
    title: 'KUWAIT',
    value: 'KUWAIT:value',
    properties: {
        titleRus: 'Государство Кувейт',
        alias: 'КУВЕЙТ',
        // ISO2: 'KW',
        flag
    }
}, {
    title: 'CAYMAN ISLANDS',
    value: 'CAYMAN ISLANDS:value',
    properties: {
        titleRus: null,
        alias: 'ОСТРОВА КАЙМАН',
        // ISO2: 'KY',
        flag
    }
}, {
    title: 'KAZAKHSTAN',
    value: 'KAZAKHSTAN:value',
    properties: {
        titleRus: 'Республика Казахстан',
        alias: 'КАЗАХСТАН',
        // ISO2: 'KZ',
        flag
    }
}, {
    title: 'LAO PEOPLE\'S DEMOCRATIC REPUBLIC',
    value: 'LAO PEOPLE\'S DEMOCRATIC REPUBLIC',
    properties: {
        titleRus: null,
        alias: 'ЛАОССКАЯ НАРОДНО-ДЕМОКРАТИЧЕСКАЯ РЕСПУБЛИКА',
        // ISO2: 'LA',
        flag
    }
}, {
    title: 'LEBANON',
    value: 'LEBANON:value',
    properties: {
        titleRus: 'Ливанская Республика',
        alias: 'ЛИВАН',
        // ISO2: 'LB',
        flag
    }
}, {
    title: 'SAINT LUCIA',
    value: 'SAINT LUCIA:value',
    properties: {
        titleRus: null,
        alias: 'СЕНТ-ЛЮСИЯ',
        // ISO2: 'LC',
        flag
    }
}, {
    title: 'LIECHTENSTEIN',
    value: 'LIECHTENSTEIN:value',
    properties: {
        titleRus: 'Княжество Лихтенштейн',
        alias: 'ЛИХТЕНШТЕЙН',
        // ISO2: 'LI',
        flag
    }
}, {
    title: 'SRI LANKA',
    value: 'SRI LANKA:value',
    properties: {
        titleRus: 'Демократическая Социалистическая Республика Шри-Ланка',
        alias: 'ШРИ-ЛАНКА',
        // ISO2: 'LK',
        flag
    }
}, {
    title: 'LIBERIA',
    value: 'LIBERIA:value',
    properties: {
        titleRus: 'Республика Либерия',
        alias: 'ЛИБЕРИЯ',
        // ISO2: 'LR',
        flag
    }
}, {
    title: 'LESOTHO',
    value: 'LESOTHO:value',
    properties: {
        titleRus: 'Королевство Лесото',
        alias: 'ЛЕСОТО',
        // ISO2: 'LS',
        flag
    }
}, {
    title: 'LITHUANIA',
    value: 'LITHUANIA:value',
    properties: {
        titleRus: 'Литовская Республика',
        alias: 'ЛИТВА',
        // ISO2: 'LT',
        flag
    }
}, {
    title: 'LUXEMBOURG',
    value: 'LUXEMBOURG:value',
    properties: {
        titleRus: 'Великое Герцогство Люксембург',
        alias: 'ЛЮКСЕМБУРГ',
        // ISO2: 'LU',
        flag
    }
}, {
    title: 'LATVIA',
    value: 'LATVIA:value',
    properties: {
        titleRus: 'Латвийская Республика',
        alias: 'ЛАТВИЯ',
        // ISO2: 'LV',
        flag
    }
}, {
    title: 'LIBYA',
    value: 'LIBYA:value',
    properties: {
        titleRus: 'ЛИВИЯ',
        alias: 'ЛИВИЯ',
        // ISO2: 'LY',
        flag
    }
}, {
    title: 'MOROCCO',
    value: 'MOROCCO:value',
    properties: {
        titleRus: 'Королевство Марокко',
        alias: 'МАРОККО',
        // ISO2: 'MA',
        flag
    }
}, {
    title: 'MONACO',
    value: 'MONACO:value',
    properties: {
        titleRus: 'Княжество Монако',
        alias: 'МОНАКО',
        // ISO2: 'MC',
        flag
    }
}, {
    title: 'MOLDOVA, REPUBLIC OF',
    value: 'MOLDOVA, REPUBLIC OF',
    properties: {
        titleRus: 'Республика Молдова',
        alias: 'МОЛДОВА, РЕСПУБЛИКА',
        // ISO2: 'MD',
        flag
    }
}, {
    title: 'MONTENEGRO',
    value: 'MONTENEGRO:value',
    properties: {
        titleRus: null,
        alias: 'ЧЕРНОГОРИЯ',
        // ISO2: 'ME',
        flag
    }
}, {
    title: 'SAINT MARTIN (FRENCH PART)',
    value: 'SAINT MARTIN (FRENCH PART)',
    properties: {
        titleRus: 'Сен-Мартен',
        alias: 'СЕН-МАРТЕН',
        // ISO2: 'MF',
        flag
    }
}, {
    title: 'MADAGASCAR',
    value: 'MADAGASCAR:value',
    properties: {
        titleRus: 'Республика Мадагаскар',
        alias: 'МАДАГАСКАР',
        // ISO2: 'MG',
        flag
    }
}, {
    title: 'MARSHALL ISLANDS',
    value: 'MARSHALL ISLANDS:value',
    properties: {
        titleRus: 'Республика Маршалловы Острова',
        alias: 'МАРШАЛЛОВЫ ОСТРОВА',
        // ISO2: 'MH',
        flag
    }
}, {
    title: 'MACEDONIA,THE FORMER YUGOSLAV REPUBL. OF',
    value: 'MACEDONIA,THE FORMER YUGOSLAV REPUBL. OF',
    properties: {
        titleRus: 'РЕСПУБЛИКА МАКЕДОНИЯ',
        alias: 'РЕСПУБЛИКА МАКЕДОНИЯ',
        // ISO2: 'MK',
        flag
    }
}, {
    title: 'MALI',
    value: 'MALI:value',
    properties: {
        titleRus: 'Республика Мали',
        alias: 'МАЛИ',
        // ISO2: 'ML',
        flag
    }
}, {
    title: 'MYANMAR',
    value: 'MYANMAR:value',
    properties: {
        titleRus: 'Республика Союза Мьянма',
        alias: 'МЬЯНМА',
        // ISO2: 'MM',
        flag
    }
}, {
    title: 'MONGOLIA',
    value: 'MONGOLIA:value',
    properties: {
        titleRus: null,
        alias: 'МОНГОЛИЯ',
        // ISO2: 'MN',
        flag
    }
}, {
    title: 'MACAO',
    value: 'MACAO:value',
    properties: {
        titleRus: 'Специальный административный регион Китая Макао',
        alias: 'МАКАО',
        // ISO2: 'MO',
        flag
    }
}, {
    title: 'NORTHERN MARIANA ISLANDS',
    value: 'NORTHERN MARIANA ISLANDS:value',
    properties: {
        titleRus: 'Содружество Северных Марианских островов',
        alias: 'СЕВЕРНЫЕ МАРИАНСКИЕ ОСТРОВА',
        // ISO2: 'MP',
        flag
    }
}, {
    title: 'MARTINIQUE',
    value: 'MARTINIQUE:value',
    properties: {
        titleRus: null,
        alias: 'МАРТИНИКА',
        // ISO2: 'MQ',
        flag
    }
}, {
    title: 'MAURITANIA',
    value: 'MAURITANIA:value',
    properties: {
        titleRus: 'Исламская Республика Мавритания',
        alias: 'МАВРИТАНИЯ',
        // ISO2: 'MR',
        flag
    }
}, {
    title: 'MONTSERRAT',
    value: 'MONTSERRAT:value',
    properties: {
        titleRus: null,
        alias: 'МОНТСЕРРАТ',
        // ISO2: 'MS',
        flag
    }
}, {
    title: 'MALTA',
    value: 'MALTA:value',
    properties: {
        titleRus: 'Республика Мальта',
        alias: 'МАЛЬТА',
        // ISO2: 'MT',
        flag
    }
}, {
    title: 'MAURITIUS',
    value: 'MAURITIUS:value',
    properties: {
        titleRus: 'Республика Маврикий',
        alias: 'МАВРИКИЙ',
        // ISO2: 'MU',
        flag
    }
}, {
    title: 'MALDIVES',
    value: 'MALDIVES:value',
    properties: {
        titleRus: 'Мальдивская Республика',
        alias: 'МАЛЬДИВЫ',
        // ISO2: 'MV',
        flag
    }
}, {
    title: 'MALAWI',
    value: 'MALAWI:value',
    properties: {
        titleRus: 'Республика Малави',
        alias: 'МАЛАВИ',
        // ISO2: 'MW',
        flag
    }
}, {
    title: 'MEXICO',
    value: 'MEXICO:value',
    properties: {
        titleRus: 'Мексиканские Соединенные Штаты',
        alias: 'МЕКСИКА',
        // ISO2: 'MX',
        flag
    }
}, {
    title: 'MALAYSIA',
    value: 'MALAYSIA:value',
    properties: {
        titleRus: null,
        alias: 'МАЛАЙЗИЯ',
        // ISO2: 'MY',
        flag
    }
}, {
    title: 'MOZAMBIQUE',
    value: 'MOZAMBIQUE:value',
    properties: {
        titleRus: 'Республика Мозамбик',
        alias: 'МОЗАМБИК',
        // ISO2: 'MZ',
        flag
    }
}, {
    title: 'NAMIBIA',
    value: 'NAMIBIA:value',
    properties: {
        titleRus: 'Республика Намибия',
        alias: 'НАМИБИЯ',
        // ISO2: 'NA',
        flag
    }
}, {
    title: 'NEW CALEDONIA',
    value: 'NEW CALEDONIA:value',
    properties: {
        titleRus: null,
        alias: 'НОВАЯ КАЛЕДОНИЯ',
        // ISO2: 'NC',
        flag
    }
}, {
    title: 'NIGER',
    value: 'NIGER:value',
    properties: {
        titleRus: 'Республика Нигер',
        alias: 'НИГЕР',
        // ISO2: 'NE',
        flag
    }
}, {
    title: 'NORFOLK ISLAND',
    value: 'NORFOLK ISLAND:value',
    properties: {
        titleRus: null,
        alias: 'ОСТРОВ НОРФОЛК',
        // ISO2: 'NF',
        flag
    }
}, {
    title: 'NIGERIA',
    value: 'NIGERIA:value',
    properties: {
        titleRus: 'Федеративная Республика Нигерия',
        alias: 'НИГЕРИЯ',
        // ISO2: 'NG',
        flag
    }
}, {
    title: 'NICARAGUA',
    value: 'NICARAGUA:value',
    properties: {
        titleRus: 'Республика Никарагуа',
        alias: 'НИКАРАГУА',
        // ISO2: 'NI',
        flag
    }
}, {
    title: 'NETHERLANDS',
    value: 'NETHERLANDS:value',
    properties: {
        titleRus: 'Королевство Нидерландов',
        alias: 'НИДЕРЛАНДЫ',
        // ISO2: 'NL',
        flag
    }
}, {
    title: 'NORWAY',
    value: 'NORWAY:value',
    properties: {
        titleRus: 'Королевство Норвегия',
        alias: 'НОРВЕГИЯ',
        // ISO2: 'NO',
        flag
    }
}, {
    title: 'NEPAL',
    value: 'NEPAL:value',
    properties: {
        titleRus: 'Федеративная Демократическая Республика Непал',
        alias: 'НЕПАЛ',
        // ISO2: 'NP',
        flag
    }
}, {
    title: 'NAURU',
    value: 'NAURU:value',
    properties: {
        titleRus: 'Республика Науру',
        alias: 'НАУРУ',
        // ISO2: 'NR',
        flag
    }
}, {
    title: 'NIUE',
    value: 'NIUE:value',
    properties: {
        titleRus: 'НИУЭ',
        alias: 'НИУЭ',
        // ISO2: 'NU',
        flag
    }
}, {
    title: 'NEW ZEALAND',
    value: 'NEW ZEALAND:value',
    properties: {
        titleRus: null,
        alias: 'НОВАЯ ЗЕЛАНДИЯ',
        // ISO2: 'NZ',
        flag
    }
}, {
    title: 'OMAN',
    value: 'OMAN:value',
    properties: {
        titleRus: 'Султанат Оман',
        alias: 'ОМАН',
        // ISO2: 'OM',
        flag
    }
}, {
    title: 'OSETIA',
    value: 'OSETIA:value',
    properties: {
        titleRus: 'Республика Южная Осетия',
        alias: 'ЮЖНАЯ ОСЕТИЯ',
        // ISO2: 'OS',
        flag
    }
}, {
    title: 'PANAMA',
    value: 'PANAMA:value',
    properties: {
        titleRus: 'Республика Панама',
        alias: 'ПАНАМА',
        // ISO2: 'PA',
        flag
    }
}, {
    title: 'PERU',
    value: 'PERU:value',
    properties: {
        titleRus: 'Республика Перу',
        alias: 'ПЕРУ',
        // ISO2: 'PE',
        flag
    }
}, {
    title: 'FRENCH POLYNESIA',
    value: 'FRENCH POLYNESIA:value',
    properties: {
        titleRus: null,
        alias: 'ФРАНЦУЗСКАЯ ПОЛИНЕЗИЯ',
        // ISO2: 'PF',
        flag
    }
}, {
    title: 'PAPUA NEW GUINEA',
    value: 'PAPUA NEW GUINEA:value',
    properties: {
        titleRus: 'Независимое Государство Папуа Новая Гвинея',
        alias: 'ПАПУА НОВАЯ ГВИНЕЯ',
        // ISO2: 'PG',
        flag
    }
}, {
    title: 'PHILIPPINES',
    value: 'PHILIPPINES:value',
    properties: {
        titleRus: 'Республика Филиппины',
        alias: 'ФИЛИППИНЫ',
        // ISO2: 'PH',
        flag
    }
}, {
    title: 'PAKISTAN',
    value: 'PAKISTAN:value',
    properties: {
        titleRus: 'Исламская Республика Пакистан',
        alias: 'ПАКИСТАН',
        // ISO2: 'PK',
        flag
    }
}, {
    title: 'POLAND',
    value: 'POLAND:value',
    properties: {
        titleRus: 'Республика Польша',
        alias: 'ПОЛЬША',
        // ISO2: 'PL',
        flag
    }
}, {
    title: 'SAINT PIERRE AND MIQUELON',
    value: 'SAINT PIERRE AND MIQUELON:value',
    properties: {
        titleRus: null,
        alias: 'СЕН-ПЬЕР И МИКЕЛОН',
        // ISO2: 'PM',
        flag
    }
}, {
    title: 'PITCAIRN',
    value: 'PITCAIRN:value',
    properties: {
        titleRus: null,
        alias: 'ПИТКЕРН',
        // ISO2: 'PN',
        flag
    }
}, {
    title: 'PUERTO RICO',
    value: 'PUERTO RICO:value',
    properties: {
        titleRus: null,
        alias: 'ПУЭРТО-РИКО',
        // ISO2: 'PR',
        flag
    }
}, {
    title: 'PALESTINE, STATE OF',
    value: 'PALESTINE, STATE OF',
    properties: {
        titleRus: 'Государство Палестина',
        alias: 'ПАЛЕСТИНА, ГОСУДАРСТВО',
        // ISO2: 'PS',
        flag
    }
}, {
    title: 'PORTUGAL',
    value: 'PORTUGAL:value',
    properties: {
        titleRus: 'Португальская Республика',
        alias: 'ПОРТУГАЛИЯ',
        // ISO2: 'PT',
        flag
    }
}, {
    title: 'PALAU',
    value: 'PALAU:value',
    properties: {
        titleRus: 'Республика Палау',
        alias: 'ПАЛАУ',
        // ISO2: 'PW',
        flag
    }
}, {
    title: 'PARAGUAY',
    value: 'PARAGUAY:value',
    properties: {
        titleRus: 'Республика Парагвай',
        alias: 'ПАРАГВАЙ',
        // ISO2: 'PY',
        flag
    }
}, {
    title: 'QATAR',
    value: 'QATAR:value',
    properties: {
        titleRus: 'Государство Катар',
        alias: 'КАТАР',
        // ISO2: 'QA',
        flag
    }
}, {
    title: 'REUNION',
    value: 'REUNION:value',
    properties: {
        titleRus: null,
        alias: 'РЕЮНЬОН',
        // ISO2: 'RE',
        flag
    }
}, {
    title: 'ROMANIA',
    value: 'ROMANIA:value',
    properties: {
        titleRus: null,
        alias: 'РУМЫНИЯ',
        // ISO2: 'RO',
        flag
    }
}, {
    title: 'SERBIA',
    value: 'SERBIA:value',
    properties: {
        titleRus: 'Республика Сербия',
        alias: 'СЕРБИЯ',
        // ISO2: 'RS',
        flag
    }
}, {
    title: 'RUSSIAN FEDERATION',
    value: 'RUSSIAN FEDERATION:value',
    properties: {
        titleRus: 'Российская Федерация',
        alias: 'РОССИЯ',
        // ISO2: 'RU',
        flag
    }
}, {
    title: 'RWANDA',
    value: 'RWANDA:value',
    properties: {
        titleRus: 'Руандийская Республика',
        alias: 'РУАНДА',
        // ISO2: 'RW',
        flag
    }
}, {
    title: 'SAUDI ARABIA',
    value: 'SAUDI ARABIA:value',
    properties: {
        titleRus: 'Королевство Саудовская Аравия',
        alias: 'САУДОВСКАЯ АРАВИЯ',
        // ISO2: 'SA',
        flag
    }
}, {
    title: 'SOLOMON ISLANDS',
    value: 'SOLOMON ISLANDS:value',
    properties: {
        titleRus: null,
        alias: 'СОЛОМОНОВЫ ОСТРОВА',
        // ISO2: 'SB',
        flag
    }
}, {
    title: 'SEYCHELLES',
    value: 'SEYCHELLES:value',
    properties: {
        titleRus: 'Республика Сейшелы',
        alias: 'СЕЙШЕЛЫ',
        // ISO2: 'SC',
        flag
    }
}, {
    title: 'SUDAN',
    value: 'SUDAN:value',
    properties: {
        titleRus: 'Республика Судан',
        alias: 'СУДАН',
        // ISO2: 'SD',
        flag
    }
}, {
    title: 'SWEDEN',
    value: 'SWEDEN:value',
    properties: {
        titleRus: 'Королевство Швеция',
        alias: 'ШВЕЦИЯ',
        // ISO2: 'SE',
        flag
    }
}, {
    title: 'SINGAPORE',
    value: 'SINGAPORE:value',
    properties: {
        titleRus: 'Республика Сингапур',
        alias: 'СИНГАПУР',
        // ISO2: 'SG',
        flag
    }
}, {
    title: 'ST HELENA,ASCENSION AND TRISTAN DA CUNHA',
    value: 'ST HELENA,ASCENSION AND TRISTAN DA CUNHA',
    properties: {
        titleRus: null,
        alias: 'СВЯТАЯ ЕЛЕНА, ОСТРОВ ВОЗНЕСЕНИЯ, ТРИСТАН-ДА-КУНЬЯ',
        // ISO2: 'SH',
        flag
    }
}, {
    title: 'SLOVENIA',
    value: 'SLOVENIA:value',
    properties: {
        titleRus: 'Республика Словения',
        alias: 'СЛОВЕНИЯ',
        // ISO2: 'SI',
        flag
    }
}, {
    title: 'SVALBARD AND JAN MAYEN',
    value: 'SVALBARD AND JAN MAYEN:value',
    properties: {
        titleRus: null,
        alias: 'ШПИЦБЕРГЕН И ЯН МАЙЕН',
        // ISO2: 'SJ',
        flag
    }
}, {
    title: 'SLOVAKIA',
    value: 'SLOVAKIA:value',
    properties: {
        titleRus: 'Словацкая Республика',
        alias: 'СЛОВАКИЯ',
        // ISO2: 'SK',
        flag
    }
}, {
    title: 'SIERRA LEONE',
    value: 'SIERRA LEONE:value',
    properties: {
        titleRus: 'Республика Сьерра-Леоне',
        alias: 'СЬЕРРА-ЛЕОНЕ',
        // ISO2: 'SL',
        flag
    }
}, {
    title: 'SAN MARINO',
    value: 'SAN MARINO:value',
    properties: {
        titleRus: 'Республика Сан-Марино',
        alias: 'САН-МАРИНО',
        // ISO2: 'SM',
        flag
    }
}, {
    title: 'SENEGAL',
    value: 'SENEGAL:value',
    properties: {
        titleRus: 'Республика Сенегал',
        alias: 'СЕНЕГАЛ',
        // ISO2: 'SN',
        flag
    }
}, {
    title: 'SOMALIA',
    value: 'SOMALIA:value',
    properties: {
        titleRus: 'Сомалийская  Республика',
        alias: 'СОМАЛИ',
        // ISO2: 'SO',
        flag
    }
}, {
    title: 'SURINAME',
    value: 'SURINAME:value',
    properties: {
        titleRus: 'Республика Суринам',
        alias: 'СУРИНАМ',
        // ISO2: 'SR',
        flag
    }
}, {
    title: 'SOUTH SUDAN',
    value: 'SOUTH SUDAN:value',
    properties: {
        titleRus: 'Республика Южный Судан',
        alias: 'ЮЖНЫЙ СУДАН',
        // ISO2: 'SS',
        flag
    }
}, {
    title: 'SAO TOME AND PRINCIPE',
    value: 'SAO TOME AND PRINCIPE:value',
    properties: {
        titleRus: 'Демократическая Республика Сан-Томе и Принсипи',
        alias: 'САН-ТОМЕ И ПРИНСИПИ',
        // ISO2: 'ST',
        flag
    }
}, {
    title: 'EL SALVADOR',
    value: 'EL SALVADOR:value',
    properties: {
        titleRus: 'Республика Эль-Сальвадор',
        alias: 'ЭЛЬ-САЛЬВАДОР',
        // ISO2: 'SV',
        flag
    }
}, {
    title: 'SINT MAARTEN (DUTCH PART)',
    value: 'SINT MAARTEN (DUTCH PART)',
    properties: {
        titleRus: 'СЕН-МАРТЕН (нидерландская часть)',
        alias: 'СЕН-МАРТЕН (нидерландская часть)',
        // ISO2: 'SX',
        flag
    }
}, {
    title: 'SYRIAN ARAB REPUBLIC',
    value: 'SYRIAN ARAB REPUBLIC:value',
    properties: {
        titleRus: null,
        alias: 'СИРИЙСКАЯ АРАБСКАЯ РЕСПУБЛИКА',
        // ISO2: 'SY',
        flag
    }
}, {
    title: 'SWAZILAND',
    value: 'SWAZILAND:value',
    properties: {
        titleRus: 'Королевство Свазиленд',
        alias: 'СВАЗИЛЕНД',
        // ISO2: 'SZ',
        flag
    }
}, {
    title: 'TURKS AND CAICOS ISLANDS',
    value: 'TURKS AND CAICOS ISLANDS:value',
    properties: {
        titleRus: null,
        alias: 'ОСТРОВА ТЕРКС И КАЙКОС',
        // ISO2: 'TC',
        flag
    }
}, {
    title: 'CHAD',
    value: 'CHAD:value',
    properties: {
        titleRus: 'Республика Чад',
        alias: 'ЧАД',
        // ISO2: 'TD',
        flag
    }
}, {
    title: 'FRENCH SOUTHERN TERRITORIES',
    value: 'FRENCH SOUTHERN TERRITORIES:value',
    properties: {
        titleRus: null,
        alias: 'ФРАНЦУЗСКИЕ ЮЖНЫЕ ТЕРРИТОРИИ',
        // ISO2: 'TF',
        flag
    }
}, {
    title: 'TOGO',
    value: 'TOGO:value',
    properties: {
        titleRus: 'Тоголезская Республика',
        alias: 'ТОГО',
        // ISO2: 'TG',
        flag
    }
}, {
    title: 'GAMBIA',
    value: 'GAMBIA:value',
    properties: {
        titleRus: 'Республика Гамбия',
        alias: 'ГАМБИЯ',
        // ISO2: 'GM',
        flag
    }
}]

const router = ({ timeout }) => (req, res) => {
    const { query } = req.query

    const filteredCountries = _.uniqBy(_.filter(countries, (country) => country.value && (
        _.includes(country.value.toLowerCase(), query.toLowerCase()) ||
        _.includes((_.get(country, 'properties.titleRus') || '').toLowerCase(), query.toLowerCase()) ||
        _.includes((_.get(country, 'properties.alias') || '').toLowerCase(), query.toLowerCase())
    )), 'value')

    setTimeout(() => {
        return res.json(filteredCountries)
    }, timeout)
}

router.countries = _.map(countries, (country) => ({
    ...country,
    properties: {
        ...country.properties,
        flag: Icon.data ? 'moreInfo' : 'icon:core/common/moreInfo'
    }
}))

export default router

/**
 * Created by sbt-belov1-aa on 17.07.2017.
 */
