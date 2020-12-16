export const autoClaimDocCon = {
    products: {
        autoLoans: {
            loansList: {
                status: {
                    code: 0
                },
                documents: [
                    {
                        documentId: 'bc0dcf59754943d4828b923a58a612be',
                        productType: 'CarLoan',
                        productCode: 'GPDM',
                        productName: 'Автокредит HYUNDAI CRETA',
                        lastEdited: '2019-08-06T09:57:22+03:00',
                        status: 'INITIAL',
                        statusName: 'Черновик',
                        amount: 500000,
                        approvedAmount: 500000,
                        currency: 'RUB',
                        term: 36,
                        rateFrom: 12.3,
                        rateTo: 12.3,
                        initialFee: 500000,
                        mobilePhone: '905xxx2825',
                        paymentAmount: 16679
                    },
                    {
                        documentId: '1ed11ecaacd94f6d927c612bd3ac19e3',
                        productType: 'CarLoan',
                        productCode: 'LELP',
                        productName: 'Автокредит FORD FIESTA',
                        lastEdited: '2019-08-09T12:36:03+03:00',
                        expDate: '2019-09-23T00:00:00+03:00',
                        status: 'EXECUTED',
                        statusName: 'Исполнен',
                        amount: 498400,
                        approvedAmount: 498400,
                        currency: 'RUB',
                        term: 60,
                        rateFrom: 16.5,
                        rateTo: 16.5,
                        initialFee: 452000,
                        mobilePhone: '905xxx1197',
                        urlToCetelem: 'https://www.cetelem.ru/dilerskie-centry/?region_code=35&car_brand=FORD&car_model=FIESTA&pre_owned=N&product_code=LELP',
                        paymentAmount: 12253,
                        markRate: 16.5,
                        prPrice: 0,
                        brand: 'FORD',
                        model: 'FIESTA',
                        carPrice: 880000,
                        carId: '1305',
                        conditions: [
                            {
                                title: 'Залог приобретаемого в кредит автомобиля',
                                value: ''
                            },
                            {
                                title: 'Обязательный полис КАСКО',
                                value: 'loans.car.calculator.condition.kasko'
                            },
                            {
                                title: 'Документы, необходимые для получения кредита',
                                value: 'loans.car.calculator.condition.docs.NoIncome'
                            }
                        ],
                        GAP: 70400,
                        isNewCar: true
                    }
                ],
                contracts: [
                    {
                        contractNum: '04109006259',
                        documentId: 'PSI2_0000000000000025554',
                        accountStatus: 'DELAY',
                        productType: 'CarLoan',
                        productCode: 'LELP',
                        productName: 'Лояльный ХК: для повторных клиентов',
                        currency: 'RUB',
                        status: 'SUCCESSED',
                        statusName: 'Кредит выдан',
                        amount: 413078.00,
                        balanceLoan: 0,
                        accountNum: '40817810704109006259',
                        initialFee: 555000.00,
                        rate: 15.9,
                        term: 24,
                        paymentDate: '2020-03-09',
                        paymentAmount: 9972.00,
                        signedDate: '2019-03-28',
                        endDate: '2024-04-08',
                        details: {
                            remainsToPay: 405891.59,
                            paymentSum: 405891.59,
                            sumMainDept: 382144.15,
                            interestPayment: 21957.91,
                            paymentInterestPayment: 4879.66,
                            paymentSumMainDept: 5092.34,
                            latePayment: 41508.66,
                            lastUpdateDate: '2019-11-01T12:14:34+0300'
                        }
                    }
                ]
            }
        }
    }
}
