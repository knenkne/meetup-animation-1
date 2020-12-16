export const anyDuAndIisEmpty = (data) => {

    /**
     * У клиента уже оформлен 1 ДУ
     *
     * У клиента уже оформлен ДУ (Стратегия «Облигационный доход – Рублёвые облигации»)
     * 3 (2 для ИИС и 1 ДУ Стратегия «Сбалансированный доход»)
     *
     * У клиента уже оформлен ДУ (Стратегия «Сбалансированный доход»)
     * 3 (2 для ИИС и 1 ДУ Стратегия «Облигационный доход – Рублёвые облигации»)
     */

    const {
        duOffers,
        iisStrategiesList,
        isDuListEmpty,
        isDuOffersListEmpty,
        isIisListEmpty,
        productList
    } = data

    const isValid = !isDuListEmpty && isIisListEmpty && !isDuOffersListEmpty

    if (!isValid) {
        return []
    }

    return [...productList, ...iisStrategiesList, ...duOffers]
}
