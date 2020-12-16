import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { connect } from 'react-redux'

import { DefaultWidgetWrapper } from '../../helpers'
import { selectors } from '../../../adapter'

import { EventButton } from './event-button'
import styles from './styles.css'

export const Buttons = (props) => {
    const { events, eventsActions, isLoading, stepData, properties } = props

    if (_.isEmpty(events)) {
        return null
    }

    return (
        <DefaultWidgetWrapper {...props}>
            <div className={styles.container}>
                {events.map((event) => (
                    <EventButton
                        event={event}
                        eventsActions={eventsActions}
                        properties={properties}
                        isLoading={isLoading}
                        stepData={stepData}
                        key={`${event.type}-${event.title}`}
                    />
                ))}
            </div>
        </DefaultWidgetWrapper>
    )
}

Buttons.propTypes = {
    events: PropTypes.arrayOf(PropTypes.shape({
        cmd: PropTypes.string,
        name: PropTypes.string,
        type: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        uri: PropTypes.string
    })),
    eventsActions: PropTypes.object,
    isLoading: PropTypes.bool,
    stepData: PropTypes.object,
    properties: PropTypes.shape({
        style: PropTypes.oneOf(['accept', 'accepttransparent']),
        validation: PropTypes.bool
    })
}

Buttons.defaultProps = {
    events: [],
    eventsActions: {},
    isLoading: false,
    stepData: {},
    properties: {
        style: 'accepttransparent',
        validation: false,
    }
}

const mapStateToProps = (state) => ({
    isLoading: selectors.getStateLoading(state),
    stepData: selectors.getOutput(state)
})

export default connect(mapStateToProps)(Buttons)
