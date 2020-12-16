module.exports = {
    // Перевод физическому лицу
    RurPayment: { id: 'RurPayment', isUFS: true, isERIB: true },
    // Рекомендованные платежи для клиента
    RecommendedPaymentService: { id: 'RecommendedPaymentService', isUFS: true, isERIB: true },
    // Бонусная программа Спасибо от Сбербанка
    LoyaltyService: { id: 'LoyaltyService', isUFS: true, isERIB: true },
    // Анализ личных финансов: Доступные средства
    ViewFinance: { id: 'ViewFinance', isUFS: true, isERIB: true },
    // Журнал операций (он же история операций)
    PaymentList: { id: 'PaymentList', isUFS: true, isERIB: true },
    // Доступ к курсам валют
    CurrenciesRateInfo: { id: 'CurrenciesRateInfo', isUFS: true, isERIB: true },
    NewClientProfile: {
        id: 'NewClientProfile',
        isUFS: false,
        isPL_ERIB: true,
        isERIB: true
    }
}
