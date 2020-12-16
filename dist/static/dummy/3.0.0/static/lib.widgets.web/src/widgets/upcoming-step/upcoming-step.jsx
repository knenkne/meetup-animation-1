import React from 'react'
import PropTypes from 'prop-types'
import { DefaultWidgetWrapper } from '@sbol/lib.workflow'

const WebUpcomingStep = ({ title, description }) => (
    <DefaultWidgetWrapper
        title={title}
        description={description}
        colorScheme="border"
    />
)

WebUpcomingStep.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string
}

WebUpcomingStep.defaultProps = {
    description: void ''
}

export default WebUpcomingStep
