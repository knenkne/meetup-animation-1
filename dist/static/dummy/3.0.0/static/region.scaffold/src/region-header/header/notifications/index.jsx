import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { connect } from './connect'
import style from './style.css'

export const NotificationsComponent = ({ notifications }) => {
    if (!notifications.length) {
        return null
    }

    /* eslint-disable react/no-danger, comment: вставляем сообщения от ЕРИБа */
    return (
        <Fragment>
            {notifications.map(({ messageText, importance }) => (
                <div key={messageText} className={classnames(style.alert, style[importance])}>
                    <div
                        className={style.body}
                        dangerouslySetInnerHTML={{ __html: messageText }}
                    />
                </div>
            ))}
        </Fragment>
    )
}

NotificationsComponent.propTypes = {
    notifications: PropTypes.arrayOf(
        PropTypes.shape({
            messageText: PropTypes.string.isRequired,
            importance: PropTypes.oneOf([
                'error',
                'info',
                'success'
            ]).isRequired
        })
    )
}

NotificationsComponent.defaultProps = {
    notifications: []
}

export const Notifications = connect(NotificationsComponent)
