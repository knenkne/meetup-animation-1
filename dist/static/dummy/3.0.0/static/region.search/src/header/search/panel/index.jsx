import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

export const SearchPanel = ({ children }) => (
    <div className={styles.panel}>
        {children}
    </div>
)

SearchPanel.propTypes = {
    children: PropTypes.node.isRequired
}
