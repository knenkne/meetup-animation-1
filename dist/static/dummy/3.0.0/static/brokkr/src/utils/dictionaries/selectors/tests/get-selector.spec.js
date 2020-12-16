const getSelector = require('../get-selector')

const map = {
    get: () => ({
        'package-name-dev--file-path--class': 'hash1',
        'package-name-r-1--file-path--class': 'hash2',
        'package-name-dev--file-path--class2': 'hash3',
        'package-name-1.0.0--file-path--class2': 'hash4'
    })

}

describe('Формируем селектор на основе hashed selector и css hash map', () => {
    it('Если нет хэша в селекторе', () => {
        expect(getSelector('.foo .bar', map))
            .toBe('.foo .bar')
    })
    it('Если есть хэш в селекторе', () => {
        expect(getSelector('.foo :hash(package-name-dev--file-path--class)', map))
            .toBe('.foo .hash1')
    })
    it('Если есть несколько хэшей в селекторе', () => {
        expect(getSelector('.foo :hash(package-name-dev--file-path--class) :hash(package-name-dev--file-path--class2)', map))
            .toBe('.foo .hash1 .hash3')
    })
    it('Если хэш абстрактный', () => {
        expect(getSelector('.foo :hash(package-name-*--file-path--class)', map))
            .toBe('.foo .hash1, .foo .hash2')
    })
    it('Если несколько абстрактных хэшей', () => {
        expect(getSelector('.foo :hash(package-name-*--file-path--class) :hash(package-name-*--file-path--class2)', map))
            .toBe('.foo .hash1 .hash3, .foo .hash2 .hash3, .foo .hash1 .hash4, .foo .hash2 .hash4')
    })
})
