import React from 'react'
import PropTypes from 'prop-types'
import { IconLoader } from '@sbol/design-system/core/icon'

import { getLogoutApiUrl } from '../../../utils/logout'

import { NavigationStyled, CloseStyled, LogoffStyled } from './navigation.styles'

export const Navigation = ({ onClick }) => (
    <NavigationStyled>
        <CloseStyled onClick={onClick}>
            <IconLoader name="icon:products/common/ic24Cross" size="self" />
        </CloseStyled>
        <LogoffStyled href={getLogoutApiUrl()}>
            <IconLoader name="icon:products/common/ic24ArrowRightSquare" size="self" />
        </LogoffStyled>
    </NavigationStyled>
)

Navigation.propTypes = {
    onClick: PropTypes.func.isRequired
}
