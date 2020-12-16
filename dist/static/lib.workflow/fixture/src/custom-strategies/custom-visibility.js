import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { protocols } from '../../../src'

/**
 * Пример cтратегии скрывающей виджеты.
 * Подобные стратегии разрабытваются силами прикладных команд
 * Стратегия наблюдает за значением филдов,
 * при определенном изменении значения поля стратегия изменяет видимость виджета
 * путем диспатча экшна changeWidgetVisibility
 *
 * @param {Object} properties - properties стратегии с бх
 * @param {Object} widgetPlace - объект с положением виджета
 * @param {Object} store: redux store
 */

export function customVisibility ({ properties, widgetPlace, formValues }) {
    const [hidden, setHidden] = useState(false)

    const dispatch = useDispatch()

    const { radioId, switchId } = properties
    const { changeWidgetVisibility } = protocols

    const radioValue = formValues[radioId]
    const switchValue = formValues[switchId]

    useEffect(() => {
        setHidden(radioValue === 'email' && switchValue === true)
    }, [radioValue, switchValue])

    useEffect(() => {
        dispatch(changeWidgetVisibility({ ...widgetPlace, hiddenByStrategy: hidden }))
    }, [hidden])
}
