/* eslint-disable @sbol/common/no-cyrillic-outside-cms, comment: аналитика не требует транслитерации */

import { getFeatureOption } from '@sbol/lib.app'
import { analytics } from '@sbol/lib.analytics'

import { CREDITABILITY_ERROR, CREDITABILITY_FETCH, CREDITABILITY_LOADING } from '../../action-types'
import { axiosUFS } from '../../axios'
import { checkFeature } from '../../../../utils/check-feature'
import { CREDITABILITY_FEATURE, isVisible } from '../../selectors/products/loans/creditability'
import { APP } from '../../../../analytics'

const onSuccess = ({ system, status }) => {
    if (isVisible(status)) {
        analytics.event({
            application: APP,
            action: 'Меню продуктов',
            label: `Кредиты/${system}/Виджет Кредитного потенциала/${status}_Отображение`
        })
    }
}

const onError = ({ code }) =>
    analytics.event({
        application: APP,
        action: 'Меню продуктов',
        label: `Кредиты/Виджет Кредитного потенциала/Ошибка/${code}`
    })

export const fetchCreditability = () => async (dispatch) => {
    if (checkFeature(CREDITABILITY_FEATURE)) {
        const endpoint = getFeatureOption(CREDITABILITY_FEATURE, 'endpointUrl')
        dispatch({ type: CREDITABILITY_LOADING })
        try {
            const { data } = await axiosUFS.post(endpoint, { target: 'sidebar' })
            const { success, body, error } = data
            if (success) {
                dispatch({ type: CREDITABILITY_FETCH, payload: body })
                onSuccess(body)
            } else {
                onError(error)
            }
        } catch (error) {
            dispatch({ type: CREDITABILITY_ERROR })
        }
    }
}
