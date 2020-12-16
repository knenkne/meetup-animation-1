import dateFns from 'date-fns'
import _ from 'lodash'

const ruLocale = require('date-fns/locale/ru')

export const formatDate = (date) => {
    if (_.isDate(date)) {
        return dateFns
            .format(date, 'DD.MM.YYYY', { locale: ruLocale })
    }

    return date
}

