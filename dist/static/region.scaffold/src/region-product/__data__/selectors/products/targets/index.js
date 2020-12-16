import _ from 'lodash'
import { createSelector } from 'reselect'

import { makeArray } from '../../utils'
import { urlNewTarget } from '../../../links'
import { TARGETS_COLOR } from '../../../../style-constants'

import { iconDictionary } from './dictionaries'
import { getTargetInfo } from './utils'

const rootProductsSelector = (state) => state.products

const targetsSelector = createSelector(
    rootProductsSelector,
    (products) => makeArray(_.get(products, 'targets.target'))
)

export const mappedTargets = createSelector(
    targetsSelector,
    (targets) => targets.map(getTargetInfo)
)

export const ghostTargetSelector = createSelector(
    targetsSelector,
    () => [{
        id: 'ghostTarget',
        name: 'target.ghost.title',
        icon: iconDictionary.ghost.icon,
        colorScheme: TARGETS_COLOR,
        href: urlNewTarget,
        type: 'ghost',
        message: {
            text: 'target.ghost.description',
        }
    }]
)


export const targetList = createSelector(
    mappedTargets,
    ghostTargetSelector,
    (targets, ghostTarget) => ({
        title: 'target',
        content: targets.length ? targets : ghostTarget,
        type: 'targets',
        newProductUrl: urlNewTarget,
        feature: 'AccessTargetsTab'
    })
)
