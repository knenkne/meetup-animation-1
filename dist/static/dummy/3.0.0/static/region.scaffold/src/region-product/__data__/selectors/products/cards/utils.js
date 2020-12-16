import _ from 'lodash'
import dateFns from 'date-fns'
import { getOption } from '@sbol/lib.app'
import { getCardIcon } from '@sbol/design-system/core/icon/utils/get-card-icon'

import { getBlockedDate } from '../../../utils/get-blocked-date'
import { cardsDetailsUrl, ctaDetailsUrl } from '../../../links'
import { isTrue } from '../../../../personal-menu/utils/helpers'
import { getProductMessage } from '../../../utils/get-product-message'
import { checkFeature } from '../../../../../utils/check-feature'
import { getCtaccountIcon, getCtaccountNotification, isCtaccount } from '../wallet/utils'

import {
    ACTIVE,
    ARRESTED,
    BAD_ATTENTION,
    BLOCKED,
    DELIVERY,
    issueTypes,
    typeDictionary,
    WAITING,
    WARNING
} from './dictionaries'

const CARD_PERMANENTLY_BLOCKED = 'card.permanently.blocked'
const PKG_ID = 'region.scaffold'

export const isBalanceNegative = ({ availableLimit }) =>
    parseInt(_.get(availableLimit, 'amount', 0), 10) < 0
const isDeliveryWithoutStatus = ({ needRqDeliveryStatus, deliveryStatus }) =>
    needRqDeliveryStatus && !deliveryStatus

// https://sbtatlas.sigma.sbrf.ru/wiki/pages/viewpage.action?pageId=1877870809
// Остальные заблокированные карты кроме C, U, K, g скрыты.
const isPermanentlyBlocked = ({ state, statusWay4 }) =>
    state === BLOCKED && statusWay4[0] !== 'U' && statusWay4[0] !== 'C' && statusWay4[0] !== 'K' && statusWay4[0] !== 'g'

// Компроментация
const isTemporarilyBlocked = ({ state, statusWay4 }) =>
    state === BLOCKED && (statusWay4[0] === 'U' || statusWay4[0] === 'C')

// Временная приостановка
const isTemporarilyStopped = ({ state, statusWay4 }) =>
    state === BLOCKED && statusWay4[0] === 'K'

// https://sbtatlas.sigma.sbrf.ru/wiki/pages/viewpage.action?pageId=2199388799}.
// Отображаем всегда
const isCreditCardBlockedSeisure = ({ state, statusWay4 }) =>
    state === BLOCKED && statusWay4[0] === 'g'

// Активная доступная карта
const isCardActiveAvailable = ({ state, statusWay4 }) =>
    state === ACTIVE && (statusWay4[0] === '+' || statusWay4[0] === 'X')

const isCardActive = ({ state }) =>
    state === ACTIVE

const isCardDelivery = ({ state }) =>
    state === DELIVERY

export const isTemporarilyBlockedVisible = (
    card,
    days,
    currentDate = new Date()
) => {

    const {
        blockInfoReceived
    } = card

    const daysSinceBlockedDate = dateFns.differenceInDays(
        currentDate,
        getBlockedDate(blockInfoReceived)
    )

    return (
        !days ||
        !daysSinceBlockedDate ||
        daysSinceBlockedDate - Number(days) <= 0
    )
}

const isPPRBReissueMigrationOn = checkFeature('ReissueCardMigrationProductRegion', PKG_ID)
const isPPRBPlannedReissueMigrationOn = checkFeature('PlannedReissueCardMigrationProductRegion', PKG_ID)

export const isPretermCardPPRB = (card) =>
    card.state === DELIVERY &&
    card.type === 'debit' &&
    card.isMain &&
    card.prevCardId &&
    card.issueType === issueTypes.REISSUE_PPRB

