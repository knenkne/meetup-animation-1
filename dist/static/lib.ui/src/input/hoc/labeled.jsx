import React from 'react'

import { getDisplayName } from '../../utils/get-display-name'
import { Labeled } from '../../labeled'

const defaultCondition = (props) => ({
    theme: props.theme,
    value: props.value,
    title: props.title,
    description: props.description,
    id: props.id,
    error: props.error,
    touched: props.touched,
    hint: props.hint,
    tooltip: props.tooltip
})

export const labeledFactory = (getLabelProps = labeledFactory.getLabelProps) => (Component) => {
    const LabeledComponent = (props) => (
        <Labeled {...getLabelProps(props)}>
            <Component {...props} />
        </Labeled>
    )

    LabeledComponent.propTypes = Component.propTypes
    LabeledComponent.displayName = getDisplayName(Component, 'LabeledComponent')
    LabeledComponent.WrappedComponent = Component
    return LabeledComponent
}

labeledFactory.getLabelProps = defaultCondition
