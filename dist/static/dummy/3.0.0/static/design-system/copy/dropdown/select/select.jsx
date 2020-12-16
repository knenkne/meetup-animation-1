import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import ExtendedDropdown from '../dropdown'
import { mergeTheme } from '../../utils/merge-theme'
import { memoizeFuncWithArgs } from '../../utils/memoize-func-with-args'

import { Item } from './item'
import style from './select.css'

const mergedTheme = mergeTheme(ExtendedDropdown.theme, style)

const renderOption = (option) => {
    const translations = {
        title: option.title
    }

    return (
        <ExtendedDropdown.Option
            key={option.value}
            value={option.value}
            title={option.title}
            translations={translations}
        />
    )
}

export const Select = (props) => {
    const { options, value, onChange, onFocus, onBlur, disabled, error } = props
    const title = _.get(_.find(options, { value }), 'title', '')
    const description = _.get(_.find(options, { value }), 'description', '')
    const additional = _.get(_.find(options, { value }), 'additional', '')
    const filteredOptions = _.reject(options, (item) => item.value === value)

    if (disabled) {
        return <Item {...props} title={title} readOnly />
    }

    return (
        <ExtendedDropdown
            {..._.omit(props, 'options')}
            mode="click"
            onChange={onChange}
            value={value}
            error={error}
            theme={mergedTheme}
        >
            <ExtendedDropdown.Contents theme={mergedTheme}>
                {_.map(filteredOptions, renderOption)}
            </ExtendedDropdown.Contents>
            <ExtendedDropdown.TargetButton
                theme={mergedTheme}
                onFocus={memoizeFuncWithArgs(onFocus, value)}
                onBlur={memoizeFuncWithArgs(onBlur, value)}
                aria-label={title || 'Значение не выбрано'}
                colorScheme=""
            >
                <Item title={title} description={description} amount={additional} />
            </ExtendedDropdown.TargetButton>
        </ExtendedDropdown>
    )
}

Select.propTypes = {
    options: PropTypes.arrayOf(PropTypes.object),
    value: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    disabled: PropTypes.bool,
    error: PropTypes.string,
    touched: PropTypes.bool
}

Select.defaultProps = {
    options: [],
    value: '',
    onChange: _.noop,
    onFocus: _.noop,
    onBlur: _.noop,
    disabled: false,
    error: void 0,
    touched: false
}

Select.theme = style
Select.displayName = 'Dropdown.Select'

export default Select
