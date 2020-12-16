import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import i18next from 'i18next'
import _ from 'lodash'
import { FastActions as UiFastActions } from '@sbol/lib.ui'
import { Link, getNavigationValue } from '@sbol/lib.app'

export const WebFastAction = ({ item, actions, widgetProperties, eventsActions, statusLevel }) => {
    const { value, title, properties } = item
    const href = _.get(properties, 'href')
    const url = getNavigationValue(href) || href
    const colorScheme = statusLevel || _.get(properties, 'colorScheme')

    const handleClick = useCallback((event) => {
        const action = actions[value]

        if (action instanceof Function) {
            action(event, {
                ...item,
                widgetProperties,
                eventsActions,
            })
        }
    }, [item, actions, widgetProperties, eventsActions])

    const as = url ? Link : void 0

    if (properties.type === 'timer') {
        return (
            <UiFastActions.TimerAction
                {...properties}
                title={title}
                onClick={handleClick}
                as={as}
                href={url}
                initialValue={Number(_.get(properties, 'initialTimer', 0))}
                value={Number(_.get(properties, 'timer', 0))}
                colorScheme={colorScheme}
                timerTitle={i18next.t('lib.widgets.web:fast.action.timer.wait')}
            />
        )
    }

    return (
        <UiFastActions.FastAction
            {...properties}
            title={title}
            onClick={handleClick}
            as={as}
            href={url}
            colorScheme={colorScheme}
        />
    )
}

WebFastAction.propTypes = {
    item: PropTypes.object,
    widgetProperties: PropTypes.object,
    eventsActions: PropTypes.object,
    actions: PropTypes.object,
    statusLevel: PropTypes.string
}

WebFastAction.defaultProps = {
    item: void 0,
    widgetProperties: {},
    eventsActions: {},
    actions: {},
    statusLevel: void ''
}
