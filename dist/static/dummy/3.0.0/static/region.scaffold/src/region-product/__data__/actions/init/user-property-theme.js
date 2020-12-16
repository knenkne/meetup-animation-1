import { getConfigValue, log, getFeatureOption } from '@sbol/lib.app'
import { getPrefetch } from '@sbol/webpage.provider.bootstrap'
import _ from 'lodash'


import * as types from '../../action-types'
import { axiosClientApi } from '../../axios'
import { checkFeature } from '../../../../utils/check-feature'

const PKG_ID = 'region.scaffold'
const safeFunction = (fn) => typeof fn === 'function' ? fn : () => {}
const THROTTLE_THEME_MS = 1000
export const allowChangeTheme = checkFeature('ProductRegionThemeEnabled', PKG_ID)
    && checkFeature('ProductRegionChangeThemeEnabled', PKG_ID)

export function fetchPropTheme () {
    return (dispatch) => {
        if (checkFeature('ProductRegionThemeEnabled', PKG_ID)) {
            const api = `${getConfigValue('erib.url', '/')}${getConfigValue(
                'mapi.url',
                'api'
            )}`
            const { response } = safeFunction(getPrefetch)('userProperties.do') || {}

            if (_.isEmpty(response)) {
                axiosClientApi(`${api}/private/userProperties.do`, {
                    method: 'POST',
                    params: {
                        key: 'com.rssl.phizic.userSettings.design.theme',
                        operation: 'show'
                    },
                    data: {}
                }).then(({ data }) => {
                    dispatch({
                        type: types.THEME_FETCH,
                        payload: data?.response?.value
                    })
                }).catch(() => {
                    dispatch({
                        type: types.THEME_ERROR,
                    })
                })
            } else {
                dispatch({
                    type: types.THEME_FETCH,
                    payload: response?.value
                })
            }
        }
    }

}

export const throttledThemeSetter = _.throttle((themeColor) => {
    const api = `${getConfigValue('erib.url', '/')}${getConfigValue(
        'mapi.url',
        'api'
    )}`
    axiosClientApi(`${api}/private/userProperties.do`, {
        method: 'POST',
        params: {
            key: 'com.rssl.phizic.userSettings.design.theme',
            operation: 'save',
            value: themeColor
        },
        data: {}
    }).catch((e) => {
        log.error(e)
    })
}, getFeatureOption('ProductRegionChangeThemeEnabled', 'throttleThemeMs', PKG_ID) || THROTTLE_THEME_MS)

export function fetchSetTheme (themeColor) {
    return (dispatch) => {
        if (allowChangeTheme) {
            dispatch({
                type: types.THEME_FETCH,
                payload: themeColor
            })
            throttledThemeSetter(themeColor)
        }
    }

}
