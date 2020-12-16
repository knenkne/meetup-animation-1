import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import _ from 'lodash'

import style from './square-button.css'

const SquareButton = ({ onClick, value, className, children, disabled, dataUnit }) => (
    <button
        tabIndex="-1"
        className={cn(style.item, className)}
        onMouseDown={onClick}
        value={value}
        type="button"
        data-unit={dataUnit}
        disabled={disabled}
    >
        {children}
    </button>
)

SquareButton.propTypes = {
    onClick: PropTypes.func,
    value: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.string,
    dataUnit: PropTypes.string,
    disabled: PropTypes.bool,
}

SquareButton.defaultProps = {
    onClick: _.noop,
    value: void 0,
    className: void 0,
    children: void 0,
    dataUnit: void 0,
    disabled: false,
}

export default SquareButton
