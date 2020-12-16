import React from 'react'
import PropTypes from 'prop-types'

import {
    ARRESTED,
    BAD_ATTENTION,
    GOOD_ATTENTION,
    READY,
    REPEAT,
    UNKNOWN,
    WAITING,
    WARNING
} from '../../../utils/constants'
import { ThemedIcon } from '../../../themed-icon'
import { colors } from '../../../theme-wrapper/theme-colors'

export const ProductIconNotification = ({ notification }) => {
    switch (notification) {
        case WAITING:
            return <ThemedIcon name="icon:products/notifications/waiting" type="mono" />
        case ARRESTED:
            return <ThemedIcon name="icon:products/notifications/arrested" />
        case BAD_ATTENTION:
            return <ThemedIcon name="icon:products/notifications/badAttention" colorScheme={colors.orange4} />
        case GOOD_ATTENTION:
            return <ThemedIcon name="icon:products/notifications/goodAttention" colorScheme={colors.green4} />
        case READY:
            return <ThemedIcon name="icon:products/notifications/ready" colorScheme={colors.green4} />
        case REPEAT:
            return <ThemedIcon name="icon:products/notifications/repeat" type="mono" />
        case UNKNOWN:
            return <ThemedIcon name="icon:products/notifications/unknown" type="mono" />
        case WARNING:
            return <ThemedIcon name="icon:products/notifications/warning" type="mono" />
        default:
            return <ThemedIcon name="icon:products/notifications/waiting" type="mono" />
    }
}

ProductIconNotification.defaultProps = {
    notification: ''
}

ProductIconNotification.propTypes = {
    notification: PropTypes.string
}
