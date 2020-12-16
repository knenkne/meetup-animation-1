import React from 'react'
import PropTypes from 'prop-types'

export const NoOptionSelected = ({ itemNotChosenText, theme }) => (
    <div className={theme.itemInfo}>
        <span className={theme.itemNotChosen}>{itemNotChosenText}</span>
    </div>
)

NoOptionSelected.propTypes = {
    itemNotChosenText: PropTypes.string.isRequired,
    theme: PropTypes.object.isRequired
}
