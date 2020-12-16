import React, { useCallback } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { noop } from 'lodash'

import { Tabs } from '../tabs'

export const Link = ({ mode, colorScheme, forceOpened, size, title, onChange, theme }) => {
    const onClick = useCallback(() => {
        onChange(title)
    }, [title])

    return title ? (
        <button
            onClick={onClick}
            className={theme.tabButton}
            role="link"
        >
            <span
                className={classnames(
                    theme.tab,
                    theme[mode],
                    theme[colorScheme],
                    theme.border,
                    forceOpened && theme.selected,
                    size === 'sm' && theme.tabSmall
                )}
            >{title}</span>
        </button>
    ) : null
}

Link.propTypes = {
    title: PropTypes.string,
    forceOpened: PropTypes.bool,
    onChange: PropTypes.func,
    /**
     * Дополнительная индикация таба. Не взаимоисключается с colorScheme
     */
    mode: PropTypes.oneOf([
        'default',
        'success',
        'error'
    ]),
    /**
     * Передается из Tabs.
     */
    colorScheme: PropTypes.oneOf([
        'base',
        'purple',
        'blue',
        'green',
        'black',
        'skyblue',
        'aqua',
        'gold'
    ]),
    size: PropTypes.oneOf(['sm', 'lg']),
    theme: PropTypes.object
}

Link.defaultProps = {
    title: void 0,
    forceOpened: false,
    onChange: noop,
    disabled: false,
    mode: 'default',
    colorScheme: 'base',
    size: 'lg',
    theme: Tabs.theme
}

Link.displayName = 'Anchor.Link'
