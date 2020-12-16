import React, { useState, useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import i18next from 'i18next'
import { ComboboxWrapped, Labeled, showError } from '@sbol/lib.ui'
import { Field, fieldAdapter } from '@sbol/lib.app'
import { DefaultWidgetWrapper } from '@sbol/lib.workflow'
import { WorkflowPropTypes } from '@sbol/utils'

import { getAxios } from '../../axios'

import { generateGetIcon, generateGetDescription, getFieldReference } from './utils'

export const WebSearchSelect = (props) => {
    const { options, contentProperties, optionProperties, searchField, onValueValidate, onChange } = props

    const { url, debounce, requestRepeatTimeout } = contentProperties
    const { itemImgSrc, itemDescriptionKey, itemImgType } = optionProperties

    const handleDataRequest = (requestParams) => getAxios()({ url, method: 'GET', params: requestParams }).then(
        (result) => result.data?.body.map((option) => ({
            ...option,
            icon: generateGetIcon(itemImgSrc)(option),
            fromCode: itemImgType === 'code',
            description: generateGetDescription(itemDescriptionKey)(option)
        }))
    )

    const handleChange = useCallback(({ value, query }) => {
        onChange(value || query)
        onValueValidate({ value, query })
    }, [onChange, onValueValidate])

    if (options) {
        options.forEach((option) => {
            option.icon = generateGetIcon(itemImgSrc)(option)
            option.fromCode = itemImgType === 'code'
            option.description = generateGetDescription(itemDescriptionKey)(option)
        })
    }

    const fieldProps = _.omit(props, ['options', 'dataProperties', 'references', 'searchField.validators', 'value', 'values', 'fields', 'changeOtherField', 'form', 'formName', 'initial', 'query'])
    return (
        <LabeledHandledErrorCombobox
            {...fieldProps}
            options={options}
            mode="on"
            label={searchField.fieldTitle}
            keyboardTimeout={debounce}
            requestTimeout={requestRepeatTimeout}
            initialValue={props.value}
            onDataRequest={url ? handleDataRequest : void 0}
            translations={{
                noMatches: i18next.t('lib.widgets.web:request.no.matches'),
                requestTimeout: i18next.t('lib.widgets.web:request.timeout'),
                repeat: i18next.t('lib.widgets.web:request.repeat'),
                requestError: i18next.t('lib.widgets.web:request.error'),
            }}
            onChange={handleChange}
        />
    )
}

export const LabeledHandledErrorCombobox = (props) => (
    <Labeled title={props.searchField.title} description={props.searchField.description} error={showError(props)} {...props}>
        <ComboboxWrapped {...props} title={props.searchField.title} error={showError(props)} />
    </Labeled>
)

const WrappedSearchSelect = ({ fields, references, properties, title, description, ...rest }) => {
    const [searchField] = fields
    const context = getFieldReference(searchField, references)

    const fieldValidators = _.get(searchField, 'validators', [])

    const [validators, setValidators] = useState(fieldValidators)
    const [fieldValue, setValue] = useState(null)
    const [filedQuery, setQuery] = useState(null)

    useEffect(() => {
        if (properties?.mode === 'only') {
            const onlyValidator = () => !fieldValue && filedQuery ? properties?.suggestMessage || i18next.t('lib.widgets.web:select.from.list') : void 0

            setValidators([...fieldValidators, onlyValidator])
        }
    }, [filedQuery, fieldValue])


    const handleValueValidate = useCallback(({ query, value }) => {
        setValue(value)
        setQuery(query)
    })

    const id = _.get(searchField, 'id', 'search-select')
    return (
        <DefaultWidgetWrapper title={title} description={description}>
            <Field
                id={id}
                name={id}
                type="text"
                component={fieldAdapter(WebSearchSelect)}
                options={context.items}
                contentProperties={context.properties}
                optionProperties={properties}
                searchField={searchField}
                descriptions={description}
                validate={validators}
                onValueValidate={handleValueValidate}
            />
        </DefaultWidgetWrapper>
    )
}

export default WrappedSearchSelect

const SearchSelectProperties = PropTypes.shape({
    filterKeys: PropTypes.string,
    itemImgType: PropTypes.string,
    itemImgSrc: PropTypes.string,
    itemDescriptionKey: PropTypes.string
})

WrappedSearchSelect.propTypes = {
    fields: WorkflowPropTypes.Fields.isRequired,
    references: WorkflowPropTypes.References,
    properties: SearchSelectProperties,
    title: PropTypes.string,
    description: PropTypes.string,
}

WrappedSearchSelect.defaultProps = {
    fields: {},
    references: {},
    properties: {},
    title: '',
    description: ''
}

WebSearchSelect.propTypes = {
    searchField: WorkflowPropTypes.Fields,
    optionProperties: SearchSelectProperties,
    contentProperties: PropTypes.shape({
        url: PropTypes.string,
        debounce: PropTypes.number,
        requestRepeatTimeout: PropTypes.string,
        validators: PropTypes.string,
    }),
    options: PropTypes.arrayOf(PropTypes.shape({})),
    onValueValidate: PropTypes.func,
    onChange: PropTypes.func,
    value: PropTypes.string
}

WebSearchSelect.defaultProps = {
    searchField: {},
    options: [],
    optionProperties: {},
    contentProperties: {},
    onValueValidate: () => {},
    onChange: () => {},
    value: void 0
}
