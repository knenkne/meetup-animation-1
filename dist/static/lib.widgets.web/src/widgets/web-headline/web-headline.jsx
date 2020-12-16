import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@sbol/lib.ui'

import defaultTheme from './style.css'

const WebHeadline = ({ title }) => (
    <div className={defaultTheme.wrapper}>
        <Typography.Headline>{title}</Typography.Headline>
    </div>
)

WebHeadline.propTypes = {
    title: PropTypes.string.isRequired,
}

export default WebHeadline
