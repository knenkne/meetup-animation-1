import React from 'react'
import PropTypes from 'prop-types'
import { Selection, mergeTheme } from '@sbol/lib.ui'

import style from '../../style.css'

const checkboxTheme = mergeTheme(Selection.Checkbox.theme, {
    checkbox: style.multiselect
})
export class BindCheckbox extends React.Component {
    handleChange = () => {
        this.props.onChange(this.props.value)
    }

    render () {
        return (
            <Selection.Checkbox
                {...this.props}
                onChange={this.handleChange}
                value={this.props.checked}
                theme={checkboxTheme}
            />
        )
    }
}

BindCheckbox.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    checked: PropTypes.bool
}

BindCheckbox.defaultProps = {
    checked: false
}
