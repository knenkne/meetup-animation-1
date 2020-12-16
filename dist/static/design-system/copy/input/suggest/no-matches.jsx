import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import style from './style.css'

export const NoMatches = (props) => {
    const { children } = props

    return (
        <div className={classnames(style.additionalInfo, style.attention)}>
            {children}
        </div>
    )
}

NoMatches.propTypes = {
    children: PropTypes.node.isRequired
}

NoMatches.displayName = 'Input.Suggest.NoMatches'
