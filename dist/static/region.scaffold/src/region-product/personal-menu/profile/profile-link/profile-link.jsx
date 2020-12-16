import React from 'react'
import { PropTypes } from 'prop-types'
import { Link } from '@sbol/lib.app'

import { toggleProductRegion } from '../../utils/toggle-product-region'

import { ProfileLinkImage } from './profile-link-image'
import { ProfileLinkStyled, ProfileIconStyled } from './profile-link.styles'

export const ProfileLink = ({
    title,
    href,
    icon,
    img,
    className,
    isMain,
    linkTitle
}) => (
    <ProfileLinkStyled
        as={href ? Link : 'span'}
        disabled={!href}
        main={isMain || void 0}
        className={className}
        href={href}
        title={linkTitle}
        aria-label={linkTitle}
        onClick={href ? toggleProductRegion : void 0}
    >
        <ProfileIconStyled>
            <ProfileLinkImage img={img} title={title} icon={icon} />
        </ProfileIconStyled>
    </ProfileLinkStyled>
)

ProfileLink.displayName = 'ProfileLink'

ProfileLink.defaultProps = {
    icon: null,
    img: null,
    isMain: false,
    className: ''
}

ProfileLink.propTypes = {
    title: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    icon: PropTypes.string,
    img: PropTypes.string,
    isMain: PropTypes.bool,
    className: PropTypes.string,
    linkTitle: PropTypes.string.isRequired
}
