import moment from 'moment'
import _ from 'lodash'

/**
 * Конвертация строки в Date
 * @param {String} rawDateString - дата в виде строки
 * @return {moment.Moment|*} - дата
 */
export const parseDate = (rawDateString) => {
    if (!rawDateString) {
        return void 0
    }

    return moment(rawDateString, 'DD.MM.YYYYTHH:mm:ss')
}

/**
 * Отсортировать операции
 * @param {Object[]} operations - массив операций
 * @return {*} - массив операций
 */
export const sortOperations = (operations) => _(operations)
    .map((op) => ({
        ...op,
        date: parseDate(op.date),
        id: op.id || op.ufsId
    }))
    .sortBy('date')
    .reverse()
    .value()
