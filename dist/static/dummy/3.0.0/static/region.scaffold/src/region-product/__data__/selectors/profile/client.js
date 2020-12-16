import { createSelector } from 'reselect'
import i18next from 'i18next'

import { getSettingsUrl, getUrlProfile, urlNotification } from '../../links'
import { CLIENT } from '../../../personal-menu/utils/constants'
import { getInitials } from '../../utils/get-initials'
import { isStatusLoading } from '../../../personal-menu/utils/helpers'

export const rootProfileSelector = (state) => state.profile

export const hasClientManagerSelector = createSelector(
    rootProfileSelector,
    ({ hasClientManager }) => hasClientManager
)

export const clientInfoSelector = createSelector(
    rootProfileSelector,
    ({ firstName, fio, status, hasClientManager }) => ({
        href: getUrlProfile,
        title: 'profile.description',
        name: (firstName || fio || '').toLowerCase(),
        description: 'region.scaffold:profile.description',
        type: CLIENT,
        hasClientManager,
        status
    })
)

export const clientAccountSelector = createSelector(
    rootProfileSelector,
    ({ avatarPath, firstName, surName, fio }) => {
        let name = ''
        if (firstName && surName) {
            name = `${firstName} ${surName}`
        } else if (fio) {
            name = fio
        }
        return {
            href: getUrlProfile,
            title: 'profile.description',
            initials: getInitials(name),
            icon: 'icon:core/product-status/default-user',
            img: avatarPath,
        }
    }
)

export const notificationsSelector = createSelector(
    rootProfileSelector,
    ({ mail }) => {
        const numberNotification = parseInt(mail?.notifications, 10)
        const notifications = {}
        if (numberNotification > 0 && !isStatusLoading(mail?.status)) {
            notifications.type = 'unread'
            notifications.content = numberNotification
        }
        return {
            title: i18next.t('region.scaffold:notifications'),
            href: urlNotification,
            icon: 'icon:products/common/ic36Mail',
            type: numberNotification > 0 ? 'unread' : null,
            notifications,
            status: mail?.status
        }
    }
)

const linksHelper = (info, user, notifications) => ({
    ...info,
    links: {
        settings: {
            title: 'profile.settings',
            href: getSettingsUrl,
            icon: 'icon:products/common/ic36Gear'
        },
        user,
        notifications
    }
})

export const profileSelector = createSelector(
    clientInfoSelector,
    clientAccountSelector,
    notificationsSelector,
    linksHelper
)
