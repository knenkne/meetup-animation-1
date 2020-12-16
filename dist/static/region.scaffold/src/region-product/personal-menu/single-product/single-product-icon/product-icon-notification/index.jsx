import React from 'react'
import PropTypes from 'prop-types'

import { NotificationsStyled } from './notification.styles'
import { ProductIconNotification } from './product-icon-notification'

export const NotificationIcon = ({ notification }) => (
    <NotificationsStyled>
        <ProductIconNotification
            notification={notification}
        />
    </NotificationsStyled>
)

NotificationIcon.defaultProps = {
    notification: ''
}

NotificationIcon.propTypes = {
    notification: PropTypes.string
}
