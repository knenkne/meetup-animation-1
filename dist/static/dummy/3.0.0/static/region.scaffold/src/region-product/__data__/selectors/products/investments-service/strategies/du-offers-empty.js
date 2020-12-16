export const duOffersEmpty = (data) => {
    /**
     * У клиента уже оформлены обе стратегии ДУ
     * 2 (только ИИС)
     */

    const {
        isDuOffersListEmpty,
        isIisListEmpty,
        productList,
        iisStrategiesList,
    } = data

    const isValid = isDuOffersListEmpty && isIisListEmpty

    if (!isValid) {
        return []
    }

    return [...productList, ...iisStrategiesList]
}
