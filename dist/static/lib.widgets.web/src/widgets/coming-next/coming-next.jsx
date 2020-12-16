import React from 'react'
import PropTypes from 'prop-types'
import { Markdown, Typography } from '@sbol/lib.ui'
import { WorkflowPropTypes } from '@sbol/utils'

import defaultTheme from './style.css'

export const WebComingNext = ({ theme, fields }) => (
    <ul className={theme.coming}>
        {fields.map(({ id, title, value }) => (
            <li className={theme.field} key={id}>
                {title && <Typography.Headline mode="h4">{title}</Typography.Headline>}
                {value && <Markdown.Full content={value} size="lg" />}
            </li>
        ))}
    </ul>
)

WebComingNext.propTypes = {
    fields: WorkflowPropTypes.Fields.isRequired,
    theme: PropTypes.objectOf(PropTypes.string).isRequired
}

WebComingNext.defaultProps = {
    theme: defaultTheme
}

export default WebComingNext
