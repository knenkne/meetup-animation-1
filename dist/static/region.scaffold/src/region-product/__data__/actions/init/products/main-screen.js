import _ from 'lodash'

import * as types from '../../../action-types'
import { axiosUFS } from '../../../axios'
import { SECTION_NAMES } from '../../../../personal-menu/utils/constants'
import { isFalse } from '../../../../personal-menu/utils/helpers'
import { checkFeature } from '../../../../../utils/check-feature'
import { checkFailedMandatorySections } from '../../../utils/check-section-state'

import { fetchEribProducts } from './products'

export function fetchMainScreen (params) {
    return (dispatch) => {
        dispatch({
            type: types.PRODUCTS_LOADING,
            initialFetch: _.get(params, 'initialFetch', false)
        })
        axiosUFS('/main-screen/rest/v1/web/section/meta', {
            method: 'POST',
            data: { withData: true, forceUpdate: false }
        })
            .then(
                ({ data }) => {
                    if (isFalse(data.success)) {
                        throw new Error('False data success for fetchMainScreen')
                    }

                    // Если одна из обязательных категорий
                    // ['cards', 'accounts', 'targets', 'imaccounts']
                    // пришла с section.state<>SUCCESS
                    if (checkFailedMandatorySections(data?.body?.sections)) {
                        throw new Error('Failed mandatory sections for fetchMainScreen')
                    }

                    // Приводим ответ к привычной структуре list.do,
                    // чтобы не создавать дополнительных проблем для тех,
                    // кто подписался на ответ через messageBus
                    const allSections = {}
                    _.forIn(data?.body?.sections, (value, key) => {
                        if (SECTION_NAMES[key]) {
                            allSections[key] = {
                                sectionInfo: value,
                                [SECTION_NAMES[key]]: value.data
                            }
                        } else if (value?.sectionProductData) {
                            // Это потом переместится в v2/web/section/meta
                            _.forIn(value.sectionProductData, (sectionProductValue, sectionProductKey) => {
                                if (SECTION_NAMES[sectionProductKey]) {
                                    allSections[sectionProductKey] = {
                                        sectionInfo: sectionProductValue,
                                        [SECTION_NAMES[sectionProductKey]]: sectionProductValue.data
                                    }
                                }
                            })
                        }
                    })
                    dispatch({
                        type: types.PRODUCTS_FETCH,
                        payload: allSections
                    })
                }
            ).catch(() => {
                if (checkFeature('AlwaysRequestListDo')) {
                    dispatch(fetchEribProducts(params))
                } else {
                    dispatch({
                        type: types.PRODUCTS_ERROR
                    })
                }
            })
    }
}
