import React from 'react'
import PropTypes from 'prop-types'

import defaultTheme from './style.css'

export const Content = (props) => (
    <div {...props} className={defaultTheme.content} data-unit="status:content">
        {props.children}
    </div>
)

Content.propTypes = {
    children: PropTypes.node
}

Content.defaultProps = {
    children: void 0
}

Content.displayName = 'Status.Content'
