import { recordStartDateTime } from '../duration'

describe('Протестировать duration:', () => {
    it('recordStartDateTime', () => {
        const mockMetric = jest.fn()
        const sendDuration = recordStartDateTime(mockMetric, 'test query')
        const diff = sendDuration(false)

        expect(mockMetric).toHaveBeenCalledTimes(1)
        expect(mockMetric).toHaveBeenCalledWith('test query', diff, false)
    })
})
