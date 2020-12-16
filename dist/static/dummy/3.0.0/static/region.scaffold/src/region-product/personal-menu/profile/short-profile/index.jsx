import React from 'react'
import { PropTypes } from 'prop-types'

import { Avatar } from '../avatar'
import { isEmployeeProfile } from '../../utils/helpers'
import { OverlayAvatarsStyled, ProfileHeaderStyled } from '../profile.styles'

import { ShortProfileStyled } from './short-profile.styles'

export const ShortProfile = ({
    links: {
        user: {
            href, // eslint-disable-line no-unused-vars, comment: профиль в мини-меню некликабелен
            ...userRest
        },
        employee
    },
    type,
    isSbolPro
}) => (
    <ShortProfileStyled>
        <ProfileHeaderStyled>
            {isSbolPro && isEmployeeProfile(type)
                ? (
                    <OverlayAvatarsStyled>
                        <Avatar {...userRest} />
                        <Avatar {...employee} isEmployee />
                    </OverlayAvatarsStyled>
                )
                : (
                    <Avatar {...userRest} />
                )}
        </ProfileHeaderStyled>
    </ShortProfileStyled>
)

ShortProfile.defaultProps = {
    isSbolPro: false,
}

ShortProfile.propTypes = {
    links: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired,
    isSbolPro: PropTypes.bool.isRequired,
}
