/**
 * Возвращает функцию проверки пересечения интервала дат с разрешенным интервалом.
 * Используется для виджета lib.ui/Calendar
 * @param {Array} validators массив валидаторов
 * @return {function(*, *): boolean} Функция restriction для lib.ui/Calendar
 */
export const getRestriction = (validators = []) => {
    const startDateRule = validators.find((value) => value.type === 'minValue')
    const startDate = startDateRule && new Date(startDateRule.value)
    const stopDateRule = validators.find((value) => value.type === 'maxValue')
    const stopDate = stopDateRule && new Date(stopDateRule.value)

    const restriction = (date, interval) => {
        const isStartDate = startDate && interval ? interval.end >= startDate : true
        const isStopDate = stopDate && interval ? interval.start <= stopDate : true
        return isStartDate && isStopDate
    }

    return startDate || stopDate ? restriction : void 0
}
