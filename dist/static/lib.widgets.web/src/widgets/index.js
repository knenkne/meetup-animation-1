import { Icon } from '@sbol/lib.ui'

import * as assets from '../assets'

import { WebAddress } from './address'
import { WebFiasAddress } from './fias-address'
import { WebAgreement } from './agreement'
import { WebBanner } from './banner'
import { WebComingNext } from './coming-next'
import { WebFullName } from './full-name'
import { WebPersonalDataSummary } from './personal-data'
import { WebProcessAlert } from './process-alert'
import { WebProductDescription } from './product'
import { WebRange } from './range'
import { WebResource } from './resource'
import { WebSearchSelect } from './search-select'
import { WebStages } from './stages'
import { WebStatusHeadline } from './status-headline'
import { WebSummary } from './summary'
import { WebTotal } from './total'
import { WebUpcomingStep } from './upcoming-step'
import { WebHeadline } from './web-headline'
import { WebFastActions } from './fast-actions'

Icon.addIcons('icon:core/widgets.web', assets)

/**
 * @desc Представляет собой набор виджетов канала WEB.
 * Где ключ - название виджета из спецификации, а значение - React компонента.
 *
 * @link https://sbtatlas.sigma.sbrf.ru/wiki/pages/viewpage.action?pageId=101848587
 * @type {Object}
 */
export const widgets = {
    WebAddress,
    WebFiasAddress,
    WebAgreement,
    WebBanner,
    WebComingNext,
    WebFullName,
    WebPersonalDataSummary,
    WebProcessAlert,
    WebProductDescription,
    WebRange,
    WebResource,
    WebSearchSelect,
    WebStages,
    WebStatusHeadline,
    WebSummary,
    WebTotal,
    WebUpcomingStep,
    WebHeadline,
    WebFastActions,
}
