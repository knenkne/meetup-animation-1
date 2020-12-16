import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'
import Quick from './quick'
import History from './history'

export const SearchSuggests = ({ handleTextSuggestClick }) => (
    <div className={styles.suggests}>
        <History onClick={handleTextSuggestClick} />
        <Quick onClick={handleTextSuggestClick} />
    </div>
)

SearchSuggests.propTypes = {
    handleTextSuggestClick: PropTypes.func.isRequired
}
