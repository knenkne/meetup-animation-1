import { createSelector } from 'reselect'
import _ from 'lodash'
import { getConfigValue } from '@sbol/lib.app'

import { makeArray } from '../utils'
import { isFalse, isTrue } from '../../../personal-menu/utils/helpers'
import { getInitials } from '../../utils/get-initials'
import { checkFeature } from '../../../../utils/check-feature'

import { hasClientManagerSelector } from './client'

export const rootManagerSelector = (state) => state.manager.managerList
export const rootManagerEmployeeStructure = (state) => state.manager.managerEmployeeStructure || false
export const managerStatus = (state) => state.manager.status

const COUPLE_LENGTH = 2

export const SBERBANK1 = 'sberbank1'
export const SBERBANK1_ID = '3'
export const isSberbank1 = (type) => type === SBERBANK1

export const PRIVATE_BANKING = 'privateBanking'
export const PRIVATE_BANKING_ID = '1'
export const isPrivateBanking = (type) => type === PRIVATE_BANKING

export const PREMIER = 'premier'
export const isPremier = (type) => type === PREMIER


export const managersSelector = createSelector(
    rootManagerSelector,
    (manager) => makeArray(manager || [])
)

export const singleManagerMapper = (manager) => ({
    ...manager,
    initials: getInitials(manager.name)
})

export const managersMappedSelector = createSelector(
    managersSelector,
    (managers) => managers.map(singleManagerMapper)
)

export const managerMainCouple = (manager) => isTrue(manager.primary)
export const managerMainRegular = (manager) => isFalse(manager.primary) || !_.has(manager, 'primary')

export const managerCoupleMapper = (manager) => {
    if (managerMainCouple(manager)) {
        return {
            ...manager,
            managerPosition: 'personal.manager.lead'
        }
    }

    return {
        ...manager,
        managerPosition: 'personal.manager.co.lead'
    }
}

export const managerRegularMapper = (manager) => {
    if (managerMainRegular(manager)) {
        return {
            ...manager,
            managerPosition: 'personal.manager.title'
        }
    }

    return {
        ...manager,
        managerPosition: 'personal.manager.finance.advice'
    }

}

// Руководитель и зам. руководителя – управляющая пара
export const managerCoupleSort = (manager) => managerMainCouple(manager) ? -1 : 1

// Перс. менеджер и фин. советник - фин. советник отображается первым
// для удобства клиентов
export const managerRegularSort = (manager) => managerMainRegular(manager) ? 1 : -1

export const managerListSelector = createSelector(
    managersMappedSelector,
    (managers) => {

        if (managers.length > COUPLE_LENGTH || managers.length === 1) {
            return managers.filter((__, i) => i === 0)
        }

        const coupleSign = managers.some((person) => isTrue(person.managingCouple))

        if (coupleSign) {
            return managers
                .map(managerCoupleMapper)
                .sort(managerCoupleSort)

        }

        return managers
            .map(managerRegularMapper)
            .sort(managerRegularSort)
    }
)

export const managerTypeById = ({ id }) => {
    if (id) {
        // eslint-disable-next-line no-magic-numbers, comment: достаем третью цифру с конца
        switch (String(id).slice(-3, -2)) {
            case SBERBANK1_ID:
                return SBERBANK1
            case PRIVATE_BANKING_ID:
                return PRIVATE_BANKING
            default:
                return PREMIER
        }
    }

    return ''
}

export const managerTypeSelector = createSelector(
    managerListSelector,
    hasClientManagerSelector,
    rootManagerEmployeeStructure,
    (managerList, hasClientManager, employeeStructure) => {
        if (checkFeature('ShowClientManagerInfo') && hasClientManager && managerList.length) {

            if (getConfigValue('tariffPlan')) {
                return getConfigValue('tariffPlan')
            }

            if (employeeStructure) {
                return SBERBANK1
            }
            return managerTypeById(_.first(managerList))
        }
        return void 0
    }
)
