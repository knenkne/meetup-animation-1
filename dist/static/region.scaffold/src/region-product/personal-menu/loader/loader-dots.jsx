import React from 'react'
import PropTypes from 'prop-types'
import { Loader } from '@sbol/lib.ui/core/loader'

import { LoaderStyle } from './loader.styles'

export const LoaderDots = ({ loaderStyle }) => (
    <LoaderStyle
        loaderStyle={loaderStyle}
    >
        <Loader.Button />
    </LoaderStyle>
)

LoaderDots.defaultProps = {
    loaderStyle: ''
}

LoaderDots.propTypes = {
    loaderStyle: PropTypes.string
}
