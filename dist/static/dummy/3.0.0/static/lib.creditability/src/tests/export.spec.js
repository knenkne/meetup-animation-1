import { AnalyticEvent, calculatePercents, CapacityInfo, CapacityProduct, CapacityScale, CHANCES, COLORS } from '..'

describe('export', () => {
    it('should be defined', () => {
        expect(CapacityInfo).toBeDefined()
        expect(CapacityScale).toBeDefined()
        expect(CapacityProduct).toBeDefined()
        expect(AnalyticEvent).toBeDefined()
        expect(calculatePercents).toBeDefined()
        expect(CHANCES).toBeDefined()
        expect(COLORS).toBeDefined()
    })
})
