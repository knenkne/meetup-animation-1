import i18next from 'i18next'

import './templates/style.css'

import ru from '../src/region-product/locales/ru.json'
import {IconLoader} from "@sbol/design-system/core/icon";

import * as assets from "../src/region-product/assets";
import * as common from "../src/region-product/assets/common";
import * as notifications from "../src/region-product/assets/notifications";

IconLoader.addIcons('icon:region.product/common', assets)
IconLoader.addIcons('icon:products/common', common)
IconLoader.addIcons('icon:products/notifications', notifications)

i18next.init({
    lng: 'ru',
    keySeparator: '/',
    resources: { ru: { 'region.scaffold': ru } }
})

console.log(i18next.t('cards'))

export { Carousel } from '../src/region-product/personal-menu/carousel'

export { PersonalManagerComponent } from '../src/region-product/personal-menu/profile/personal-manager/personal-manager'

export { Name } from '../src/region-product/personal-menu/partials/name'
export { Value } from '../src/region-product/personal-menu/partials/value'
export { ContentRow } from '../src/region-product/personal-menu/partials/content-row'
export { FormattedMoneyValue } from '../src/region-product/personal-menu/partials/formatted-money-value'
export { CurrencyValue } from '../src/region-product/personal-menu/partials/currency-value'

export { SingleProductInfoWrapper } from '../src/region-product/personal-menu/single-product/single-product-info'
export { DefaultProductInfo } from '../src/region-product/personal-menu/single-product/single-product-info/default-product'
export { CardInfo } from '../src/region-product/personal-menu/single-product/single-product-info/card'
export { AccountInfo } from '../src/region-product/personal-menu/single-product/single-product-info/account'
export { LoanInfo } from '../src/region-product/personal-menu/single-product/single-product-info/loan'
export { BrokerageInfo } from '../src/region-product/personal-menu/single-product/single-product-info/brokerage'
export { CertificateInfo } from '../src/region-product/personal-menu/single-product/single-product-info/certificates'
export { DepoProductInfo } from '../src/region-product/personal-menu/single-product/single-product-info/depo'
export { ImpersonalMetalAccountInfo } from '../src/region-product/personal-menu/single-product/single-product-info/impersonal-metal-accounts'
export { TargetInfo } from '../src/region-product/personal-menu/single-product/single-product-info/target'
export { TrustManagementInfo } from '../src/region-product/personal-menu/single-product/single-product-info/trust-management'

export { SingleProductIcon } from '../src/region-product/personal-menu/single-product/single-product-icon'
export { ProductIconComponent } from '../src/region-product/personal-menu/single-product/single-product-icon/product-icon-component'
export { NotificationIcon } from '../src/region-product/personal-menu/single-product/single-product-icon/product-icon-notification'

export { ThemeWrapperComponent } from '../src/region-product/personal-menu/theme-wrapper'
export { ThemeWrapper } from '../src/region-product/personal-menu/theme-wrapper'

export { ThemedLayout } from './templates/themed-layout/index.jsx'
export { FakeScaffold } from './templates/fake-scaffold/index.jsx'

export { SingleProductComponent } from '../src/region-product/personal-menu/single-product/index.jsx'
