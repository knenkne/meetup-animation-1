import React from 'react'
import { Input, Labeled, showError } from '@sbol/lib.ui'

import { StrategyField } from '../strategy-handlers/strategy-field'

const Text = ({ initial, tooltip, title, ...props }) => (
    <Labeled {...props} tooltip={tooltip} title={title} error={showError(props)} >
        <Input {...props} error={showError(props)} />
    </Labeled>
)

export default ({ validators, referenceId, references, eventsActions, fieldStyles, ...props }) => (
    <StrategyField
        validate={validators}
        {...props}
        component={Text}
    />
)
