import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classnames from 'classnames'
import { Button } from '@sbol/lib.ui'

import { DefaultWidgetWrapper, selectors } from '../../../src'

import styles from './params-event.css'

export class ParamsEvent extends React.Component {
    state = {
        loading: false
    }

    componentWillReceiveProps (nextProps) {
        if (!nextProps.loading) {
            this.setState({
                loading: false
            })
        }
    }

    handleClick = () => {
        const {
            events: [
                {
                    name
                }
            ],
            eventsActions,
            loading,
            properties
        } = this.props

        if (!loading) {
            eventsActions.event(name, properties)

            this.setState({
                loading: true
            })
        }
    }

    render () {
        return (
            <DefaultWidgetWrapper {...this.props}>
                <div
                    className={classnames(
                        styles.button,
                        this.state.loading && styles.loading
                    )}
                >
                    <Button
                        type="button"
                        title={this.props.events[0].title}
                        onClick={this.handleClick}
                        mode={this.state.loading ? 'loading' : void 0}
                    />
                </div>
            </DefaultWidgetWrapper>
        )
    }
}

ParamsEvent.propTypes = {
    events: PropTypes.arrayOf(PropTypes.shape({
        cmd: PropTypes.string,
        name: PropTypes.string,
        type: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        uri: PropTypes.string
    })),
    eventsActions: PropTypes.object,
    loading: PropTypes.bool,
    properties: PropTypes.object
}

ParamsEvent.defaultProps = {
    events: [],
    eventsActions: {},
    loading: false,
    properties: {}
}

const mapStateToProps = (state) => ({
    loading: selectors.getStateLoading(state)
})

export default connect(mapStateToProps)(ParamsEvent)
