import React from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'

import { Icon } from '../../../icon'
import { Typography } from '../../../typography'

import style from './navigation.css'

const Navigation = ({ handlePrevClick, handleNextClick, children, wrapperClassName, isLastDecade }) => (
    <div
        role="navigation"
        className={cn(style.navigation, wrapperClassName)}
    >
        <button
            className={style.navigationPeriod}
            onMouseDown={handlePrevClick}
            type="button"
        >
            <span className={style.arrow}>
                <Icon name="icon:core/common/calendarArrowLeft" />
            </span>
        </button>
        <div
            className={cn(
                Typography.theme.body,
                Typography.theme.bodySemibold
            )}
        >
            {children}
        </div>
        <button
            className={style.navigationPeriod}
            onMouseDown={handleNextClick}
            type="button"
            disabled={isLastDecade}
        >
            <span className={cn(style.arrow, style.arrowRight)}>
                <Icon name="icon:core/common/calendarArrowLeft" />
            </span>
        </button>
    </div>
)

Navigation.propTypes = {
    handlePrevClick: PropTypes.func,
    handleNextClick: PropTypes.func,
    children: PropTypes.node,
    wrapperClassName: PropTypes.string,
    isLastDecade: PropTypes.bool
}

Navigation.defaultProps = {
    handlePrevClick: void 0,
    handleNextClick: void 0,
    children: void 0,
    wrapperClassName: '',
    isLastDecade: false
}

export default Navigation
