import React from 'react'
import PropTypes from 'prop-types'

import { ActionsStyled } from './actions.style'

export const Actions = (props) => (
    <ActionsStyled
        {...props}
    >
        {props.children}
    </ActionsStyled>
)

Actions.propTypes = {
    children: PropTypes.node
}

Actions.defaultProps = {
    children: void 0
}

Actions.displayName = 'Alert.Actions'
