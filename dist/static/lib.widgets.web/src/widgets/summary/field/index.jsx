import React from 'react'
import PropTypes from 'prop-types'
import { Input } from '@sbol/lib.ui'
import { createInputMask } from '@sbol/lib.workflow/src/builder/widgets/fieldset/formats/formatted-text/create-input-mask'

import { formatDate } from '../utils'

import { Icon } from './icon'
import { Link } from './link'
import { Resource } from './resource'
import { Text } from './text'
import { Total } from './total'

const FORMATTED_FORMATS = ['formattedText', 'formattedNumber']
const FORMATTED_PHONES = ['phone', 'localPhone', 'local-phone', 'ruPhone']

const getSelectedItem = ({ reference, value }) => reference?.items?.find((item) => item.value === value)

// eslint-disable-next-line complexity
export const Field = (props) => {
    const fieldFormat = FORMATTED_FORMATS.includes(props.format)
        ? 'formatted'
        : props.style && props.style.split(':')[0]

    const enhancedProps = props.type === 'select' ? { ...props, value: getSelectedItem(props)?.title } : props

    if (FORMATTED_PHONES.includes(props.format)) {
        return <Text {...enhancedProps} value={Input.LocalPhone.getFormattedValue(props.value)} />
    }

    switch (fieldFormat) {
        case 'total': {
            return <Total {...enhancedProps} />
        }
        case 'resource': {
            return <Resource {...enhancedProps} />
        }
        case 'link': {
            return <Link {...enhancedProps} />
        }
        case 'icon': {
            return <Icon {...enhancedProps} />
        }
        case 'date': {
            return <Text {...enhancedProps} value={formatDate(enhancedProps, 'DD MMMM YYYY')} />
        }
        case 'datetime': {
            return <Text {...enhancedProps} value={formatDate(enhancedProps, 'DD MMMM YYYY, HH:mm')} />
        }
        case 'formatted': {
            const mask = createInputMask(enhancedProps.formatConfig, enhancedProps.format === 'formattedNumber')
            const { conformedValue } = Input.conformToMask(enhancedProps.value, mask)

            return <Text {...enhancedProps} value={conformedValue} />
        }
        default: {
            return <Text {...enhancedProps} />
        }
    }
}

Field.propTypes = {
    format: PropTypes.string,
    style: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
}
