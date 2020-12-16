import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from '@sbol/lib.ui'

import styles from './edit-button.css'

export const EditButton = ({ onClick, children }) => (
    <button
        type="button"
        onClick={onClick}
        className={styles.button}
    >
        <Icon name="icon:core/widgets.web/draft" />
        <span
            className={styles.text}
        >
            {children}
        </span>
    </button>
)

EditButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node
}
