import React from 'react'
import PropTypes from 'prop-types'
import { WorkflowPropTypes } from '@sbol/utils'
import { Labeled } from '@sbol/lib.ui'

import { DefaultWidgetWrapper } from '../../helpers'

import { types } from './types'
import { formats } from './formats'
import style from './style.css'

const DEPRECATED_FIELD_TYPES_MAPPING = [
    'decimal',
    'integer',
    'date',
    'year',
    'month',
    'quarter',
    'time'
]

const HALF_WIDTH_FORMATS = [
    'card',
    'date',
    'local-phone',
    'month',
    'quantity',
    'snils',
    'time',
    'vat',
    'year',
    'quarter'
]

const getComponent = (type, format) => {
    if (type === 'hidden') {
        return () => null
    }

    if (DEPRECATED_FIELD_TYPES_MAPPING.includes(type)) {
        return formats[type]
    }

    if (formats[format]) {
        return formats[format]
    }

    if (types[type]) {
        return types[type]
    }

    return types.text
}

class Fieldset extends React.Component {
    handleBlur = (handleUIEvents) => () => {
        const onBlurEventNames = handleUIEvents
            .filter(({ on }) => on === 'blur')
            .map(({ eventName }) => eventName)

        onBlurEventNames.forEach(this.props.eventsActions.event)
    }

    render () {
        const {
            fieldStyles,
            fields,
            references,
            readonly: widgetReadonly,
            eventsActions,
            strategyValidators
        } = this.props

        return (
            <DefaultWidgetWrapper {...this.props}>
                {fields.map(({ type, format, readonly, handleUIEvents = [], style: fieldStyle, masked, ...field }) => {
                    const Component = getComponent(type, format)

                    const component = (
                        <Component
                            {...field}
                            key={field.id}
                            name={field.id}
                            {...(fieldStyle && { fieldStyle })}
                            {...(masked && { masked })}
                            references={references}
                            eventsActions={eventsActions}
                            fieldStyles={fieldStyles}
                            readonly={widgetReadonly || readonly}
                            onBlur={this.handleBlur(handleUIEvents)}
                            strategyValidators={strategyValidators[field.id]}
                        />
                    )

                    if (HALF_WIDTH_FORMATS.includes(format) || HALF_WIDTH_FORMATS.includes(type)) {
                        return (
                            <Labeled key={field.id}>
                                <div className={style.halfWidth}>
                                    {component}
                                </div>
                            </Labeled>
                        )
                    }

                    return component
                })}
            </DefaultWidgetWrapper>
        )
    }
}


Fieldset.propTypes = {
    readonly: PropTypes.bool,
    fieldStyles: PropTypes.object,
    fields: WorkflowPropTypes.Fields,
    references: WorkflowPropTypes.Reference,
    eventsActions: PropTypes.object,
    strategyValidators: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.func))
}

Fieldset.defaultProps = {
    readonly: false,
    fieldStyles: {},
    references: {},
    fields: [],
    eventsActions: {},
    strategyValidators: void 0
}

export default Fieldset
