import { loanCardOffer } from '../../cards'

import {
    stateMaxLimitAmountStringFloatDot,
    stateMaxLimitAmountString,
    stateMaxLimitAmount,
    stateMaxLimitAmountFloat,
    stateMaxLimitDescription,
    stateMaxLimitDescriptionFloat,
    stateMaxLimitDescriptionFloatDot
} from './fixture'

describe('Loan Offer при заданном offerDescription', () => {
    it('Loan Offer при целом offerDescription', () => {
        expect(loanCardOffer(stateMaxLimitDescription)[0].message.text).toBe('Кредитная карта с лимитом 600\xA0000 руб.')
    })
    it('Loan Offer при float offerDescription с запятой', () => {
        expect(loanCardOffer(stateMaxLimitDescriptionFloat)[0].message.text).toBe('Кредитная карта с лимитом 600\xA0000,99 руб.')
    })
    it('Loan Offer при float offerDescription с точкой', () => {
        expect(loanCardOffer(stateMaxLimitDescriptionFloatDot)[0].message.text).toBe('Кредитная карта с лимитом 600\xA0000,90 руб.')
    })
})

describe('Loan Offer без offerDescription', () => {
    it('Loan Offer при typeof maxLimitAmount == number', () => {
        expect(loanCardOffer(stateMaxLimitAmount)[0].message.text).toBe('card.loan.offer.description')
    })
    it('Loan Offer при typeof maxLimitAmount == string', () => {
        expect(loanCardOffer(stateMaxLimitAmountString)[0].message.text).toBe('card.loan.offer.description')
    })
    it('Loan Offer при typeof maxLimitAmount == number and with decimal', () => {
        expect(loanCardOffer(stateMaxLimitAmountFloat)[0].message.text).toBe('card.loan.offer.description')
    })
    it('Loan Offer при typeof maxLimitAmount == number and with decimal and dot', () => {
        expect(loanCardOffer(stateMaxLimitAmountStringFloatDot)[0].message.text).toBe('card.loan.offer.description')
    })
})
