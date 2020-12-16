import React from 'react'
import PropTypes from 'prop-types'

import style from './style.css'

const PopupWrapper = ({ children }) => (
    <div className={style.popup}>
        {children}
    </div>
)

PopupWrapper.propTypes = {
    children: PropTypes.oneOfType(
        [PropTypes.element, PropTypes.array]
    )
}

PopupWrapper.defaultProps = {
    children: null
}

export default PopupWrapper
