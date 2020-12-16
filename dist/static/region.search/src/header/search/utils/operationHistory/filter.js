import _ from 'lodash'

/**
 * Отфильтровать операции по дате.
 * @param {Object[]} operations - массив операций, осуществлённых пользователем.
 * @param {String} query - строка запроса
 * @return {Object[]} массив операций
 */
export const filterByContent = (operations, query) => {
    const string = query.toLowerCase()

    return _(operations).filter((op) => {
        const successInDescription = _.get(op, 'description', '').toLowerCase().indexOf(string) >= 0

        if (successInDescription) {
            return !!successInDescription
        }

        const successInAmount = `${_.get(op, 'operationAmount.amount', '')}`.indexOf(string) >= 0

        if (successInAmount) {
            return !!successInAmount
        }

        const successFrom = _.get(op, 'from', '').toLowerCase().indexOf(string) >= 0

        if (successFrom) {
            return !!successFrom
        }

        const successTo = _.get(op, 'to', '').toLowerCase().indexOf(string) >= 0

        if (successTo) {
            return !!successTo
        }

        const successDate = _.get(op, 'date', '').indexOf(string) >= 0

        if (successDate) {
            return successDate
        }

        return false
    }).value()
}
