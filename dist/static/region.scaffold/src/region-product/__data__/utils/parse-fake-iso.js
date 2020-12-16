/* eslint-disable no-magic-numbers, comment: Переставляем элементы массива местами, ничего осмысленного */
import _ from 'lodash'

/*
 * Parse fake iso
 * @param {String} date - fake iso date
 * @return {Date}
 */
export const parseFakeISO = (date) => {
    if (!_.isEmpty(date)) {
        const splittedDate = date.split('T')[0].split('.')
        return new Date(...[splittedDate[2], splittedDate[1] - 1, splittedDate[0]])
    }

    return date
}
