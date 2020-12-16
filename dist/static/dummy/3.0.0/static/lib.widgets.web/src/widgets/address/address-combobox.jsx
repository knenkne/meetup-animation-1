import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import i18next from 'i18next'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getFormValues, change } from 'redux-form'
import { selectors } from '@sbol/lib.workflow'
import { WorkflowPropTypes } from '@sbol/utils'
import { ComboboxWrapped } from '@sbol/lib.ui'

const omitTextSelect = ['values', 'fields', 'changeOtherField', 'form', 'formName', 'initial', 'query', 'onValueValidate']

const EMPTY_VALUE = ''

const matrix = [
    'country',
    'region',
    'district',
    'settlement',
    'street',
    'building',
    'quarters'
]

export const AddressComboboxComponent = (props) => {
    const handleChange = useCallback(({ value, query }) => {
        const {
            onValueValidate,
            onChange,
            changeOtherField,
            formName,
            fields,
            query: params,
            values
        } = props

        onChange(value || query)
        onValueValidate({ value, query })
        const context = _.get(params, 'context', 'country')

        _.forEach(
            _.slice(matrix, _.indexOf(matrix, context) + 1),
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
    }, [props])

    return (
        <ComboboxWrapped
            {..._.omit(props, omitTextSelect)}
            onChange={handleChange}
            a11y={{ optionsLabel: i18next.t('lib.widgets.web:a11y.show.options') }}
        />
    )
}

AddressComboboxComponent.propTypes = {
    onChange: PropTypes.func,
    changeOtherField: PropTypes.func,
    formName: PropTypes.string,
    fields: WorkflowPropTypes.MappedFields,
    query: PropTypes.shape({
        context: PropTypes.string,
        district: PropTypes.string,
        limit: PropTypes.number,
        pid: PropTypes.string,
        region: PropTypes.string,
        settlement: PropTypes.string
    }),
    values: PropTypes.object
}

AddressComboboxComponent.defaultProps = {
    onChange: _.noop,
    changeOtherField: _.noop,
    formName: void 0,
    fields: {},
    query: {},
    values: {},
    timeout: void 0,
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

export const AddressCombobox = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddressComboboxComponent)
