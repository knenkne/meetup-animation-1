import React from 'react'
import PropTypes from 'prop-types'

import { FastAction } from './fast-action'
import { TimerAction } from './timer-action'
import defaultTheme from './style.css'

export const FastActions = ({ theme, children }) => (
    <div className={theme.actions}>
        {children}
    </div>
)

FastActions.propTypes = {
    children: PropTypes.node.isRequired,
    theme: PropTypes.object
}

FastActions.defaultProps = {
    theme: defaultTheme
}

FastActions.FastAction = FastAction
FastActions.TimerAction = TimerAction
FastActions.theme = defaultTheme

export default FastActions
