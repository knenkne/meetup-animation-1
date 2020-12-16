export const debitCard = {
    products: {
        cards: {
            card: [
                {
                    realExpireDate: '09/2022',
                    smsName: 8664,
                    isMain: true,
                    showarrestdetail: true,
                    imageCode: 'vc',
                    description: 'Visa Classic',
                    type: 'debit',
                    number: '4276 38\u2022\u2022 \u2022\u2022\u2022\u2022 8664',
                    availableLimit: {
                        amount: '100000,00',
                        currency: {
                            code: 'RUB',
                            name: 'руб.'
                        }
                    },
                    tokenExists: false,
                    name: 'Visa Classic',
                    options: {
                        setPINAvailable: false,
                        closeCardAvailable: false,
                        setPayrollAvailable: false
                    },
                    expireDate: '09/2022',
                    id: 735209,
                    state: 'active',
                    cardAccount: '40817810138251170022',
                    statusWay4: '+-КАРТОЧКА ОТКРЫТА'
                }
            ]
        }
    }
}

export const arrestedCard = {
    products: {
        cards: {
            card: [
                {
                    realExpireDate: '03/2022',
                    arrested: true,
                    smsName: 6866,
                    isMain: true,
                    showarrestdetail: true,
                    imageCode: 'vc',
                    description: 'Visa Classic',
                    type: 'corporate',
                    number: '4276 38\u2022\u2022 \u2022\u2022\u2022\u2022 6866',
                    availableLimit: {
                        amount: '-678411,00',
                        currency: {
                            code: 'RUB',
                            name: 'руб.'
                        }
                    },
                    tokenExists: false,
                    name: 'Visa Classic',
                    options: {
                        setPINAvailable: false,
                        closeCardAvailable: false,
                        setPayrollAvailable: false
                    },
                    expireDate: '03/2022',
                    id: 735175,
                    state: 'active',
                    cardAccount: '40817810438251135437',
                    statusWay4: '+-КАРТОЧКА ОТКРЫТА'
                },
            ]
        }
    }
}
