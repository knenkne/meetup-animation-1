import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { Menu } from '@sbol/lib.ui'
import i18next from 'i18next'

import { FEEDBACK_DETAILS } from '../../constants'

import style from './style.css'

export const Feedback = ({
    children,
    onCloseFeedback,
    onWantFeedback,
    onOpen,
    onClose,
    want,
    disabled
}) => {
    const options = []

    if (want) {
        options.push({
            value: 'want',
            title: i18next.t('lib.offers:feedback.want'),
            type: 'option',
            action: onWantFeedback
        })
    }

    FEEDBACK_DETAILS.forEach((detail) => {
        options.push({
            value: detail,
            title: i18next.t(`lib.offers:feedback.${detail}`),
            type: 'option',
            action: () => void onCloseFeedback(detail)
        })
    })

    return (
        <div className={style.feedback}>
            {children}
            {(Boolean(FEEDBACK_DETAILS.length) || want) && !disabled && (
                <div className={style.menu}>
                    <Menu
                        options={options}
                        icon="close-small"
                        onOpen={onOpen}
                        onClose={onClose}
                        mode="click"
                        // TODO: для доступности
                        // title={i18next.t('lib.offers:open.feedback')}
                    />
                </div>
            )}
        </div>
    )
}

Feedback.propTypes = {
    onCloseFeedback: PropTypes.func.isRequired,
    onWantFeedback: PropTypes.func,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    children: PropTypes.node.isRequired,
    want: PropTypes.bool,
    disabled: PropTypes.bool
}

Feedback.defaultProps = {
    onOpen: _.noop,
    onClose: _.noop,
    onWantFeedback: _.noop,
    want: false,
    disabled: false
}
