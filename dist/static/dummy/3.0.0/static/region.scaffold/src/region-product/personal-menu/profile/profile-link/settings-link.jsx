import React from 'react'
import i18next from 'i18next'

import { ProfileLink } from './profile-link'

export const SettingsLink = (settings) => (
    <ProfileLink
        {...settings}
        linkTitle={i18next.t('region.scaffold:link.security.title')}
    />
)
