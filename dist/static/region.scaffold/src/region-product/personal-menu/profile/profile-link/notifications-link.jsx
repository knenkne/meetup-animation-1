import React from 'react'
import i18next from 'i18next'

import { ProfileLink } from './profile-link'

export const NotificationsLink = (notifications) => (
    <ProfileLink
        {...notifications}
        linkTitle={i18next.t('region.scaffold:link.notification.title')}
    />
)
