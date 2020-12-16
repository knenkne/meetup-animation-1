import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cn from 'classnames'
import { Alert } from '@sbol/lib.ui'

import { selectors } from '../../../../adapter'

import style from './style.css'

const modes = {
    warning: 'error',
    error: 'error',
    info: 'info'
}

const Item = ({ title, text, mode, hasStatus }) => (
    <div className={cn(style.wrapper, hasStatus && style.statusScreen)}>
        <Alert.Process
            mode={mode}
            a11y={{ title }}
            title={title}
        >
            <Alert.Process.Description>
                {text}
            </Alert.Process.Description>
        </Alert.Process>
    </div>
)

Item.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    mode: PropTypes.string,
    hasStatus: PropTypes.bool
}

Item.defaultProps = {
    title: '',
    text: '',
    mode: 'info',
    hasStatus: void 0
}

const EventError = ({ messages, hasStatus }) => (
    <React.Fragment>
        {messages
            .map((message) => (
                <Item
                    key={message.title}
                    title={message.title}
                    text={message.text}
                    mode={modes[message.type]}
                    hasStatus={hasStatus}
                />
            ))
        }
    </React.Fragment>
)

EventError.propTypes = {
    messages: PropTypes.array,
    hasStatus: PropTypes.bool
}

EventError.defaultProps = {
    messages: [],
    hasStatus: void 0
}

const mapStateToProps = (state) => ({
    messages: selectors.getStandardMessages(state),
    hasStatus: !!selectors.getStatusLevel(state)
})

export default connect(mapStateToProps)(EventError)