export const isPlannedCardPPRB = (card) =>
    card.state === DELIVERY &&
    (card.type === 'debit' || card.type === 'overdraft') &&
    card.isMain &&
    card.prevCardId &&
    card.issueType === issueTypes.PLAN_REISSUE_PPRB


export const isCardMigratedToPPRB = (card, cardIdPPRB) =>
    card.state === BLOCKED &&
    (card.type === 'debit' || card.type === 'overdraft')
    && card.newCardId === cardIdPPRB

export const isPlannedCardMigratedToPPRB = (card, cardIdPPRB) =>
    card.state === ACTIVE &&
    (card.type === 'debit' || card.type === 'overdraft')
    && card.newCardId === cardIdPPRB

export const isCardVisible = (
    card,
    options = {},
    currentDate = new Date()
) => {
    if (isCtaccount(card) || card?.isCTA) {
        return checkFeature('AccessCTATab', PKG_ID)
    }
    const {
        showBlockedCardsTerm = getOption('showBlockedCardsTerm'),
        showBlockedCardsTerm2 = getOption('showBlockedCardsTerm2'),
        userProps = false
    } = options

    if (isTrue(userProps)) {
        // если пришла пользовательская настройка, всегда показываем все карты
        return true
    }

    if (isPPRBReissueMigrationOn && card.isMigrated) {
        // если карта мигрировала на ППРБ, всегда показываем
        return true
    }

    if (!isPermanentlyBlocked(card)) {
        // Если карта заблокировалась с кодами C, U (компроментация)
        if (isTemporarilyBlocked(card)) {
            return isTemporarilyBlockedVisible(card, showBlockedCardsTerm, currentDate)
        }

        // Если карта заблокировалась с кодами K (временно приостановлена)
        if (isTemporarilyStopped(card)) {
            return isTemporarilyBlockedVisible(card, showBlockedCardsTerm2, currentDate)
        }

        // Если карта активная, в статусе доставки, с кодом блокировки g – показываем всегда
        return isCardActive(card) || isCardDelivery(card) || isCreditCardBlockedSeisure(card)
    }

    return false
}


export const getCardDate = (date) => {
    const dateArray = date.split('/').map((item) => Number(item))
    const month = dateArray[0] > 0 ? dateArray[0] - 1 : dateArray[0]
    /* eslint-disable no-magic-numbers, comment: подстраховка если год состоит из двух цифр  */
    const year =
        String(dateArray[1]).length !== 4 ? `20${dateArray[1]}` : dateArray[1]
    return new Date(year, month)
}

export const isExpired = (currentDate, date) =>
    dateFns.differenceInCalendarMonths(date, currentDate) < 0

export const isExpireThisMonth = (currentDate, date) =>
    dateFns.differenceInCalendarMonths(date, currentDate) === 0

export const getDifferenceInDays = (fromDay, currentDay) =>
    dateFns.differenceInCalendarDays(fromDay, currentDay)

export const getExpireDateInfo = (date, currentDate = new Date()) => {
    if (date) {
        const realDate = getCardDate(date)
        const lastDayOfMonth = dateFns.lastDayOfMonth(realDate)
        return {
            expired: isExpired(currentDate, realDate),
            expireThisMonth: isExpireThisMonth(currentDate, realDate),
            differenceInDays: getDifferenceInDays(lastDayOfMonth, currentDate)
        }
    }
    return {}
}

