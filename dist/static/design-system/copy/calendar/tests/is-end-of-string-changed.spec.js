import { isEndOfStringChanged } from '../utils'
import { MASK_DATE } from '../constants'

describe('isEndOfStringChanged function', () => {
    const dateTimeFormat = 'L [в] HH:mm'
    const timeMask = MASK_DATE.concat([' ', 'в', ' ', /[0-2]/, /\d/, ':', /[0-5]/, /\d/])
    it('добавление символов', () => {
        const date1 = '12.10.201'
        const date2 = '12.10.2017'
        expect(isEndOfStringChanged(date1, date2, dateTimeFormat, timeMask)).toBeTruthy()
    })
    it('удаление символов в конце', () => {
        const date1 = '12.10.2017'
        const date2 = '12.10.201'
        expect(isEndOfStringChanged(date1, date2, dateTimeFormat, timeMask)).toBeTruthy()
    })
    it('удаление символов в середине', () => {
        const date1 = '12.10.2017'
        const date2 = '12.1.2017'
        expect(isEndOfStringChanged(date1, date2, dateTimeFormat, timeMask)).toBeFalsy()
    })
})
