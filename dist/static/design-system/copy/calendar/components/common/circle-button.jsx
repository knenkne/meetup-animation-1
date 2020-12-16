import React from 'react'
import _ from 'lodash'
import cn from 'classnames'
import PropTypes from 'prop-types'

import style from './circle-button.css'

const CircleButton = ({ onMouseDown, value, className, children, disabled, dataUnit, onMouseEnter, onMouseLeave }) => (
    <button
        tabIndex="-1"
        className={cn(style.item, className)}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onMouseDown={onMouseDown}
        value={value}
        type="button"
        data-unit={dataUnit}
        disabled={disabled}
    >
        {children}
    </button>
)

CircleButton.propTypes = {
    onMouseDown: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]),
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    dataUnit: PropTypes.string,
    disabled: PropTypes.bool,
}

CircleButton.defaultProps = {
    onMouseDown: _.noop,
    onMouseEnter: _.noop,
    onMouseLeave: _.noop,
    value: void 0,
    className: void 0,
    children: void 0,
    dataUnit: void 0,
    disabled: false,
}

export default CircleButton
