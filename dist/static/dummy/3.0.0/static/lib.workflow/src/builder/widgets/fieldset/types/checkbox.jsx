import React from 'react'
import PropTypes from 'prop-types'
import { fieldAdapter } from '@sbol/lib.app'
import { Selection, Labeled, showError, mergeTheme } from '@sbol/lib.ui'

import { StrategyField } from '../strategy-handlers/strategy-field'
import style from '../style.css'

const checkboxTheme = mergeTheme(Selection.Checkbox.theme, {
    checkbox: style.checkbox
})

export const Checkbox = ({ initial, readonly, tooltip, title, ...props }) => (
    <Labeled
        {...props}
        tooltip={tooltip}
        mode="checkbox"
        error={showError(props)}
    >
        <Selection.Checkbox
            {...props}
            checked={props.value}
            error={showError(props)}
            disabled={readonly}
            theme={checkboxTheme}
        />
    </Labeled>
)

Checkbox.defaultProps = {
    initial: void 0,
    readonly: void 0,
    tooltip: void 0,
    value: void 0
}

Checkbox.propTypes = {
    initial: PropTypes.bool,
    readonly: PropTypes.bool,
    tooltip: PropTypes.shape({
        title: PropTypes.string,
        contents: PropTypes.string
    }),
    value: PropTypes.bool
}


export default ({ validators, referenceId, references, eventsActions, fieldStyles, ...props }) => (
    <StrategyField
        {...props}
        name={props.id}
        validate={validators}
        component={fieldAdapter(Checkbox)}
    >
        {props.title}
    </StrategyField>
)
