import { analytics } from '@sbol/lib.analytics'

import { APP, PRODUCT_SUB_REGION } from '.'

export const onContractClick = (productTag) => () => {
    analytics.event({
        application: APP,
        action: PRODUCT_SUB_REGION,
        label: `Страхование/ДеталиДоговора_${productTag}_Клик`
    })
}

export const onAgreementClick = () => {
    analytics.event({
        application: APP,
        action: PRODUCT_SUB_REGION,
        label: 'Страхование/Предоставление_Согласия_Клик'
    })
}
