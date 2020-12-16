import { CoreAccount } from './account'
import { Money } from './money'
import { NavBar } from './nav-bar'
import { CoreResource } from './resource'
import { MoneyFixedCurrency } from './money-fixed-currency'
import { RuPhone } from './ru-phone'
import { CoreTotal } from './total'
import { CoreStatus } from './status'
import { CoreStatusHeadline } from './status-headline'

/**
 * @desc Представляет собой словарь из CORE виджетов.
 * Где ключ - название виджета из спецификации, а значение - React компонента.
 *
 * @link https://sbtatlas.sigma.sbrf.ru/wiki/display/DBSDD/Platform+widgets
 * @type {Object}
 */
export const widgets = {
    CoreMoney: Money,
    CoreMoneyFixedCurrency: MoneyFixedCurrency,
    CoreNavBar: NavBar,
    CoreResource,
    CoreRuPhone: RuPhone,
    CoreStatus,
    CoreTotal,
    CoreAccount,
    CoreStatusHeadline
}
