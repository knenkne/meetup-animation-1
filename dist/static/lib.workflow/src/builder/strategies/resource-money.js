import { useEffect, useState, useMemo } from 'react'

import { getAmount } from '../strategy-protocols/get-amount'
import { getWidgetByIndex } from '../../adapter/selectors'

export const moneyTransformer = (amount = '') => amount.replace(/[^\d.-]/g, '')

const createValidator = (amount, error) => (value) => Number(amount) < Number(value) ? error : ''

/**
 * Базовая стратегия, создана для связывания ресурса списания с полем ввода данных
 * стратегия наблюдает за полем формы с id=fieldLookupId и при изменении выбранного значения
 * меняет валидатор для первого филда в виджете в который приаттачена стартегия
 * @param {Object} store: redux store
 * @param {Object} properties -  свойства объекта описывающего стратегию, приходит с бх в соответствии с
 * https://sbtatlas.sigma.sbrf.ru/wiki/pages/viewpage.action?pageId=2312013635
 * @param {String} strategyOwnerId - id поля
 */

export const resourceMoney = ({ state, properties, fieldLookupId, widgetPlace }) => {

    const nextAmount = getAmount({ store: state, fieldLookupId, transformer: moneyTransformer })
    const [amount, setAmount] = useState(nextAmount)
    const [validators, setValidators] = useState({ strategyValidators: [createValidator(amount, properties.errorProperty)] })

    const fieldId = useMemo(() => {
        const widget = getWidgetByIndex({ state, ...widgetPlace })
        return widget?.fields?.[0]?.id
    }, [widgetPlace])

    if (nextAmount !== amount) {
        setAmount(nextAmount)
    }

    useEffect(() => {
        const newValidator = createValidator(amount, properties.errorProperty)
        setValidators({ strategyValidators: { [fieldId]: [newValidator] } })
    }, [amount])

    return validators
}
