import React from 'react'
import PropTypes from 'prop-types'

import { makeDelimiters } from './utils'
import defaultTheme from './style.css'

export const Segments = ({ min, max, step, grid }) => {
    const delimiters = makeDelimiters(min, max, step, grid)

    if (!delimiters || !delimiters.length) {
        return null
    }

    return (
        <div className={defaultTheme.segments}>
            {delimiters.map((left) => (
                <div
                    key={left}
                    className={defaultTheme.segment}
                    style={{ left: `${left}%` }}
                />
            ))}
        </div>
    )
}

Segments.propTypes = {
    step: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    min: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    max: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    grid: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string]))
}

Segments.defaultProps = {
    step: void '',
    min: void '',
    max: void '',
    grid: void ''
}
