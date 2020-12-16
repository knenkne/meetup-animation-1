import isEmpty from 'lodash/isEmpty'

export const iisEmptyAndDuEmpty = (data) => {
    /**
     * У клиента нет оформленных стратегий ИИС и ДУ
     * 4 (2 для ИИС и 2 для ДУ)
     */

    const {
        iisList,
        duList,
        productList,
        iisStrategiesList,
        duStrategiesList,
    } = data

    const isValid = isEmpty([...iisList, ...duList])

    if (!isValid) {
        return []
    }

    return [...productList, ...iisStrategiesList, ...duStrategiesList]
}
