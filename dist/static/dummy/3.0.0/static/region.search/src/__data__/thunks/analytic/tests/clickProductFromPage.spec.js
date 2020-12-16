import { analytics } from '@sbol/lib.analytics'

import { clickProductFromPage } from '../clickProductFromPage'

describe('Тестирование clickProductFromPage:', () => {
    const mockPrivate = jest.fn()
    const mockDispatch = jest.fn()

    analytics.private = mockPrivate

    beforeEach(() => {
        mockPrivate.mockClear()
        mockDispatch.mockClear()
    })

    it('clickProductFromPage', () => {
        const item = {
            id: 1413505,
            title: 'description',
            position: 1
        }
        clickProductFromPage(item)(mockDispatch, () => ({
            pages: {
                productsToShow: {
                    id: 200,
                    type: 'Action',
                    category: 'Вклады и счета',
                    action: 'Реквизиты вклада',
                    keyWords: 'реквизиты вклада, реквизиты счета, реквизиты счёта, номер счета, номер счёта, мои реквизиты, реквезиты, лицевой счет, риквизиты, показать реквизиты',
                    link: '/PhizIC/private/accounts/info.do?id={{accountId}}',
                    prodListType: 'ACCOUNTS'
                }
            },
            products: {
                accounts: [{
                    id: 1413505,
                    name: 'Сберегательный счет',
                    icon: 'icon:core/products/account',
                    rate: '1.00',
                    currency: {
                        amount: '0,00',
                        currency: 'RUB'
                    },
                    closeDate: '01.01.2099',
                    message: {
                        text: 'accounts.timeless',
                        style: false
                    }
                }],
                cards: [],
                depoaccounts: [],
                imaccounts: [],
                loans: [],
                targets: []
            }
        }))

        expect(mockPrivate).toHaveBeenCalledTimes(1)
        expect(mockDispatch).toHaveBeenCalledTimes(0)
    })
})
