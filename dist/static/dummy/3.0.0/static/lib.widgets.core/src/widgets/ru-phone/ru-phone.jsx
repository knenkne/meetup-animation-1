import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { Input, Labeled } from '@sbol/lib.ui'
import { DefaultWidgetWrapper } from '@sbol/lib.workflow'
import { WorkflowPropTypes } from '@sbol/utils'
import { Field } from '@sbol/lib.app'

const LabeledPhone = ({ title, description, ...props }) => (
    <Labeled {...props} title={title} description={description}>
        <Input.LocalPhone {...props} error={props.touched ? props.error : ''} />
    </Labeled>
)

export const RuPhone = ({ fields: [{ validators, ...phone }], title, description }) => (
    <DefaultWidgetWrapper title={title} description={description}>
        <Field
            {..._.omit(phone, ['validators'])}
            name={phone.id}
            component={LabeledPhone}
            placeholder="+7 ___ ___-__-__"
            validate={validators}
        />
    </DefaultWidgetWrapper>
)

RuPhone.propTypes = {
    description: PropTypes.string,
    eventsActions: PropTypes.objectOf(PropTypes.func),
    fields: WorkflowPropTypes.Fields.isRequired,
    properties: PropTypes.object,
    title: PropTypes.string
}

RuPhone.defaultProps = {
    description: '',
    eventsActions: {},
    properties: {},
    title: ''
}

RuPhone.displayName = 'CoreRuPhone'

export default RuPhone
