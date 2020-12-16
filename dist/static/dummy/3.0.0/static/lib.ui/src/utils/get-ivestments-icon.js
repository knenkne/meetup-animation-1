const DEFAULT_NAMESPACE = 'icon:core/products'

const brokerIcon = `${DEFAULT_NAMESPACE}/broker-investment`
const insuranceIcon = `${DEFAULT_NAMESPACE}/insurance-default`
const pensionIcon = `${DEFAULT_NAMESPACE}/pension-default`

const iconDictionary = {
    cat_isz: insuranceIcon,
    cat_nsz: insuranceIcon,
    cat_kpp: pensionIcon,
    cat_ipp: pensionIcon,
    cat_ops: pensionIcon,
    defaultIcon: brokerIcon,
}

export const getInvestmentIcon = ({ productCategory }) => iconDictionary[productCategory] || iconDictionary.defaultIcon
