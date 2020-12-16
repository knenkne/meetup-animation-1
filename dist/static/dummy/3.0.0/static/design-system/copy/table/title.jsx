import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Typography } from '../typography'
import { mergeTheme } from '../utils'

import defaultTheme from './style.css'

export const extendedHeadlineTheme = mergeTheme(Typography.theme, {
    headline: classnames(Typography.theme.headline, defaultTheme.margin)
})

export const Title = ({ children }) => (
    <Typography.Headline mode="h4" theme={extendedHeadlineTheme}>
        {children}
    </Typography.Headline>
)

Title.propTypes = {
    children: PropTypes.node.isRequired
}

Title.defaultProps = {
    children: void 0
}

Title.displayName = 'Table.Title'
