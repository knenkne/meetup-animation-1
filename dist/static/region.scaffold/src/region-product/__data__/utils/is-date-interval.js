import dateFns from 'date-fns'

/*
 * Проверка попадания даты в интервал
 * @param {Date} date - проверяемая дата
 * @param {Number} interval - количество дней в интервале
 * @return {boolean}
 */
export const isDateInterval = (date, interval) => dateFns.addDays(new Date(), -interval) <= date && (new Date() >= date)
