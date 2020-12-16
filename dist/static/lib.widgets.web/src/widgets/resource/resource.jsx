import React from 'react'
import { Labeled, Listbox } from '@sbol/lib.ui'
import { Field } from 'redux-form'
import { fieldAdapter } from '@sbol/lib.app'
import { DefaultWidgetWrapper } from '@sbol/lib.workflow'

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

const ResourceLabeled = ({ ...props }) => (
    <Labeled {...props}>
        <Listbox {...props} error={props.touched ? props.error : ''} />
    </Labeled>
)

export const Resource = ({
    fields: [{
        validators,
        referenceId,
        eventsActions,
        fieldStyles,
        ...props
    }],
    references,
    title,
    description
}) => (
    <DefaultWidgetWrapper title={title} description={description}>
        <Field
            component={fieldAdapter(ResourceLabeled)}
            validate={validators}
            {...props}
            name={props.id}
            options={references[referenceId].items.map(parseResource)}
        />
    </DefaultWidgetWrapper>
)

Resource.displayName = 'WebResource'

export default Resource
