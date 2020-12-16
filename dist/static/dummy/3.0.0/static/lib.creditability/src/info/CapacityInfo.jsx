import _ from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'
import i18next from 'i18next'

import { CapacityHellScale } from '../hellscale'
import { calculatePercents, CHANCES, getChance } from '../utils'

import styles from './style.css'

const TEXTS = {
    [CHANCES.HIGH]: ['decisionHighKey', 'adviceHighKey'],
    [CHANCES.MEDIUM]: ['decisionMediumKey', 'adviceMediumKey'],
    [CHANCES.LOW]: ['decisionLowKey', 'adviceLowKey']
}

export const CapacityInfo = ({ total, used, reserved, limits, ...textKeys }) => {
    const totalUsed = used + reserved
    const percentUsed = calculatePercents(total, used)

    const percentReserved = calculatePercents(total, reserved)
    const medium = calculatePercents(total, _.get(limits, 'medium', total))
    const low = calculatePercents(total, _.get(limits, 'low', total))
    const limitsPercents = { medium, low }
    const totalPercentsUsed = percentReserved + percentUsed
    const chance = getChance(total, totalUsed, limits)

    const [decisionKeyProp, adviceKeyProp] = TEXTS[chance]

    return (
        <div className={styles.info}>
            <div className={styles.infoContent}>
                <h3 className={styles.title}>{i18next.t(textKeys[decisionKeyProp])}</h3>
                <div className={styles.advice}>{i18next.t(textKeys[adviceKeyProp])}</div>
                <div className={styles.status}>{i18next.t('lib.creditability:info.title', { used: totalPercentsUsed })}</div>
            </div>
            <div className={styles.infoScaleContainer}>
                <div className={styles.infoScaleInside}>
                    {i18next.t('lib.creditability:info.scale.title', { used: totalPercentsUsed })}
                    <span className={styles.infoScaleSubtitle}>
                        {i18next.t('lib.creditability:info.scale.subtitle')}
                    </span>
                </div>
                <CapacityHellScale used={percentUsed} reserved={percentReserved} limits={limitsPercents} />
            </div>
        </div>
    )
}

CapacityInfo.propTypes = {
    /** Общая сумма КП */
    total: PropTypes.number.isRequired,
    /** Сумма занятой части КП */
    used: PropTypes.number,
    /** Сумма зарезервированной части КП, например при выборе суммы кредита в калькулятора */
    reserved: PropTypes.number,
    /** Суммы лимитов одобрения. Если не переданы, шкала полностью зеленая */
    limits: PropTypes.shape({
        /** Среднего шанса одобрения */
        medium: PropTypes.number,
        /** Низкого шанса одобрения */
        low: PropTypes.number
    }),
    /** Ключ i18next для текста решения об одобрении при высоком шансе */
    decisionHighKey: PropTypes.string,
    /** Ключ i18next для текста совета при высоком шансе */
    adviceHighKey: PropTypes.string,
    /** Ключ i18next для текста решения об одобрении при среднем шансе */
    decisionMediumKey: PropTypes.string,
    /** Ключ i18next для текста совета при среднем шансе */
    adviceMediumKey: PropTypes.string,
    /** Ключ i18next для текста решения об одобрении при низком шансе */
    decisionLowKey: PropTypes.string,
    /** Ключ i18next для текста совета при низком шансе */
    adviceLowKey: PropTypes.string
}

CapacityInfo.defaultProps = {
    used: 0,
    reserved: 0,
    limits: void 0,
    decisionHighKey: 'lib.creditability:info.decision.high',
    adviceHighKey: 'lib.creditability:info.advice.high',
    decisionMediumKey: 'lib.creditability:info.decision.medium',
    adviceMediumKey: 'lib.creditability:info.advice.medium',
    decisionLowKey: 'lib.creditability:info.decision.low',
    adviceLowKey: 'lib.creditability:info.advice.low'
}

CapacityInfo.displayName = 'CapacityInfo'
