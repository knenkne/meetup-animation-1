import React, { useState, useCallback, useEffect } from 'react'
import i18next from 'i18next'
import PropTypes from 'prop-types'
import { Field } from '@sbol/lib.app'

import { AddressComboboxWithRequest } from './address-combobox-with-request'
import style from './style.css'

export const AddressField = (props) => {
    const {
        id,
        validators: fieldValidators,
        children,
        suggestMode,
        suggestMessage,
        requestParams,
        halfWidth,
        ...rest
    } = props

    const [validators, setValidators] = useState(fieldValidators)
    const [fieldValue, setValue] = useState(null)
    const [fieldQuery, setQuery] = useState(null)

    useEffect(() => {
        if (suggestMode === 'only') {
            const onlyValidator = () => !fieldValue && fieldQuery ? suggestMessage || i18next.t('lib.widgets.web:select.from.list') : void 0

            setValidators([...fieldValidators, onlyValidator])
        }
    }, [fieldQuery])

    const handleValueValidate = useCallback(({ query, value }) => {
        setValue(value)
        setQuery(query)
    })

    const field = (
        <>
            <Field
                {...rest}
                id={id}
                name={id}
                mode={suggestMode}
                component={AddressComboboxWithRequest}
                validate={validators}
                requestParams={suggestMode === 'off' ? { kind: requestParams.kind } : requestParams}
                onValueValidate={handleValueValidate}
            />
            {children}
        </>
    )

    if (halfWidth) {
        return (
            <div className={style.halfWidth}>
                {field}
            </div>
        )
    }

    return field
}

AddressField.propTypes = {
    id: PropTypes.string.isRequired,
    validators: PropTypes.array,
    children: PropTypes.object,
    suggestMode: PropTypes.oneOf(['off', 'only']).isRequired,
    suggestMessage: PropTypes.string,
    requestParams: PropTypes.shape({
        url: PropTypes.string,
        kind: PropTypes.string,
        source: PropTypes.string,
        count: PropTypes.number,
        parentId: PropTypes.string
    }),
    halfWidth: PropTypes.bool
}

AddressField.defaultProps = {
    validators: void 0,
    children: void 0,
    suggestMessage: void 0,
    requestParams: {},
    halfWidth: false
}
