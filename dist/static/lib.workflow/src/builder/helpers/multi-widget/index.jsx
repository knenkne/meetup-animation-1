import React from 'react'
import _ from 'lodash'
import i18next from 'i18next'
import PropTypes from 'prop-types'
import { getFormValues, getFormSyncErrors, change, touch, untouch } from 'redux-form'
import { connect } from 'react-redux'

import * as selectors from '../../../adapter/selectors'
import Fieldset from '../../widgets/fieldset'
import { DefaultWidgetWrapper } from '../default-widget-wrapper'
import { MultiWidget as MultiWidgetOld } from '../multi-widget-old'

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
const isValid = (fields) => fields.every((field) => {
    if (field.validators) {
        return field.validators.every((validator) => !validator(field.value))
    }

    return true
})
const isActiveStatus = (value) => value === STATUSES.closed || value === STATUSES.active

class MultiWidgetDumb extends React.Component {
    static propTypes = {
        getShortTitle: PropTypes.func,
        getShortDescription: PropTypes.func,
        getAddTitle: PropTypes.func,
        getAddDescription: PropTypes.func,
        closeButtonTitle: PropTypes.string,
        cleanButtonTitle: PropTypes.string,
        removeButtonTitle: PropTypes.string,
        fieldsPerWidget: PropTypes.number.isRequired,
        widget: PropTypes.func,
        changeValue: PropTypes.func.isRequired,
        fields: PropTypes.array.isRequired,
        values: PropTypes.object.isRequired,
        formName: PropTypes.string.isRequired,
        formSyncErrors: PropTypes.object.isRequired,
        cleanable: PropTypes.bool,
        removable: PropTypes.bool,
        touchField: PropTypes.func,
        untouchField: PropTypes.func,
        mode: PropTypes.oneOf(['strict']),
        onClose: PropTypes.func,
        onClean: PropTypes.func,
        onRemove: PropTypes.func,
        onAdd: PropTypes.func
    }

    static defaultProps = {
        widget: Fieldset,
        getShortTitle: (values) => Object.values(values).join(' '),
        getShortDescription: () => void '',
        getAddTitle: () => i18next.t('lib.workflow:multi.add'),
        getAddDescription: () => void '',
        closeButtonTitle: void '',
        cleanButtonTitle: void '',
        removeButtonTitle: void '',
        properties: {},
        cleanable: false,
        removable: false,
        touchField: () => void '',
        untouchField: () => void '',
        mode: void '',
        onClose: () => void '',
        onClean: () => void '',
        onRemove: () => void '',
        onAdd: () => void ''
    }

