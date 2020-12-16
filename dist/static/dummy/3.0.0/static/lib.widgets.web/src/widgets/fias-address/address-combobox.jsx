import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import i18next from 'i18next'
import { ComboboxWrapped } from '@sbol/lib.ui'

const omitTextSelect = ['form', 'initial', 'onValueValidate']

export const AddressCombobox = (props) => {
    const handleChange = useCallback(({ value, query }) => {
        const { onValueValidate, onChange } = props

        onChange(value || query)
        onValueValidate({ value, query })
    }, [props])

    return (
        <ComboboxWrapped
            {..._.omit(props, omitTextSelect)}
            onChange={handleChange}
            a11y={{ optionsLabel: i18next.t('lib.widgets.web:a11y.show.options') }}
        />
    )
}

AddressCombobox.propTypes = {
    onChange: PropTypes.func,
    onValueValidate: PropTypes.func
}

AddressCombobox.defaultProps = {
    onChange: () => void '',
    onValueValidate: () => void ''
}
