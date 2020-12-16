import React from 'react'
import _ from 'lodash'
import i18next from 'i18next'
import PropTypes from 'prop-types'
import { getFormValues, getFormSyncErrors, change } from 'redux-form'
import { connect } from 'react-redux'

import * as selectors from '../../../adapter/selectors'
import Fieldset from '../../widgets/fieldset'
import { DefaultWidgetWrapper } from '../default-widget-wrapper'

import { Full } from './full'
import { Short } from './short'
import style from './multi-widget.css'

const STATUSES = {
    hidden: 'hidden',
    active: 'active',
    closed: 'closed'
}

const getOwnFields = (fields, index, fieldsPerWidget) =>
    fields.slice(fieldsPerWidget * index, fieldsPerWidget * (index + 1))
const getOwnValues = (ownFields, domain) =>
    _.pickBy(domain, (value, id) => _.find(ownFields, (field) => field.id === id))
const isFilled = (values) => Object.values(values).some(_.identity)

class MultiWidgetDumb extends React.Component {
    static propTypes = {
        getShortTitle: PropTypes.func,
        getShortDescription: PropTypes.func,
        getAddTitle: PropTypes.func,
        getAddDescription: PropTypes.func,
        hideButtonTitle: PropTypes.string,
        fieldsPerWidget: PropTypes.number.isRequired,
        widget: PropTypes.func,
        changeValue: PropTypes.func.isRequired,
        fields: PropTypes.array.isRequired,
        values: PropTypes.object.isRequired,
        formName: PropTypes.string.isRequired,
        formSyncErrors: PropTypes.object.isRequired,
    }

    static defaultProps = {
        widget: Fieldset,
        getShortTitle: (values) => Object.values(values).join(' '),
        getShortDescription: () => void '',
        getAddTitle: () => i18next.t('lib.workflow:multi.add'),
        getAddDescription: () => void '',
        hideButtonTitle: void '',
        properties: {}
    }

    constructor (props) {
        super(props)

        const widgetsStatus = []

        for (let index = 0; index < props.fields.length / props.fieldsPerWidget; index += 1) {
            const ownFields = getOwnFields(props.fields, index, props.fieldsPerWidget)
            const ownValues = getOwnValues(ownFields, props.values)
            if (isFilled(ownValues)) {
                widgetsStatus.push(STATUSES.closed)
            } else {
                widgetsStatus.push(STATUSES.hidden)
            }
        }

        props.fields.forEach(({ id, value }) => {
            // TODO: чекбокс false не очищается
            if (_.isEmpty(value)) {
                props.changeValue(props.formName, id, null)
            }
        })

        this.state = {
            widgetsStatus
        }
    }

    getCloseState = (index) => {
        const {
            fields,
            formSyncErrors,
            fieldsPerWidget,
            changeValue,
            formName
        } = this.props

        const widgetsStatus = [...this.state.widgetsStatus]

        const ownFields = getOwnFields(fields, index, fieldsPerWidget)
        const ownSyncErrors = getOwnValues(ownFields, formSyncErrors)

        if (isFilled(ownSyncErrors)) {
            widgetsStatus[index] = STATUSES.hidden

            ownFields.forEach(({ id }) => {
                changeValue(formName, id, null)
            })
        } else {
            widgetsStatus[index] = STATUSES.closed
        }

        return widgetsStatus
    }


    handleAdd = () => {
        const widgetsStatus = [...this.state.widgetsStatus]

        const hiddenPosition = widgetsStatus.findIndex((item) => item === STATUSES.hidden)

        widgetsStatus[hiddenPosition] = STATUSES.active

        this.setState({
            widgetsStatus
        })
    }

    handleEdit = (index) => {
        let widgetsStatus = [...this.state.widgetsStatus]

        const activePosition = widgetsStatus.findIndex((item) => item === STATUSES.active)

        if (activePosition > -1) {
            widgetsStatus = this.getCloseState(activePosition)
        }

        widgetsStatus[index] = STATUSES.active

        this.setState({
            widgetsStatus
        })
    }

    handleClose = (index) => {
        this.setState({
            widgetsStatus: this.getCloseState(index)
        })
    }

    render () {
        const {
            props: {
                widget,
                hideButtonTitle,
                getShortTitle,
                getShortDescription,
                getAddTitle,
                getAddDescription,
                fieldsPerWidget,
                fields,
                values
            },
            state: {
                widgetsStatus
            }
        } = this

        const ownAllValues = getOwnValues(fields, values)

        return (
            <DefaultWidgetWrapper>
                {widgetsStatus.map((status, index) => {
                    const ownFields = getOwnFields(fields, index, fieldsPerWidget)

                    switch (status) {
                        case STATUSES.closed: {
                            const ownValues = getOwnValues(ownFields, values)

                            return (
                                <Short
                                    key={ownFields.map(({ id }) => id)}
                                    title={getShortTitle(ownValues)}
                                    description={getShortDescription(ownValues)}
                                    onEdit={this.handleEdit}
                                    index={index}
                                    fields={ownFields}
                                />
                            )
                        }
                        case STATUSES.active: {
                            return (
                                <Full
                                    {...this.props}
                                    key={ownFields.map(({ id }) => id)}
                                    onClose={this.handleClose}
                                    index={index}
                                    hideButtonTitle={hideButtonTitle || i18next.t('lib.workflow:multi.close')}
                                    widget={widget}
                                    fields={ownFields}
                                />
                            )
                        }
                        default: {
                            return null
                        }
                    }
                })}

                {widgetsStatus.some((status) => status === STATUSES.hidden) &&
                !widgetsStatus.some((status) => status === STATUSES.active) &&
                <button
                    className={style.addButton}
                    onClick={this.handleAdd}
                    type="button"
                >
                    <div className={style.title}>
                        {getAddTitle(ownAllValues)}
                    </div>
                    {getAddDescription(ownAllValues) &&
                    <div className={style.description}>
                        {getAddDescription(ownAllValues)}
                    </div>
                    }
                </button>
                }
            </DefaultWidgetWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    const formName = selectors.getName(state)
    return {
        formName,
        values: getFormValues(formName)(state),
        formSyncErrors: getFormSyncErrors(formName)(state)
    }
}

const mapDispatchToProps = {
    changeValue: change
}

export const MultiWidget = connect(mapStateToProps, mapDispatchToProps)(MultiWidgetDumb)
