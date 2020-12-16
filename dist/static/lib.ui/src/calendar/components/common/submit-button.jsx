import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import { Link } from '../../../link'
import { Typography } from '../../../typography'

import style from './submit-button.css'

const SubmitButton = ({ onSubmit, text, isReset }) => (
    <div className={style.submitButtonWrapper}>
        <button
            className={cn(
                Link.theme.link,
                Typography.theme.caption,
                style.submitButton,
                isReset && style.resetButton
            )}
            onClick={onSubmit}
            type="button"
        >
            {text}
        </button>
    </div>
)

SubmitButton.propTypes = {
    isReset: PropTypes.bool,
    onSubmit: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
}

SubmitButton.defaultProps = {
    isReset: false
}

export { SubmitButton }
