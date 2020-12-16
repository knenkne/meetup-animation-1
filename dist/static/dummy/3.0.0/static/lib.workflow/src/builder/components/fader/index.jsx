import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import styles from './styles.css'

export const Fader = ({ mode }) => <span className={cn(styles.fader, styles[mode])} />

Fader.propTypes = {
    mode: PropTypes.string
}

Fader.defaultProps = {
    mode: void ''
}
