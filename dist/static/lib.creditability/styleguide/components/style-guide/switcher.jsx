import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import style from './style.css'

export const Switcher = ({ onChange, theme, value, ...props }) => (
    <label {...props} className={classnames(theme.switcher, value && theme.active)}>
        <input type="checkbox" className={style.switcherCheckbox} onChange={onChange} />
        <div className={theme.on} />
        <div className={theme.off} />
    </label>
)

Switcher.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.bool.isRequired,
    theme: PropTypes.shape({
        switcher: PropTypes.string,
        active: PropTypes.string,
        on: PropTypes.string,
        off: PropTypes.string
    }).isRequired
}
