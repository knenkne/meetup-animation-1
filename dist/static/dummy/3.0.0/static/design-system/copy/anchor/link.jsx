import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { noop } from 'lodash'

import { TabButtonStyled, TabStyled } from '../tabs/tabs.style'

export const Link = ({ mode, colorScheme, forceOpened, size, title, onChange }) => {
    const onClick = useCallback(() => {
        onChange(title)
    }, [title])

    return title ? (
        <TabButtonStyled
            onClick={onClick}
            role="link"
        >
            <TabStyled
                selected={forceOpened}
                size={size}
                mode={mode}
                colorScheme={colorScheme}
            >
                {title}
            </TabStyled>
        </TabButtonStyled>
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
    size: PropTypes.oneOf(['sm', 'lg'])
}

Link.defaultProps = {
    title: void 0,
    forceOpened: false,
    onChange: noop,
    disabled: false,
    mode: 'default',
    colorScheme: 'base',
    size: 'lg'
}

Link.displayName = 'Anchor.Link'
