import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import defaultTheme from './style.css'

export const Hatching = ({ mode, direction }) => (
    <div
        className={classnames(
            defaultTheme.hatching,
            defaultTheme[direction],
            defaultTheme[mode],
        )}
        data-unit={`hatching:${mode}`}
    />
)

Hatching.propTypes = {
    mode: PropTypes.oneOf([
        'draft',
        'waiting',
        'done',
        'error'
    ]).isRequired,
    direction: PropTypes.oneOf([
        'vertical',
        'horizontal'
    ])
}

Hatching.defaultProps = {
    direction: 'vertical',
}

Hatching.displayName = 'Status.Hatching'
