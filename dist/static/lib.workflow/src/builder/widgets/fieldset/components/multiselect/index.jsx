import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { Selection } from '@sbol/lib.ui'

import { BindCheckbox } from './bind-checkbox'

export class Multiselect extends React.Component {
    static propTypes = {
        title: PropTypes.string,
        value: PropTypes.arrayOf(PropTypes.string),
        options: PropTypes.arrayOf(
            PropTypes.shape({
                value: PropTypes.string,
                title: PropTypes.string
            })),
        onChange: PropTypes.func,
        onBlur: PropTypes.func,
        disabled: PropTypes.bool
    }

    static defaultProps = {
        title: void 0,
        value: [],
        options: [],
        onChange: _.noop,
        onFocus: _.noop,
        onBlur: _.noop,
        error: void 0,
        disabled: false
    }

    handleBlur = (event) => {
        this.props.onBlur(this.props.value, event)
    }

    handleChange = (diff) => {
        const { onChange, value } = this.props

        const nextValue = value.includes(diff)
            ? value.filter((checkedValue) => checkedValue !== diff)
            : value.concat(diff)

        onChange(nextValue)
    }

    handleBlur = (event) => {
        const { onBlur, value } = this.props

        onBlur(value, event)
    }

    render () {
        const { title, value, options, disabled } = this.props

        return (
            <Selection.Group title={title} value={value.toString()}>
                {options.map((option) => (
                    <BindCheckbox
                        {...this.props}
                        key={option.value}
                        value={option.value}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                        checked={value.includes(option.value)}
                        disabled={disabled}
                    >
                        {option.title}
                    </BindCheckbox>
                ))}
            </Selection.Group>
        )
    }
}

export default Multiselect
