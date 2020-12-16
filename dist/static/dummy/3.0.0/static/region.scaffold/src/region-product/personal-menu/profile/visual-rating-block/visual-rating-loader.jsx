import React from 'react'
import PropTypes from 'prop-types'

import { PendingLineStyled } from './visual-rating-block.styles'

const HALF = 2

export const VisualRatingLoader = ({ pressDuration }) => {

    const animationTime = pressDuration / HALF
    /* eslint-disable react/forbid-component-props, comment: TODO: перенести в styled */
    return (
        <PendingLineStyled
            style={{
                animationDelay: `${animationTime}ms`,
                animationDuration: `${animationTime}ms`
            }}
        />
    )
}

VisualRatingLoader.propTypes = {
    pressDuration: PropTypes.number.isRequired
}
