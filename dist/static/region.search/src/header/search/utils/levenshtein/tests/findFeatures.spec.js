import { find } from '../findFeatures'

const features = [{
    id: 20,
    type: 'Action',
    category: 'Переводы и платежи',
    action: 'Перевод между своими счетами и картами',
    keyWords: 'перевод между своими счетами и картами, переводы',
    keyWordsArray: 'перевод между своими счетами и картами, переводы'.split(', '),
    link: '/PhizIC/private/payments/payment.do?form=InternalPayment',
    prodListType: null
},
{
    id: 30,
    type: 'Action',
    category: 'Переводы и платежи',
    action: 'Обмен валюты',
    keyWords: 'обмен валюты, валюта, купить доллары, продать евро, купить евро, продать доллары, кросс-курс',
    keyWordsArray: 'обмен валюты, валюта, купить доллары, продать евро, купить евро, продать доллары, кросс-курс'.split(', '),
    link: '/PhizIC/private/payments/payment.do?form=ConvertCurrencyPayment',
    prodListType: null
},
{
    id: 40,
    type: 'Action',
    category: 'Переводы и платежи',
    action: 'Перевод клиенту Сбербанка',
    keyWords: 'перевод клиенту сбербанка, перевод по номеру телефона, перевод на карту, переводы',
    keyWordsArray: 'перевод клиенту сбербанка, перевод по номеру телефона, перевод на карту, переводы'.split(', '),
    link: '/PhizIC/private/payments/payment.do?form=RurPayment&receiverSubType=ourCard',
    prodListType: null
}]

describe('Тестирование функции, создающий массив строк', () => {
    it('ищем слово "перевот"', async () => {
        const data = await find(features, 'перевот')

        expect(data).toEqual([
            {
                action: 'Перевод между своими счетами и картами',
                category: 'Переводы и платежи',
                id: 20,
                keyWords: 'перевод между своими счетами и картами, переводы',
                keyWordsArray: [
                    'перевод между своими счетами и картами',
                    'переводы',
                ],
                link: '/PhizIC/private/payments/payment.do?form=InternalPayment',
                prodListType: null,
                score: {
                    distance: 2,
                    word: 'переводы',
                },
                type: 'Action',
            },
            {
                action: 'Перевод клиенту Сбербанка',
                category: 'Переводы и платежи',
                id: 40,
                keyWords: 'перевод клиенту сбербанка, перевод по номеру телефона, перевод на карту, переводы',
                keyWordsArray: [
                    'перевод клиенту сбербанка',
                    'перевод по номеру телефона',
                    'перевод на карту',
                    'переводы',
                ],
                link: '/PhizIC/private/payments/payment.do?form=RurPayment&receiverSubType=ourCard',
                prodListType: null,
                score: {
                    distance: 2,
                    word: 'переводы',
                },
                type: 'Action',
            },
        ])
    })
})
