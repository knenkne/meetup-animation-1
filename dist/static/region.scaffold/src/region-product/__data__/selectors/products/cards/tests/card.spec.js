import { cardsList } from '../../cards'
import { getCardInfo } from '../utils'
import { CTACCOUNT } from '../../wallet/dictionaries'

import {
    debitCard,
    creditCard,
    corpCard,
    arrestedCard,
    negativeBalanceActive,
    negativeBalanceNotAvailable,
    needRqDeliveryCard,
    permanentlyBlocked,
    temporarilyBlockedU,
    temporarilyBlockedC,
    cardExpired,
    cardWillExpire,
    cardsAndCtaccounts
} from './fixture'

describe('Селектор карт передает необходимые данные:', () => {
    it('рендер имени', () => {
        expect(cardsList(debitCard).content[0].name).toBe('Visa Classic')
    })
    it('рендер id', () => {
        expect(cardsList(debitCard).content[0].id).toBe(735209)
    })
    it('рендер типа карты', () => {
        expect(cardsList(debitCard).content[0].cardType).toBe('debit')
        expect(cardsList(creditCard).content[0].cardType).toBe('credit')
        expect(cardsList(corpCard).content[0].cardType).toBe('corporate')
        expect(cardsList(debitCard).content[0].note).toEqual(void 0)
        expect(cardsList(creditCard).content[0].note).toBe('card.type.credit')
        expect(cardsList(corpCard).content[0].note).toBe('card.type.corporate')
    })
    it('рендерит "Посмотреть статус" если needRqDelivery == true', () => {
        expect(cardsList(needRqDeliveryCard).content[0].message.text).toBe('card.need.rq.delivery')
    })
    it('рендерит "Пополните карту" если currency.amount < 0 и карта активна', () => {
        expect(cardsList(negativeBalanceActive).content[0].message.text).toBe('card.balance.negative.active')
    })
    it('рендерит "Расходные операции недоступны" если currency.amount < 0 и карта неактивна', () => {
        expect(cardsList(negativeBalanceNotAvailable).content[0].message.text).toBe('card.balance.negative.not.available')
    })
    it('рендерит сообщение об аресте', () => {
        expect(cardsList(arrestedCard).content[0].message.text).toBe('card.arrested')
    })
    it('рендерит сообщение о временном блоке', () => {
        expect(cardsList(temporarilyBlockedC).content[0].message.text).toBe('card.temporarily.blocked')
        expect(cardsList(temporarilyBlockedU).content[0].message.text).toBe('card.temporarily.blocked')
    })
    it('карта заблокирована', () => {
        expect(getCardInfo(permanentlyBlocked.products.cards.card[0]).message.text).toBe('card.permanently.blocked')
    })
    it('карта истекает через Х времени', () => {
        expect(['card.will.expire', 'card.will.expire.today'].includes(cardsList(cardWillExpire).content[0].message.text)).toBeTruthy()
    })
    it('карта истекла', () => {
        expect(cardsList(cardExpired).content[0].message.text).toBe('card.expired')
    })
    it('карта с признаком isCTA привязывается к платёжному счёту по номеру счёта', () => {
        // Всего ко счёту привязалось 2 карты
        expect(cardsList(cardsAndCtaccounts).content[0].additionalCards.length).toEqual(2)
        expect(cardsList(cardsAndCtaccounts).content[0].additionalCards[0].id).toEqual(735175)
        expect(cardsList(cardsAndCtaccounts).content[0].additionalCards[1].id).toEqual(735176)
    })
    it('Платёжный счёт выводится первым в списке', () => {
        expect(cardsList(cardsAndCtaccounts).content[0].cardType).toEqual(CTACCOUNT)
    })
    it('Карты без признака isCTA не привязываются к платёжному счёту', () => {
        expect(cardsList(cardsAndCtaccounts).content[1].cardType).toEqual('debit')
        // И к ним тоже могут привязываться допки
        expect(cardsList(cardsAndCtaccounts).content[1].additionalCards.length).toEqual(1)
        expect(cardsList(cardsAndCtaccounts).content[1].additionalCards[0].id).toEqual(735178)
    })
})
