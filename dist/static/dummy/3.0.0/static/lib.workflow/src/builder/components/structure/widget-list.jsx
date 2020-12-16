import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { withContext } from '../../helpers'
import { defaultWidgets } from '../../widgets'

import Widget from './widget'
import { StructurePositionProps } from './const'

const getWidgetKey = ({ fields, state, type, screenIndex }, index) => {
    // индекс оставлен для виджетов без полей
    const widgetFieldsHash = fields?.reduce((acc, field) => `${acc}${field.id}`, '') || index
    return `${state}-${type}-${screenIndex}-${widgetFieldsHash}`
}

/**
 * @desc Компонент занимается выводом набора виджетов в рамках одного экрана (screen).
 *
 * @param {Array} list - Массив данных для отображения виджета.
 * @param {Object} widgets - Карта типов и соответствующих виджетов из проекта.
 * @returns {XML}
 * @constructor
 */

const WidgetList = ({ list, widgets, fieldStyles, structurePosition, customStrategies }) => {
    const mergedWidgets = {
        ...widgets,
        ...defaultWidgets
    }

    const widgetsList = useMemo(() => list.map((widget, index) => ({
        ...widget,
        key: getWidgetKey(widget, index)
    })), [list])

    return (
        <React.Fragment>
            {widgetsList.map(({ type, fields, properties, title, readonly, description, screenIndex,
                widgetIndex, state, events, key, strategies, hiddenByStrategy }) => {
                // Если у компонента из widgets свойство defaultReadonly, то применится CoreFieldset при условии, что весь виджет readonly
                const component = _.get(mergedWidgets, [type, 'defaultReadonly'], false) === true && readonly
                    ? defaultWidgets.CoreFieldset
                    : mergedWidgets[type]

                return (
                    <Widget
                        key={key}
                        component={component}
                        fields={fields}
                        properties={properties}
                        title={title}
                        readonly={readonly}
                        description={description}
                        screenIndex={screenIndex}
                        widgetIndex={widgetIndex}
                        state={state}
                        fieldStyles={fieldStyles}
                        events={events}
                        structurePosition={structurePosition}
                        strategies={strategies}
                        customStrategies={customStrategies}
                        hiddenByStrategy={hiddenByStrategy}
                    />
                )
            })}
        </React.Fragment>)
}

WidgetList.propTypes = {
    list: PropTypes.array,
    widgets: PropTypes.object,
    fieldStyles: PropTypes.object,
    structurePosition: StructurePositionProps,
    customStrategies: PropTypes.objectOf(PropTypes.func)
}

WidgetList.defaultProps = {
    list: [],
    widgets: {},
    fieldStyles: {},
    structurePosition: '',
    customStrategies: void 0
}

export default withContext({
    widgets: PropTypes.object,
    fieldStyles: PropTypes.object,
    customStrategies: PropTypes.objectOf(PropTypes.func)
})(WidgetList)
