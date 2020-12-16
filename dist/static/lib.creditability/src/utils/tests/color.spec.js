import { getChance, getColors } from '../color'
import { CHANCES } from '../constants'

describe('Utils', () => {
    describe('Color', () => {

        const GREEN = { color: 'rgb(8,166,82)', background: 'rgb(227,249,229)' }
        const YELLOW = { color: 'rgb(255,204,0)', background: 'rgb(255,249,229)' }
        const RED = { color: 'rgb(204,0,0)', background: 'rgb(255,227,227)' }

        it('should proper get colors', () => {
            const limits = { medium: 600, low: 900 }
            const total = 1000

            expect(getColors(total, 300)).toEqual(GREEN)
            expect(getColors(total, 800)).toEqual(GREEN)
            expect(getColors(total, 1000)).toEqual(GREEN)

            expect(getColors(total, 300, limits)).toEqual(GREEN)
            expect(getColors(total, 800, limits)).toEqual(YELLOW)
            expect(getColors(total, 1000, limits)).toEqual(RED)

            expect(getColors(total, 600, limits)).toEqual({ color: 'rgb(132,185,41)', background: 'rgb(241,249,229)' })
            expect(getColors(total, 900, limits)).toEqual({ color: 'rgb(230,102,0)', background: 'rgb(255,238,228)' })
        })

        it('should proper get colors in boundary cases', () => {
            expect(getColors(900, 900, { medium: 600, low: 900 })).toEqual(YELLOW)
            expect(getColors(600, 600, { medium: 600 })).toEqual(GREEN)
        })

        it('should proper get colors with large total and small zones', () => {
            expect(getColors(10000, 1000, { medium: 950, low: 1050 })).toEqual({ color: 'rgb(106,83,41)', background: 'rgb(241,238,228)' })
        })

        it('should proper get colors with partial limits', () => {
            const data = [
                [0, 0, RED, RED, RED], /* Красная */
                [0, 800, YELLOW, YELLOW, RED], /* Жёлтая, красная */
                [0, null, YELLOW, YELLOW, YELLOW], /* Жёлтая */
                /* [400, 0, ...] Невозможный */
                [400, 800, GREEN, YELLOW, RED], /* Зелёная, желтая, красная */
                [400, null, GREEN, YELLOW, YELLOW], /* Зелёная, жёлтая*/
                [null, 0, RED, RED, RED], /* Красная */
                [null, 800, GREEN, GREEN, RED], /* Зелёная, жёлтая*/
                [null, null, GREEN, GREEN, GREEN] /* Зелёная */
            ]
            data.forEach((dataPiece) => {
                expect(getColors(1000, 0, { medium: dataPiece[0], low: dataPiece[1] })).toEqual(dataPiece[2])
                expect(getColors(1000, 500, { medium: dataPiece[0], low: dataPiece[1] })).toEqual(dataPiece[3])
                expect(getColors(1000, 900, { medium: dataPiece[0], low: dataPiece[1] })).toEqual(dataPiece[4])
            })
        })

        it('should proper determinate chances', () => {
            const limits = { medium: 600, low: 900 }
            const total = 1000

            expect(getChance(total, 0, limits)).toEqual(CHANCES.HIGH)
            expect(getChance(total, 300, limits)).toEqual(CHANCES.HIGH)
            expect(getChance(total, 599, limits)).toEqual(CHANCES.HIGH)

            expect(getChance(total, 600, limits)).toEqual(CHANCES.MEDIUM)
            expect(getChance(total, 899, limits)).toEqual(CHANCES.MEDIUM)

            expect(getChance(total, 900, limits)).toEqual(CHANCES.LOW)
            expect(getChance(total, 1000, limits)).toEqual(CHANCES.LOW)
        })
    })
})
