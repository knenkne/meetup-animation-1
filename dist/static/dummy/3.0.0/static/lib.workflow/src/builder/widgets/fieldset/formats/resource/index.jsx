import React from 'react'
import { Labeled, Listbox, showError } from '@sbol/lib.ui'
import { Field } from 'redux-form'
import { fieldAdapter } from '@sbol/lib.app'

import { parseResource } from './utils'

// TODO: Текстовки в i18next
// TODO: вернуть их
const GROUPS_LABELS = {
    card: 'Карты',
    deposit: 'Счета',
    account: 'Счета',
    loan: 'Кредиты',
    goal: 'Цели',
    metal: 'Металлы',
    offer: 'Предложения',
    unavailable: 'Заблокировано'
}

export const ResourceLabeled = ({ tooltip, title, ...props }) => (
    <Labeled {...props} tooltip={tooltip} title={title} error={showError(props)}>
        <Listbox {...props} error={showError(props)} />
    </Labeled>
)

export default ({ validators, referenceId, references, eventsActions, fieldStyles, ...props }) => (
    <Field
        component={fieldAdapter(ResourceLabeled)}
        validate={validators}
        {...props}
        options={references[referenceId].items.map(parseResource)}
    />
)
