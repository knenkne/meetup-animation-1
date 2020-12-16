import _ from 'lodash'

import { MANDATORY_SECTIONS } from '../../personal-menu/utils/constants'

export const isSectionStateFailed = (state) => state !== 'SUCCESS'

export const checkFailedMandatorySections = (sectionsObject) => {
    let allStates = []
    _.forIn(sectionsObject, (value, key) => {
        if (MANDATORY_SECTIONS.includes(key)) {
            allStates = [
                ...allStates,
                value?.state
            ]
        }
    })

    return allStates.some((state) => isSectionStateFailed(state))
}
