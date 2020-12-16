```jsx
    {
        const { createStorybookStore, RendererWithReduxForm } = require('provider')
        var output = {
            screens: [
                {
                    title: 'Виджет CoreFieldset',
                    description: 'Демо с различными типами полей',
                    widgets: [
                        {
                            type: 'CoreFieldset',
                            description: 'Описание виджета',
                            properties: {},
                            fields: [
                                {
                                    id: 'fieldset:field:text:1',
                                    value: 'какой-то текст',
                                    type: 'text',
                                    description: '## Headline\n---\nLorem ipsum dolor sit amet',
                                    title: 'Поле с типом text',
                                    validators: []
                                },
                                {
                                    id: 'fieldset:field:checkbox:true:1',
                                    value: 'true',
                                    type: 'checkbox',
                                    title: 'Поле с типом checkbox (выбран)',
                                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip  x ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt  ollit anim id est laborum.',
                                    validators: []
                                },
                                {
                                    id: 'fieldset:field:checkbox:false:1',
                                    value: 'false',
                                    type: 'checkbox',
                                    title: 'Другое поле с типом checkbox',
                                    validators: []
                                },
                                {
                                    id: 'fieldset:field:select:1',
                                    value: 'turkey',
                                    type: 'select',
                                    referenceId: 'regions',
                                    title: 'Поле с типом select',
                                    description: '## Headline\n---\nLorem ipsum dolor sit amet',
                                    validators: []
                                },
                                {
                                    id: 'fieldset:field:select:short:1',
                                    value: '',
                                    type: 'select',
                                    referenceId: 'phones',
                                    title: 'Поле с типом select',
                                    style: 'phone',
                                    description: '## Headline\n---\nLorem ipsum dolor sit amet',
                                    validators: [{
                                        type: 'required',
                                        value: '',
                                        message: 'Обязательное поле'
                                    }]
                                },
                                {
                                    id: 'fieldset:field:select:short:disabled:1',
                                    value: '1',
                                    type: 'select',
                                    referenceId: 'phones',
                                    readonly: true,
                                    title: 'Поле с типом select',
                                    style: 'phone',
                                    description: '## Headline\n---\nLorem ipsum dolor sit amet',
                                    validators: []
                                },
                                {
                                    id: 'fieldset:field:decimal:1',
                                    value: '',
                                    type: 'text',
                                    format: 'decimal',
                                    description: 'some description',
                                    title: 'Поле с типом decimal',
                                    validators: []
                                },
                                {
                                    id: 'fieldset:field:integer:1',
                                    value: '',
                                    format: 'integer',
                                    type: 'text',
                                    title: 'Поле с типом integer',
                                    validators: []
                                },
                                {
                                    id: 'fieldset:field:hidden:1',
                                    value: '',
                                    type: 'hidden',
                                    title: 'Поле с типом hidden',
                                    validators: []
                                },
                                {
                                    id: 'fieldset:field:date:1',
                                    value: '',
                                    type: 'date',
                                    title: 'Поле с типом date',
                                    validators: []
                                },
                                {
                                    id: 'fieldset:field:year:1',
                                    value: '',
                                    type: 'year',
                                    title: 'Поле с типом year',
                                    validators: []
                                },
                                {
                                    id: 'fieldset:field:month:1',
                                    value: '',
                                    type: 'month',
                                    title: 'Поле с типом month',
                                    validators: []
                                },
                                {
                                    id: 'fieldset:field:time:1',
                                    value: '',
                                    type: 'time',
                                    title: 'Поле с типом time',
                                    validators: []
                                }
                            ]
                        }
                    ],
                    properties: {}
                }
            ],
            events: [
                {
                    name: 'next',
                    type: 'next',
                    hidden: false,
                    title: 'Продолжить',
                    description: ''
                },

            ],
            references: {
                regions: {
                    properties: {},
                    items: [
                        {
                            value: 'shengen',
                            title: 'Шенген'
                        },
                        {
                            value: 'turkey',
                            title: 'Турция'
                        },
                        {
                            value: 'egypt',
                            title: 'Египет'
                        },
                        {
                            value: 'australia',
                            title: 'Австралия'
                        },
                        {
                            value: 'azerbaijan',
                            title: 'Республика Азербайджан'
                        },
                        {
                            value: 'andorra',
                            title: 'Княжество Андорра'
                        },
                        {
                            value: 'bolivia',
                            title: 'Многонациональное Государство Боливия'
                        },
                        {
                            value: 'hongKong',
                            title: 'Специальный административный регион Китая Гонконг'
                        },
                        {
                            value: 'hongKong2',
                            title: 'Специальный административный регион Китая Гонконг, решивший стать страной с самым длинным названием'
                        },
                        {
                            value: 'Afghanistan',
                            title: 'Переходное Исламское Государство Афганистан'
                        },
                        {
                            value: 'Bahamas',
                            title: 'Содружество Багамы'
                        },
                        {
                            value: 'Korea',
                            title: 'Корейская Народно-Демократическая Республика'
                        },
                        {
                            value: 'Vietnam',
                            title: 'Социалистическая Республика Вьетнам'
                        }
                    ]
                },
                phones: {
                    properties: {},
                    items: [
                        {
                            value: '1',
                            title: '+7 (123) 456-789-00'
                        },
                        {
                            value: '2',
                            title: '+7 (123) 456-789-01'
                        },
                        {
                            value: '3',
                            title: '+7 (123) 456-789-02'
                        }
                    ]
                }
            }
        }
        var store = createStorybookStore()

    }

    <div>
        <h3>{`Версия lib.workflow: ${require('@sbol/lib.workflow/package.json').version}`}</h3>
        <RendererWithReduxForm name={'CoreFieldset'} store={store} output={output} />

    </div>
```

