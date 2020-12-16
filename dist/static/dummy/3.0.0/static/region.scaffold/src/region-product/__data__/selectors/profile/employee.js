import { createSelector } from 'reselect'
import { getConfigValue } from '@sbol/lib.app'

import { joinUrl } from '../../../utils/join-url'
import { getUrlProfile, urlNotification } from '../../links'
import { EMPLOYEE } from '../../../personal-menu/utils/constants'
import { getInitials } from '../../utils/get-initials'

import { clientAccountSelector } from './client'

export const rootEmployeeSelector = (state) => state.employee

export const formatAddress = (address) => address
    .replace(/(\s)([,.])/g, '$2')
    .replace(/([,.])(\s)/g, '$1')
    .replace(/([,.])/g, '$1\x20')

const employeeInfoSelector = createSelector(
    rootEmployeeSelector,
    ({ fio, address, status = '' }) => ({
        href: getUrlProfile,
        title: 'profile.employee',
        name: (fio || '').toLowerCase(),
        description: formatAddress(address || ''),
        role: 'profile.role',
        type: EMPLOYEE,
        status
    })
)

const employeeAccountSelector = createSelector(
    rootEmployeeSelector,
    (profile) => ({
        title: 'profile.employee',
        icon: 'icon:core/product-status/default-user',
        initials: getInitials(profile.fio || ''),
        img: profile.avatarPath
            ? joinUrl(
                getConfigValue(
                    'avatar.url.small',
                    'https://avatar.online.sberbank.ru/AVATAR/SMALL'
                ),
                profile.avatarPath
            )
            : ''
    })
)

const linksHelper = (info, user, employee) => ({
    ...info,
    links: {
        user,
        employee,
        notifications: {
            title: 'region.scaffold:notifications',
            href: urlNotification,
            icon: 'icon:products/common/ic36Mail'
        }
    }
})

export const proProfileSelector = createSelector(
    employeeInfoSelector,
    clientAccountSelector,
    employeeAccountSelector,
    linksHelper
)