// eslint-disable-next-line complexity, comment: Много статусов и всем нужна приоритетность
export const getNotification = (card) => {
    const { arrested, realExpireDate } = card

    const {
        expired = false,
        expireThisMonth = false,
        differenceInDays
    } = getExpireDateInfo(realExpireDate)

    switch (true) {
        case arrested:
            return {
                ...getProductMessage('card.arrested', 'arrested'),
                notification: ARRESTED
            }
        case isCreditCardBlockedSeisure({ ...card }):
            return {
                ...getProductMessage(CARD_PERMANENTLY_BLOCKED, 'arrested'),
                notification: ARRESTED
            }
        case isPermanentlyBlocked(card):
            return {
                ...getProductMessage(CARD_PERMANENTLY_BLOCKED),
                notification: BAD_ATTENTION
            }
        case isTemporarilyBlocked(card):
            return {
                ...getProductMessage('card.temporarily.blocked'),
                notification: BAD_ATTENTION
            }
        // eslint-disable-next-line sonarjs/no-duplicated-branches, comment: Один статус - один кейс
        case isTemporarilyStopped(card):
            return {
                ...getProductMessage(CARD_PERMANENTLY_BLOCKED),
                notification: BAD_ATTENTION
            }
        case isDeliveryWithoutStatus(card):
            return {
                ...getProductMessage('card.need.rq.delivery', 'need-rq-delivery'),
                notification: WAITING
            }
        case expired:
            return {
                ...getProductMessage('card.expired'),
                notification: BAD_ATTENTION
            }
        case expireThisMonth: {
            const expireMessage =
                differenceInDays > 0 ? 'card.will.expire' : 'card.will.expire.today'
            return {
                ...getProductMessage(expireMessage, null, { count: differenceInDays }),
                notification: WARNING
            }
        }
        case isBalanceNegative(card) && isCardActiveAvailable(card):
            return {
                ...getProductMessage('card.balance.negative.active'),
                notification: WARNING
            }
        case isBalanceNegative(card):
            return {
                ...getProductMessage('card.balance.negative.not.available'),
                notification: WARNING
            }
        default:
            return {
                ...getProductMessage()
            }
    }
}

const LAST_FOUR_DIGITS = -4

export const getCtaccountInfo = (ctaccount) => {
    const {
        arrested,
        name,
        id,
        type = '',
        additionalCards,
        number,
        balance,
    } = ctaccount

    const ctaccountInfo = {
        id: Number(id),
        name,
        cardType: type,
        icon: getCtaccountIcon(ctaccount),
        href: ctaDetailsUrl(id),
        currency: {
            amount: _.get(balance, 'amount', ''),
            currency: _.get(balance, 'currency.code', '')
        },
        lastDigits: number ? `•• ${String(number).replace(/\s/g, '').slice(LAST_FOUR_DIGITS)}` : '',
        arrested,
        additionalCards,
        ...getCtaccountNotification(ctaccount)
    }

    if (additionalCards && additionalCards.length > 0) {
        // eslint-disable-next-line no-use-before-define, comment: TODO: refactor CTA
        ctaccountInfo.additionalCards = additionalCards.map((additionalCard) => getCardInfo(additionalCard))
    }
    return ctaccountInfo
}

export const getCardInfo = (card) => {
    if (isCtaccount(card)) {
        return getCtaccountInfo(card)
    }
    const {
        arrested,
        deliveryStatus,
        name,
        id,
        needRqDeliveryStatus,
        type = '',
        additionalCards,
        number
    } = card

    const cardInfo = {
        id: Number(id),
        name,
        cardType: type,
        icon: getCardIcon(card),
        href: cardsDetailsUrl(id),
        deliveryStatus,
        needUpdate: needRqDeliveryStatus,
        note: _.get(typeDictionary, String(type)),
        lastDigits: number ? `•• ${String(number).replace(/\s/g, '').slice(-4)}` : '',
        currency: {
            amount: _.get(card, 'availableLimit.amount', ''),
            currency: _.get(card, 'availableLimit.currency.code', '')
        },
        isPPRB: isPretermCardPPRB(card) || isPlannedCardPPRB(card),
        arrested,
        ...getNotification(card)
    }

    if (additionalCards && additionalCards.length > 0) {
        cardInfo.additionalCards = additionalCards.map((additionalCard) => getCardInfo(additionalCard))
    }

    if (isPPRBReissueMigrationOn && isPretermCardPPRB(card)) {
        cardInfo.issueType = card.issueType
    }

    if (isPPRBReissueMigrationOn && card.newCardId) {
        cardInfo.newCardId = card.newCardId
    }

    return cardInfo
}

