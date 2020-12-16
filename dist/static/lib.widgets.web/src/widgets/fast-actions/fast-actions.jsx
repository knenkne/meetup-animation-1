import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import _ from 'lodash'
import { FastActions as UiFastActions } from '@sbol/lib.ui'
import { DefaultWidgetWrapper } from '@sbol/lib.workflow'
import { selectors } from '@sbol/lib.workflow'

import { WebFastAction } from './fast-action'

const actions = {}

export const WebFastActions = (props) => {
    const {
        title: widgetTitle,
        description,
        references,
        properties: widgetProperties,
        eventsActions,
        statusLevel
    } = props

    return (
        <DefaultWidgetWrapper {...props} title={widgetTitle} description={description}>
            <UiFastActions>
                {references[widgetProperties.reference].items.map((item) => (
                    <WebFastAction
                        key={`${item.title}+${item.value}`}
                        item={item}
                        actions={actions}
                        widgetProperties={widgetProperties}
                        eventsActions={eventsActions}
                        statusLevel={statusLevel}
                    />
                ))}
            </UiFastActions>
        </DefaultWidgetWrapper>
    )
}

WebFastActions.propTypes = {
    references: PropTypes.object,
    properties: PropTypes.object,
    eventsActions: PropTypes.object,
    statusLevel: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
}

WebFastActions.defaultProps = {
    references: {},
    properties: {},
    eventsActions: {},
    statusLevel: void '',
    title: '',
    description: ''
}

WebFastActions.actions = actions
WebFastActions.extend = (customActions) => Object.assign(actions, customActions)

WebFastActions.displayName = 'WebFastActions'

export default connect((state) => ({
    references: selectors.getReferences(state),
    statusLevel: selectors.getStatusLevel(state)
}))(WebFastActions)
