import React from 'react'
import { PropTypes } from 'prop-types'
import { getConfigValue } from '@sbol/lib.app'

import { allowChangeTheme } from '../../__data__/actions/init/user-property-theme'

import { ChangeThemeButton } from './change-theme-button'
import { SwitchDesignButton } from './switch-design-button'
import { FixedLinkStyled, FixedLinkInnerStyled } from './fixed-link.styles'

const isSbolPro = getConfigValue('isSbolPro', false)

export const FixedLink = ({ isTablet }) => !isSbolPro && !isTablet ? (
    <FixedLinkStyled>
        <FixedLinkInnerStyled>
            <SwitchDesignButton />
            { allowChangeTheme && <ChangeThemeButton /> }
        </FixedLinkInnerStyled>
    </FixedLinkStyled>
) : null


FixedLink.defaultProps = {
    isTablet: false,
}

FixedLink.propTypes = {
    isTablet: PropTypes.bool,
}