export const findPrevCard = (nextTreeCard, cards, newCardId, isCardFits) => {
    if (nextTreeCard.prevCardId) {
        const prevCard = cards.find((card) => Number(card.id) === Number(nextTreeCard.prevCardId)) || []
        if (prevCard?.state && isCardFits(prevCard, newCardId)) {
            return [
                {
                    ...prevCard,
                    isMigrated: true
                },
                ...findPrevCard(prevCard, cards, newCardId, isCardFits)
            ]
        }
    }
    return []
}

export const pushReissueTree = (nextTreeCard, cards, newCardId) => [nextTreeCard, ...findPrevCard(nextTreeCard, cards, newCardId, isCardMigratedToPPRB)]
export const pushReverseReissueTree = (nextTreeCard, cards, newCardId) => [
    ...findPrevCard(nextTreeCard, cards, newCardId, isPlannedCardMigratedToPPRB),
    nextTreeCard
]

export const getSortedCardsPPRB = (
    cards,
    reissueMigrationOn = isPPRBReissueMigrationOn,
    plannedReissueMigrationOn = isPPRBPlannedReissueMigrationOn
) => {
    let sortedCards = []
    const oldReissuedCards = cards.filter((card) => card.newCardId)
    const newCards = cards.filter((card) => !card.newCardId)

    newCards.forEach((card) => {
        switch (true) {
            case reissueMigrationOn && isPretermCardPPRB(card): {
                sortedCards = [
                    ...sortedCards,
                    ...pushReissueTree(card, oldReissuedCards, card.id)
                ]
                break
            }
            case plannedReissueMigrationOn && isPlannedCardPPRB(card): {
                sortedCards = [
                    ...sortedCards,
                    ...pushReverseReissueTree(card, oldReissuedCards, card.id)
                ]
                break
            }
            default: {
                sortedCards.push(card)
                break
            }
        }
    })

    const nonMigratedCards = _.xorBy(sortedCards.filter((card) => card.isMigrated), oldReissuedCards, 'id')

    return [...sortedCards, ...nonMigratedCards]
}

const attachCards = (allMainCards, allAdditionalCards, userProps) => {
    let sortedMainCards = []
    allMainCards
        .forEach((mainCard) => {
            const attachedAdditional = allAdditionalCards.filter((additionalCard) =>
                additionalCard?.isCTA
                    ? mainCard.number === additionalCard?.cardAccount
                    : mainCard.id === additionalCard.mainCardId)

            if (isCardVisible(mainCard, { userProps })) {
                sortedMainCards = [
                    ...sortedMainCards,
                    {
                        ...mainCard,
                        additionalCards: attachedAdditional
                    }
                ]
            } else {
                sortedMainCards = [
                    ...sortedMainCards,
                    ...attachedAdditional
                ]
            }
        })
    return sortedMainCards
}

export const getCards = (cards, ctaccounts, userProps) => {
    const allMainCards = getSortedCardsPPRB(cards.filter((card) => !card.mainCardId && !card?.isCTA))
    const additionalCards = cards.filter((card) => card.mainCardId && !card?.isCTA)
    let output = attachCards(allMainCards, additionalCards, userProps)

    if (checkFeature('AccessCTATab', PKG_ID)) {
        // Если включена фича AccessCTATab, ищем все карты, привязанные к ctaccounts
        const ctaCards = cards.filter((card) => card.isCTA)
        // Привязываем их к нужным ctaccounts в поле additionalCards
        // И ставим эти ctaccounts в самое начало списка
        output = [...attachCards(ctaccounts, ctaCards, userProps), ...output]
    }

    return output.filter((card) => isCardVisible(card, { userProps }))
        .map((card) => getCardInfo(card))
}
