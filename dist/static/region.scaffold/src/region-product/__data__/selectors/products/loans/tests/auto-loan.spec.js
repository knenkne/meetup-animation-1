import {
    autoLoanClaimsSelector,
    autoLoanClaimsMapped
} from '../claims'
import {
    autoLoanSelector,
    autoLoanMapped
} from '../auto-loan'

import {
    autoClaimDocCon
} from './fixture'

describe('Автозаявки: ', () => {
    it('Заявки приходят', () => {
        expect(autoLoanClaimsSelector(autoClaimDocCon).length).toBe(2)
    })
    it('Иконка черновиков черно-белая', () => {
        expect(autoLoanClaimsMapped(autoClaimDocCon)[0].iconStyle).toBe('draft-icon')
        expect(autoLoanClaimsMapped(autoClaimDocCon)[1].iconStyle).toBe('')
    })
    it('statusName корректный', () => {
        expect(autoLoanClaimsMapped(autoClaimDocCon)[0].message.text).toBe('Черновик')
        expect(autoLoanClaimsMapped(autoClaimDocCon)[1].message.text).toBe('Исполнен')
    })
})

describe('Автокредиты: ', () => {
    it('Кредиты приходят', () => {
        expect(autoLoanSelector(autoClaimDocCon).length).toBe(1)
    })
    it('Кредиты отображают сумму', () => {
        expect(autoLoanMapped(autoClaimDocCon)[0].currency.amount).toBe(405891.59)
    })
    it('Кредиты получают ежемесячный платеж', () => {
        expect(autoLoanMapped(autoClaimDocCon)[0].nextPayAmount.amount).toBe(405891.59)
    })
})
