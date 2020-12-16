import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getFormValues, change } from 'redux-form'
import { Selection, Labeled } from '@sbol/lib.ui'
import { selectors } from '@sbol/lib.workflow'
import { WorkflowPropTypes } from '@sbol/utils'

const omitTextSelect = ['values', 'fields', 'changeOtherField', 'context', 'initial']

const EMPTY_VALUE = ''

const matrix = ['street', 'building', 'quarters']

export class AddressCheckboxComponent extends React.Component {
    handleChange = (value) => {
        const {
            id,
            onChange,
            changeOtherField,
            formName,
            fields,
            values,
            context
        } = this.props

        onChange(value)

        _.forEach(
            _.slice(matrix, _.indexOf(matrix, context)),
            (clearableField) => {
                if (
                    !fields[clearableField].readonly &&
                    values[fields[clearableField].id]
                ) {

                    changeOtherField(
                        formName,
                        fields[clearableField].id,
                        EMPTY_VALUE
                    )
                }
            }
        )

        if (id === fields.buildingCheckbox.id) {
            changeOtherField(
                formName,
                fields.quartersCheckbox.id,
                !values[fields.buildingCheckbox.id] ? 'true' : ''
            )
        }
    }

    render () {
        return (
            <Labeled {..._.omit(this.props, ['title', 'description'])}>
                <Selection.Checkbox
                    {..._.omit(this.props, omitTextSelect)}
                    onChange={this.handleChange}
                    mode="switch"
                />
            </Labeled>
        )
    }
}

AddressCheckboxComponent.propTypes = {
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    changeOtherField: PropTypes.func,
    formName: PropTypes.string,
    fields: WorkflowPropTypes.MappedFields,
    values: PropTypes.object,
    context: PropTypes.string
}

AddressCheckboxComponent.defaultProps = {
    onChange: _.noop,
    changeOtherField: _.noop,
    formName: void 0,
    fields: {},
    values: {},
    context: ''
}

const mapStateToProps = (state) => {
    const formName = selectors.getName(state)

    return {
        formName,
        values: getFormValues(formName)(state)
    }
}

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ changeOtherField: change }, dispatch)

export const AddressCheckbox = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddressCheckboxComponent)
