import React from 'react'
import PropTypes from 'prop-types'

import { defaultWidgets } from '../../widgets'

import { StructurePositionProps } from './const'

export const WidgetToComponent = ({
    component,
    title,
    description,
    properties,
    fields,
    references,
    events,
    eventsActions,
    history,
    screenIndex,
    widgetIndex,
    state,
    readonly,
    fieldStyles,
    structurePosition,
    strategyValidators
}) => {

    const Component = component

    return (
        <Component
            properties={properties}
            fields={fields}
            references={references}
            events={events}
            eventsActions={eventsActions}
            title={title}
            description={description}
            readOnly={readonly}
            history={history}
            screenIndex={screenIndex}
            widgetIndex={widgetIndex}
            state={state}
            // У Fieldset есть возможность работать с fieldStyles - доформатировать визуализацию полей (не формат)
            fieldStyles={Component === defaultWidgets.CoreFieldset ? fieldStyles : void 0}
            structurePosition={structurePosition}
            strategyValidators={strategyValidators}
        />
    )
}


WidgetToComponent.propTypes = {
    component: PropTypes.func,
    title: PropTypes.string,
    description: PropTypes.string,
    properties: PropTypes.object,
    fields: PropTypes.arrayOf(PropTypes.object),
    readonly: PropTypes.bool,
    references: PropTypes.object,
    events: PropTypes.arrayOf(
        PropTypes.shape({
            cmd: PropTypes.string,
            name: PropTypes.string,
            type: PropTypes.string,
            title: PropTypes.string,
            description: PropTypes.string,
            uri: PropTypes.string
        })
    ),
    history: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            flow: PropTypes.string.isRequired,
            flowId: PropTypes.number,
            state: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            value: PropTypes.string,
            status: PropTypes.oneOf(['ACTIVE', 'DISABLED', 'HIDDEN']).isRequired
        })
    ),
    eventsActions: PropTypes.object,
    screenIndex: PropTypes.number.isRequired,
    widgetIndex: PropTypes.number.isRequired,
    state: PropTypes.string.isRequired,
    fieldStyles: PropTypes.object,
    structurePosition: StructurePositionProps,
    strategyValidators: PropTypes.arrayOf(PropTypes.func)
}

WidgetToComponent.defaultProps = {
    component: defaultWidgets.CoreFieldset,
    title: '',
    description: '',
    properties: {},
    fields: [],
    readonly: false,
    references: {},
    events: [],
    eventsActions: {},
    history: [],
    fieldStyles: {},
    structurePosition: '',
    screenIndex: void 0,
    widgetIndex: void 0,
    strategyValidators: []
}
