import React from 'react'
import PropTypes from 'prop-types'
import { Input, Labeled, Selection } from '@sbol/lib.ui'
import { Field } from '@sbol/lib.app'
import { bindActionCreators } from 'redux'
import { getFormValues, change } from 'redux-form'
import { connect } from 'react-redux'
import _ from 'lodash'
import { DefaultWidgetWrapper, selectors } from '@sbol/lib.workflow'
import { WorkflowPropTypes } from '@sbol/utils'

import { connectValidatorsWithCheckbox } from '../utils'

import style from './full-name.css'

const EMPTY_VALUE = ''

const CommonInput = (props) => (
    <Labeled {...props} >
        <Input {...props} error={props.touched ? props.error : ''} />
    </Labeled>
)

export class WebFullName extends React.Component {
    static propTypes = {
        fields: WorkflowPropTypes.Fields.isRequired,
        values: PropTypes.object,
        change: PropTypes.func,
        formName: PropTypes.string
    }
    static defaultProps = {
        values: {},
        change: _.noop,
        formName: ''
    }

    componentWillReceiveProps (nextProps) {
        const [, , middleName, noMiddleName] = this.props.fields
        const noMiddleNameOldValue = this.props.values[noMiddleName.id]
        const noMiddleNameNewValue = nextProps.values[noMiddleName.id]

        if (noMiddleNameNewValue !== noMiddleNameOldValue) {
            this.props.change(this.props.formName, middleName.id, EMPTY_VALUE)
        }
    }

    render () {
        const { fields: [lastName, firstName, middleName, noMiddleName], title, description } = this.props
        const disabledMiddleName = this.props.values[noMiddleName.id]
        const hiddenMiddleNameField = middleName.readonly && !middleName.value

        return (
            <DefaultWidgetWrapper title={title} description={description}>
                <div className={style.lineFullName}>
                    <Field
                        {...lastName}
                        name={lastName.id}
                        type="text"
                        component={CommonInput}
                        validate={lastName.validators}
                    />
                    <Labeled>
                        <div className={style.row}>
                            <div className={style.halfWidth}>
                                <Field
                                    {...firstName}
                                    name={firstName.id}
                                    type="text"
                                    component={CommonInput}
                                    validate={firstName.validators}
                                />
                            </div>
                            <div className={style.halfWidth}>
                                {!hiddenMiddleNameField &&
                                <Field
                                    {...middleName}
                                    name={middleName.id}
                                    type="text"
                                    component={CommonInput}
                                    disabled={disabledMiddleName}
                                    validate={connectValidatorsWithCheckbox(middleName.validators, noMiddleName.id)}
                                />
                                }
                                {!middleName.readonly &&
                                <div className={style.checkbox}>
                                    <Field
                                        id={noMiddleName.id}
                                        name={noMiddleName.id}
                                        type="checkbox"
                                        component={Selection.Checkbox}
                                        disabled={false}
                                        validate={noMiddleName.validators}
                                        mode="switch"
                                    >
                                        {noMiddleName.title}
                                    </Field>
                                </div>
                                }
                            </div>
                        </div>
                    </Labeled>
                </div>
            </DefaultWidgetWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    const formName = selectors.getName(state)

    return {
        formName,
        values: getFormValues(formName)(state)
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ change }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(WebFullName)
