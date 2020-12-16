import i18next from 'i18next'

import { widgets } from './widgets'

export const {
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
} = widgets

i18next.loadNamespaces('lib.widgets.web')

export default widgets

export { setAxios } from './axios'
