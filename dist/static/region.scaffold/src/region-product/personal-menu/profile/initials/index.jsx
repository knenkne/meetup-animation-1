import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from '@sbol/lib.ui/core/icon'

import { CircleStyled, InitialsStyled } from './initials.styles'

export const Initials = ({ initials, size, isEmployee, isClientManager }) => {
    const isManager = isEmployee || isClientManager
    if (initials) {
        return (
            <CircleStyled
                size={size}
                isManager={isManager}
            >
                <InitialsStyled>
                    {initials}
                </InitialsStyled>
            </CircleStyled>
        )
    }
    return <Icon name="icon:core/product-status/defaultUser" size="self" />
}

Initials.propTypes = {
    initials: PropTypes.string,
    size: PropTypes.oneOf(['small', 'big']),
    isEmployee: PropTypes.bool,
    isClientManager: PropTypes.bool
}

Initials.defaultProps = {
    initials: void 0,
    size: 'small',
    isEmployee: false,
    isClientManager: false
}
