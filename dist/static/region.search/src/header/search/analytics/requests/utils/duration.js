import moment from 'moment'

/**
 * Зафиксировать продолжительность ответа на запрос и отправить метрику
 * @param {Function} metric - функция, отправляющая метрику
 * @param {String} query - значение в строке поиска
 * @return {function(...[*]=)} - возвращает функцию которая посчитает длину запроса (милисекунды) и отправить метрику
 */
export const recordStartDateTime = (metric, query = '') => {
    const startDateTime = moment()

    return (responseEmpty) => {
        const endDateTime = moment()
        const diff = endDateTime.diff(startDateTime)

        metric(query, diff, responseEmpty)

        return diff
    }
}
