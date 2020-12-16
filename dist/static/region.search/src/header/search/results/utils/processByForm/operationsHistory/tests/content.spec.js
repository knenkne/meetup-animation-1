import {
    normalizeString,
    removeMultipleSpaces,
    parseString,
    getTitle,
    getDescription,
    calculate
} from '../content'

describe('Тестирование методов извлечения контента для поисковой выдачи истории операций:', () => {
    it('normalizeString, "Заказ отчета по карте↵                                                MIR2202 20•• •••• 1078"', () => {
        expect(normalizeString('Заказ отчета по карте↵                                                MIR2202 20•• •••• 1078'))
            .toBe('Заказ отчета по карте                                                MIR2202 20•• •••• 1078')
    })

    it('normalizeString, "null"', () => {
        expect(normalizeString(null)).toBe('')
    })

    it('removeMultipleSpaces', () => {
        expect(removeMultipleSpaces('d d')).toBe('d d')
        expect(removeMultipleSpaces('d  d')).toBe('d d')
        expect(removeMultipleSpaces('d d  d    d')).toBe('d d d d')
        expect(removeMultipleSpaces('d d  d    d ')).toBe('d d d d ')
        expect(removeMultipleSpaces('d d  d    d  ')).toBe('d d d d ')
    })

    it('parseString "Возобновление копилки"', () => {
        const result = parseString('Возобновление копилки')

        expect(result).toEqual({
            text: 'Возобновление копилки'
        })
    })

    it('parseString "MIR Gold 2202 20•• •••• 8506"', () => {
        const result = parseString('MIR Gold 2202 20•• •••• 8506')

        expect(result).toEqual({
            text: 'MIR Gold',
            accountNumber: '•• 8506'
        })
    })

    it('parseString "40817810638250127877"', () => {
        const result = parseString('40817810638250127877')

        expect(result).toEqual({
            text: '',
            accountNumber: '•• 7877'
        })
    })

    it('parseString "Сберегательный счет                        40817810638250127877"', () => {
        const result = parseString('Сберегательный счет                        40817810638250127877')

        expect(result).toEqual({
            text: 'Сберегательный счет',
            accountNumber: '•• 7877'
        })
    })

    it('parseString "Заказ отчета по карте↵                                                MIR2202 20•• •••• 1078"', () => {
        const result = parseString('Заказ отчета по карте↵                                                MIR2202 20•• •••• 1078')

        expect(result).toEqual({
            text: 'Заказ отчета по карте↵ MIR',
            accountNumber: '•• 1078'
        })
    })

    it('parseString "ТСЖ Малкова, 28а"', () => {
        const result = parseString('ТСЖ Малкова, 28а')

        expect(result).toEqual({
            text: 'ТСЖ Малкова, 28а'
        })
    })

    it('parseString "Обезлич. мет. счета (серебро) 20309099038250400650"', () => {
        const result = parseString('Обезлич. мет. счета (серебро) 20309099038250400650')

        expect(result).toEqual({
            text: 'Обезлич. мет. счета (серебро)',
            accountNumber: '•• 0650'
        })
    })

    it('parseString "Maestro 6761 96•• •••• ••43 68"', () => {
        const result = parseString('Maestro 6761 96•• •••• ••43 68')

        expect(result).toEqual({
            text: 'Maestro',
            accountNumber: '•• 4368'
        })
    })

    it('parseString "****2291"', () => {
        const result = parseString('****2291')

        expect(result).toEqual({
            text: '•• 2291'
        })
    })

    it('parseString "SBOL                     MOSCOW       RUS"', () => {
        const result = parseString('SBOL                     MOSCOW       RUS')

        expect(result).toEqual({
            text: 'SBOL MOSCOW RUS'
        })
    })

    it('getTitle "Возобновление копилки"', () => {
        expect(getTitle(true, 'Возобновление копилки')).toBe('Возобновление копилки')
        expect(getTitle(false, 'Возобновление копилки')).toBe('Возобновление копилки')
    })

    it('getTitle "MIR Gold 2202 20•• •••• 8506"', () => {
        expect(getTitle(true, 'MIR Gold 2202 20•• •••• 8506')).toBe('MIR Gold')
        expect(getTitle(false, 'MIR Gold 2202 20•• •••• 8506')).toBe('MIR Gold •• 8506')
    })

    it('getTitle "40817810638250127877"', () => {
        expect(getTitle(true, '40817810638250127877')).toBe('')
        expect(getTitle(false, '40817810638250127877')).toBe('•• 7877')
    })

    it('getTitle "Сберегательный счет                        40817810638250127877"', () => {
        expect(getTitle(true, 'Сберегательный счет                        40817810638250127877')).toBe('Сберегательный счет')
        expect(getTitle(false, 'Сберегательный счет                        40817810638250127877')).toBe('Сберегательный счет •• 7877')
    })

    it('getTitle "Заказ отчета по карте↵                                                MIR2202 20•• •••• 1078"', () => {
        expect(getTitle(true, 'Заказ отчета по карте↵                                                MIR2202 20•• •••• 1078')).toBe('Заказ отчета по карте↵ MIR')
        expect(getTitle(false, 'Заказ отчета по карте↵                                                MIR2202 20•• •••• 1078')).toBe('Заказ отчета по карте↵ MIR •• 1078')
    })

    it('getTitle "ТСЖ Малкова, 28а"', () => {
        expect(getTitle(true, 'ТСЖ Малкова, 28а')).toBe('ТСЖ Малкова, 28а')
        expect(getTitle(false, 'ТСЖ Малкова, 28а')).toBe('ТСЖ Малкова, 28а')
    })

    it('getTitle "Обезлич. мет. счета (серебро) 20309099038250400650"', () => {
        expect(getTitle(true, 'Обезлич. мет. счета (серебро) 20309099038250400650')).toBe('Обезлич. мет. счета (серебро)')
        expect(getTitle(false, 'Обезлич. мет. счета (серебро) 20309099038250400650')).toBe('Обезлич. мет. счета (серебро) •• 0650')
    })

    it('getTitle "Maestro 6761 96•• •••• ••43 68"', () => {
        expect(getTitle(true, 'Maestro 6761 96•• •••• ••43 68')).toBe('Maestro')
        expect(getTitle(false, 'Maestro 6761 96•• •••• ••43 68')).toBe('Maestro •• 4368')
    })

    it('getTitle "****2291"', () => {
        expect(getTitle(true, '****2291')).toBe('•• 2291')
        expect(getTitle(false, '****2291')).toBe('•• 2291')
    })

    it('getTitle "SBOL                     MOSCOW       RUS"', () => {
        expect(getTitle(true, 'SBOL                     MOSCOW       RUS')).toBe('SBOL MOSCOW RUS')
        expect(getTitle(false, 'SBOL                     MOSCOW       RUS')).toBe('SBOL MOSCOW RUS')
    })

    it('getDescription "Возобновление копилки"', () => {
        expect(getDescription(true, 'Возобновление копилки')).toBe('')
        expect(getDescription(false, 'Возобновление копилки')).toBe('Возобновление копилки')
    })

    it('getDescription "MIR Gold 2202 20•• •••• 8506"', () => {
        expect(getDescription(true, 'MIR Gold 2202 20•• •••• 8506')).toBe('•• 8506')
        expect(getDescription(false, 'MIR Gold 2202 20•• •••• 8506')).toBe('MIR Gold •• 8506')
    })

    it('getDescription "40817810638250127877"', () => {
        expect(getDescription(true, '40817810638250127877')).toBe('•• 7877')
        expect(getDescription(false, '40817810638250127877')).toBe('•• 7877')
    })

    it('getDescription "Сберегательный счет                        40817810638250127877"', () => {
        expect(getDescription(true, 'Сберегательный счет                        40817810638250127877')).toBe('•• 7877')
        expect(getDescription(false, 'Сберегательный счет                        40817810638250127877')).toBe('Сберегательный счет •• 7877')
    })

    it('getDescription "Заказ отчета по карте↵                                                MIR2202 20•• •••• 1078"', () => {
        expect(getDescription(true, 'Заказ отчета по карте↵                                                MIR2202 20•• •••• 1078')).toBe('•• 1078')
        expect(getDescription(false, 'Заказ отчета по карте↵                                                MIR2202 20•• •••• 1078')).toBe('Заказ отчета по карте↵ MIR •• 1078')
    })

    it('getDescription "ТСЖ Малкова, 28а"', () => {
        expect(getDescription(true, 'ТСЖ Малкова, 28а')).toBe('')
        expect(getDescription(false, 'ТСЖ Малкова, 28а')).toBe('ТСЖ Малкова, 28а')
    })

    it('getDescription "Обезлич. мет. счета (серебро) 20309099038250400650"', () => {
        expect(getDescription(true, 'Обезлич. мет. счета (серебро) 20309099038250400650')).toBe('•• 0650')
        expect(getDescription(false, 'Обезлич. мет. счета (серебро) 20309099038250400650')).toBe('Обезлич. мет. счета (серебро) •• 0650')
    })

    it('getDescription "Maestro 6761 96•• •••• ••43 68"', () => {
        expect(getDescription(true, 'Maestro 6761 96•• •••• ••43 68')).toBe('•• 4368')
        expect(getDescription(false, 'Maestro 6761 96•• •••• ••43 68')).toBe('Maestro •• 4368')
    })

    it('getDescription "****2291"', () => {
        expect(getDescription(true, '****2291')).toBe('')
        expect(getDescription(false, '****2291')).toBe('•• 2291')
    })

    it('getDescription "SBOL                     MOSCOW       RUS"', () => {
        expect(getDescription(true, 'SBOL                     MOSCOW       RUS')).toBe('')
        expect(getDescription(false, 'SBOL                     MOSCOW       RUS')).toBe('SBOL MOSCOW RUS')
    })

    it('calculate "MIR Gold 2202 20•• •••• 8506" и "Возобновление копилки"', () => {
        expect(calculate('MIR Gold 2202 20•• •••• 8506', 'Возобновление копилки')).toEqual({
            title: 'MIR Gold •• 8506',
            description: 'Возобновление копилки'
        })
    })

    it('calculate "40817810638250127877" и "Сберегательный счет                        40817810638250127877"', () => {
        expect(calculate('40817810638250127877', 'Сберегательный счет                        40817810638250127877')).toEqual({
            title: '•• 7877',
            description: 'Сберегательный счет •• 7877'
        })
    })

    it('calculate "Заказ отчета по карте↵                                                MIR2202 20•• •••• 1078"', () => {
        expect(calculate('', 'Заказ отчета по карте↵                                                MIR2202 20•• •••• 1078')).toEqual({
            title: 'Заказ отчета по карте MIR',
            description: '•• 1078'
        })
    })

    it('calculate "ТСЖ Малкова, 28а"', () => {
        expect(calculate('', 'ТСЖ Малкова, 28а')).toEqual({
            title: 'ТСЖ Малкова, 28а',
            description: ''
        })
    })

    it('calculate "Обезлич. мет. счета (серебро) 20309099038250400650" и "Maestro 6761 96•• •••• ••43 68"', () => {
        expect(calculate('Обезлич. мет. счета (серебро) 20309099038250400650', 'Maestro 6761 96•• •••• ••43 68')).toEqual({
            title: 'Обезлич. мет. счета (серебро) •• 0650',
            description: 'Maestro •• 4368'
        })
    })

    it('calculate "****2291" и ""', () => {
        expect(calculate('****2291', 'SBOL                     MOSCOW       RUS'))
            .toEqual({
                title: '•• 2291',
                description: 'SBOL MOSCOW RUS'
            })
    })
})
