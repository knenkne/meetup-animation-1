import { getConfigValue } from '@sbol/lib.app'

import * as types from '../../action-types'
import { axiosClientApi } from '../../axios'
import { checkFeature } from '../../../../utils/check-feature'

export function fetchPropForBlockedCards () {
    return (dispatch) => {
        if (checkFeature('BlockedCardsVisibility', 'region.scaffold')) {
            const api = `${getConfigValue('erib.url', '/')}${getConfigValue(
                'mapi.url',
                'api'
            )}`

            dispatch({
                type: types.USER_PROPERTIES_LOADING,
            })

            axiosClientApi(`${api}/private/userProperties.do`, {
                method: 'POST',
                params: {
                    key: 'com.rssl.phizic.userSettings.inactiveCardsVisibility',
                    operation: 'show'
                },
                data: {}
            }).then(({ data }) => {
                dispatch({
                    type: types.USER_PROPERTIES_FETCH,
                    payload: data.response
                })
            }).catch(() => {
                dispatch({
                    type: types.USER_PROPERTIES_ERROR
                })
            })
        }
    }
}
