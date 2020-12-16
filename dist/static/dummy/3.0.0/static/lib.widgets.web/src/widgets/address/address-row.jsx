import React, { useState, useCallback, useEffect } from 'react'
import _ from 'lodash'
import axios from 'axios'
import i18next from 'i18next'
import PropTypes from 'prop-types'
import { Field, log } from '@sbol/lib.app'
import { Labeled } from '@sbol/lib.ui'

import { AddressCombobox } from './address-combobox'
import { generateGetIcon, generateGetDescription } from './utils'


const ErrorHandledAddressCombobox = ({ mode, ...props }) => (
    <Labeled {...props}>
        <AddressCombobox {...props} error={props.touched ? props.error : ''} mode={mode} />
    </Labeled>
)

const omitComboboxProps = ['options', 'items', 'url', 'suggestMode', 'debounce', 'timeout', 'referenceId', 'context', 'itemImgType', 'itemImgSrc']

const requestMethod = { POST: 'POST', GET: 'GET' }

export const AddressRow = (props) => {
    const { context: { url, items, method }, itemImgType, itemImgSrc, timeout, debounce, initialQuery, value, query } = props

    const [offset, setOffset] = useState(0)

    if (items) {
        items.forEach((option) => {
            option.icon = generateGetIcon(itemImgSrc)(option)
            option.description = generateGetDescription(option)
            option.fromCode = itemImgType === 'code'
        })
    }

    const handleDataRequest = useCallback((requestParams, isScrolling) => {
        let currentOffset = offset
        if (isScrolling) {
            currentOffset += query.limit
        } else {
            currentOffset = 0
        }

        setOffset(currentOffset)

        const requestData = { ...requestParams, ...query, offset: currentOffset }

        const formattedMethod = method?.toUpperCase()

        return axios({
            url,
            method: formattedMethod || requestMethod.GET,
            params: formattedMethod !== requestMethod.POST && requestData,
            data: formattedMethod === requestMethod.POST && { ...requestData, kind: requestData.context, count: currentOffset, kladrId: requestData.pid }
        }).then(
            (result) => result.data?.body?.map((option) => ({
                ...option,
                icon: generateGetIcon(itemImgSrc)(option),
                description: generateGetDescription(option),
                fromCode: itemImgType === 'code',
            }))
        ).catch((e) => log.error(`Failed request ${url} with ${{ ...requestParams, ...query, offset }}`, e))
    }, [offset, query])

    const fieldProps = _.omit(props, omitComboboxProps)

    return (
        <ErrorHandledAddressCombobox
            options={items}
            keyboardTimeout={debounce}
            requestTimeout={timeout}
            limit={query?.limit}
            initialValue={value}
            initialQuery={initialQuery}
            onDataRequest={url ? handleDataRequest : void 0}
            translations={{
                noMatches: i18next.t('lib.widgets.web:request.no.matches'),
                requestTimeout: i18next.t('lib.widgets.web:request.timeout'),
                repeat: i18next.t('lib.widgets.web:request.repeat'),
                requestError: i18next.t('lib.widgets.web:request.error'),
            }}
            withPagination
            {...fieldProps}
        />
    )
}

const omitFieldProps = ['readonly', 'size']

export default ({ id, validators: fieldValidators, children, suggestMode, suggestMessage, context, ...props }) => {

    const [validators, setValidators] = useState(fieldValidators)
    const [fieldValue, setValue] = useState(null)
    const [filedQuery, setQuery] = useState(null)

    useEffect(() => {
        if (suggestMode === 'only') {
            const onlyValidator = () => !fieldValue && filedQuery ? suggestMessage || i18next.t('lib.widgets.web:select.from.list') : void 0

            setValidators([...fieldValidators, onlyValidator])
        }
    }, [filedQuery])


    const handleValueValidate = useCallback(({ query, value }) => {
        setValue(value)
        setQuery(query)
    })

    return (
        <React.Fragment>
            <Field
                {..._.omit(props, omitFieldProps)}
                id={id}
                name={id}
                mode={suggestMode}
                component={AddressRow}
                validate={validators}
                context={suggestMode === 'off' ? void 0 : context}
                onValueValidate={handleValueValidate}
            />
            {children}
        </React.Fragment>
    )
}

AddressRow.propTypes = {
    id: PropTypes.string.isRequired,
    context: PropTypes.shape({
        url: PropTypes.string,
        items: PropTypes.array
    }).isRequired,
    itemImgType: PropTypes.string,
    itemImgSrc: PropTypes.string,
    timeout: PropTypes.number,
    debounce: PropTypes.number,
    suggestMode: PropTypes.oneOf(['on', 'off', 'only']).isRequired,
    initialQuery: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    query: PropTypes.object,
}

AddressRow.defaultProps = {
    itemImgType: void 0,
    itemImgSrc: void 0,
    timeout: void 0,
    debounce: void 0,
    query: void 0,
    context: {}
}
