import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { Menu } from '@sbol/lib.ui/core/menu'
import i18next from 'i18next'

import { FEEDBACK_DETAILS } from '../../constants'

export const Feedback = ({
    onCloseFeedback,
    onWantFeedback,
    onOpen,
    onClose,
    want
}) => {
    const options = []

    if (want) {
        options.push({
            value: 'want',
            title: i18next.t('region.offers:feedback.want'),
            type: 'option',
            action: onWantFeedback
        })
    }

    FEEDBACK_DETAILS.forEach((detail) => {
        options.push({
            value: detail,
            title: i18next.t(`region.offers:feedback.${detail}`),
            type: 'option',
            action: () => void onCloseFeedback(detail)
        })
    })

    if (!FEEDBACK_DETAILS.length && !want) {
        return null
    }

    return (
        <Menu
            options={options}
            icon="close-small"
            onOpen={onOpen}
            onClose={onClose}
            mode="click"
            // TODO: для доступности
            // title={i18next.t('region.offers:open.feedback')}
        />
    )
}

Feedback.propTypes = {
    onCloseFeedback: PropTypes.func.isRequired,
    onWantFeedback: PropTypes.func,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    want: PropTypes.bool
}

Feedback.defaultProps = {
    onOpen: _.noop,
    onClose: _.noop,
    onWantFeedback: _.noop,
    want: false
}
