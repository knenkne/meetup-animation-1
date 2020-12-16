import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '@sbol/lib.app'

import { capitalize } from '../../utils/capitalize'

import { ProfileNameStyled } from './profile-name.styles'

export const ProfileName = ({ name, href }) => {
    const capitalizedName = capitalize(name)
    return (
        <ProfileNameStyled
            title={capitalizedName}
            as={href ? Link : 'div'}
            href={href}
        >
            {capitalizedName}
        </ProfileNameStyled>
    )
}

ProfileName.defaultProps = {
    name: '',
    href: ''
}

ProfileName.propTypes = {
    name: PropTypes.string,
    href: PropTypes.string
}
