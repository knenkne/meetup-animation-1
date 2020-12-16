import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { NotificationsLink, SettingsLink } from '../profile-link'
import { Avatar } from '../avatar'

export const ClientProfile = ({ user, settings, notifications }) => (
    <Fragment>
        <SettingsLink {...settings} />
        <Avatar {...user} size="big" />
        <NotificationsLink {...notifications} />
    </Fragment>
)

ClientProfile.propTypes = {
    user: PropTypes.object.isRequired,
    settings: PropTypes.object.isRequired,
    notifications: PropTypes.object.isRequired
}
