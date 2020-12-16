import React, { useRef } from 'react'
import PropTypes from 'prop-types'

import { FullscreenPortal } from '../fullscreen-portal'
import WidgetList from '../widget-list'

export const FullscreenBottom = ({ widgets }) => {
    const domNode = useRef(document.getElementById('workflowFullscreenBottom'))

    return (
        <FullscreenPortal domNode={domNode.current}>
            <WidgetList list={widgets} />
        </FullscreenPortal>
    )
}
FullscreenBottom.propTypes = {
    widgets: PropTypes.arrayOf(PropTypes.object),
}

FullscreenBottom.defaultProps = {
    widgets: [],
}
