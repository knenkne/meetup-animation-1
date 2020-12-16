import React from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'

import { Typography } from '../../../typography'
import { Icon } from '../../../icon'
import { mergeTheme } from '../../../utils'

import style from './control.css'

const Control = ({ onClick, dataUnit, title, isActive, withIcon, className }) => (
    <button
        className={cn(
            Typography.theme.body,
            Typography.theme.bodySemibold,
            style.button,
            className
        )}
        onMouseDown={onClick}
        data-unit={dataUnit}
        tabIndex="-1"
        type="button"
    >
        <span>{title}</span>
        {withIcon && (
            <span className={style.arrowIconWrapper}>
                <Icon
                    name="icon:core/common/calendarArrowLeft"
                    theme={mergeTheme(Icon.theme, {
                        icon: isActive ?
                            cn(style.arrowIcon, style.arrowIconReverted)
                            :
                            style.arrowIcon
                    })}
                />
            </span>
        )}
    </button>
)

Control.propTypes = {
    onClick: PropTypes.func.isRequired,
    dataUnit: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    className: PropTypes.string.isRequired,
    withIcon: PropTypes.bool
}

Control.defaultProps = {
    withIcon: true,
    className: ''
}

export default Control
