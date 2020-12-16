import Card from './card'
import Date from './date'
import Decimal from './decimal'
import Email from './email'
import FormattedNumber from './formatted-number'
import FormattedText from './formatted-text'
import Integer from './integer'
import LocalPhone from './local-phone'
import Money from './money'
import Month from './month'
import Protected from './protected'
import Quantity from './quantity'
import Quarter from './quarter'
import Radio from './radio'
import Resource from './resource'
import Snils from './snils'
import Suggest from './suggest'
import Switch from './switch'
import Time from './time'
import Vat from './vat'
import Year from './year'
import RationalMoney from './rationalMoney'

export {
    Card,
    Date,
    Decimal,
    Email,
    FormattedNumber,
    FormattedText,
    Integer,
    LocalPhone,
    Money,
    Month,
    Protected,
    Radio,
    Quantity,
    Quarter,
    Resource,
    Snils,
    Suggest,
    Switch,
    Time,
    Vat,
    Year
}

export const formats = {
    card: Card,
    date: Date,
    decimal: Decimal,
    email: Email,
    formattedNumber: FormattedNumber,
    formattedText: FormattedText,
    integer: Integer,
    money: Money,
    rationalMoney: RationalMoney,
    month: Month,
    phone: LocalPhone,
    protected: Protected,
    quantity: Quantity,
    quarter: Quarter,
    radio: Radio,
    resource: Resource,
    snils: Snils,
    suggest: Suggest,
    switch: Switch,
    time: Time,
    vat: Vat,
    year: Year,
    // TODO.ver.4.0.0 выпилить
    localPhone: LocalPhone,
    'local-phone': LocalPhone,
    ruPhone: LocalPhone,
}
