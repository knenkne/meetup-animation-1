import { useSelector } from 'react-redux'
import { getFormValues } from 'redux-form'

import { structurePositionToWidgetPart } from '../../components/utils/structure-position-to-widget-part'
import { getName } from '../../../adapter/selectors'

/**
 * запускает стратегии на каждый вызов, прокидывает валидаторы, которые возвращает хук стратегии в нижележащий компонент
 * @param {Array} widgetStrategies - массив объектов содержащих стратегии и их свойства
 * @param {Object} props -  пропсы виджета
 * @return {{fields: Array}} - поля с валидаторами которые возвращает стратегия
 */
export function useStrategy ({ widgetStrategies, props }) {

    let strategyValidators = []

    const state = useSelector((x) => x)

    const formValues = useSelector(() => getFormValues(getName(state))(state))

    if (widgetStrategies && widgetStrategies.length) {
        const widgetPlace = {
            screenIndex: props.screenIndex,
            screenPart: structurePositionToWidgetPart(props.structurePosition),
            widgetIndex: props.widgetIndex
        }

        widgetStrategies.forEach(({ fn, properties, fieldLookupId }) => {
            strategyValidators = fn({ state, properties, widgetPlace, fieldLookupId, formValues })?.strategyValidators
        })
    }

    return { strategyValidators }
}
