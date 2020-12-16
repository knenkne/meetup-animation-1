import { capitalize } from '../capitalize'

it('should capitalize', () => {
    expect(capitalize({})).toBe('')
    expect(capitalize(null)).toBe('')
    expect(capitalize('АННА-ЕВА')).toBe('Анна-Ева')
    expect(capitalize('анна-ева')).toBe('Анна-Ева')
    expect(capitalize('АННА ЕВОВА ЕВОВИЧНА')).toBe('Анна Евова Евовична')
})
