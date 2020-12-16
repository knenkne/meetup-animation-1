import React from 'react'
import PropTypes from 'prop-types'

import { DescriptionStyled } from './process-alert.style'

export const Description = (props) => (
    <DescriptionStyled
        {...props}
    >
        {props.children}
    </DescriptionStyled>
)

Description.propTypes = {
    children: PropTypes.node
}

Description.defaultProps = {
    children: void 0
}

Description.displayName = 'Alert.Description'
