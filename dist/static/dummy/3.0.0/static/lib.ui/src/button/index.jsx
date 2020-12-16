import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import _ from 'lodash'

import { deprecate } from '../utils/hoc'
import { Loader } from '../loader'
import { disableHandler } from '../utils/handlers'

import { Info } from './info'
import { Command } from './command'
import { IconButton } from './icon'
import WrappedRadioSegmented from './radio-segmented'
import defaultTheme from './style.css'

/**
 * [Zeplin](https://app.zeplin.io/project/5c74ef0d753f3ebccdf8f33d/screen/5c8a5f6261942d0ddc10efe1)
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
export const Button = (props) => {
    const isLoading = useMemo(() => props.mode === 'loading', [props.mode])

    const passedProps = _(props)
        .omit(['theme', 'mode', 'colorScheme', 'title'])
        .extend({
            disabled: isLoading ? false : props.disabled,
            onClick: disableHandler(props.onClick, props.disabled || isLoading),
            className: classnames(
                props.theme.button,
                props.theme[props.colorScheme],
                props.mode === 'loading' && props.theme.loading
            ),
            'aria-live': 'polite',
            'aria-busy': props.mode === 'loading'
        })
        .value()

    return (
        <button {...passedProps}>
            {props.children || props.title}
            {props.mode === 'loading' && <Loader.Button colorScheme={props.colorScheme} />}
        </button>
    )
}

Button.propTypes = {
    title: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    mode: PropTypes.oneOf(['loading', void 0]),
    colorScheme: PropTypes.oneOf([
        'base',
        'secondary',
        'link',
        'purple',
        'blue',
        'green',
        'skyblue',
        'black',
        'gold',
        'aqua'
    ]),
    theme: PropTypes.shape({
        button: PropTypes.string,
        disabled: PropTypes.string,
        loader: PropTypes.string,
        loaderPoint: PropTypes.string,
        loading: PropTypes.string
    }),
    disabled: PropTypes.bool,
    tabIndex: PropTypes.number, // eslint-disable-line react/no-unused-prop-types, comment: сквозной проброс пропов
    onClick: PropTypes.func
}

Button.defaultProps = {
    title: void 0,
    children: void 0,
    theme: defaultTheme,
    disabled: false,
    tabIndex: 0,
    onClick: _.noop,
    mode: void 0,
    icon: void 0,
    colorScheme: 'base'
}

Button.displayName = 'Button'
Button.theme = defaultTheme

Button.Info = Info
Button.Icon = IconButton
Button.Command = Command
Button.RadioSegmented = WrappedRadioSegmented

Button.General = deprecate('5.0.0', 'Button.General', 'Button')((props) => <Button {...props} />)
Button.Secondary = deprecate('5.0.0', 'Button.Secondary', 'Button')((props) => <Button {...props} />)
Button.Additional = deprecate('5.0.0', 'Button.Additional', 'Button')((props) => <Button {...props} />)
Button.General.Dropdown = deprecate('5.0.0', 'Button.General.Dropdown', 'Menu')(() => <span />)
Button.Additional.Dropdown = deprecate('5.0.0', 'Button.Additional.Dropdown', 'Menu')(() => <span />)

export default Button
