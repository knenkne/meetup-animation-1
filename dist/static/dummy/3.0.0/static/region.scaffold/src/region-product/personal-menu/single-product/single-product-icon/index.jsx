import React from 'react'
import { PropTypes } from 'prop-types'

import { ProductIconComponent } from './product-icon-component'
import { ProductIconStyled } from './single-product-icon.styles'
import { NotificationIcon } from './product-icon-notification'

export const SingleProductIcon = ({ type, icon, colorScheme, notification, className }) => (
    <ProductIconStyled className={className}>
        {notification && (
            <NotificationIcon notification={notification} />
        )}
        <ProductIconComponent type={type} icon={icon} colorScheme={colorScheme} />
    </ProductIconStyled>
)

SingleProductIcon.displayName = 'SingleProductIcon'

SingleProductIcon.defaultProps = {
    icon: null,
    colorScheme: '',
    notification: '',
    className: ''
}

SingleProductIcon.propTypes = {
    type: PropTypes.string.isRequired,
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    colorScheme: PropTypes.string,
    notification: PropTypes.string,
    className: PropTypes.string
}