    constructor (props) {
        super(props)

        const widgetsStatus = []

        for (let index = 0; index < props.fields.length / props.fieldsPerWidget; index += 1) {
            const ownFields = getOwnFields(props.fields, index, props.fieldsPerWidget)

            if (isValid(ownFields)) {
                widgetsStatus.push(STATUSES.closed)
            } else if (!props.removable) {
                widgetsStatus.push(STATUSES.active)
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

    handleClose = (index) => {
        const {
            fields,
            formSyncErrors,
            fieldsPerWidget,
            touchField,
            formName
        } = this.props

        const widgetsStatus = [...this.state.widgetsStatus]

        const ownFields = getOwnFields(fields, index, fieldsPerWidget)
        const ownSyncErrors = getOwnValues(ownFields, formSyncErrors)
        const errorFields = Object.keys(ownSyncErrors)

        if (errorFields.length) {
            ownFields.forEach(({ id }) => {
                touchField(formName, id, null)
            })

            if (errorFields[0]) {
                const firstFieldElement = document.getElementById(errorFields[0])
                firstFieldElement?.focus()
            }
        } else {
            widgetsStatus[index] = STATUSES.closed
        }

        this.setState({
            widgetsStatus
        })
    }

    handleAdd = () => {
        const hiddenPosition = this.state.widgetsStatus.findIndex((item) => item === STATUSES.hidden)

        if (hiddenPosition !== -1) {
            this.props.onAdd?.()
            this.activate(hiddenPosition)
        }
    }

    handleEdit = (index) => {
        this.props.onEdit?.(index)
        this.activate(index)
    }

    handleClean = (index) => {
        this.props.onClean?.(index)
        this.deactivate(index)
    }

    handleRemove = (index) => {
        this.props.onRemove?.(index)
        this.deactivate(index, STATUSES.hidden)
    }

    activate = (index) => {
        const {
            fields,
            fieldsPerWidget
        } = this.props

        const widgetsStatus = [...this.state.widgetsStatus]

        widgetsStatus[index] = STATUSES.active

        this.setState({
            widgetsStatus
        }, () => {
            const ownFields = getOwnFields(fields, index, fieldsPerWidget)

            if (ownFields[0].id) {
                const firstFieldElement = document.getElementById(ownFields[0].id)
                firstFieldElement?.focus()
            }
        })
    }

    deactivate = (index, nextStatus) => {
        const {
            fields,
            fieldsPerWidget,
            changeValue,
            formName,
            untouchField
        } = this.props

        const widgetsStatus = [...this.state.widgetsStatus]

        const ownFields = getOwnFields(fields, index, fieldsPerWidget)

        if (nextStatus) {
            widgetsStatus[index] = nextStatus
        }

        ownFields.forEach(({ id, value }) => {
            changeValue(formName, id, value === true ? false : null)
            untouchField(formName, id, null)
        })

        this.setState({
            widgetsStatus
        })
    }

    render () {
        const {
            props: {
                widget,
                closeButtonTitle,
                cleanButtonTitle,
                removeButtonTitle,
                getShortTitle,
                getShortDescription,
                getAddTitle,
                getAddDescription,
                fieldsPerWidget,
                fields,
                values,
                cleanable,
                removable,
                formSyncErrors,
                mode
            },
            state: {
                widgetsStatus
            }
        } = this


        if (!mode) {
            if (process.env.NODE_ENV !== 'production') {
                console.warn(`Пожалуйста, используйте временное свойство mode=strict в компоненте MultiWidget.
    Изменения по дизайну повлекли потерю обратной совместимости.`)
            }
            return <MultiWidgetOld {...this.props} />
        }

        const ownAllValues = getOwnValues(fields, values)
        const ownAllSyncErrors = getOwnValues(fields, formSyncErrors)

        const statuses = widgetsStatus.map(isActiveStatus)

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
                                    index={index}
                                    widget={widget}
                                    fields={ownFields}
                                    closeButtonTitle={closeButtonTitle || i18next.t('lib.workflow:multi.close')}
                                    cleanButtonTitle={cleanButtonTitle || i18next.t('lib.workflow:multi.clean')}
                                    removeButtonTitle={removeButtonTitle || i18next.t('lib.workflow:multi.remove')}
                                    onClose={this.handleClose}
                                    onClean={this.handleClean}
                                    onRemove={this.handleRemove}
                                    cleanable={cleanable}
                                    removable={removable}
                                />
                            )
                        }
                        default: {
                            return null
                        }
                    }
                })}

                {widgetsStatus.some((status) => status === STATUSES.hidden) &&
                <button
                    className={style.addButton}
                    onClick={this.handleAdd}
                    type="button"
                >
                    <div className={style.title}>
                        {getAddTitle(ownAllValues, ownAllSyncErrors, statuses)}
                    </div>
                    {getAddDescription(ownAllValues, ownAllSyncErrors, statuses) &&
                    <div className={style.description}>
                        {getAddDescription(ownAllValues, ownAllSyncErrors, statuses)}
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
    changeValue: change,
    touchField: touch,
    untouchField: untouch
}

export const MultiWidget = connect(mapStateToProps, mapDispatchToProps)(MultiWidgetDumb)
