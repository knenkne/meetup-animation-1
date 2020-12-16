import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import axios from 'axios'
import i18next from 'i18next'
import { Input, Labeled, Combobox } from '@sbol/lib.ui'
import { Field } from 'redux-form'
import { fieldAdapter } from '@sbol/lib.app'

import { generateGetIcon, generateGetDescription } from './utils'

export const Suggest = (props) => {
    const [localOptions, setLocalOptions] = useState(props.options)

    const { value, options, dataProperties } = props
    const { url, debounce, requestRepeatTimeout, itemImgSrc, itemDescriptionKey } = dataProperties || {}

    if (localOptions) {
        localOptions.forEach((option) => {
            option.icon = generateGetIcon(itemImgSrc)(option)
            option.description = generateGetDescription(itemDescriptionKey)(option)
        })
    }

    const handleDataRequest = (requestParams) => axios({ url, method: 'GET', params: requestParams })
        .then((result) => result.data.map((option) => ({
            ...option,
            icon: generateGetIcon(itemImgSrc)(option),
            description: generateGetDescription(itemDescriptionKey)(option)
        })))

    const fieldProps = _.omit(props, ['options', 'dataProperties', 'references', 'initialQuery', 'initialValue'])

    const setFilteredOptions = useCallback(
        (value) => setLocalOptions(props.options?.filter((option) => option.title.toLowerCase().includes(value.toLowerCase()))),
        [props.options]
    )

    return (
        <Combobox
            initialValue={value}
            options={localOptions}
            mode="on"
            keyboardTimeout={debounce}
            requestTimeout={requestRepeatTimeout}
            onChangeInput={options ? setFilteredOptions : void 0}
            onDataRequest={dataProperties.url ? handleDataRequest : void 0}
            translations={{
                noMatches: i18next.t('lib.workflow:suggest.nomatches'),
                requestTimeout: i18next.t('lib.workflow:suggest.request.timeout'),
                repeat: i18next.t('lib.workflow:suggest.repeat'),
                requestError: i18next.t('lib.workflow:suggest.request.error'),
            }}
            {...fieldProps}
        />
    )
}

Suggest.propTypes = {
    value: PropTypes.string,
    options: PropTypes.array,
    dataProperties: PropTypes.shape({
        filterKeys: PropTypes.string,
        itemImgType: PropTypes.string,
        itemImgSrc: PropTypes.string,
        itemDescriptionKey: PropTypes.string,

        debounce: PropTypes.number,
        requestRepeatTimeout: PropTypes.number,
        url: PropTypes.string
    })
}

Suggest.defaultProps = {
    value: void 0,
    options: void 0,
    dataProperties: {}
}


export const SuggestLabeled = ({ readonly, tooltip, title, ...props }) => (
    <Labeled {...props} tooltip={tooltip} title={title}>
        {readonly
            ? <Input {...props} />
            : <Suggest {...props} error={props.touched ? props.error : ''} />
        }
    </Labeled>
)

export default ({ validators, eventsActions, fieldStyles, references, referenceId, ...rest }) => {
    const context = references[referenceId] || {}
    return (
        <Field
            component={fieldAdapter(SuggestLabeled)}
            validate={validators}
            options={context.items}
            dataProperties={context.properties}
            {...rest}
        />
    )
}

