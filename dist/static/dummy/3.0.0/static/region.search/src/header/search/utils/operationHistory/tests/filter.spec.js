import { filterByContent } from '../filter'

describe('Тестирование функции filterByContent, отвечающей за поиск нужной операции:', () => {
    it('совпадение по description 1', () => {
        const query = 'мтс'
        const operations = [{
            description: 'работа в мТс',
            operationAmount: {
                amount: 0
            }
        }, {
            description: 'работа',
            operationAmount: {
                amount: 0
            }
        }]
        const result = filterByContent(operations, query)

        expect(result).toEqual([{
            description: 'работа в мТс',
            operationAmount: {
                amount: 0
            }
        }])
    })

    it('совпадение по description 2', () => {
        const query = 'мТс'
        const operations = [{
            description: 'работа в мтс',
            operationAmount: {
                amount: 0
            }
        }, {
            description: 'работа',
            operationAmount: {
                amount: 0
            }
        }]
        const result = filterByContent(operations, query)

        expect(result).toEqual([{
            description: 'работа в мтс',
            operationAmount: {
                amount: 0
            }
        }])
    })

    it('совпадение по amount 1', () => {
        const query = '100'
        const operations = [{
            description: 'работа в мтс',
            operationAmount: {
                amount: 1000
            }
        }, {
            description: 'работа',
            operationAmount: {
                amount: 0
            }
        }]
        const result = filterByContent(operations, query)

        expect(result).toEqual([{
            description: 'работа в мтс',
            operationAmount: {
                amount: 1000
            }
        }])
    })

    it('совпадение по amount 2', () => {
        const query = '100'
        const operations = [{
            description: 'работа в мтс',
            operationAmount: {
                amount: 1100
            }
        }, {
            description: 'работа',
            operationAmount: {
                amount: 0
            }
        }]
        const result = filterByContent(operations, query)

        expect(result).toEqual([{
            description: 'работа в мтс',
            operationAmount: {
                amount: 1100
            }
        }])
    })

    it('нет свойств', () => {
        const query = '100'
        const operations = [{
            description: 'работа в мтс'
        }, {
            operationAmount: {
                amount: 0
            }
        }]
        const result = filterByContent(operations, query)

        expect(result).toEqual([])
    })

    it('совпадение по from - "Тин":', () => {
        const query = 'Тин'
        const operations = [{
            description: 'работа в мтс',
            from: 'Тинькофф'
        }, {
            operationAmount: {
                amount: 0
            }
        }]
        const result = filterByContent(operations, query)

        expect(result).toEqual([{
            description: 'работа в мтс',
            from: 'Тинькофф'
        }])
    })

    it('совпадение по from - "тин":', () => {
        const query = 'тин'
        const operations = [{
            description: 'работа в мтс',
            from: 'Тинькофф'
        }, {
            operationAmount: {
                amount: 0
            }
        }]
        const result = filterByContent(operations, query)

        expect(result).toEqual([{
            description: 'работа в мтс',
            from: 'Тинькофф'
        }])
    })

    it('совпадение по to - "Visa":', () => {
        const query = 'Visa'
        const operations = [{
            to: 'VISA 1111 ....'
        }, {
            operationAmount: {
                amount: 0
            }
        }]
        const result = filterByContent(operations, query)

        expect(result).toEqual([{
            to: 'VISA 1111 ....'
        }])
    })

    it('совпадение по to - "vIsa":', () => {
        const query = 'vIsa'
        const operations = [{
            to: 'VISA 1111 ....'
        }, {
            operationAmount: {
                amount: 0
            }
        }]
        const result = filterByContent(operations, query)

        expect(result).toEqual([{
            to: 'VISA 1111 ....'
        }])
    })

    it('совпадение по date - "27.01.2020T15:30:30":', () => {
        const query = '27.01.2020'
        const operations = [{
            date: '27.01.2020T15:30:30'
        }, {
            operationAmount: {
                amount: 0
            },
            date: '28.01.2020T15:30:30'
        }]
        const result = filterByContent(operations, query)

        expect(result).toEqual([{
            date: '27.01.2020T15:30:30'
        }])
    })
})
