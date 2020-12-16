import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import _ from 'lodash'
import { Button } from '@sbol/lib.ui'
import { getConfigValue, getHistory } from '@sbol/lib.app'
import i18next from 'i18next'

import { rollback, WF_EVENTS } from '../../../constants'
import { WfContext } from '../../workflow-context'

import styles from './styles.css'

const REDIRECT_TIMEOUT = 100

const typesMap = {
    rollback: 'rollback',
    exit: 'exit',
    abort: 'abort',
    next: 'event'
}

const nextStyles = {
    accept: 'accept'
}

const linkStyles = {
    accepttransparent: 'accepttransparent'
}

const amINextStyle = (name, style) => (name === 'next' || nextStyles[style]) && !linkStyles[style]

export class EventButton extends React.PureComponent {
    state = {
        isLoading: false
    }

    componentWillReceiveProps (nextProps) {
        if (!nextProps.isLoading) {
            this.setState({
                isLoading: false
            })
        }
    }

    handleRedirect = (uri) => {
        if (uri.startsWith('/PhizIC')) {
            window.location = getConfigValue('erib.url') + uri
        } else if (uri.startsWith('http')) {
            window.location = uri
        } else {
            getHistory().push(uri)
        }
    }

    handleClick = () => {
        const {
            event: {
                cmd,
                name,
                uri,
                type
            },
            eventsActions,
            isLoading,
            stepData,
            properties: { validation }
        } = this.props

        if (process.env.NODE_ENV === 'development' && type) {
            console.warn(`CoreButtons: event.type ${type} is deprecated. Use cmd+name instead.`)
        }

        if (!isLoading) {
            let command = typesMap.next
            if (cmd) {
                command = cmd.toLowerCase()
            }
            if (!cmd && type && typesMap[type.toLowerCase()]) {
                command = typesMap[type.toLowerCase()]
            }

            _.invoke(
                eventsActions,
                command,
                command === rollback ? void 0 : name,
                null,
                validation
            )

            this.setState({
                isLoading: true
            })

            if (uri) {
                setTimeout(() => this.handleRedirect(uri), REDIRECT_TIMEOUT)
            }
        }

        if (this.context.onEvent instanceof Function) {
            this.context.onEvent(WF_EVENTS.EVENT_BUTTON_CLICK, {
                event: this.props.event,
                stepData
            })
        }
    }

    render () {
        const {
            event: { name, title },
            properties: { style }
        } = this.props

        const buttonProps = {
            type: 'button',
            title: title || i18next.t(`lib.workflow:${name}`),
            onClick: this.handleClick,
            mode: this.state.isLoading ? 'loading' : void 0
        }

        if (!amINextStyle(name, style)) {
            Object.assign(buttonProps, {
                colorScheme: 'link'
            })
        }

        return (
            <div
                className={classnames(
                    styles.button,
                    this.state.isLoading && styles.loading
                )}
            >
                <Button {...buttonProps} />
            </div>
        )
    }
}

EventButton.propTypes = {
    event: PropTypes.object,
    eventsActions: PropTypes.object,
    isLoading: PropTypes.bool,
    stepData: PropTypes.object,
    properties: PropTypes.shape({
        style: PropTypes.oneOf(['accept', 'accepttransparent']),
        validation: PropTypes.bool
    })
}

EventButton.contextType = WfContext

EventButton.defaultProps = {
    event: void 0,
    eventsActions: {},
    isLoading: false,
    stepData: {},
    properties: {}
}
