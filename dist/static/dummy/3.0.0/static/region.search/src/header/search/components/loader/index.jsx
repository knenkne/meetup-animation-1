import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Loader as UiLoader } from '@sbol/lib.ui'

import styles from './styles.css'

export const Loader = ({ mode }) => (
    <div className={classnames(styles.loader, styles[mode])}>
        <UiLoader size="xs" />
    </div>
)

Loader.propTypes = {
    mode: PropTypes.oneOf(['tiny', 'wide'])
}

Loader.defaultProps = {
    mode: 'wide'
}
