import React from 'react'
import PropTypes from 'prop-types'

import { Icon } from '../../../icon'
import style from '../../style.css'

export const IconBlock = ({ iconName, className }) => (
    <div className={className}>
        <Icon name={iconName} />
    </div>
)

IconBlock.propTypes = {
    iconName: PropTypes.string,
    className: PropTypes.string
}
IconBlock.defaultProps = {
    iconName: 'icon:core/common/calendar',
    className: style.iconPosition
}
