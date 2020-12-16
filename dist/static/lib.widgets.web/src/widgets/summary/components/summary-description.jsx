import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { Typography, Markdown } from '@sbol/lib.ui'

import style from '../summary.css'

const markdownDescriptionTheme = {
    ...Markdown.theme,
    container: cn(style.description, Typography.theme.body)
}

export const SummaryDescription = ({ description }) => (
    <Markdown.Short theme={markdownDescriptionTheme} content={description} />
)

SummaryDescription.propTypes = {
    description: PropTypes.string.isRequired
}
