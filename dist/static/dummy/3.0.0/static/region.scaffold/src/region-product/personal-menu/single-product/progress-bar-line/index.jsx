import React from 'react'
import PropTypes from 'prop-types'

import { ProgressBarValueStyled, ProgressBarLineStyled } from './progress-bar-line.styles'

export const ProgressBarLine = ({ progressWidth, progressColor }) => (
    <ProgressBarLineStyled>
        <ProgressBarValueStyled
            progressWidth={progressWidth}
            progressColor={progressColor}
        />
    </ProgressBarLineStyled>
)

ProgressBarLine.defaultProps = {
    progressWidth: '',
    progressColor: ''
}

ProgressBarLine.propTypes = {
    progressWidth: PropTypes.string,
    progressColor: PropTypes.string
}
