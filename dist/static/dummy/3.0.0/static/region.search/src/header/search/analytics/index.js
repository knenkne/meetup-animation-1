import { analytics } from '@sbol/lib.analytics'

export const APP = 'region.search'
export const SEARCH_SUB_REGION = 'Поиск по интернет банку'

export const onSearch = () => {
    analytics.event({
        application: APP,
        action: SEARCH_SUB_REGION,
        label: 'Клик в поле'
    })
}
