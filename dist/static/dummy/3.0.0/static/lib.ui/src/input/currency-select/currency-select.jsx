import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

/**
 * [Zeplin](https://app.zeplin.io/project/5c74ef0d753f3ebccdf8f33d/screen/5cadec9058ed0fbf55deeff4)
 * Технический компонент для выбора валюты
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
export const CurrencySelect = (props) => (
    <div>
        {React.Children.map(props.children, (child) =>
            React.cloneElement(child, {
                ...child.props,
                ...props,
                value: child.props.value,
                checked: child.props.value === props.value,
            })
        )}
    </div>
)

CurrencySelect.propTypes = {
    value: PropTypes.string.isRequired,
    children: PropTypes.node
}

CurrencySelect.defaultProps = {
    onChange: _.noop,
    disabled: false,
    children: void 0,
    colorScheme: 'base'
}

CurrencySelect.theme = {}
CurrencySelect.displayName = 'Input.CurrencySelect'
