// Коллекция сорс функций для отмены запросов
export const cancelSource = new Set()

// Отменяет все запросы
export const cancelAllRequests = () => {
    cancelSource.forEach((source) => source.cancel())
    cancelSource.clear()
}
