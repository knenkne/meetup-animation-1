import _ from 'lodash'
import { createSelector } from 'reselect'
import { Input } from '@sbol/lib.ui/core/input'

import { makeArray } from '../../utils'
import { checkFeature } from '../../../../../utils/check-feature'
import {
    isTrue,
    isStatusLoading
} from '../../../../personal-menu/utils/helpers'
import { urlOpenNewCard, urlLoanOffer } from '../../../links'
import { ctaccountsSelector } from '../wallet'

import { iconDictionary } from './dictionaries'
import { getCards } from './utils'
import {
    getClaimsStatus,
    loanCardClaimsMapped,
    debitCardClaimsMapped,
    virtualCardClaimsMapped
} from './claims'

const rootProductsSelector = (state) => state.products

const rootUserProperties = (state) => state.userProperties

export const userPropertiesValueSelector = createSelector(
    rootUserProperties,
    (userProps) => userProps?.value
)

export const cardsSelector = createSelector(rootProductsSelector, (products) =>
    makeArray(_.get(products, 'cards.card'))
)

const loanCardsSelector = createSelector(rootProductsSelector, (products) =>
    makeArray(_.get(products, 'offerInfoData.loanCardOffers.loanCardOffer'))
)

export const loanCardOffer = createSelector(
    loanCardsSelector,
    (loanCard = []) => {
        const offer = loanCard[0] || {}

        // offerType может прийти строкой или числом,
        // offerAvailable может прийти булем или строкой
        // небольшой воркэрауд в честь этого
        const offerType = parseInt(_.get(offer, 'offerType', 0), 10)
        const offerAvailable = _.get(offer, 'offerAvailable', false)

        // MVP2: если offerType=1 и offerAvailable<>true
        if (offerType === 1 && !isTrue(offerAvailable)) {
            // MVP2: offerDescription приходит с суммой
            // currency не отображаем,
            const currency = _.get(offer, 'offerDescription')
                ? null
                : {
                    amount: offer.maxLimitAmount,
                    currency: offer.currency.code
                }

            // Ериб может прислать предложение с суммой в каком угодно виде,
            // избавляемся от пробелов внутри числа, заменяем запятую,
            // добавляем неразрывных пробелов
            const text = (offer?.offerDescription || 'card.loan.offer.description')
                .replace(/(\d) (\d)/g, '$1$2')
                .replace(/(\d),(\d)/g, '$1.$2')
                .replace(/\d*\.?\d+/, (match) =>
                    Input.formatNumberValue(match, {
                        allowDecimal: true,
                        thousandsSeparatorSymbol: ' ',
                        decimalLimit: 2
                    })
                )

            return [
                {
                    id: 'loanCardOffer',
                    name: offer?.offerHeader || 'card.loan.offer.title',
                    href: urlLoanOffer,
                    icon: iconDictionary.ghost,
                    type: 'ghost',
                    cardType: 'loan-offer',
                    message: {
                        text
                    },
                    currency
                }
            ]
        }
        return []
    }
)

const ghostCardSelector = createSelector(cardsSelector, () => [
    {
        id: 'ghostCardSelector',
        name: 'card.ghost.title',
        icon: iconDictionary.ghost,
        href: urlOpenNewCard,
        type: 'ghost',
        message: {
            text: 'card.ghost.description'
        }
    }
])

/**
 * map cards array
 * @type {OutputSelector<any>}
 */
export const mappedCards = createSelector(
    cardsSelector,
    ctaccountsSelector,
    userPropertiesValueSelector,
    getCards
)

export const creditCardsList = createSelector(mappedCards, (cards) =>
    cards.filter((card) => card.cardType === 'credit')
)

/**
 *  add title and content to cards
 *  @type {OutputSelector<any>}
 */
export const cardsList = createSelector(
    mappedCards,
    ghostCardSelector,
    creditCardsList,
    loanCardOffer,
    getClaimsStatus,
    loanCardClaimsMapped,
    debitCardClaimsMapped,
    virtualCardClaimsMapped,
    (
        cards,
        ghostCard,
        creditCards,
        loanOffer,
        claimsStatus,
        loanCardClaims,
        debitCardClaims,
        virtualCardClaims
    ) => {
        let content = ghostCard
        if (cards.length) {
            content = cards
        }

        if (checkFeature('ShowCardClaims') && !isStatusLoading(claimsStatus)) {
            content = [
                ...content,
                ...debitCardClaims,
                ...loanCardClaims,
                ...virtualCardClaims
            ]
        }

        if (
            checkFeature('ShowCreditCardGhost') &&
            !creditCards.length &&
            !loanCardClaims.length
        ) {
            content = [...content, ...loanOffer]
        }
        return {
            title: 'card',
            content,
            type: 'cards',
            newProductUrl: urlOpenNewCard,
            feature: 'AccessCardsTab'
        }
    }
)

/**
 * Overrides title & feature for cards, if AccessCTATab is enabled.
 * @type {OutputSelector<any>}
 */
export const cardsOrWalletList = createSelector(cardsList, (cards) => {
    if (checkFeature('AccessCTATab', 'region.scaffold')) {
        return {
            ...cards,
            title: 'wallet',
            feature: 'AccessCTATab'
        }
    }
    return cards
})
