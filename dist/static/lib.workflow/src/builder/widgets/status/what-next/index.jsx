import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Markdown, Typography } from '@sbol/lib.ui'
import { WorkflowPropTypes } from '@sbol/utils'

import defaultTheme from './style.css'

const WhatNext = ({ theme, fields, level }) => (
    <ul className={classnames(theme.coming, `${theme[level]}`)}>
        {fields.map(({ id, title, value }) => (
            <li className={theme.field} key={id}>
                {title && <Typography.Headline mode="h4">{title}</Typography.Headline>}
                {value && <Markdown.Full content={value} size="lg" />}
            </li>
        ))}
    </ul>
)

WhatNext.propTypes = {
    fields: WorkflowPropTypes.Fields,
    theme: PropTypes.objectOf(PropTypes.string),
    level: PropTypes.string
}

WhatNext.defaultProps = {
    fields: [],
    theme: defaultTheme,
    level: ''
}

export default WhatNext
