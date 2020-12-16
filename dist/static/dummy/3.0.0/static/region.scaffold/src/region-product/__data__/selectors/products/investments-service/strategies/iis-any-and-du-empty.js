export const iisAnyAndDuEmpty = (data) => {
    /**
     * У клиента уже оформлен любой из ИИС* и ни одного ДУ
     * 2 (только ДУ)
     */

    const {
        isIisListEmpty,
        isDuListEmpty,
        productList,
        duStrategiesList
    } = data

    const isValid = !isIisListEmpty && isDuListEmpty

    if (!isValid) {
        return []
    }

    return [...productList, ...duStrategiesList]
}
