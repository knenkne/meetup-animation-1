import React, { useCallback } from 'react'
import _ from 'lodash'
import axios from 'axios'
import i18next from 'i18next'
import PropTypes from 'prop-types'
import { log } from '@sbol/lib.app'
import { Labeled } from '@sbol/lib.ui'

import { AddressCombobox } from './address-combobox'
import { getOption } from './utils'

export const ErrorHandledAddressCombobox = ({ mode, ...props }) => (
    <Labeled {...props}>
        <AddressCombobox {...props} error={props.touched ? props.error : ''} mode={mode} />
    </Labeled>
)

const omitComboboxProps = ['requestParams', 'debounce', 'timeout']

const REQUEST_METHOD = 'POST'

export const AddressComboboxWithRequest = (props) => {
    const {
        requestParams,
        requestParams: { url, kind, source, count, parentId },
        timeout,
        debounce,
        value,
        initialQuery
    } = props

    const handleDataRequest = useCallback(({ query }) => {
        const requestData = { addressKind: kind, source, count, query }

        if (parentId) {
            requestData.parentId = parentId
        }

        return axios({
            url,
            method: REQUEST_METHOD,
            data: requestData
        }).then(
            (result) => result?.data?.body?.suggestions?.map((option) => getOption(option, kind, source))
        ).catch((e) => log.error(`Failed request ${url} with ${JSON.stringify(requestData)}`, e))
    }, [requestParams])

    return (
        <ErrorHandledAddressCombobox
            {..._.omit(props, omitComboboxProps)}
            keyboardTimeout={debounce}
            requestTimeout={timeout}
            initialValue={value}
            initialQuery={initialQuery || value}
            onDataRequest={url ? handleDataRequest : void 0}
            translations={{
                noMatches: i18next.t('lib.widgets.web:request.no.matches'),
                requestTimeout: i18next.t('lib.widgets.web:request.timeout'),
                repeat: i18next.t('lib.widgets.web:request.repeat'),
                requestError: i18next.t('lib.widgets.web:request.error'),
            }}
        />
    )
}

AddressComboboxWithRequest.propTypes = {
    id: PropTypes.string.isRequired,
    timeout: PropTypes.number,
    debounce: PropTypes.number,
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    initialQuery: PropTypes.string,
    requestParams: PropTypes.shape({
        url: PropTypes.string,
        kind: PropTypes.string,
        source: PropTypes.string,
        count: PropTypes.number,
        parentId: PropTypes.string
    })
}

AddressComboboxWithRequest.defaultProps = {
    timeout: void 0,
    debounce: void 0,
    initialQuery: void 0,
    requestParams: {}
}
