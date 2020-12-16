import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import { Icon } from '../../icon'
import { Loader } from '../../loader'

import defaultTheme from './style.css'

/**
 * [Zeplin](https://app.zeplin.io/project/5c74ef0d753f3ebccdf8f33d/screen/5c8a5f6261942d0ddc10efe1)
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
export const IconButton = ({
    title,
    colorScheme,
    size,
    theme,
    icon,
    mode,
    disabled,
    ...props
}) => (
    <button
        {...props}
        type="button"
        mode={mode}
        disabled={mode === 'loading' || disabled}
        className={cn(theme.button, !title && theme.iconOnly)}
        aria-busy={mode === 'loading'}
    >
        {mode ? (
            <Loader.Icon />
        ) : <Icon
            name={icon}
            size="self"
            theme={{
                self: cn(Icon.theme.self, theme.icon)
            }}
        />}
        {!!title && (
            <span className={cn(theme.title, theme[colorScheme], theme[size])}>
                {title}
            </span>
        )}
    </button>
)

IconButton.propTypes = {
    title: PropTypes.string,
    mode: PropTypes.oneOf(['loading', void 0]),
    colorScheme: PropTypes.oneOf([
        'black',
        'green',
        'purple',
        'blue',
        'goals',
        'skyblue',
        'aqua',
        'gold',
        'metal',
        'orange'
    ]),
    size: PropTypes.oneOf(['sm', 'md']),
    icon: PropTypes.string,
    theme: PropTypes.object,
    disabled: PropTypes.bool,
}

IconButton.defaultProps = {
    title: void 0,
    colorScheme: 'black',
    size: 'md',
    icon: void 0,
    theme: defaultTheme,
    mode: void 0,
    disabled: false,
}

IconButton.displayName = 'Button.Icon'
IconButton.theme = defaultTheme
