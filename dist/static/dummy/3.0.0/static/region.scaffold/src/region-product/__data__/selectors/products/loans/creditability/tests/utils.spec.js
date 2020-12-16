import { getIconProps, getProduct, getUsed, isVisible } from '../utils'

const PARTS = { available: 100, used: 30, reserved: 15 }
const LOCALES = { title: 'Some title', description: 'Some description' }

describe('creditability', () => {
    describe('utils', () => {
        it('getUsed', () => {
            expect(getUsed(PARTS)).toEqual(32)
        })

        it('getProduct', () => {
            expect(getProduct({ status: 'LC_DECLINED', parts: PARTS, locales: LOCALES, system: 'UFS' })).toEqual({
                id: 'creditability',
                type: 'creditability',
                name: 'Some title',
                message: { text: 'Some description', },
                href: '/loans/creditability',
                icon: { background: '#3A424A', color: '#5B5BAD', used: 27, },
                notification: 'unknown',
                theme: 'appearanceAnimation',
                handleItemClick: expect.any(Function)
            })
        })

        it('getIconProps', () => {
            expect(getIconProps('LC_ACCEPTED', PARTS)).toEqual({
                background: '#30309A',
                color: '#8585C2',
                used: 32,
            })
            expect(getIconProps('LC_EXPIRED', PARTS)).toEqual({
                background: '#3A424A',
                color: '#5B5BAD',
                used: 27,
            })
        })

        it('isVisible', () => {
            expect(isVisible('LC_ACCEPTED')).toEqual(true)

            expect(isVisible('LC_LIGHT_VALUE_DECLINE')).toEqual(false)
            expect(isVisible('LC_ERROR')).toEqual(false)

            expect(isVisible('LC_NOT_CALCULATED')).toEqual(true)
            expect(isVisible('LC_CALCULATION_TIMEOUT_ERROR')).toEqual(false)
        })
    })
})
