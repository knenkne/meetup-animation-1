import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { NotificationsLink } from '../profile-link/notifications-link'
import { Avatar } from '../avatar'

export const SbolProProfile = ({ user, employee, notifications }) => (
    <Fragment>
        <Avatar {...user} />
        <Avatar
            {...employee}
            size="big"
            isEmployee
        />
        <NotificationsLink
            {...notifications}
        />
    </Fragment>
)

SbolProProfile.propTypes = {
    user: PropTypes.object.isRequired,
    employee: PropTypes.object.isRequired,
    notifications: PropTypes.object.isRequired
}
