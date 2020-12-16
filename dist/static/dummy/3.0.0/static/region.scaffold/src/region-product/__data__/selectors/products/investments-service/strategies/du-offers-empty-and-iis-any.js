export const duOffersEmptyAndIisAny = (data) => {
    /**
     * У клиента уже оформлены обе стратегии ДУ и любой ИИС
     * 0 (Не отображать)
     */

    const {
        isDuOffersListEmpty,
        isIisListEmpty,
        productList
    } = data

    const isValid = isDuOffersListEmpty && !isIisListEmpty

    if (!isValid) {
        return []
    }

    return [...productList]
}
