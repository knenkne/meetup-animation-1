import React from 'react'
import { PropTypes } from 'prop-types'

import { ThemedIcon } from '../themed-icon'

import { ProductPreviewIconWrapperStyled } from './product-preview.styles'

export const ProductPreviewIcon = ({ name, colorScheme }) => (
    <ProductPreviewIconWrapperStyled>
        <ThemedIcon name={`icon:products/common/${name}`} colorScheme={colorScheme} />
    </ProductPreviewIconWrapperStyled>
)

ProductPreviewIcon.propTypes = {
    name: PropTypes.string.isRequired,
    colorScheme: PropTypes.string.isRequired
}
