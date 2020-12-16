import { splitNumber } from '..'

describe('<CardNumber /> -> splitNumber', () => {
    it('format numbers', () => {
        expect(splitNumber('1234567898765432')).toEqual(['1234', '5678', '9876', '5432'])
        expect(splitNumber('1234 5678 9876 5432')).toEqual(['1234', '5678', '9876', '5432'])
        expect(splitNumber('123456789876543210')).toEqual(['1234', '5678', '9876', '5432', '10'])
        expect(splitNumber('1234 5678 9876 5432 10')).toEqual(['1234', '5678', '9876', '5432', '10'])

        expect(splitNumber('**5432')).toEqual(['••', '5432'])
        expect(splitNumber('••5432')).toEqual(['••', '5432'])
        expect(splitNumber('** 5432')).toEqual(['••', '5432'])
        expect(splitNumber('•• 5432')).toEqual(['••', '5432'])

        expect(splitNumber('1234******765432')).toEqual(['1234', '••••', '••76', '5432'])
    })
})
