const states = {
    step1: {
        events: {
            next: {
                to: 'step2',
                subFlow: true,
                result: 'EXTERNAL_RETURN',
                url: '/region-sub-flows'
            },
        },
        data: {
            references: {
                stages: {
                    items: [
                        {
                            title: 'Ввод номера карты сотрудником',
                            value: ''
                        },
                        {
                            title: 'Контактные данные',
                            value: ''
                        },
                        {
                            title: 'Ознакомление с документами и подтверждение',
                            value: 'progress'
                        },
                        {
                            title: 'Назначение пин-кода',
                            value: ''
                        },
                        {
                            title: 'Карта выдана',
                            value: ''
                        }
                    ]
                },
                productDescription: {
                    items: [
                        {
                            title: 'Лимит',
                            value: 'limit',
                            properties: {
                                single: '150000',
                                unit: '₽',
                                type: 'single'
                            }
                        },
                        {
                            title: 'Cтавка',
                            value: 'cost',
                            properties: {
                                single: '23.90',
                                unit: '%',
                                type: 'single'
                            }
                        },
                        {
                            title: 'Стоимость в 1-ый год',
                            value: 'rate',
                            properties: {
                                single: '0',
                                unit: '₽',
                                type: 'single'
                            }
                        },
                        {
                            title: 'в последующие годы',
                            value: 'nextRate',
                            properties: {
                                single: '0',
                                unit: '₽',
                                type: 'single'
                            }
                        }
                    ]
                },
                ede30b8a0390b849bfa9051b25b1747be8: {
                    properties: {
                        type: 'PDF'
                    },
                    items: [
                        {
                            title: 'fraud',
                            value: '/bh-confirmation/v3/api/fraud?processId=7857699b-27c0-11ea-a16d-f5c89b53fff1&documentId=ede30b8a0390b849bfa9051b25b1747be8',
                        },
                        {
                            title: 'document',
                            value: '/bh-confirmation/v3/api/documents?processId=7857699b-27c0-11ea-a16d-f5c89b53fff1&documentId=ede30b8a0390b849bfa9051b25b1747be8',
                        }
                    ]
                },
                ed369889ec3a824f5f932109f0ae1b65ea: {
                    properties: {
                        type: 'PDF'
                    },
                    items: [
                        {
                            title: 'fraud',
                            value: '/bh-confirmation/v3/api/fraud?processId=7857699b-27c0-11ea-a16d-f5c89b53fff1&documentId=ed369889ec3a824f5f932109f0ae1b65ea',
                        },
                        {
                            title: 'document',
                            value: '/bh-confirmation/v3/api/documents?processId=7857699b-27c0-11ea-a16d-f5c89b53fff1&documentId=ed369889ec3a824f5f932109f0ae1b65ea',
                        }
                    ]
                },
                edd25507bc79d043599b49b4544287b48c: {
                    properties: {
                        type: 'HTML'
                    },
                    items: [
                        {
                            title: 'fraud',
                            value: '/bh-confirmation/v3/api/fraud?processId=7857699b-27c0-11ea-a16d-f5c89b53fff1&documentId=edd25507bc79d043599b49b4544287b48c',
                        },
                        {
                            title: 'document',
                            value: '/bh-confirmation/v3/api/documents?processId=7857699b-27c0-11ea-a16d-f5c89b53fff1&documentId=edd25507bc79d043599b49b4544287b48c',
                        }
                    ]
                }
            },
            screens: [
                {
                    header: [
                        {
                            type: 'WebProductDescription',
                            title: 'Visa Credit Momentum',
                            properties: {
                                productImgSrc: 'https://test.stat.online.sberbank.ru/CREDIT_CARDS_IB/imgs/momentumVisa.png',
                                productImgType: 'src',
                                productFeaturesReferenceId: 'productDescription',
                                divider: true
                            },
                        },
                    ],
                    footer: [
                        {
                            type: 'CCardIssueHeadline',
                            title: 'Назначение ПИН-кода',
                        }
                    ],
                    widgets: [
                        {
                            type: 'ConfirmationSummaryPdfDocuments',
                            properties: {
                                widgetAlone: 'true',
                                titleWithLink: 'Я соглашаюсь с условиями и подписываю все <a>документы по операции</a>',
                                operationName: 'Выдача КК Momentum',
                                channelName: 'INTERNET_BANK',
                                secondStateTitle: 'Документы по операции'
                            },
                            title: 'Ознакомление с документами',
                            description: 'Подтверждая, вы соглашаетесь с документами',
                            fields: [
                                {
                                    id: 'agreement',
                                    value: 'false',
                                    type: 'checkbox',
                                    referenceId: '',
                                    title: 'Я соглашаюсь с условиями и подписываю все документы по операции',
                                    readonly: false,
                                    validators: [
                                        {
                                            type: 'required',
                                            value: 'true',
                                            message: 'Пожалуйста, подтвердите условия по операции'
                                        }
                                    ]
                                },
                                {
                                    id: 'ede30b8a0390b849bfa9051b25b1747be8',
                                    title: 'Заявление на получение кредитной карты',
                                    type: 'text',
                                    value: '',
                                    referenceId: 'ede30b8a0390b849bfa9051b25b1747be8',
                                    readonly: true
                                },
                                {
                                    id: 'ed369889ec3a824f5f932109f0ae1b65ea',
                                    title: 'Индивидуальные условия выпуска и обслуживания кредитной карты',
                                    type: 'text',
                                    value: '',
                                    referenceId: 'ed369889ec3a824f5f932109f0ae1b65ea',
                                    readonly: true
                                },
                                {
                                    id: 'edd25507bc79d043599b49b4544287b48c',
                                    title: 'Мемориальный ордер 203',
                                    type: 'text',
                                    value: '',
                                    referenceId: 'edd25507bc79d043599b49b4544287b48c',
                                    readonly: true
                                }
                            ]
                        },
                        {
                            type: 'CoreButtons',
                            events: [
                                {
                                    name: 'next',
                                    type: 'next',
                                    title: 'Подтвердить'
                                },
                                {
                                    name: 'closeSession',
                                    title: 'Отменить'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
}

const params = {
    states,
    start: 'step1',
    end: ['completion']
}

module.exports = params
