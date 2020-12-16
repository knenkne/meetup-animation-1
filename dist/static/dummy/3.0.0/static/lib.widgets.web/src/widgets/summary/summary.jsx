import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import i18next from 'i18next'
import classnames from 'classnames'
import { DefaultWidgetWrapper } from '@sbol/lib.workflow'
import { WorkflowPropTypes } from '@sbol/utils'

import { SummaryTitle, EditButton } from '../../components'

import { Field } from './field'
import { SummaryDescription } from './components'
import { getReference } from './utils'
import style from './summary.css'

const getCollapsed = (props) => _.get(props.properties, 'collapsed')
const getCollapsable = (props) => !_.isUndefined(getCollapsed(props))

export class WebSummary extends React.Component {
    static propTypes = {
        properties: PropTypes.object,
        references: WorkflowPropTypes.References,
        eventsActions: PropTypes.objectOf(PropTypes.func),
        fields: WorkflowPropTypes.Fields,
        title: PropTypes.string,
        description: PropTypes.string
    }
    static defaultProps = {
        properties: {},
        references: {},
        eventsActions: {},
        fields: [],
        title: '',
        description: ''
    }

    state = {
        collapsed: getCollapsed(this.props)
    }

    handleToggleCollapse = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }

    handleRollbackToStep = () => {
        const { eventsActions, properties } = this.props

        const eventName = _.get(properties, 'event')
        if (_.has(eventsActions, eventName)) {
            eventsActions[eventName](properties.stepId)
        } else {
            eventsActions.rollback(properties.stepId)
        }
    }

    render () {
        const {
            title,
            description,
            properties: {
                stepId,
                additionalDescription
            },
            fields,
            references
        } = this.props

        const { collapsed } = this.state

        return (
            <DefaultWidgetWrapper colorScheme="plate">
                {title && (
                    <SummaryTitle
                        title={title}
                        collapsed={collapsed}
                        onToggleCollapse={this.handleToggleCollapse}
                        withStatus
                        collapsable={getCollapsable(this.props)}
                    />
                )}

                {!collapsed && (
                    <React.Fragment>
                        {description && <SummaryDescription description={description} />}

                        <div
                            className={classnames(
                                style.fields,
                                title && style.titled
                            )}
                        >
                            {fields.map((field) => (
                                <Field
                                    key={field.id}
                                    {...field}
                                    reference={getReference(references, field)}
                                    halfWidth
                                />
                            ))}
                        </div>

                        {additionalDescription && <SummaryDescription description={additionalDescription} />}

                        {stepId && (
                            <EditButton onClick={this.handleRollbackToStep}>
                                {i18next.t(
                                    'lib.widgets.web:summary.action.rollback'
                                )}
                            </EditButton>
                        )}
                    </React.Fragment>
                )}
            </DefaultWidgetWrapper>
        )
    }
}

export default WebSummary
