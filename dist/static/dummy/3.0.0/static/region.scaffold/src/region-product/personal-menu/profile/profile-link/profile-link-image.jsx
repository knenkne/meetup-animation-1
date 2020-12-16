import React from 'react'
import { PropTypes } from 'prop-types'
import { Icon } from '@sbol/lib.ui/core/icon'

import { ThemedIcon } from '../../themed-icon'

export const ProfileLinkImage = ({ img, icon, title }) => {
    if (img) {
        return <img src={img} alt={title} />
    }
    if (icon) {
        return <ThemedIcon type="mono" name={icon} size="self" />
    }
    return <Icon name="icon:core/product-status/defaultUser" size="self" />
}

ProfileLinkImage.displayName = 'ProfileLinkImage'

ProfileLinkImage.defaultProps = {
    icon: null,
    img: null,
    title: null
}

ProfileLinkImage.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
    img: PropTypes.string
}
