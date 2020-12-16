import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import { defaultWidgets } from '../../widgets'
import { baseStrategies } from '../../strategies'
import { useStrategy } from '../../strategies/hooks/use-strategy'

import { StructurePositionProps } from './const'
import { WidgetToComponent } from './widget-to-component'

const mapStrategies = (initial, strategyFns, listFromJson) => listFromJson && strategyFns ?
    listFromJson.reduce((acc, oneStrategy) => strategyFns[oneStrategy?.type] ? [...acc, {
        fn: strategyFns[oneStrategy.type],
        properties: oneStrategy.properties,
        fieldLookupId: oneStrategy.fieldLookupId
    }] : acc, [...initial]) : void 0

export const StrategyWidget = ({ strategies, customStrategies, hiddenByStrategy, ...props }) => {

    const coreStrategies = useMemo(() => mapStrategies([], baseStrategies, strategies),
        [strategies, baseStrategies])

    const widgetStrategies = useMemo(() => mapStrategies(coreStrategies, customStrategies, strategies),
        [strategies, customStrategies, coreStrategies])

    const { strategyValidators } = useStrategy({ widgetStrategies, props })

    return (<React.Fragment>
        {hiddenByStrategy ?
            null :
            <WidgetToComponent {...props} widgetStrategies={widgetStrategies} strategyValidators={strategyValidators} />
        }
    </React.Fragment>)
}

StrategyWidget.propTypes = {
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
    strategies: PropTypes.arrayOf(PropTypes.object),
    customStrategies: PropTypes.objectOf(PropTypes.func),
    hiddenByStrategy: PropTypes.bool
}

StrategyWidget.defaultProps = {
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
    strategies: void 0,
    customStrategies: void 0,
    screenIndex: void 0,
    widgetIndex: void 0,
    hiddenByStrategy: false
}