```jsx
    {
        const { createStorybookStore, RendererWithReduxForm } = require('provider')
        var output = {

            screens: [
                {
                    title: 'Виджет CoreFieldset Readonly',
                    description: 'Демо с различными типами полей',
                    widgets: [
                        {
                            type: 'CoreFieldset',
                            description: 'Описание виджета',
                            properties: {},
                            fields: [
                                {
                                    id: 'fieldset:field:text:2',
                                    value: 'какой-то текст',
                                    type: 'text',
                                    title: 'Поле с типом text',
                                    readonly: true,
                                    description: '## Headline\n---\nLorem ipsum dolor sit amet',
                                    validators: []
                                },
                                {
                                    id: 'fieldset:field:text:with:description:2',
                                    value: 'Тут располагается какой-то не редактируемый текст',
                                    type: 'text',
                                    readonly: true,
                                    referenceId: '',
                                    title: 'Text with tooltip',
                                    description: '## Headline\n---\nLorem ipsum dolor sit amet',
                                    validators: []
                                },
                                {
                                    id: 'fieldset:field:checkbox:true:2',
                                    value: 'true',
                                    type: 'checkbox',
                                    title: 'Поле с типом checkbox (выбран)',
                                    readonly: true,
                                    validators: []
                                },
                                {
                                    id: 'fieldset:field:checkbox:false:2',
                                    value: 'false',
                                    type: 'checkbox',
                                    title: 'Другое поле с типом checkbox',
                                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip  x ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt  ollit anim id est laborum.',
                                    readonly: true,
                                    validators: []
                                },
                                {
                                    id: 'fieldset:field:select:2',
                                    value: 'turkey',
                                    type: 'select',
                                    referenceId: 'regions',
                                    title: 'Поле с типом select',
                                    readonly: true,
                                    validators: []
                                },
                                {
                                    id: 'fieldset:field:decimal:2',
                                    value: '',
                                    type: 'decimal',
                                    title: 'Поле с типом decimal',
                                    validators: []
                                },
                                {
                                    id: 'fieldset:field:readonly:2',
                                    value: '10000',
                                    style: 'total',
                                    type: 'text',
                                    title: 'Поле с типом text readonly',
                                    validators: [],
                                    readonly: true
                                },
                                {
                                    id: 'fieldset:field:integer:2',
                                    value: '',
                                    type: 'integer',
                                    title: 'Поле с типом integer',
                                    validators: []
                                },
                                {
                                    id: 'fieldset:field:hidden:2',
                                    value: 'I am hidden',
                                    type: 'hidden',
                                    title: 'Поле с типом hidden',
                                    readonly: true,
                                    validators: []
                                }
                            ]
                        }
                    ],
                    properties: {}
                }
            ],
            events: [
                {
                    name: 'next',
                    type: 'next',
                    hidden: false,
                    title: 'Продолжить',
                    description: ''
                },
                {
                    name: 'rollback',
                    type: 'rollback',
                    hidden: false,
                    title: 'Назад',
                    description: ''
                },

            ],
            references: {
                regions: {
                    properties: {},
                    items: [
                        {
                            value: 'shengen',
                            title: 'Шенген'
                        },
                        {
                            value: 'turkey',
                            title: 'Турция'
                        },
                        {
                            value: 'egypt',
                            title: 'Египет'
                        },
                        {
                            value: 'australia',
                            title: 'Австралия'
                        },
                        {
                            value: 'azerbaijan',
                            title: 'Республика Азербайджан'
                        },
                        {
                            value: 'andorra',
                            title: 'Княжество Андорра'
                        },
                        {
                            value: 'bolivia',
                            title: 'Многонациональное Государство Боливия'
                        },
                        {
                            value: 'hongKong',
                            title: 'Специальный административный регион Китая Гонконг'
                        }
                    ]
                }
            }
        }
        var store = createStorybookStore()

    }

    <div>
        <h3>{`Версия lib.workflow: ${require('@sbol/lib.workflow/package.json').version}`}</h3>
        <RendererWithReduxForm name={'CoreFieldset'} store={store} output={output} />
    </div>
```
