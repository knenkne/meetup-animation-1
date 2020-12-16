export const iisAnyAndDuAny = (data) => {
    /**
     * У клиента уже оформлены любой из ИИС* и ДУ (Стратегия «Сбалансированный доход»)
     * 1 (Стратегия «Облигационный доход – Рублёвые облигации»)
     *
     * У клиента уже оформлены любой из ИИС* и ДУ (Стратегия «Облигационный доход – Рублёвые облигации»)
     * 1 (Стратегия «Сбалансированный доход»)
     */

    const {
        isIisListEmpty,
        isDuListEmpty,
        isDuOffersListEmpty,
        productList,
        duOffers
    } = data

    const isValid = !isIisListEmpty && !isDuListEmpty && !isDuOffersListEmpty

    if (!isValid) {
        return []
    }

    return [...productList, ...duOffers]
}
