import _ from 'lodash'

const FORMS_MAPPING = {

    MONEYBOX_FORMS: [
        'MoneyBoxPaymentIncome',
        'CreateMoneyBoxPayment',
        'CloseMoneyBoxPayment',
        'EditMoneyBoxClaim',
        'RefuseMoneyBoxPayment',
        'RecoverMoneyBoxPayment'
    ],

    ARREST_FORMS: [
        'ArrestMeans'
    ],

    ARREST_CANCELLATION_FORMS: [
        'ArrestCancellation'
    ],

    DOC_FORMS: [
        'CardReportDeliveryClaim',
        'ReportByCardClaim',
        'PersonalFinanceProfile',
        'PFRStatementClaim',
        'UfsInvestmentIisAccClaimEdit'
    ],

    PAYMENT_FORMS: [
        'RurPayJurSB',
        'InvoicePayment',
        'ExternalProviderPayment',
        'ExternalPayment',
        'AirlineReservationPayment',
        'ExternalPayment',
        'ExtCardPayment'
    ],

    REFUND_FORMS: [
        'RollbackOrderClaim',
        'RefundGoodsClaim',
        'ExtCardPaymentRefund'
    ],

    CASH_FORMS: [
        'TakingCash',
        'ExtCardCashOut',
        'ExtCardCashIn'
    ],

    CARD_INCOME_FORMS: [
        'ExtCardTransferIn'
    ],

    CVV_FORMS: [
        'SetPinForCard'
    ],

    OUTCOME_FORMS: [
        'RurPayment',
        'NewRurPayment',
        'JurPayment',
        'OnDemand',
        'ExtCardTransferOut'
    ],

    TRANSFER_FORMS: [
        'InternalPaymentBack',
        'InternalPayment',
        'ExtCardOwnTransfer'
    ],

    OTHER_INCOME_FORMS: [
        'ExtCardOtherIn',
        'ExtDepositOtherCredit'
    ],

    OTHER_OUTCOME_FORMS: [
        'OnDemandStorno',
        'SwiftTransfer',
        'ExtCardOtherOut',
        'ExtDepositOtherDebit'
    ],

    CREDIT_FORMS: [
        'TakingMeans',
        'LoanProduct',
        'LoanPayment',
        'LoanOffer',
        'ChangeCreditLimitClaim',
        'UfsCarLoan',
        'ExtCardLoanPayment'
    ],

    DEPO_INCOME_FORMS: [
        'ExtDepositCashIn',
        'ExtDepositTransferIn'
    ],

    DEPO_OUTCOME_FORMS: [
        'ExtDepositCashOut',
        'ExtDepositTransferOut'
    ],

    PERCENTS_INCOME_FORMS: [
        'PercentIncrease',
        'ExtDepositCapitalization',
        'ExtDepositInterestAccrual'
    ],

    IMS_FORMS: [
        'IMAPayment',
        'IMAOpeningClaim'
    ],

    DEPOSIT_FORMS: [
        'AccountOpeningClaim',
        'AccountChangeInterestDestinationClaim',
        'ExtDepositOpen'
    ],

    DEPOSIT_CLOSE_FORMS: [
        'AccountClosingPayment',
        'ExtDepositClose'
    ],

    DEPOSIT_EXTENSION_FORMS: [
        'ExtDepositProlongation'
    ],

    SALARY_FORMS: [
        'SalaryPay',
        'ExtDepositSalary'
    ],

    SOCIAL_INCOME_FORMS: [
        'ExtDepositPension'
    ],

    COMMISSION_FORMS: [
        'ExtDepositFee'
    ],

    CARD_CLOSE_FORMS: [
        'BlockingCardClaim'
    ],

    AUTO_PAY_FORMS: [
        'RefuseLongOffer',
        'RefuseAutoPaymentPayment',
        'RecoveryP2PAutoTransferClaim',
        'RecoveryAutoSubscriptionPayment',
        'EditP2PAutoTransferClaim',
        'EditAutoSubscriptionPayment',
        'EditAutoPaymentPayment',
        'DelayP2PAutoTransferClaim',
        'DelayAutoSubscriptionPayment',
        'CreateP2PAutoTransferClaim',
        'CloseP2PAutoTransferClaim',
        'CloseAutoSubscriptionPayment'
    ],

    OTHER_FORMS: [
        'RecoveryInvoiceSubscriptionClaim',
        'OtherPayment',
        'UfsCVCCodeRequest'
    ],

    SEARCH_FORMS: [
        'EditInvoiceSubscriptionClaim',
        'DelayInvoiceSubscriptionClaim',
        'CreateInvoiceSubscriptionPayment'
    ],

    CARD_FORMS: [
        'UfsCreditCardClaim',
        'LoanCardOffer',
        'LoanCardProduct',
        'VirtualCardClaim',
        'UfsDebitCardClaim'
    ],

    SBOL_FORMS: [
        'RemoteConnectionUDBOClaim',
        'UpdateClientMarkersClaim'
    ],

    PUNISHMENT_FORMS: [
        'Punishment'
    ],

    PUNISHMENT_CANCELLATION_FORMS: [
        'PunishmentCancellation'
    ],

    REFERENCE_STATEMENT_FORMS: [
        'UfsRetailStatement'
    ],

}

const ICONS_MAPPING = {
    MONEYBOX_FORMS: 'moneybox',
    ARREST_FORMS: 'arrest',
    ARREST_CANCELLATION_FORMS: 'arrestCancellation',
    DOC_FORMS: 'doc',
    PAYMENT_FORMS: 'retail',
    REFUND_FORMS: 'refund',
    CASH_FORMS: 'cash',
    CARD_INCOME_FORMS: 'income',
    CVV_FORMS: 'cvv',
    OUTCOME_FORMS: 'outcome',
    TRANSFER_FORMS: 'betweenAccounts',
    OTHER_INCOME_FORMS: 'otherIncome',
    OTHER_OUTCOME_FORMS: 'otherOutcome',
    CREDIT_FORMS: 'loan',
    DEPO_INCOME_FORMS: 'depositIncome',
    DEPO_OUTCOME_FORMS: 'depositOutcome',
    PERCENTS_INCOME_FORMS: 'percent',
    IMS_FORMS: 'ims',
    DEPOSIT_FORMS: 'deposit',
    DEPOSIT_CLOSE_FORMS: 'depositClose',
    DEPOSIT_EXTENSION_FORMS: 'depositExtention',
    SALARY_FORMS: 'salary',
    SOCIAL_INCOME_FORMS: 'socialIncome',
    COMMISSION_FORMS: 'commission',
    CARD_CLOSE_FORMS: 'cardBlock',
    AUTO_PAY_FORMS: 'autoPay',
    OTHER_FORMS: 'other',
    SEARCH_FORMS: 'search',
    CARD_FORMS: 'card',
    SBOL_FORMS: 'sbol',
    PUNISHMENT_FORMS: 'punishment',
    PUNISHMENT_CANCELLATION_FORMS: 'punishmentCancellation',
    REFERENCE_STATEMENT_FORMS: 'statement',
}

const formToIconsObjects = _.flatMap(FORMS_MAPPING,
    (cat, catName) => _.map(cat, (form) => ({ [form]: _.get(ICONS_MAPPING, catName) }))
)
const formIcons = _.merge(...formToIconsObjects)

export const getDefaultOperationIcon = ({ form: formName }) => _.get(formIcons, formName)
