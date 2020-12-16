import { isValidBik } from '../utils/is-valid-bik'
import { isValidAccount} from '../utils/is-valid-account'

describe('<CoreAccount /> Utils', () => {
    describe('isValidBik', () => {
        it('first 2 symbols !== 04', () => {
            const bik = '034525974'
            expect(isValidBik(bik)).toBe(false)
        })

        it('last 3 symbols < 050', () => {
            const bik = '044525049'
            expect(isValidBik(bik)).toBe(false)
        })

        it('correct bik', () => {
            const bik = '044525974'
            expect(isValidBik(bik)).toBe(true)
        })
    })

    describe('isValidAccount', () => {
        it('correct checksum', () => {
            const bik = '044525974'
            const account = '40817810000003419217'
            expect(isValidAccount(account, bik)).toBe(true)
        })

        it('incorrect checksum', () => {
            const bik = '044525973'
            const account = '40817810000003419217'
            expect(isValidAccount(account, bik)).toBe(false)
        })
    })
})

