/* eslint-disable babel/camelcase, comment: Словарь иконок */
import { INVESTMENTS_COLOR } from '../../style-constants'

const DEFAULT_NAMESPACE = 'icon:products/common'

const brokerIcon = `${DEFAULT_NAMESPACE}/ic36CaseDiagram`
const insuranceIcon = `${DEFAULT_NAMESPACE}/ic36ShieldCheck`
const pensionIcon = `${DEFAULT_NAMESPACE}/ic36HousePercent`

const iconDictionary = {
    cat_isz: insuranceIcon,
    cat_nsz: insuranceIcon,
    cat_kpp: pensionIcon,
    cat_ipp: pensionIcon,
    cat_ops: pensionIcon,
    defaultIcon: brokerIcon,
}

export const getInvestmentIcon = ({ productCategory }, colorScheme = INVESTMENTS_COLOR) => ({
    icon: iconDictionary[productCategory] || iconDictionary.defaultIcon,
    colorScheme
})
