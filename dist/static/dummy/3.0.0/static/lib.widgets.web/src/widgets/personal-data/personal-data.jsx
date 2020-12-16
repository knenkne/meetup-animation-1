import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Selection } from '@sbol/lib.ui'
import { Field as FieldApp } from '@sbol/lib.app'
import { DefaultWidgetWrapper } from '@sbol/lib.workflow'
import { WorkflowPropTypes } from '@sbol/utils'
import i18next from 'i18next'

import { Field } from '../summary/field'
import { WebProcessAlert } from '../process-alert'

import style from './style.css'

const alertProperties = {
    level: 'info'
}

export class WebPersonalDataSummary extends React.Component {
    state = {
        alert: false
    }

    handleSwitch = () => {
        this.setState({
            alert: !this.state.alert
        })
    }

    render () {
        const { title, description, properties, fields } = this.props
        const { twoColumn, borderBottom } = properties

        return (
            <DefaultWidgetWrapper title={title} description={description}>
                {/* TODO WebProcessAlert выпилить в версии 2 */}
                {this.state.alert ? (
                    <div className={style.alert}>
                        <WebProcessAlert
                            title={i18next.t('lib.widgets.web:go.to.vsp')}
                            description={properties.tooltipContents}
                            properties={alertProperties}
                        />
                    </div>
                ) : (
                    <div className={classnames(style.fields, { [style.withSwitch]: properties.switchFieldName })}>
                        {fields.map((field) => (
                            <Field
                                key={field.id}
                                halfWidth={twoColumn}
                                {...field}
                            />
                        ))}
                    </div>
                )}
                {properties.tooltipTitle && properties.switchFieldName &&
                <FieldApp
                    component={Selection.Checkbox}
                    mode="switch"
                    title={properties.tooltipTitle}
                    name={properties.switchFieldName}
                    id={properties.switchFieldName}
                    onChange={this.handleSwitch}
                >
                    {properties.tooltipTitle}
                </FieldApp>
                }
                {/* TODO Selection.Checkbox выпилить в версии 2 */}
                {properties.tooltipTitle && !properties.switchFieldName &&
                <Selection.Checkbox
                    mode="switch"
                    title={properties.tooltipTitle}
                    value={this.state.alert}
                    onChange={this.handleSwitch}
                >
                    {properties.tooltipTitle}
                </Selection.Checkbox>
                }
                {
                    borderBottom && <div className={style.borderBottom} />
                }
            </DefaultWidgetWrapper>
        )
    }

}

WebPersonalDataSummary.propTypes = {
    properties: PropTypes.shape({
        tooltipTitle: PropTypes.string,
        tooltipContents: PropTypes.string,
        switchFieldName: PropTypes.string,
        twoColumn: PropTypes.bool,
        borderBottom: PropTypes.bool
    }),
    events: PropTypes.array,
    eventsActions: PropTypes.objectOf(PropTypes.func),
    fields: WorkflowPropTypes.Fields,
    title: PropTypes.string,
    description: PropTypes.string
}
WebPersonalDataSummary.defaultProps = {
    properties: {
        twoColumn: false,
        borderBottom: false
    },
    events: [],
    eventsActions: {},
    fields: [],
    title: '',
    description: '',
}

export default WebPersonalDataSummary
